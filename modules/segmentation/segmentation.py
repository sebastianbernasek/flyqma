import numpy as np
import matplotlib.pyplot as plt
from skimage.feature import peak_local_max
from skimage.segmentation import watershed
from matplotlib.colors import ListedColormap
from scipy.ndimage import distance_transform_edt, gaussian_filter
from scipy.ndimage import generate_binary_structure, iterate_structure
from scipy.ndimage.measurements import center_of_mass


class Segmentation:
    """
    Object for finding nuclear contours within an image.

    Seed detection is performed by finding local maxima in a euclidean distance transform of the image foreground mask. Segmentation is achieved via the watershed method.

    Attributes:
    seeds (np.ndarray[float]) - seeds for segmentation, 2 x N
    labels (2D np.ndarray[int]) - segment label mask, number denotes segment ID
    segment_ids (1D np.ndarray[int]) - unique segment IDs, length N
    cmap (matplotlib.colors.ColorMap) - segment ID colormap, length N+1
    """

    def __init__(self, image, seed_kws={}, seg_kws={}):
        """
        Instantiate and run segmentation.

        Args:
        image (MonochromeImage) - image to be segmented
        seed_kws (dict) - keyword arguments for seed detection
        seg_kws (dict) - keyword arguments for segmentation
        """
        image.set_otsu_mask()
        self.labels = None
        self.seeds = self.get_seeds_from_distance(image.mask, **seed_kws)
        self.update_cmap()
        self.watershed(image.mask, **seg_kws)
        self.exclude_edge_segments()
        self.segment_ids = np.array(list(self.seeds.keys()))

    @staticmethod
    def array_to_dict(arr):
        """ Convert array to dictionary. """
        if arr is None:
            return {}
        else:
            return {i+1: row for i, row in enumerate(arr)}

    @staticmethod
    def find_maxima(im,
                    min_distance=1,
                    num_peaks=np.inf):
        """ Find local maxima of euclidean distance transform. """
        seeds = peak_local_max(im, min_distance=min_distance, num_peaks=num_peaks, exclude_border=False)
        return seeds

    @classmethod
    def get_seeds_from_distance(cls, mask,
                                sigma=2,
                                min_distance=1,
                                num_peaks=np.inf):
        """ Seed detection via euclidean distance transform of binary map. """

        # get values
        values = distance_transform_edt(mask).astype(float)

        # apply gaussian filter
        if sigma is not None:
            values = gaussian_filter(values, sigma)

        seeds = cls.find_maxima(values, min_distance=min_distance, num_peaks=num_peaks)
        return cls.array_to_dict(seeds)

    @classmethod
    def get_segment_mask(cls, im, seeds):
        """
        Get mask for markers.

        Args:
        im (np.ndarray[float]) - image to be segmented
        seeds (dict) - {segment_id: [x, y]} pairs
        """

        # create marker mask
        seed_mask = np.zeros_like(im, dtype=int)
        shape = np.array(seed_mask.shape).reshape(-1, 1)
        for seed_id, zyx in seeds.items():
            indices = zyx.reshape(-1, 1)
            accepted = np.alltrue((indices >= 0) & (indices < shape), axis=0)
            indices = indices[:, accepted]
            seed_mask[indices[0], indices[1]] = seed_id
        return seed_mask

    def watershed(self, mask, sigma=0.5, watershed_line=True):
        """
        Run watershed segmentation to generate segment label mask.

        Args:
        mask (np.ndarray[bool]) - binary foreground mask
        sigma (float) - parameter for smoothing distance mask
        watershed_line (bool) - if True, include 1 px line separating contours
        """

        # define distances
        distances = distance_transform_edt(mask)
        distances = gaussian_filter(distances, sigma=sigma)

        # run segmentation
        connectivity = iterate_structure(generate_binary_structure(2, 1), 1)
        markers = self.get_segment_mask(distances, self.seeds)
        self.labels = watershed(-distances, markers=markers, mask=mask, connectivity=connectivity, watershed_line=watershed_line)

    def update_cmap(self):
        """ Use current seeds to build colormap. """
        bg_color = np.array([[.8,.8,.8]])
        segment_colors = np.random.rand(len(self.seeds), 3)
        self.cmap = ListedColormap(np.vstack((bg_color, segment_colors)))

    @staticmethod
    def get_borders(im):
        """ Returns boolean array with borders masked as True. """
        mask = np.zeros_like(im, dtype=bool)
        mask[0, :] = True
        mask[-1, :] = True
        mask[:, 0] = True
        mask[:, -1] = True
        return mask

    def exclude_edge_segments(self):
        """ Removes segments overlaying the edge_mask. """

        # mark segments on edge of image for exclusion
        edge_segments = self.labels[self.get_borders(self.labels)]
        excluded_segments = np.unique(edge_segments)
        exclusion_mask = np.isin(self.labels, excluded_segments)

        # set edge segments to zero and remove seeds
        self.labels[exclusion_mask] = 0
        list(map(self.seeds.__delitem__, filter(self.seeds.__contains__, excluded_segments)))

    def exclude_small_segments(self, min_area=10):
        """
        Exclude small segments.

        Args:
        min_area (float) - minimum contour area
        """

        # identify small segments
        bins = np.arange(1, self.labels.max()+2)
        voxels = self.labels[self.labels!=0]
        counts, _ = np.histogram(voxels, bins=bins)

        # mark excluded segment IDs
        excluded = np.isin(np.arange(1, counts.size+1), self.segment_ids)
        excluded = np.logical_and(excluded, counts < min_area)
        excluded = bins[:-1][excluded]

        # remove small segments
        self.labels[np.isin(self.labels, excluded)] = 0
        _ = [self.seeds.pop(seed) for seed in excluded]
        self.segment_ids = np.array(list(self.seeds.keys()))

    def get_centroids(self):
        """ Set centroids to center of mass of segmentation. """
        return self.evaluate_centroids(self.labels)

    @staticmethod
    def evaluate_centroids(labels):
        """
        Evaluate center of mass of each label.

        * Note: scipy returns centroids as (y, x) which are flipped to (x, y)

        Args:
        labels (np.ndarray[int]) - segment label mask

        Returns:
        center_of_mass (dict) - {segment_id: [centroid_x, centroid_y]} pairs
        """

        seg_ids = np.unique(labels[labels!=0])
        coms = center_of_mass(labels, labels, seg_ids)
        return {seg_id: com[::-1] for seg_id, com in zip(seg_ids, coms)}

    def show(self, figsize=(15, 15)):
        """ Visualize segment label mask. """
        fig, ax = plt.subplots(figsize=figsize)
        ax.imshow(self.labels, cmap=self.cmap)

