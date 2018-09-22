from os.path import join, isdir, exists
from os import listdir, mkdir
from shutil import rmtree
import gc
from copy import deepcopy
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.path import Path
from collections import Counter

from .images import ImageRGB
from ..measure.segmentation import Segmentation
from ..measure.measure import Measurements
from ..spatial.graphs import WeightedGraph
from ..annotation.genotype import CommunityBasedGenotype
from ..annotation.labelers import CelltypeLabeler
from ..annotation.concurrency import ConcurrencyLabeler
from ..bleedthrough.correction import LayerCorrection
from ..utilities.io import IO
from .defaults import Defaults
defaults = Defaults()


class Layer(ImageRGB):
    """
    Object represents a single RGB image layer.

    Attributes:
    measurements (pd.DataFrame) - raw cell measurement data
    df (pd.DataFrame) - processed cell measurement data
    path (str) - path to layer directory
    _id (int) - layer ID
    subdirs (dict) - {name: path} pairs for all subdirectories
    metadata (dict) - layer metadata
    labels (np.ndarray[int]) - segment ID mask
    classifier (CellClassifier) - callable that assigns genotypes to cells
    graph (Graph) - graph connecting cell centroids
    include (bool) - if True, layer was manually marked for inclusion

    Inherited attributes:
    im (np.ndarray[float]) - 2D array of RGB pixel values
    channels (dict) - {color: channel_index} pairs
    shape (array like) - image dimensions
    mask (np.ndarray[bool]) - image mask
    labels (np.ndarray[int]) - segment ID mask
    """

    def __init__(self, path, im=None, classifier=None):
        """
        Instantiate layer.

        Args:
        path (str) - path to layer directory
        im (np.ndarray[float]) - 2D array of RGB pixel values
        classifier (CellClassifier) - callable that assigns genotypes to cells
        """

        # set layer ID
        layer_id = int(path.rsplit('/', maxsplit=1)[-1])
        self._id = layer_id

        # set path and subdirectories
        self.path = path
        self.find_subdirs()

        # load inclusion; defaults to True
        if 'selection' in self.subdirs.keys():
            self.load_inclusion()
        else:
            self.include = True

        # set classifier
        self.classifier = classifier

        # load labels and instantiate RGB image if image was provided
        if im is not None:
            self.load_labels()
            super().__init__(im, labels=self.labels)

    def initialize(self):
        """
        Initialize layer directory by:

            - Creating a layer directory
            - Removing existing segmentation directory
            - Saving metadata to file

        """

        # make layers directory
        if not exists(self.path):
            mkdir(self.path)

        # remove existing segmentation directory
        if 'segmentation' in self.subdirs.keys():
            rmtree(self.subdirs['segmentation'])

        # make metadata file
        io = IO()
        segmentation_kw = dict(preprocessing_kws={}, seed_kws={}, seg_kws={})
        params = dict(segmentation_kw=segmentation_kw, graph_kw={})
        metadata = dict(bg='', params=params)

    def make_subdir(self, dirname):
        """ Make subdirectory. """
        dirpath = join(self.path, dirname)
        if not exists(dirpath):
            mkdir(dirpath)
        self.add_subdir(dirname, dirpath)

    def add_subdir(self, dirname, dirpath):
        """ Add subdirectory. """
        self.subdirs[dirname] = dirpath

    def find_subdirs(self):
        """ Find all subdirectories. """
        self.subdirs = {}
        for dirname in listdir(self.path):
            dirpath = join(self.path, dirname)
            if isdir(dirpath):
                self.add_subdir(dirname, dirpath)

    def load(self):
        """ Load layer. """

        # load metadata and extract background channel
        self.load_metadata()

        # check whether segmentation exists
        if 'segmentation' in self.subdirs.keys():

            # load raw measurements
            self.load_measurements()

            # process raw measurement data
            self.df = self.process_measurements(self.measurements)

    def load_metadata(self):
        """ Load metadata. """
        path = join(self.path, 'metadata.json')
        if exists(path):
            io = IO()
            self.metadata = io.read_json(path)

    def load_labels(self):
        """ Load segment labels if they are available. """
        labels = None
        if 'segmentation' in self.subdirs.keys():
            segmentation_path = self.subdirs['segmentation']
            labels_path = join(segmentation_path, 'labels.npy')
            if exists(labels_path):
                labels = np.load(labels_path)
        self.labels = labels

    def load_measurements(self):
        """ Load raw measurements. """
        path = join(self.subdirs['segmentation'], 'measurements.hdf')
        self.measurements = pd.read_hdf(path, 'measurements')

    def load_inclusion(self):
        """ Load inclusion flag. """
        io = IO()
        selection_md = io.read_json(join(self.subdirs['selection'], 'md.json'))
        if selection_md is not None:
            self.include = bool(selection_md['include'])

    def load_correction(self):
        """
        Load linear background correction.

        Returns:
        correction (LayerCorrection)
        """
        return LayerCorrection.load(self)

    def process_measurements(self, measurements):
        """
        Augment measurements by:
            1. incorporating manual selection boundary
            2. assigning cell genotypes
            3. correcting for fluorescence bleedthrough
            4. updating graph
            5. marking clone boundaries
            6. assigning celltype concurrency information

        Args:
        measurements (pd.DataFrame) - raw cell measurement data

        Returns:
        df (pd.DataFrame) - processed cell measurement data
        """

        # copy raw measurements
        df = deepcopy(self.measurements)

        # assign layer id
        df['layer'] = self._id

        # apply normalization
        self.apply_normalization(df)

        # load and apply selection
        if 'selection' in self.subdirs.keys():
            self.load_inclusion()
            self.apply_selection(df)

        # load and apply correction
        if 'correction' in self.subdirs.keys():
            self.apply_correction(df)

        # annotate measurements
        if self.classifier is not None:
            self.apply_annotation(df)
            self.build_graph(df, **self.metadata['params']['graph_kw'])
            self.mark_boundaries(df, basis='genotype', max_edges=1)
            self.apply_concurrency(df)

        return df

    def apply_normalization(self, df):
        """
        Normalize fluorescence intensity measurements by measured background channel intensity.

        Args:
        df (pd.DataFrame) - cell measurement data
        """

        # get background channel from metadata
        bg = self.metadata['bg']

        # apply normalization to each foreground channel
        for fg in 'rgb'.strip(bg):
            df[fg+'_normalized'] = df[fg] / df[bg]

    def apply_selection(self, df):
        """
        Adds a "selected" attribute to the measurements dataframe. The attribute is true for cells that fall within the selection boundary.

        Args:
        df (pd.DataFrame) - cell measurement data
        """

        # load selection boundary
        io = IO()
        bounds = io.read_npy(join(self.subdirs['selection'], 'selection.npy'))

        # add selected attribute to cell measurement data
        df['selected'] = False

        if self.include:

            # construct matplotlib path object
            path = Path(bounds, closed=False)

            # mark cells as within or outside the selection boundary
            cell_positions = df[['centroid_x', 'centroid_y']].values
            df['selected'] = path.contains_points(cell_positions)

    def apply_correction(self, df):
        """
        Adds a "selected" attribute to the measurements dataframe. The attribute is true for cells that fall within the selection boundary.

        Args:
        df (pd.DataFrame) - cell measurement data
        """

        # load correction coefficients and X/Y variables
        io = IO()
        data = io.read_json(join(self.subdirs['correction'], 'data.json'))

        # get independent/dependent variables
        xvar = data['params']['xvar']
        yvar = data['params']['yvar']

        # get linear model coefficients
        b, m = data['coefficients']

        # apply correction
        trend = b + m * df[xvar].values
        df[yvar+'_predicted'] = trend
        df[yvar+'c'] = df[yvar] - trend
        df[yvar+'c_normalized'] = df[yvar+'c'] / df[self.metadata['bg']]

    def build_graph(self, df, **graph_kw):
        """
        Compile weighted graph connecting adjacent cells.

        Args:
        df (pd.DataFrame) - cell measurement data

        Keyword Args:
        q (float) - edge length quantile above which edges are pruned
        weighted_by (str) - quantity used to weight edges
        """
        self.metadata['params']['graph_kw'] = graph_kw
        self.graph = WeightedGraph(df, **graph_kw)

    def apply_annotation(self, df, cluster=False):
        """
        Assign genotype and celltype labels to cell measurements.

        Args:
        df (pd.DataFrame) - cell measurement data
        cluster (bool) - if True, add community and community genotype labels
        """

        # assign single-cell classifier label
        df['genotype'] = self.classifier(df)

        # assign cluster labels
        if cluster:
            assign_genotypes = CommunityBasedGenotype.from_layer(self)
            assign_genotypes(df)

        # assign celltype labels
        celltype_labels = {0:'m', 1:'h', 2:'w', -1:'none'}
        assign_celltypes = CelltypeLabeler(labels=celltype_labels)
        assign_celltypes(df)

    def apply_concurrency(self, df, min_pop=5, max_distance=10):
        """
        Add boolean 'concurrent_<cell type>' field to cell measurement data for each unique cell type.

        Args:
        df (pd.DataFrame) - cell measurement data
        min_pop (int) - minimum population size for inclusion of cell type
        max_distance (float) - maximum distance threshold for inclusion
        """
        assign_concurrency = ConcurrencyLabeler(min_pop=min_pop,
                                                max_distance=max_distance)
        assign_concurrency(df)

    def mark_boundaries(self, df, basis='genotype', max_edges=0):
        """
        Mark clone boundaries by assigning a boundary label to all cells that share an edge with another cell from a different clone.

        Args:
        df (pd.DataFrame) - cell measurement data
        basis (str) - labels used to identify clones
        max_edges (int) - maximum number of edges for interior cells
        """

        # assign genotype to edges
        assign_genotype = np.vectorize(dict(df[basis]).get)
        edge_genotypes = assign_genotype(self.graph.edges)

        # find edges traversing clones
        boundaries = (edge_genotypes[:, 0] != edge_genotypes[:, 1])

        # get number of clone-traversing edges per node
        boundary_edges = self.graph.edges[boundaries]
        edge_counts = Counter(boundary_edges.ravel())

        # assign boundary label to nodes with too many clone-traversing edges
        boundary_nodes = [n for n, c in edge_counts.items() if c>max_edges]
        df['boundary'] = False
        df.loc[boundary_nodes, 'boundary'] = True

    def segment(self,
                bg='b',
                preprocessing_kws={},
                seed_kws={},
                seg_kws={},
                min_area=250):
        """
        Identify nuclear contours by running watershed segmentation on specified background channel.

        Args:
        bg (str) - background channel on which to segment RGB image
        preprocessing_kws (dict) - keyword arguments for image preprocessing
        seed_kws (dict) - keyword arguments for seed detection
        seg_kws (dict) - keyword arguments for segmentation
        min_area (int) - threshold for minimum segment size, px
        """

        # append default parameter values
        preprocessing_kws = defaults('preprocessing', preprocessing_kws)
        seed_kws = defaults('seeds', seed_kws)
        seg_kws = defaults('segmentation', seg_kws)

        # store parameters in metadata
        self.metadata['bg'] = bg
        segmentation_kw = dict(preprocessing_kws=preprocessing_kws,
                               seed_kws=seed_kws,
                               seg_kws=seg_kws,
                               min_area=min_area)
        self.metadata['params']['segmentation_kw'] = segmentation_kw

        # extract and preprocess background
        background = self.get_channel(bg)
        background.preprocess(**preprocessing_kws)

        # run segmentation
        seg = Segmentation(background, seed_kws=seed_kws, seg_kws=seg_kws)

        # exclude small segments
        seg.exclude_small_segments(min_area=min_area)

        # update segment labels
        self.labels = seg.labels

        # update cell measurements
        self.measure()

    def measure(self):
        """
        Measure properties of cell segments. Raw measurements are stored under in the 'measurements' attribute, while processed measurements are stored in the 'df' attribute.
        """

        # measure segment properties
        measurements = Measurements(self.im, self.labels)
        self.measurements = measurements.build_dataframe()

        # process raw measurement data
        self.df = self.process_measurements(self.measurements)

    def plot_graph(self,
                   channel='r',
                   figsize=(15, 15),
                   image_kw={},
                   graph_kw={}):
        """
        Plot graph on top of relevant channel from RGB image.

        Args:
        channel (str) - RGB channel to visualize
        figsize (tuple) - figure size
        image_kw (dict) - keyword arguments for scalar image visualization
        graph_kw (dict) - keyword arguments for scalar image visualization

        Returns:
        fig (matplotlib.figures.Figure)
        """

        # create axis
        fig, ax = plt.subplots(figsize=figsize)

        # add image
        image = self.get_channel(channel)
        image.show(ax=ax, segments=False, **image_kw)

        # add graph
        self.graph.show(ax=ax, **graph_kw)

        return fig

    def save_metadata(self):
        """ Save metadata. """
        io = IO()
        io.write_json(join(self.path, 'metadata.json'), self.metadata)

    def save_measurements(self):
        """ Save raw measurements. """

        # get segmentation directory
        path = join(self.subdirs['segmentation'], 'measurements.hdf')

        # save raw measurements
        self.measurements.to_hdf(path, 'measurements', mode='w')

    def save_segmentation(self, **image_kw):
        """
        Save segmentation.

        image_kw: keyword arguments for segmentation image
        """

        # add segmentation directory
        self.make_subdir('segmentation')
        dirpath = self.subdirs['segmentation']

        # save labels
        np.save(join(dirpath, 'labels.npy'), self.labels)

        # save measurements
        self.save_measurements()

        # save segmentation image
        bg = self.get_channel(self.metadata['bg'], copy=False)
        fig = bg.show(segments=True)
        fig.axes[0].axis('off')
        fig.savefig(join(dirpath, 'segmentation.png'), **image_kw)
        fig.clf()
        plt.close(fig)
        gc.collect()

    def save(self,
             segmentation=True,
             annotation=False,
             dpi=100):
        """
        Save segmentation parameters and results.

        Args:
        segmentation (bool) - if True, save segmentation
        annotation (bool) - if True, save annotation
        dpi (int) - image resolution
        """

        # set image keyword arguments
        image_kw = dict(format='png',
                     dpi=dpi,
                     bbox_inches='tight',
                     pad_inches=0)

        # save segmentation
        if segmentation:
            self.save_segmentation(**image_kw)

        # save metadata
        self.save_metadata()

        # # save annotation image
        # if annotation:
        #     im_path = os.path.join(dirpath, 'annotation.png')
        #     fig = self.plot_annotation()
        #     fig.savefig(im_path, **im_kw)
        #     fig.clf()
        #     plt.close(fig)
        #     gc.collect()
