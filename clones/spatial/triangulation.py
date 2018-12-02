# import numpy as np
# from matplotlib.tri import Triangulation
# from scipy.spatial import ConvexHull


# class LocalTriangulation(Triangulation):
#     """
#     Triangulation with edge distance filter.

#     """

#     def __init__(self, *args, max_length=0.1, **kwargs):

#         # call matplotlib.tri.Triangulation instantiation
#         super().__init__(*args, **kwargs)

#         # compile edges
#         edge_list = self.compile_edge_list()
#         edge_lengths = self.evaluate_edge_lengths(edge_list, self.x, self.y)

#         # set max_length attribute
#         self.max_length = max_length

#         # store edges
#         self.edge_list = edge_list
#         self.edge_lengths = edge_lengths

#     @property
#     def hull(self):
#         """ Convex hull. """
#         return ConvexHull(np.vstack((self.x, self.y)).T)

#     @property
#     def num_triangles(self):
#         """ Number of triangles. """
#         return self.triangles.shape[0]

#     @property
#     def nodes(self):
#         """ All nodes. """
#         return np.unique(self.triangles)

#     @property
#     def edges(self):
#         """ Filtered edges. """
#         #return self.filter_edges(self.nodes, self.edge_list, self.edge_lengths, max_length=self.max_length)
#         return self.filter_outliers(self.nodes, self.edge_list, self.edge_lengths)
#         #return self.filter_hull(self.edge_list)
#         #return self.filter_longest_edge(self.edge_list, self.edge_lengths)

#     def compile_edge_list(self):
#         """ Returns list of (node_from, node_to) tuples. """
#         edges = []
#         for i in range(3):
#             edges += list(zip(self.triangles[:, i], self.triangles[:,(i+1)%3]))
#         return np.array(edges)

#     @staticmethod
#     def evaluate_edge_lengths(edge_list, x, y):
#         """ Returns 1D array of edge lengths. """
#         dx, dy = x[edge_list], y[edge_list]
#         return np.sqrt(np.diff(dx, axis=1)**2 + np.diff(dy, axis=1)**2).reshape(-1)

#     @staticmethod
#     def find_disconnected_nodes(nodes, edges):
#         """ Returns boolean array of nodes not included in edges. """
#         return nodes[~np.isin(nodes, np.unique(edges))]

#     @staticmethod
#     def find_first_edge(edges, node):
#         """ Returns index of first edge containing <node>. """
#         return (edges==node).any(axis=1).nonzero()[0][0]

#     @classmethod
#     def filter_edges(cls, nodes, edges, lengths, max_length=0.1):
#         """ Returns all edges less than <max_length>, with at least one edge containing each node. """

#         # sort edges
#         sort_indices = np.argsort(lengths)
#         edges = edges[sort_indices]
#         lengths = lengths[sort_indices]

#         mask = (lengths <= max_length)
#         rejected, accepted = edges[~mask], edges[mask]

#         # find disconnected nodes
#         disconnected = cls.find_disconnected_nodes(nodes, accepted)

#         # add shortest edge for each disconnected node
#         if disconnected.size > 0:
#             f = np.vectorize(lambda node: cls.find_first_edge(rejected, node))
#             connecting = rejected[f(disconnected)]
#             accepted = np.vstack((accepted, connecting))

#         return accepted

#     @classmethod
#     def filter_outliers(cls, nodes, edges, lengths):
#         """ Returns all edges whose lengths are not outliers, with at least one edge containing each node. """

#         # sort edges
#         sort_indices = np.argsort(lengths)
#         edges = edges[sort_indices]
#         lengths = lengths[sort_indices]

#         mask = ~cls.is_outlier(lengths)

#         rejected, accepted = edges[~mask], edges[mask]

#         # find disconnected nodes
#         disconnected = cls.find_disconnected_nodes(nodes, accepted)

#         # add shortest edge for each disconnected node
#         if disconnected.size > 0:
#             f = np.vectorize(lambda node: cls.find_first_edge(rejected, node))
#             connecting = rejected[f(disconnected)]
#             accepted = np.vstack((accepted, connecting))

#         return accepted

#     def filter_hull(self, edges):
#         """ Returns all edges not on the convex hull. """
#         hull_edges = np.sort(self.hull.simplices, axis=1)
#         on_hull = np.isin(np.sort(edges, axis=1), hull_edges).all(axis=1)
#         return edges[~on_hull]

#     def filter_longest_edge(self, edges, edge_lengths):
#         """ Returns all edges except the longest edge in each triangle. """
#         accepted_edges = []
#         for tri in range(self.num_triangles):
#             ind = np.argsort(edge_lengths[tri::self.num_triangles])[:-1]
#             accepted_edges.append(edges[tri::self.num_triangles][ind])
#         return np.vstack(accepted_edges)

#     @staticmethod
#     def is_outlier(points, threshold=3.):
#         """
#         Returns a boolean array with True if points are outliers and False
#         otherwise.

#         Args:

#             points (np.ndarray[float]) - 1-D array of observations

#             threshold (float) - Maximum modified z-score. Observations with a modified z-score (based on the median absolute deviation) greater are classified as outliers.

#         Returns:

#             mask (np.ndarray[bool])

#         References:

#             Boris Iglewicz and David Hoaglin (1993), "Volume 16: How to Detect and Handle Outliers", The ASQC Basic References in Quality Control:
#             Statistical Techniques, Edward F. Mykytka, Ph.D., Editor.

#         """
#         if len(points.shape) == 1:
#             points = points[:,None]
#         median = np.median(points, axis=0)
#         diff = np.sum((points - median)**2, axis=-1)
#         diff = np.sqrt(diff)
#         med_abs_deviation = np.median(diff)

#         modified_z_score = 0.6745 * diff / med_abs_deviation

#         # exclude lower bound
#         modified_z_score[points.ravel()<median] = 0

#         return modified_z_score > threshold