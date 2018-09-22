import numpy as np
from scipy.spatial.distance import cdist

from .labelers import AttributeLabeler


class ConcurrencyLabeler(AttributeLabeler):
    """
    Object for labeling cell measurements as concurrent with other cell types.  Concurrency with each unique target cell type is determined by applying a maximum threshold on the x-distance between each cell and its nearest neighbor of the target type.

    Attributes:
    attribute (str) - measurement attribute used to denote cell type
    min_pop (int) - minimum population size for inclusion of cell type
    max_distance (float) - maximum distance threshold for inclusion
    """

    def __init__(self, attribute='celltype', min_pop=5, max_distance=10):
        """
        Instantiate object for labeling measurements as concurrent with other cell types.

        Args:
        attribute (str) - measurement attribute used to denote cell type
        min_pop (int) - minimum population size for inclusion of cell type
        max_distance (float) - maximum distance threshold for inclusion
        """

        self.attribute = attribute
        self.min_pop = min_pop
        self.max_distance = max_distance

    def evaluate_distance(self, data, target_type):
        """
        Evaluate x-distance of all cells to nearest neighbor of target cell type.

        Args:
        data (pd.DataFrame) - processed cell measurement data
        target_type (str) - target cell type

        Returns:
        distances (np.ndarray[float]) - distances to target cell type
        """

        # get target cells
        targets = data[data[self.attribute]==target_type]

        # evaluate distances if there are enough target cells
        if len(targets) > self.min_pop:
            rs = lambda x: x.centroid_x.values.reshape(-1, 1)
            distances = cdist(rs(data), rs(targets)).min(axis=1)

        # otherwise set arbitrarily high distance
        else:
            distances = 10000*np.ones(len(data), dtype=np.float64)

        return distances

    def assign_labels(self, data):
        """
        Add boolean 'concurrent_<cell type>' field to cell measurement data for each unique cell type.

        Args:
        data (pd.DataFrame) - processed cell measurement data
        """

        # find unique target cell types
        target_types = data[self.attribute].unique()

        # assign concurrency label
        for target_type in target_types:
            distances = self.evaluate_distance(data, target_type)
            data['concurrent_'+target_type] = (distances <= self.max_distance)
