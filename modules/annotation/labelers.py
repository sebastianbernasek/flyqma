import numpy as np


class AttributeLabeler:
    """
    Assigns label to cell measurement data based on an existing attribute.

    Attributes:
    label (str) - name of label field to be added
    attribute (str) - existing cell attribute used to determine labels
    labeler (vectorized func) - callable that maps attribute values to labels
    """
    def __init__(self, label, attribute, labels):
        """
        Instantiate labeler.

        Args:
        label (str) - name of label attribute to be added
        attribute (str) - existing cell attribute used to determine labels
        labels (dict) - {attribute value: label value} pairs
        """

        # store label and attribute field names
        self.label = label
        self.attribute = attribute

        # vectorize labeling function
        self.labeler = np.vectorize(labels.get)

    def __call__(self, df):
        """
        Assign labels by adding <label> field to cell measurement data.

        Args:
        df (pd.DataFrame) - cells measurement data with <attribute> field
        """
        return self.assign_labels(df)

    def assign_labels(self, df):
        """
        Assign labels by adding <label> field to cell measurement data.

        Args:
        df (pd.DataFrame) - cells measurement data with <attribute> field
        """
        df[self.label] = self.labeler(df[self.attribute])


class CelltypeLabeler(AttributeLabeler):
    """
    Assigns <celltype> to cell measurement data based on <genotype> attribute.

    Attributes:
    label (str) - name of label field to be added
    attribute (str) - existing cell attribute used to determine labels
    labeler (vectorized func) - callable that maps attribute values to labels
    """
    def __init__(self, labels=None):
        """
        Instantiate celltype labeler.

        Args:
        labels (dict) - {genotype value: label} pairs
        """

        # use default genotype labels
        if labels is None:
            labels = {0:'m', 1:'h', 2:'w', -1:'none'}
        super().__init__('celltype', 'genotype', labels)