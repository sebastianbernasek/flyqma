import numpy as np
import pandas as pd

from ..vis.figures import Figure
from ..vis.settings import *


class Scoring:
    """
    Object for scoring classification accurancy.

    Attributes:

        data (pd.DataFrame) - data with 'measured' and 'predicted' attributes

        n (int) - number of classifications

        percent_correct (float) - frequency of correct classification

        matrix (ErrorMatrix) - classification adjacency matrix

    """

    def __init__(self, measured, predicted):
        """
        Instantiate scoring prediction.

        Args:

            measured (array like) - manually assigned class labels

            predicted (array like) - predicted class labels

        """
        data = (measured, predicted)
        self.data = pd.DataFrame(data, columns=('measured', 'predicted'))
        self.n = len(self.data)

    def __add__(self, x):
        """ Combine additively with another scoring matrix. """
        merged = pd.concat([self.data, x.data])
        return Scoring(merged[['measured', 'predicted']])

    def score(self, **kwargs):
        """
        Evaluate classification accuracy and plot adjacency matrix.

        kwargs: keyword arguments for adjacency matrix
        """
        self.compare()
        self.plot_matrix(**kwargs)

    def compare(self):
        """ Evaluate frequency of correct classification. """
        self.data['difference'] = abs(self.data.measured-self.data.predicted)
        self.data['correct'] = (self.data.difference==0)
        self.percent_correct = self.data.correct.sum() / self.n

    def plot_matrix(self, **kwargs):
        """
        Plot classification adjacency matrix.

        kwargs: keyword arguments for adjacency matrix
        """
        measured = self.data.measured.values.astype(int)
        predicted = self.data.predicted.values.astype(int)
        self.matrix = AdjacencyMatrix(measured, predicted, **kwargs)


class AdjacencyMatrix(Figure):
    """
    Classification adjacency matrix. Generates a figure showing the frequency of overlap between predicted and manually assigned labels.

    Attributes:

        counts (np.ndarray[int]) - pairwise overlap between manually assigned and predicted class labels

        fig (matplotlib.figures.Figure) - adjacency matrix figure

    """

    def __init__(self, measured, predicted,
                 text=None,
                 figsize=(2, 2),
                 **kwargs):
        """
        Instantiate error matrix.

        Args:

            measured (array like) - measured class labels

            predicted (array like) - predicted class labels

            text (str) - indicates whether 'counts' or 'rates' labels are added

            figsize (tuple) - figure dimensions

            kwargs: keyword arguments for adjacency matrix construction

        """

        self.counts = self.build_matrix(measured, predicted)

        # create figue and add single axis
        self.fig = self.create_figure(figsize=figsize)
        self.add_axes()

        # plot classifier adjacency matrix
        self.plot_matrix(self.axes, text=text, **kw)

    def save(self, name, dirpath='./', **kwargs):
        """
        Save figure to file.

        Args:

            name (str) - file name without format extension

            dirpath (str) - directory in which to save file

        Keyword arguments:

            fmt (str) - file format, eg 'pdf'

            dpi (int) - resolution

            transparent (bool) - if True, remove background

            rasterized (bool) - if True, rasterize figure data

            kwargs: keyword arguments for plt.savefig

        """
        self._save(self.fig, name, dirpath, **kwargs)

    @staticmethod
    def build_matrix(measured, predicted):
        """
        Compute 2D histogram of measured versus predicted values.

        Args:

            measured (array like) - measured class labels

            predicted (array like) - predicted class labels

        Returns:

            counts (np.ndarray[int]) - pairwise overlap between measured/predicted classes

        """
        counts, _, _ = np.histogram2d(measured, predicted, bins=np.arange(3.5))
        return counts.astype(np.int64)

    def plot_matrix(self, ax, text=None, fontsize=7):
        """
        Plot classification adjacency matrix.

        Args:

            ax (matplotlib.axes.AxesSubplot)

            text (str) - indicates whether 'counts' or 'rates' labels are added

            fontsize (int) - font size for text

        """

        # compute error rates
        rates = self.counts.astype(np.float64)
        rates /= self.counts.sum(axis=1).reshape(-1, 1)

        # plot image
        ax.imshow(rates.T, cmap=plt.cm.Reds, vmin=0, vmax=1)
        ax.invert_yaxis()

        # add labels
        kw = dict(horizontalalignment='center', verticalalignment='center')
        for i in range(3):
            for j in range(3):
                if text=='rates':
                    s = '{:0.1%}'.format(rates[i, j])
                    ax.text(i, j, s=s, fontsize=fontsize, **kw)
                elif text=='counts':
                    s = '{:d}'.format(self.counts[i, j])
                    ax.text(i, j, s=s, fontsize=fontsize, **kw)
                else:
                    continue

        # format axes
        self.format_axis(ax, fontsize=fontsize)

    @staticmethod
    def format_axis(ax):
        """ Format individual axis. """
        ax.set_xlabel('Human label')
        ax.set_ylabel('Automated label')
        ax.set_xticks(np.arange(2.5))
        ax.set_xticklabels(['0x', '1x', '2x'])
        ax.set_yticks(np.arange(2.5))
        ax.set_yticklabels(['0x', '1x', '2x'])
        ax.set_aspect(1)