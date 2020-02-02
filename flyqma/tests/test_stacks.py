from unittest import TestCase
from os.path import join, exists
from pandas import DataFrame

from flyqma.data import Stack
from flyqma.data.layers import Layer
from .test_io import TestPaths


class Test02_Stack(TestPaths):
    """
    Tests for Stack class instantiated from stack directory.
    """

    @classmethod
    def setUpClass(cls):
        """ Initialize test instance of Stack. """
        cls.stack = Stack(cls.stack_path, bit_depth=cls.bit_depth)

    @classmethod
    def tearDownClass(cls):
        """ Restore stack directory to original state. """
        cls.stack.restore_directory()

    def test01_paths(self):
        """ Check that child directories are present. """
        tests = [exists(self.stack.layers_path),
                 exists(self.stack.path)]
        self.assertTrue(False not in tests)

    def test02_load_image(self):
        """ Load stack image. """
        self.stack.load_image()
        self.assertTrue(self.stack.stack is not None)

    def test03_load_layer(self):
        """ Load Layer from stack. """
        layer = self.stack.load_layer()
        self.assertTrue(isinstance(layer, Layer))

    def test04_segmentation(self):
        """ Segment all layers in stack.. """
        try:
            self.stack.segment(2)
            success = True
        except:
            success = False
        self.assertTrue(success)

    # def test05_load_segmentation_mask(self):
    #     """ Load stack image. """
    #     self.stack.load_image()
    #     self.assertTrue(self.stack.stack is not None)

    # def test05_train_annotator(self):
    #     """ Load stack image. """
    #     self.stack.load_image()
    #     self.assertTrue(self.stack.stack is not None)

    # def test06_apply_annotator(self):
    #     """ Load stack image. """
    #     self.stack.load_image()
    #     self.assertTrue(self.stack.stack is not None)

    # def test07_load_roi_mask(self):
    #     """ Load stack image. """
    #     self.stack.load_image()
    #     self.assertTrue(self.stack.stack is not None)

    # def test07_launch_roi_selector(self):
    #     """ Load stack image. """
    #     self.stack.load_image()
    #     self.assertTrue(self.stack.stack is not None)

    # def test07_launch_roi_selector(self):
    #     """ Load stack image. """
    #     self.stack.load_image()
    #     self.assertTrue(self.stack.stack is not None)

    # def test08_bleedthrough_correction(self):
    #     """ Load stack image. """
    #     self.stack.load_image()
    #     self.assertTrue(self.stack.stack is not None)

    def test09_aggregation(self):
        """ Collect measurements from all layers in stack. """
        data = self.stack.aggregate_measurements(raw=True)
        self.assertTrue(isinstance(data, DataFrame))
