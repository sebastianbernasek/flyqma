Fly-QMA
=======

**Fly-QMA** is part of the **NU FlyEye** platform for studying gene expression in the developing *Drosophila* eye. The package enables Quantitative Mosaic Analysis (QMA) - that is, it helps users compare expression levels between distinct clonal subpopulations within the eye epithelium.

Expression patterns are typically identified by comparing the fluorescence of target gene reporters between groups of cells. Fly-QMA helps quantify these differences in reporter expression. Quantification entails measuring fluorescence intensities by analyzing experimentally collected images of fixed eye discs. Such measurements may then used to identify and compare distinct subpopulations within the eye field.

Given confocal microscopy data, the Fly-QMA package facilitates:

  - **Segmentation.** Detect cell nuclei within a microscope image

  - **Measurement.** Quantify reporter expression levels

  - **Bleedthrough Control.** Correct for fluorescence bleedthrough

  - **Annotation.** Identify distinct subpopulations of cells

  - **ROI Definition.** Manually define regions of interest

  - **Comparison.** Compare expression levels between subpopulations

Please refer to the [documentation](https://sebastianbernasek.github.io/flyqma/index.html#) page for tips on getting started with analyzing your data.


Installation
============

You will first need a working environment running Python 3.6+ or later, after which you can download the [latest distribution](https://github.com/sebastianbernasek/clones/archive/v0.1-beta.tar.gz) and install via ``pip``:

    pip install flyqma-1.0.tar.gz


Getting Started
===============

See the [Fly-QMA tutorial](https://github.com/sebastianbernasek/flyqma/blob/master/tutorial.ipynb).


Examples
========

For additional examples of complete projects utilizing Fly-QMA and the entire **NU FlyEye** platform, check out:

 - [Our Fly-QMA manuscript](https://github.com/sebastianbernasek/flyqma_ms)
 - [Our study](https://github.com/sebastianbernasek/pnt_yan_ratio) of Pnt and Yan expression during retinal patterning in *Drosophila*.


Authors
=======

[Sebastian Bernasek](https://github.com/sebastianbernasek)
