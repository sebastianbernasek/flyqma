import numpy as np
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec
from scipy.stats import norm, multivariate_normal

from .univariate import UnivariateMixture
from .visualization import BivariateVisualization


class BivariateMixtureProperties:
    """ Extension properties for bivariate mixtures. """

    @property
    def means(self):
        return self.means_[:, 0].ravel()

    @property
    def stds(self):
        return np.sqrt(self.covariances_[:, 0].ravel())

    @property
    def supportx(self):
        max_val = np.percentile(self.values[:, 0], q=99.9)
        return np.linspace(self.values[:, 0].min(), max_val, num=100)

    @property
    def supporty(self):
        return self.supportx

    @property
    def support(self):
        xx, yy = np.meshgrid(self.supportx, self.supporty)
        return np.vstack((xx.ravel(), yy.ravel())).T

    @property
    def extent(self):
        return np.array([self.supportx.min(), self.supportx.max(), self.supporty.max(), self.supporty.min()])

    @property
    def scale_factor(self):
        return np.exp(self.support).reshape(self.support_size[0], self.support_size[1], self.dim)

    @property
    def support_size(self):
        return (self.supportx.size, self.supporty.size)

    @property
    def components(self):
        return [multivariate_normal(mean=self.means_[i], cov=self.covariances_[i]) for i in range(self.n_components)]


class BivariateMixture(BivariateMixtureProperties,
                       UnivariateMixture,
                       BivariateVisualization):
    """ Class for representing a bivariate Gaussian mixture model. """

    dim = 2

    def __getitem__(self, margin):
        """ Returns univariate mixture model for specified <margin>. """
        return self.get_marginal_mixture(margin)

    def get_marginal_mixture(self, margin):
        """ Returns univariate mixture model for specified <margin>. """

        values = self.values[:, margin].reshape(-1, 1)
        mu = self.means_[:, margin].reshape(-1, 1)
        cov = self.covariances_[:, margin].reshape(-1, 1)
        weights = self.weights_

        args = (mu, cov, weights)
        kwargs = dict(values=values)

        return UnivariateMixture.from_parameters(*args, **kwargs)

    def get_xmargin(self, log=True):
        pdf = np.zeros_like(self.supportx)
        for i in range(self.n_components):
            pdf += self.get_component_marginal_pdf(i, 0, True)
        if not log:
            support = np.exp(self.supportx)
            pdf /= support
        else:
            support = self.supportx
        return support, pdf

    def get_ymargin(self, log=True):
        pdf = np.zeros_like(self.supporty)
        for i in range(self.n_components):
            pdf += self.get_component_marginal_pdf(i, 1, True)
        if not log:
            support = np.exp(self.supporty)
            pdf /= support
        else:
            support = self.supporty
        return support, pdf

    def get_component_pdf(self, idx, weighted=True):

        pdf = self.components[idx].pdf(self.support).reshape(self.support_size)

        if weighted:
            pdf *= self.weights_[idx]

        return pdf

    def get_component_marginal_pdf(self, idx, margin, weighted=True):
        component = self.components[idx]
        mu = component.mean[margin]
        sigma = np.sqrt(component.cov[margin, margin])
        pdf = norm(mu, sigma).pdf(self.supportx)

        if weighted:
            pdf *= self.weights_[idx]

        return pdf



