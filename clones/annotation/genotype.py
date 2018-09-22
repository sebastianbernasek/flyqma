import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import ListedColormap
from scipy.spatial import Voronoi

from .labelers import AttributeLabeler
from .classifiers import CommunityClassifier


class CommunityBasedGenotype(AttributeLabeler):
    """
    Object for assigning genotypes to cells based on their local community.

    Attributes:
    graph (Graph) - graph connecting adjacent cells
    cell_classifier (CellClassifier) - callable object
    labeler (CommunityClassifier) - callable object

    Inherited attributes:
    label (str) - name of label field to be added
    attribute (str) - existing cell attribute used to determine labels
    """

    def __init__(self, graph, cell_classifier,
                 label='community_genotype',
                 attribute='community'):
        """
        Instantiate community-based genotype annotation object.

        Args:
        graph (Graph) - graph connecting adjacent cells
        cell_classifier (CellClassifier) - callable object
        label (str) - name of <genotype> attribute to be added
        attribute (str) - name of attribute defining community affiliation
        """

        # store label and attribute field names
        self.label = label
        self.attribute = attribute

        # run community detection and store graph
        graph.find_communities()
        self.graph = graph

        # store cell classifier
        self.cell_classifier = cell_classifier

        # build genotype labeler based on community classifier
        self.labeler = self.build_classifier()

    @staticmethod
    def from_layer(layer):
        """
        Instantiate from layer.

        Args:
        layer (Layer)

        Returns:
        labeler (CommunityBasedGenotype)
        """
        return CommunityBasedGenotype(layer.graph, layer.classifier)

    def build_classifier(self):
        """
        Build community classifier.

        Returns:
        classifier (func) - maps communities to labels
        """

        # assign community labels
        self.graph.df['community'] = -1
        ind = self.graph.nodes
        self.graph.df.loc[ind, 'community'] = self.graph.community_labels

        # build community classifier
        classifier = CommunityClassifier(self.graph.df, self.cell_classifier)

        return classifier


class Tessellation:
    """
    Object for visualizing Voronoi tessellations.
    """

    def __init__(self, xy, labels, q=90, colors=None):

        self.vor = Voronoi(xy)
        self.vor.regions = np.array(self.vor.regions)
        self.set_region_mask(q=q)
        self.region_labels = self.label_regions(labels)
        self.verts = self.vor.regions[self.mask]

        #self.labels = labels
        self.set_cmap(colors)

    def label_regions(self, labels):
        points = np.argsort(self.vor.point_region)
        point_to_label = np.vectorize(dict(enumerate(labels)).get)
        region_labels = point_to_label(points)
        return region_labels

    def set_cmap(self, colors=None):
        N = len(set(self.region_labels))
        if colors is None:
            colors = np.random.random((N, 3))
        self.cmap = ListedColormap(colors, 'indexed', N)

    @staticmethod
    def _evaluate_area(x, y):
        """ Evaluate area enclosed by a set of points. """
        return 0.5*np.abs(np.dot(x, np.roll(y,1))-np.dot(y, np.roll(x,1)))

    def evaluate_region_area(self, region):
        """ Evaluate pixel area enclosed by a region. """
        return self._evaluate_area(*self.vor.vertices[region, :].T)

    def set_region_mask(self, q=90):
        """
        Mask regions with pixel areas larger than a specified quantile.

        Args:
        q (float) - maximum region area quantile, 0 to 100
        """
        f = np.vectorize(lambda x: -1 not in x and len(x) > 0)
        mask = f(self.vor.regions)
        mask *= self.build_region_area_mask(q=q)
        self.mask = mask

    def build_region_area_mask(self, q=90):
        """
        Mask regions with pixel areas larger than a specified quantile.

        Args:
        q (float) - maximum region area quantile, 0 to 100

        Returns:
        mask (np.ndarray[bool]) - True for regions smaller than maximum area
        """
        evaluate_area = np.vectorize(lambda x: self.evaluate_region_area(x))
        areas = evaluate_area(self.vor.regions)
        threshold = np.percentile(areas, q=q)
        return (areas <= threshold)

    @staticmethod
    def _show(vertices, c='k', ax=None, alpha=0.5):
        """ Visualize vertices. """
        if ax is None:
            fig, ax = plt.subplots()
            ax.set_xlim(0, 2048)
            ax.set_ylim(0, 2048)
            ax.axis('off')
        poly = PolyCollection(vertices)
        poly.set_facecolors(c)
        poly.set_alpha(alpha)
        ax.add_collection(poly)

    def show(self, ax=None, **kw):
        """ Visualize vertices. """
        get_vertices = np.vectorize(lambda region: self.vor.vertices[region])
        vertices = [self.vor.vertices[r] for r in self.vor.regions[self.mask]]
        c = self.cmap(self.region_labels[self.mask[1:]])
        self._show(vertices, c=c, ax=ax, **kw)


class CloneVisualization(Tessellation):
    """
    Object for visualizing clones by shading Voronoi cells.
    """

    def __init__(self, df, label='genotype', **kw):
        xy = df[['centroid_x', 'centroid_y']].values
        labels = df[label].values
        Tessellation.__init__(self, xy, labels, **kw)
