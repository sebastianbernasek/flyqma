from time import time
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

from ..annotation.bayesian import BayesianClassifier
from .simulation import SimulationBenchmark
from .io import Pickler


class BatchBenchmark(Pickler):
    """
    Class for benchmarking a batch of simulations.

    Attributes:

        batch (growth.sweep.batch.Batch) - batch of simulations

        scale (float) - fluorescence scale

        num_replicates (int) - number of fluorescence replicates

        data (pd.DataFrame) - synthetic measurement data

        classifier (BayesianClassifier) - classifier fit to all replicates

        results (pd.DataFrame) - classifier scores for each replicate

        runtime (float) - total benchmark evaluation runtime

    """

    def __init__(self, batch,
                 scale=10,
                 num_replicates=1,
                 classify_on='fluorescence',
                 rule='weighted',
                 twolevel=False):
        """
        Instantiate batch benchmark.

        Args:

            batch (growth.sweep.batch.Batch) - batch of simulations

            scale (float) - fluorescence scale

            num_replicates (int) - number of fluorescence replicates

            classify_on (str) - attribute on which cells are classified

            rule (str) - rule used for vote aggregation

            twolevel (bool) - if True, use two-level clustering

        """
        self.batch = batch
        self.scale = scale
        self.num_replicates = num_replicates
        self.classify_on = classify_on
        self.rule = rule
        self.twolevel = twolevel

        # initialize attributes
        self.data = None
        self.classifier = None
        self.results = None
        self.runtime = None

    def __getitem__(self, replicate_id):
        """ Returns SimulationBenchmark for <replicate_id>. """
        measurements = self.data.iloc[self.replicates.indices[replicate_id], :]
        return SimulationBenchmark(measurements.copy(), **self.params)

    def save(self, filepath, save_measurements=False):
        """
        Save serialized instance.

        Args:

            filepath (str) - destination of serialized object

            save_measurements (bool) - if True, include measurements

        """
        if not save_measurements:
            self.data = None
        super().save(filepath)

    @property
    def params(self):
        """ Parameters for SimulationBenchmark. """
        return dict(classifier=self.classifier,
                    rule=self.rule,
                    twolevel=self.twolevel)

    @property
    def replicates(self):
        """ Replicates iterator (pd.GroupBy) """
        columns = ['growth_replicate', 'fluorescence_replicate']
        return self.data.groupby(columns)

    def measure(self):
        """ Returns dataframe of synthetic measurements. """
        return self.batch.measure(self.scale, self.num_replicates)

    @staticmethod
    def fit_classifier(values, classify_on):
        return BayesianClassifier(values, classify_on=classify_on)

    def evaluate_benchmarks(self):
        """
        Evaluate benchmark for each replicate.
        """

        # iterate over replicates
        results = {}
        columns = ['growth_replicate', 'fluorescence_replicate']
        for replicate_id, replicate in self.replicates:

            # evaluate benchmark for current replicate
            benchmark = SimulationBenchmark(replicate.copy(), **self.params)

            # evaluate performance metric
            simple, community = benchmark.simple_MAE, benchmark.community_MAE

            # store results
            results[replicate_id] = dict(simple=simple, community=community)

        # compile dataframe
        results = pd.DataFrame.from_dict(results, orient='index')
        results.index.set_names(columns, inplace=True)

        return results

    def run(self):
        """ Run benchmark on batch. """

        # generate synthetic measurements
        start = time()
        self.data = self.measure()

        # fit bayesian cell-based classifier
        values = self.data[self.classify_on].values
        self.classifier = self.fit_classifier(values, self.classify_on)

        # evaluate benchmarks
        self.results = self.evaluate_benchmarks()
        self.runtime = time() - start