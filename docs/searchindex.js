Search.setIndex({docnames:["contact","documentation","filestructure","index","installation","modules/analysis","modules/annotation","modules/bleedthrough","modules/data","modules/measurement","modules/selection","start","usage"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["contact.rst","documentation.rst","filestructure.rst","index.rst","installation.rst","modules/analysis.rst","modules/annotation.rst","modules/bleedthrough.rst","modules/data.rst","modules/measurement.rst","modules/selection.rst","start.rst","usage.rst"],objects:{"flyqma.analysis":{statistics:[5,0,0,"-"]},"flyqma.analysis.statistics":{CloneComparison:[5,1,1,""],PairwiseComparison:[5,1,1,""],SummaryStatistics:[5,1,1,""]},"flyqma.analysis.statistics.CloneComparison":{format_axis:[5,2,1,""],plot:[5,2,1,""]},"flyqma.analysis.statistics.PairwiseComparison":{compare:[5,2,1,""]},"flyqma.analysis.statistics.SummaryStatistics":{compare_celltype:[5,2,1,""],report:[5,2,1,""],run:[5,2,1,""]},"flyqma.annotation":{annotation:[6,0,0,"-"],labelers:[6,0,0,"-"]},"flyqma.annotation.annotation":{Annotation:[6,1,1,""],AnnotationIO:[6,1,1,""]},"flyqma.annotation.annotation.Annotation":{annotate:[6,2,1,""],combine_posteriors:[6,2,1,""],copy:[6,3,1,""],diffuse_posteriors:[6,4,1,""],evaluate_marginal_posterior:[6,2,1,""],from_data:[6,3,1,""],from_layer:[6,3,1,""],get_sample:[6,2,1,""],get_sampler:[6,2,1,""],train:[6,2,1,""]},"flyqma.annotation.annotation.AnnotationIO":{load:[6,3,1,""],parameters:[6,5,1,""],save:[6,2,1,""]},"flyqma.annotation.classification":{classifiers:[6,0,0,"-"],kmeans:[6,0,0,"-"],mixtures:[6,0,0,"-"],visualization:[6,0,0,"-"]},"flyqma.annotation.classification.classifiers":{Classifier:[6,1,1,""],ClassifierIO:[6,1,1,""],ClassifierProperties:[6,1,1,""]},"flyqma.annotation.classification.classifiers.Classifier":{build_classifier:[6,2,1,""],build_colormap:[6,2,1,""],evaluate_classifier:[6,2,1,""],from_grouped_measurements:[6,3,1,""],from_measurements:[6,3,1,""],set_cmap:[6,2,1,""],show:[6,2,1,""]},"flyqma.annotation.classification.classifiers.ClassifierIO":{load:[6,3,1,""],save:[6,2,1,""]},"flyqma.annotation.classification.classifiers.ClassifierProperties":{centroids:[6,5,1,""],component_groups:[6,5,1,""],component_to_label:[6,5,1,""],num_samples:[6,5,1,""],order:[6,5,1,""],values:[6,5,1,""]},"flyqma.annotation.classification.kmeans":{KMeansClassifier:[6,1,1,""]},"flyqma.annotation.classification.kmeans.KMeansClassifier":{fit:[6,4,1,""],means:[6,5,1,""],predict:[6,2,1,""]},"flyqma.annotation.classification.mixtures":{BivariateMixtureClassifier:[6,1,1,""],MixtureModelIO:[6,1,1,""],UnivariateMixtureClassifier:[6,1,1,""]},"flyqma.annotation.classification.mixtures.BivariateMixtureClassifier":{fit:[6,4,1,""],marginalize:[6,2,1,""]},"flyqma.annotation.classification.mixtures.MixtureModelIO":{load:[6,3,1,""],save:[6,2,1,""]},"flyqma.annotation.classification.mixtures.UnivariateMixtureClassifier":{build_classifier:[6,2,1,""],build_posterior:[6,2,1,""],evaluate_posterior:[6,2,1,""],fit:[6,4,1,""],means:[6,5,1,""],num_components:[6,5,1,""],predict:[6,2,1,""],predict_proba:[6,2,1,""]},"flyqma.annotation.classification.visualization":{MixtureVisualization:[6,1,1,""]},"flyqma.annotation.classification.visualization.MixtureVisualization":{component_cdfs:[6,5,1,""],component_pdfs:[6,5,1,""],ecdf:[6,5,1,""],epdf:[6,5,1,""],esupport:[6,5,1,""],label_colors:[6,5,1,""],pdf:[6,5,1,""],support:[6,5,1,""],support_labels:[6,5,1,""]},"flyqma.annotation.labelers":{AttributeLabeler:[6,1,1,""],CelltypeLabeler:[6,1,1,""]},"flyqma.annotation.labelers.AttributeLabeler":{assign_labels:[6,2,1,""]},"flyqma.annotation.mixtures":{bivariate:[6,0,0,"-"],univariate:[6,0,0,"-"],visualization:[6,0,0,"-"]},"flyqma.annotation.mixtures.bivariate":{BivariateMixture:[6,1,1,""],BivariateMixtureProperties:[6,1,1,""]},"flyqma.annotation.mixtures.bivariate.BivariateMixture":{get_marginal_mixture:[6,2,1,""]},"flyqma.annotation.mixtures.bivariate.BivariateMixtureProperties":{extent:[6,5,1,""],supportx:[6,5,1,""]},"flyqma.annotation.mixtures.univariate":{MixtureProperties:[6,1,1,""],UnivariateMixture:[6,1,1,""]},"flyqma.annotation.mixtures.univariate.MixtureProperties":{AIC:[6,5,1,""],BIC:[6,5,1,""],bounds:[6,5,1,""],component_pdfs:[6,5,1,""],components:[6,5,1,""],lbound:[6,5,1,""],log_likelihood:[6,5,1,""],means:[6,5,1,""],num_components:[6,5,1,""],num_samples:[6,5,1,""],pdf:[6,5,1,""],scale_factor:[6,5,1,""],stds:[6,5,1,""],support:[6,5,1,""],support_size:[6,5,1,""],ubound:[6,5,1,""]},"flyqma.annotation.mixtures.univariate.UnivariateMixture":{estimate_required_samples:[6,2,1,""],from_logsample:[6,3,1,""],from_parameters:[6,3,1,""],from_sample:[6,3,1,""],get_component_pdf:[6,2,1,""],logsample:[6,2,1,""],multi_logsample:[6,2,1,""],multi_sample:[6,2,1,""],sample:[6,2,1,""],sample_component:[6,2,1,""]},"flyqma.annotation.mixtures.visualization":{BivariateVisualization:[6,1,1,""],MixtureVisualization:[6,1,1,""],figure:[6,6,1,""],surface_figure:[6,6,1,""]},"flyqma.annotation.mixtures.visualization.BivariateVisualization":{tick_positions:[6,5,1,""],visualize:[6,2,1,""]},"flyqma.annotation.mixtures.visualization.MixtureVisualization":{summary:[6,5,1,""]},"flyqma.annotation.model_selection":{bivariate:[6,0,0,"-"],univariate:[6,0,0,"-"],visualization:[6,0,0,"-"]},"flyqma.annotation.model_selection.bivariate":{BivariateModelSelection:[6,1,1,""]},"flyqma.annotation.model_selection.bivariate.BivariateModelSelection":{fit_model:[6,4,1,""],load_model:[6,4,1,""]},"flyqma.annotation.model_selection.univariate":{SelectionIO:[6,1,1,""],UnivariateModelSelection:[6,1,1,""]},"flyqma.annotation.model_selection.univariate.SelectionIO":{load:[6,3,1,""],load_model:[6,4,1,""],save:[6,2,1,""]},"flyqma.annotation.model_selection.univariate.UnivariateModelSelection":{AIC:[6,5,1,""],AIC_optimal:[6,5,1,""],BIC:[6,5,1,""],BIC_optimal:[6,5,1,""],fit_model:[6,4,1,""],fit_models:[6,2,1,""],models:[6,5,1,""],parameters:[6,5,1,""]},"flyqma.annotation.model_selection.visualization":{ModelSelectionVisualization:[6,1,1,""]},"flyqma.annotation.model_selection.visualization.ModelSelectionVisualization":{plot_models:[6,2,1,""]},"flyqma.annotation.spatial":{correlation:[6,0,0,"-"],graphs:[6,0,0,"-"],infomap:[6,0,0,"-"],sampling:[6,0,0,"-"],timeseries:[6,0,0,"-"],triangulation:[6,0,0,"-"]},"flyqma.annotation.spatial.correlation":{CharacteristicLength:[6,1,1,""],CorrelationVisualization:[6,1,1,""],SpatialCorrelation:[6,1,1,""]},"flyqma.annotation.spatial.correlation.CharacteristicLength":{characteristic_length:[6,5,1,""],extract_decay:[6,4,1,""],fit:[6,4,1,""],model:[6,4,1,""],plot_fit:[6,2,1,""],plot_measured:[6,2,1,""],x_normed:[6,5,1,""],yp:[6,5,1,""]},"flyqma.annotation.spatial.graphs":{CommunityDetection:[6,1,1,""],Graph:[6,1,1,""],GraphVisualizationMethods:[6,1,1,""],NetworkxGraphVisualization:[6,1,1,""],SpatialProperties:[6,1,1,""],TopologicalProperties:[6,1,1,""],WeightFunction:[6,1,1,""],WeightedGraph:[6,1,1,""]},"flyqma.annotation.spatial.graphs.CommunityDetection":{assign_community:[6,2,1,""],detect_communities:[6,2,1,""]},"flyqma.annotation.spatial.graphs.Graph":{copy:[6,2,1,""],get_correlations:[6,2,1,""],get_networkx:[6,2,1,""],get_subgraph:[6,2,1,""]},"flyqma.annotation.spatial.graphs.GraphVisualizationMethods":{label_triangles:[6,2,1,""],plot_edges:[6,2,1,""],plot_triangles:[6,2,1,""],show:[6,2,1,""]},"flyqma.annotation.spatial.graphs.NetworkxGraphVisualization":{build_cmap:[6,2,1,""],draw:[6,2,1,""]},"flyqma.annotation.spatial.graphs.SpatialProperties":{distance_matrix:[6,5,1,""],edge_lengths:[6,5,1,""],evaluate_fluctuations:[6,4,1,""],get_fluctuations_matrix:[6,2,1,""],get_matrix_upper:[6,4,1,""],median_edge_length:[6,5,1,""],node_positions:[6,5,1,""],node_positions_arr:[6,5,1,""],unique_distances:[6,5,1,""]},"flyqma.annotation.spatial.graphs.TopologicalProperties":{adjacency:[6,5,1,""],adjacency_positional:[6,5,1,""],edge_list:[6,5,1,""],edges:[6,5,1,""],nodes:[6,5,1,""],nodes_order:[6,5,1,""],num_nodes:[6,5,1,""]},"flyqma.annotation.spatial.graphs.WeightFunction":{assess_weights:[6,2,1,""],difference:[6,2,1,""],logratio:[6,2,1,""]},"flyqma.annotation.spatial.graphs.WeightedGraph":{edge_list:[6,5,1,""],evaluate_edge_weights:[6,2,1,""]},"flyqma.annotation.spatial.infomap":{CommunityAggregator:[6,1,1,""],InfoMap:[6,1,1,""]},"flyqma.annotation.spatial.infomap.InfoMap":{build_classifier:[6,2,1,""],build_network:[6,4,1,""],max_depth:[6,5,1,""],run:[6,2,1,""]},"flyqma.annotation.spatial.sampling":{CommunitySampler:[6,1,1,""],NeighborSampler:[6,1,1,""],RadialSampler:[6,1,1,""]},"flyqma.annotation.spatial.sampling.CommunitySampler":{autocorrelate:[6,2,1,""],average_over_neighbors:[6,2,1,""],averaged_attr:[6,5,1,""],clustering_level:[6,5,1,""],neighbors:[6,5,1,""],size_attr:[6,5,1,""],z_attr:[6,5,1,""]},"flyqma.annotation.spatial.sampling.NeighborSampler":{G:[6,5,1,""],add_attribute_to_graph:[6,2,1,""],attr_used:[6,5,1,""],average_over_neighbors:[6,2,1,""],averaged_attr:[6,5,1,""],data:[6,5,1,""],keys:[6,5,1,""],multisample:[6,3,1,""],neighbors:[6,5,1,""],node_values:[6,5,1,""],node_values_dict:[6,5,1,""],num_nodes:[6,5,1,""],sample:[6,5,1,""],size_attr:[6,5,1,""]},"flyqma.annotation.spatial.sampling.RadialSampler":{average_over_neighbors:[6,2,1,""],averaged_attr:[6,5,1,""],distance_matrix:[6,5,1,""],neighbors:[6,5,1,""],size_attr:[6,5,1,""]},"flyqma.annotation.spatial.timeseries":{apply_custom_roller:[6,6,1,""],bootstrap:[6,6,1,""],detrend_signal:[6,6,1,""],get_binned_mean:[6,6,1,""],get_rolling_gaussian:[6,6,1,""],get_rolling_mean:[6,6,1,""],get_rolling_mean_interval:[6,6,1,""],get_rolling_window:[6,6,1,""],get_running_mean:[6,6,1,""],plot_mean:[6,6,1,""],plot_mean_interval:[6,6,1,""],savgol:[6,6,1,""],smooth:[6,6,1,""],subsample:[6,6,1,""]},"flyqma.annotation.spatial.triangulation":{LocalTriangulation:[6,1,1,""]},"flyqma.annotation.spatial.triangulation.LocalTriangulation":{angle_threshold:[6,5,1,""],angles:[6,5,1,""],compile_edge_list:[6,2,1,""],edge_angles:[6,5,1,""],edge_radii:[6,5,1,""],edges:[6,5,1,""],evaluate_edge_lengths:[6,4,1,""],filter_edges:[6,3,1,""],filter_hull:[6,2,1,""],filter_longest_edge:[6,2,1,""],filter_outliers:[6,3,1,""],find_disconnected_nodes:[6,4,1,""],find_first_edge:[6,4,1,""],hull:[6,5,1,""],is_outlier:[6,4,1,""],nodes:[6,5,1,""],num_triangles:[6,5,1,""],radii:[6,5,1,""],size:[6,5,1,""]},"flyqma.bleedthrough":{background:[7,0,0,"-"],correction:[7,0,0,"-"],models:[7,0,0,"-"],resampling:[7,0,0,"-"],visualization:[7,0,0,"-"]},"flyqma.bleedthrough.background":{BackgroundExtraction:[7,1,1,""]},"flyqma.bleedthrough.background.BackgroundExtraction":{build_background_mask:[7,2,1,""],dilate_foreground:[7,4,1,""],extract_pixels:[7,2,1,""],isolate_pixels:[7,2,1,""],plot_foreground_mask:[7,2,1,""]},"flyqma.bleedthrough.correction":{Correction:[7,1,1,""],LayerCorrection:[7,1,1,""]},"flyqma.bleedthrough.correction.Correction":{correct_measurements:[7,2,1,""]},"flyqma.bleedthrough.correction.LayerCorrection":{extract_background:[7,2,1,""],load:[7,3,1,""],save:[7,2,1,""],save_figs:[7,2,1,""],xkey:[7,5,1,""],ykey:[7,5,1,""]},"flyqma.bleedthrough.models":{GLM:[7,1,1,""],OLS:[7,1,1,""]},"flyqma.bleedthrough.models.GLM":{fit:[7,2,1,""]},"flyqma.bleedthrough.models.OLS":{detrend:[7,2,1,""],fit:[7,2,1,""],predict:[7,2,1,""]},"flyqma.bleedthrough.resampling":{resample_uniformly:[7,6,1,""]},"flyqma.bleedthrough.visualization":{CorrectionVisualization:[7,1,1,""],LayerCorrectionVisualization:[7,1,1,""]},"flyqma.bleedthrough.visualization.CorrectionVisualization":{show_correction:[7,2,1,""],show_fit:[7,2,1,""],show_resampling:[7,2,1,""]},"flyqma.bleedthrough.visualization.LayerCorrectionVisualization":{show_background_extraction:[7,2,1,""]},"flyqma.data":{experiments:[8,0,0,"-"],images:[8,0,0,"-"],layers:[8,0,0,"-"],silhouette:[8,0,0,"-"],stacks:[8,0,0,"-"]},"flyqma.data.experiments":{Experiment:[8,1,1,""]},"flyqma.data.experiments.Experiment":{aggregate_measurements:[8,2,1,""],load_stack:[8,2,1,""]},"flyqma.data.images":{ImageMultichromatic:[8,1,1,""],ImageScalar:[8,1,1,""]},"flyqma.data.images.ImageMultichromatic":{get_channel:[8,2,1,""],to_RGB:[8,2,1,""]},"flyqma.data.images.ImageScalar":{add_contour:[8,2,1,""],add_contours:[8,2,1,""],clahe:[8,2,1,""],gaussian_filter:[8,2,1,""],median_filter:[8,2,1,""],preprocess:[8,2,1,""],set_mean_mask:[8,2,1,""],set_otsu_mask:[8,2,1,""],show:[8,2,1,""]},"flyqma.data.layers":{Layer:[8,1,1,""],LayerIO:[8,1,1,""],LayerVisualization:[8,1,1,""]},"flyqma.data.layers.Layer":{annotate:[8,2,1,""],apply_annotation:[8,2,1,""],apply_concurrency:[8,2,1,""],apply_correction:[8,2,1,""],apply_normalization:[8,2,1,""],apply_selection:[8,2,1,""],bg_key:[8,5,1,""],build_graph:[8,2,1,""],colordepth:[8,5,1,""],initialize:[8,2,1,""],mark_boundaries:[8,2,1,""],measure:[8,2,1,""],process_measurements:[8,2,1,""],segment:[8,2,1,""],train_annotator:[8,2,1,""]},"flyqma.data.layers.LayerIO":{add_subdir:[8,2,1,""],find_subdirs:[8,2,1,""],load:[8,2,1,""],load_annotator:[8,2,1,""],load_correction:[8,2,1,""],load_inclusion:[8,2,1,""],load_labels:[8,2,1,""],load_measurements:[8,2,1,""],load_metadata:[8,2,1,""],load_processed_data:[8,2,1,""],make_subdir:[8,2,1,""],save:[8,2,1,""],save_annotator:[8,2,1,""],save_measurements:[8,2,1,""],save_metadata:[8,2,1,""],save_processed_data:[8,2,1,""],save_segmentation:[8,2,1,""]},"flyqma.data.layers.LayerVisualization":{build_attribute_mask:[8,2,1,""],build_classifier_mask:[8,2,1,""],plot_boundaries:[8,2,1,""],plot_boundary:[8,2,1,""]},"flyqma.data.silhouette":{SilhouetteIO:[8,1,1,""],SilhouetteLayerIO:[8,1,1,""]},"flyqma.data.silhouette.SilhouetteIO":{load_silhouette_labels:[8,2,1,""],silhouette_path:[8,5,1,""],write_silhouette:[8,2,1,""]},"flyqma.data.silhouette.SilhouetteLayerIO":{build_contours:[8,2,1,""],write_silhouette:[8,2,1,""]},"flyqma.data.stacks":{Stack:[8,1,1,""],StackIO:[8,1,1,""]},"flyqma.data.stacks.Stack":{aggregate_measurements:[8,2,1,""],colordepth:[8,5,1,""],depth:[8,5,1,""],get_included_layers:[8,2,1,""],included:[8,5,1,""],initialize:[8,2,1,""],load_layer:[8,2,1,""],segment:[8,2,1,""],selector_path:[8,5,1,""],train_annotator:[8,2,1,""]},"flyqma.data.stacks.StackIO":{from_silhouette:[8,4,1,""],from_tif:[8,4,1,""],load_annotator:[8,2,1,""],load_image:[8,2,1,""],load_metadata:[8,2,1,""],save:[8,2,1,""],save_annotator:[8,2,1,""],save_metadata:[8,2,1,""]},"flyqma.measurement":{measure:[9,0,0,"-"],segmentation:[9,0,0,"-"]},"flyqma.measurement.measure":{Measurements:[9,1,1,""]},"flyqma.measurement.measure.Measurements":{build_dataframe:[9,2,1,""],evaluate_centroids:[9,4,1,""],measure_centroids:[9,2,1,""],measure_expression:[9,2,1,""],measure_segment_size:[9,2,1,""]},"flyqma.measurement.segmentation":{Segmentation:[9,1,1,""]},"flyqma.measurement.segmentation.Segmentation":{array_to_dict:[9,4,1,""],exclude_edge_segments:[9,2,1,""],exclude_small_segments:[9,2,1,""],find_maxima:[9,4,1,""],get_borders:[9,4,1,""],get_seeds_from_distance:[9,3,1,""],get_segment_mask:[9,3,1,""],num_objects:[9,5,1,""],show:[9,2,1,""],update_cmap:[9,2,1,""],watershed:[9,2,1,""]},"flyqma.selection":{"interface":[10,0,0,"-"],gui:[10,0,0,"-"]},"flyqma.selection.gui":{GUI:[10,1,1,""]},"flyqma.selection.gui.GUI":{connect:[10,2,1,""],disconnect:[10,2,1,""],exit:[10,2,1,""],load:[10,4,1,""],on_click:[10,2,1,""],on_key:[10,2,1,""],save:[10,2,1,""],which_layer:[10,2,1,""]},"flyqma.selection.interface":{LayerInterface:[10,1,1,""],LayerVisualization:[10,1,1,""],StackInterface:[10,1,1,""]},"flyqma.selection.interface.LayerInterface":{add_point:[10,2,1,""],clear:[10,2,1,""],load:[10,2,1,""],remove_point:[10,2,1,""],save:[10,2,1,""],undo:[10,2,1,""],update_polygon:[10,2,1,""]},"flyqma.selection.interface.LayerVisualization":{add_marker:[10,2,1,""],add_polygon:[10,2,1,""],clear_markers:[10,2,1,""],overlay:[10,2,1,""],remove_marker:[10,2,1,""],remove_polygon:[10,2,1,""],render_images:[10,2,1,""],update_marker:[10,2,1,""]},"flyqma.selection.interface.StackInterface":{build_interface:[10,2,1,""],load:[10,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","classmethod","Python class method"],"4":["py","staticmethod","Python static method"],"5":["py","attribute","Python attribute"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:classmethod","4":"py:staticmethod","5":"py:attribute","6":"py:function"},terms:{"1px":9,"boolean":[2,6,8,9,12],"class":[5,6,7,8,9,10],"default":[6,8],"float":[5,6,7,8,9],"function":[1,5,6,7,12],"import":[2,12],"int":[2,6,7,8,9,11],"long":[],"new":11,"return":[5,6,7,8,9,10],"static":[6,7,8,9,10],"true":[6,7,8,9,10,12],"while":[2,3,6,8,11,12],For:[11,12],IDs:9,Its:2,OLS:7,One:[2,11],Such:[],The:[0,2,3,6,8,11,12],These:[2,11],Use:[8,9],_id:8,about:6,abov:6,absolut:6,accept:6,access:[6,11],accompani:[],accord:2,achiev:[6,9],across:[6,11],action:10,activ:10,active_polyhon:10,add:[6,8,10,12],add_attribute_to_graph:6,add_contour:8,add_mark:10,add_point:10,add_polygon:10,add_subdir:8,added:[6,10,11,12],adding:[6,10],addit:11,addition:[],addtl_kwarg:8,adher:2,adjac:[6,8,11],adjacency_posit:6,adjoin:6,adjust:12,after:[2,7],aggreg:[6,8,11],aggregate_measur:[8,11,12],aic:6,aic_optim:6,align:[],all:[2,6,7,8,9,10,11,12],allow:12,along:6,alpha:[6,8],also:[2,3,11,12],alt:[],altern:11,alwai:2,amar:0,analys:[2,11],analysess:[],analysi:[1,2,3,12],analyz:[3,6,11,12],angl:6,angle_threshold:6,angular:6,ani:[0,2,11,12],annot:[1,3,8,11],annotation_imag:8,annotationio:6,annotator_path:8,anoth:[6,8],apart:11,appear:12,appli:[2,6,7,8,9,11],applic:[0,3],apply_annot:8,apply_concurr:8,apply_correct:8,apply_custom_rol:6,apply_norm:8,apply_select:8,area:9,arg:[5,6,7,8,9,10],argument:[5,6,7,8,11],arr:9,arrai:[2,6,7,8,9,10],arrang:[2,6,11],array_to_dict:9,asqc:6,assess:6,assess_weight:6,assign:[2,8,11],assign_commun:6,assign_label:6,assum:2,attenu:6,attr:6,attr_us:6,attribut:[5,6,7,8,9,10,11,12],attributelabel:6,augment:8,autocorrel:6,autom:11,automat:[2,11,12],avail:[8,12],averag:6,average_over_neighbor:6,averaged_attr:6,avoid:11,axes:[5,6,7,8,10],axessubplot:[5,6,7,8],axi:[5,6,8],background:[2,8,11],backgroundextract:7,bagheri:[],base:[6,10,12],basi:[5,6,8,11],basic:[6,12],becaus:11,becom:[],been:2,befor:[6,7,11],begin:[2,10,11],behav:11,belong:6,below:[1,2,8,11,12],benefit:11,beta:[],between:[3,5,6,7,9,11],bg_kei:8,bg_mask:7,bg_x:7,bg_y:7,bic:6,bic_optim:6,bin:[6,8],bin_siz:7,binari:[7,9],biolog:0,bit:[2,8,11],bivari:6,bivariate_onli:6,bivariatemixtur:6,bivariatemixtureclassifi:6,bivariatemixtureproperti:6,bivariatemodelselect:6,bivariatevisu:6,bivarit:6,bleedthrough:[1,2,3,8,11],blue:10,bool:[6,7,8,9,10],bootstrap:6,border:[8,9],bori:6,both:5,bound:[6,7,8,10],boundari:[8,10,12],box:[5,7],boxplot:7,brief:12,build:[6,9,10],build_attribute_mask:8,build_background_mask:7,build_classifi:6,build_classifier_mask:8,build_cmap:6,build_colormap:6,build_contour:8,build_datafram:9,build_graph:8,build_interfac:10,build_network:6,build_posterior:6,build_region_area_mask:[],c_ij:6,cach:2,call:11,callabl:6,captur:[],cdf:6,cell:[2,3,5,6,7,8,9,11,12],cell_classifi:[],cellclassifi:[],celltyp:[5,6],celltypelabel:6,center:[9,10],center_of_mass:9,central:11,centroid:[6,8,9],certain:6,channel:[2,7,8,9,10,11,12],channel_dict:8,channel_index:[],channels_dict:8,characterist:6,characteristic_length:6,characteristiclength:6,check:[],chemic:0,children:6,chosen:6,circumv:[],clahe:8,classif:6,classifi:[2,6,8,11],classifier_0:[2,11],classifier_1:[2,11],classifier_m:[2,11],classifier_path:[],classifierio:6,classifierproperti:6,classify_on:[],classmethod:[6,7,9],clear:10,clear_mark:10,click:[10,12],clip:8,clip_factor:8,clip_limit:8,clonal:[2,3,6],clone:[5,8],clonecomparison:5,clonevisu:[],cluster:6,cluster_id:6,cluster_to_group:[],clustering_level:6,cmap:[6,8,9,10],code:[],collect:[2,8,11],color:[5,6,7,8,9,10],color_avg:8,color_std:8,colorbi:6,colordepth:[8,9],colormap:[6,8,9,10],colorscal:6,column:[6,12],combin:6,combine_posterior:6,command:12,common:6,commun:[6,8],community_genotyp:[],community_label:6,communityaggreg:6,communitybasedgenotyp:[],communityclassifi:[],communitydetect:6,communitysampl:6,compar:[3,5],compare_celltyp:5,comparison:[3,5],compat:8,compil:[6,8],compile_edge_list:6,complementari:1,complet:[11,12],compon:[2,6,8],component_cdf:6,component_group:6,component_idx:6,component_pdf:6,component_to_label:6,composit:6,compris:2,comput:6,concurr:[5,8],concurrencylabel:[],concurrent_:8,condit:[2,5,8,11],cone:10,confid:6,confoc:[3,11],connect:[6,8,10,12],consequ:11,consid:6,consist:[6,12],constant:6,constitu:12,construct:[6,7,8,10],constructor:11,contact:[],contain:[2,6,8,9,11,12],content:[1,2],context:[2,6],contour:[2,6,8,9,11],contour_area:8,contour_centroid_i:8,contour_centroid_x:8,contour_id:8,control:[3,5,6],convert:[8,9],convex:6,coordin:6,copi:[6,8,11],correct:[2,3,8,11],correct_measur:7,correctionvisu:7,correl:[6,7],correlationvisu:6,correspond:[11,12],count:8,counter:8,counterpart:6,cours:11,covariance_typ:6,creat:[2,6,7,8,11,12],cross:8,curat:8,current:[9,10,12],custom:12,customiz:11,cutoff:7,d_ij:6,data:[1,2,3,5,6,7,9,10,11],datafram:[2,5,6,7,8,9],dataset:11,david:6,decai:6,decor:6,deep:6,defin:[3,5,6,10,11,12],definit:3,denot:[2,9],depart:0,depend:7,depict:[2,11],depth:[2,6,8,11],deriv:6,descript:[1,6],desir:[6,8],destin:8,detail:[1,2,6,12],detect:[2,3,6,8,9,11],detect_commun:6,determin:[6,8],detrend:[6,7],detrend_sign:6,dev:8,develop:[0,3,12],deviat:[6,9],diag:6,dict:[5,6,8,9],dictionari:[6,8,9],differ:[6,8],difficult:[],diffus:6,diffuse_posterior:6,diffused_posterior:6,dilat:7,dilate_foreground:7,dimens:[6,8],dimension:6,direct:6,directori:[2,6,7,8,11,12],dirnam:8,dirpath:[6,8],disc:[2,3,8,11,12],disconnect:[6,10],displai:12,dissect:[],distanc:[6,8,9],distance_matrix:6,distinct:[2,3,6],distribut:[6,7],do_stuff:11,document:[11,12],doe:6,doesn:6,domain:7,dot:12,download:[],dpi:7,draw:[6,12],drosophila:3,dst:8,duplic:10,dure:12,each:[2,3,5,6,8,9,10,11,12],ecdf:6,edg:[6,8],edge_angl:6,edge_color:6,edge_length:6,edge_list:6,edge_mask:9,edge_radii:6,editor:6,edward:6,effect:[],either:[5,6,8],element:2,email:0,empir:6,enabl:3,enclos:12,encompass:6,engin:0,enough:11,entail:2,entir:[2,11,12],environ:[3,4],epdf:6,epithelium:3,error_bar:6,establish:8,estim:6,estimate_required_sampl:6,esupport:6,etc:[2,11],euclidean:[6,9],evalu:[6,9],evaluate_centroid:9,evaluate_classifi:6,evaluate_dist:[],evaluate_edge_length:6,evaluate_edge_weight:6,evaluate_fluctu:6,evaluate_marginal_posterior:6,evaluate_posterior:6,evaluate_region_area:[],event:[],ever:[],exampl:11,except:[6,10],exchang:8,exclud:[7,8,9,10,11,12],exclude_boundari:8,exclude_edg:9,exclude_edge_seg:9,exclude_small_seg:9,exclus:[11,12],execut:11,exemplar:10,exemplari:10,exist:[6,8,10,11],exit:[10,12],expand:[],experi:[11,12],experiment:[2,5,8],exponenti:6,express:[2,3,6],extens:6,extent:6,extern:2,extract:6,extract_background:7,extract_decai:6,extract_pixel:7,eye:[3,8,12],eyes:[],face:6,facilit:3,factor:[6,8],fall:8,fals:[6,7,8,11,12],familiar:11,far:11,fastest:[6,11],featur:6,feed:8,feel:[],field:[6,8],fig:[6,7,8],figsiz:[6,7,8,9],figur:[6,7,8,9],file:[6,7,8,10,11,12],filepath:8,filter:[6,8,12],filter_edg:6,filter_hul:6,filter_longest_edg:6,filter_outli:6,filtrat:6,find:[8,9],find_disconnected_nod:6,find_first_edg:6,find_maxima:9,find_subdir:8,finest:6,first:[2,5,6,8,11],fit:[2,6,7,11],fit_kw:[6,7],fit_model:6,fix:[],flag:[8,10],flexibl:6,flip:9,flip_about_xi:8,flip_about_yz:8,flow:6,fluctuat:6,fluorec:11,fluoresc:[2,3,5,7,8,9,11,12],fly:[1,2,6,8,11,12],flyei:[],flyey:[0,3,8],flyqma:[3,4,5,6,7,8,9,10,11,12],fmt:7,focus:[],follow:[1,8,10],foregound:7,foreground:[7,8,9],format:[2,5,6,7,8,11],format_axi:5,former:2,found:6,frac:6,fraction:6,fraction_of_max:6,free:[],from:[6,7,8,10,11,12],from_data:6,from_grouped_measur:6,from_lay:6,from_logsampl:6,from_measur:6,from_paramet:6,from_sampl:6,from_silhouett:8,from_tif:8,frozen:6,full:[8,11,12],fulli:8,func:6,further:12,gain:[],gamma:7,gaussian:[6,8],gaussian_filt:8,gaussian_sigma:8,gaussianmixtur:6,gene:3,gener:[6,7,9,11],genet:[],genmod:7,genotyp:[5,6,8],get:[6,9],get_binned_mean:6,get_bord:9,get_channel:8,get_component_pdf:6,get_correl:6,get_fluctuations_matrix:6,get_included_lay:8,get_marginal_mixtur:6,get_matrix_upp:6,get_mod:[],get_networkx:6,get_rolling_gaussian:6,get_rolling_mean:6,get_rolling_mean_interv:6,get_rolling_window:6,get_running_mean:6,get_sampl:6,get_seeds_from_dist:9,get_segment_mask:9,get_subgraph:6,get_valu:[],github:[],given:[2,3,6,11,12],glm:7,golai:6,graph:[6,8],graph_kw:8,graphic:[],graphvisualizationmethod:6,greater:6,green:10,grei:[6,8],grid:12,group:[6,8],group_id:[],groupbi:6,guassian:6,gui:[10,12],handl:6,handler:10,has:[],have:2,hdf:[2,11],header:11,help:3,here:[],heterozyg:5,heterozygot:5,hierarch:[2,6,11],high:6,higher:[],highest:6,histogram:[6,8],hoaglin:6,how:6,howev:[],html:[],http:[],hub:11,hull:6,hybrid:6,ident:7,identifi:[2,3,6,8,11],ids:8,idx:6,iglewicz:6,imag:[3,6,7,10],image_kw:[],imagefilenam:8,imagemultichromat:8,imagescalar:8,imagin:[2,3,12],imap:6,implement:6,includ:[2,6,8,9,10,11,12],include_dist:6,include_imag:8,inclus:[8,10],incorpor:[2,8],ind:[6,10],independ:7,index:[6,8,11],indic:[2,6,8,12],individu:[2,6,7,8,9,10,11,12],inf:9,infomap:6,inform:8,inherit:[5,6,7,8,10],initi:[8,11],input:12,instal:[],instanc:[6,8,10,11],instanti:[6,8,10],instruct:12,integ:2,integr:2,intend:[],intens:[2,7,8,9,11],interest:[3,10,11,12],interfac:12,interior:8,interior_onli:8,interpol:6,interv:6,interval_resolut:6,introduct:12,invert:7,irregularli:[2,11],is_outli:6,isol:7,isolate_pixel:7,iter:[7,8,11],its:[0,2,6,11,12],joint:6,json:[2,8,11],jupyt:[],just:[],keep:7,kei:[5,6,7,8,10,12],keyword:[5,6,7,8,11],kmean:6,kmeansclassifi:6,kwarg:[5,6,7,8],lab:0,label:[2,5,8,9,11],label_bi:[6,8],label_color:6,label_id:6,label_triangl:6,larg:12,larger:[],last:[10,12],later:[],latest:[],latter:[2,6],launch:12,layer:[6,7,10,11,12],layer_id:[8,11,12],layercorrect:[7,8,12],layercorrectionvisu:7,layerinterfac:10,layerio:8,layers_path:8,layervisu:[8,10],lbound:6,learn:[],least:[6,7],leav:[],leg:3,length:[6,9],length_scal:6,less:6,level:[2,3,5,6,7,8,9,11],lib:12,lies:12,lifetim:6,like:[6,7,8,10,12],likelihood:6,limit:[6,8],line2d:6,line:[6,9,12],line_alpha:6,line_color:6,line_width:6,linear:[6,7,8],linearsegmentedcolormap:8,linestyl:6,link:7,list:[6,8,10,12],load:[6,7,8,10],load_annot:8,load_classifi:[],load_correct:8,load_imag:8,load_inclus:8,load_label:8,load_lay:[8,11],load_measur:8,load_metadata:8,load_model:6,load_processed_data:8,load_silhouette_label:8,load_stack:[8,11,12],local:[6,9,11],localtriangul:6,log:[6,8],log_likelihood:6,logratio:[6,8],logsampl:6,longest:6,look:12,low:6,lower:[2,6],lowpass:6,ma_typ:6,made:12,mai:[2,6,11,12],major:[],make:[7,8],make_subdir:8,manag:[8,10],manner:11,manual:[2,3,8,10,11],manuscript:[6,12],map:[6,9],mapequ:[],margin:6,marginal_posterior:6,mark:[8,10,12],mark_boundari:8,marker:[2,6,9,10],markers:[6,10],mask:[2,6,7,8,9,11,12],masked_arrai:7,maskedarrai:8,mass:9,matplot:12,matplotlib:[5,6,7,8,9,10],matrix:6,max_depth:6,max_dist:8,max_edg:8,max_it:6,max_length:6,max_num_compon:[6,8],maxim:6,maxima:9,maximum:[6,7,8,9],maxit:7,mean:[6,8,11],measur:[1,2,3,5,6,7,8],measure_centroid:9,measure_express:9,measure_segment_s:9,median:[6,8],median_edge_length:6,median_filt:8,median_radiu:8,mediat:10,meet:6,member:6,memori:11,merg:6,metadata:[2,8,10,11],method:[6,7,8,9,11,12],microscop:3,microscopi:[2,3,11],might:12,min_area:[8,9],min_dist:9,min_num_compon:[6,8],min_pop:8,minimum:[6,8,9],mix:6,mixtur:[2,8,11],mixturemodelio:6,mixtureproperti:6,mixturevisu:6,mode:[5,7],model:[2,7,8,11],model_select:6,modelselect:8,modelselectionvisu:6,modifi:6,modul:1,monochrom:8,more:[2,6,8,11,12],mosaic:[3,12],most:[6,12],move:6,msg:10,mth:[2,11],multi:6,multi_logsampl:6,multi_sampl:6,multichromat:8,multilay:8,multipl:[6,10],multisampl:6,must:[2,6,11],mutant:5,mykytka:6,n_init:6,n_out:6,name:[2,5,6,7,8,11],nbin:8,nbootstrap:6,ndarrai:[2,6,7,8,9,11],nearest:[],necessari:[6,11],need:[2,11,12],neighbor:[6,8],neighborhood:6,neighborsampl:6,networkx:6,networkxgraphvisu:6,neuron:10,niter:7,node:[6,8],node_attribut:6,node_cmap:6,node_color:6,node_from:6,node_map:6,node_posit:6,node_positions_arr:6,node_to:6,node_to_modul:6,node_valu:6,node_values_dict:6,nodes_ord:6,nois:6,nomin:[],non:6,none:[5,6,7,8,10],norm:6,normal:[6,8],northwestern:0,note:[2,9,11],notebook:[],novel:6,now:[11,12],npy:[2,11],nth:[2,11],nuclear:[8,9],nuclei:[2,3,9],num:6,num_compon:6,num_label:6,num_nod:6,num_object:9,num_peak:9,num_sampl:6,num_triangl:6,number:[2,6,7,8,9,11],numebr:[],numpi:2,object:[6,7,8,9,10,11],observ:6,obtain:[6,8],occur:6,offer:[11,12],offset:7,often:11,on_click:10,on_kei:10,onc:12,one:[2,5,6,8,11],ong:2,onli:[2,6,8,11],oper:[8,11,12],optim:[6,7],option:[2,6,8,11],order:[6,8,9,11],ordinari:7,org:[],organ:[1,2,8,11],orient:[8,11],origin:[2,6,7],other:[2,6,12],otherwis:6,otsu:8,our:12,out:[],outlier:6,outlin:2,output:[2,6],outsid:7,over:6,overal:10,overlai:[2,9,10,11,12],overlap:[6,11],overrid:6,overview:11,overwrit:11,own:[2,11],packag:[3,12],pad:8,page:[],pair:[5,6,8,9],pairwis:[5,6],pairwisecomparison:5,panda:2,panels:6,param:[6,8],param_nam:8,param_valu:8,paramet:[2,6,7,8,9,11,12],parameter:2,parametr:6,parent:[2,11],part:3,particular:[2,11,12],particularli:[],pass:11,path:[6,7,8,10,11,12],pattern:[],pdf:6,peak:9,per:8,perform:[2,6,9,11,12],permit:6,pertin:2,perturb:5,pickl:[2,11],pil:[],pillow:[],pip:[3,4],pixel:[2,7,8,9,11],pixel_count:8,pkl:[2,11],place:[8,10,11],platform:[0,2,3],pleas:[1,6,12],plot:[5,6,7,8],plot_boundari:8,plot_edg:6,plot_fit:6,plot_foreground_mask:7,plot_graph:[],plot_mean:6,plot_mean_interv:6,plot_measur:6,plot_model:6,plot_triangl:6,plt:6,png:[2,7,8,11],pnt:12,point:[6,8,10,12],polygon:10,polynomi:6,polyord:6,popul:[5,8],portion:6,pos:6,posit:[6,7,8,9],position_map:6,possess:6,possibl:2,post:8,posterior:6,predetermin:6,predict:[6,7,8],predict_proba:6,preprocess:[8,11],preprocessing_kw:8,present:12,preserv:2,previou:2,primarili:[],print:[5,6],priorit:[],probabiltii:6,probabl:6,probablil:6,procedur:[2,6,7,11],process:[2,8,11,12],process_measur:8,processed_data:8,project:[],properti:[6,8,9,12],protein:[],provid:[2,5,6,7,8,9,10,11,12],prune:[],pts:10,pval:5,pvalu:5,pydata:[],pypi:[],pyplot:6,pytabl:[],python:[3,4],qma:[1,2,6,8,11,12],qualiti:6,quantif:11,quantifi:[3,9],quantil:7,quantit:3,quantiti:[],question:0,r_normal:[],radial:[6,8],radialsampl:6,radii:6,radiu:[6,8],rang:12,rapidli:2,raster:8,rather:[6,7,11],ratio:[6,8],raw:[2,7,8,11],read:11,readabl:8,readi:12,readili:2,readthedoc:[],real:12,recent:12,recommend:11,record:8,red:[10,12],refer:[6,12],reflect:[8,11],regard:0,region:[3,6,8,10,11,12],regulari:[],regularli:[2,7,11],rel:8,releas:[],relev:[2,11],remain:[6,11],remov:[6,7,8,9,10,12],remove_mark:10,remove_point:10,remove_polygon:10,remove_zero:7,render:[6,8],render_imag:10,reopen:12,repeat:11,replac:[2,6,8],replic:[],report:[3,5,6,7,9,11,12],repres:[2,8],requir:[2,6,8],resampl:[],resample_cutoff:7,resample_s:7,resample_uniformli:7,reserv:[],reset:10,resid:[2,11],residu:[6,7],resolut:[6,7,8],respect:[1,11],result:[2,8,11,12],retain:2,retin:[],retriev:2,rgb:[6,7,8,10],roi:[2,3,11],roll:6,routin:[8,12],row:[6,12],run:[5,6,8,9,10],same:[2,6,8,11],sampl:[2,6,7,11],sample_compon:6,sampler:[6,8],sampler_kwarg:[6,8],sampler_typ:[6,8],save:[6,7,8,10,11,12],save_annot:8,save_fig:7,save_measur:8,save_metadata:8,save_processed_data:8,save_segment:8,savgol:6,savitzki:6,scalar:[],scale:[6,8],scale_factor:6,scikit:[],scipi:[6,9],score:6,seaborn:5,search:[],second:[5,6],secondari:6,section:[8,11],see:[6,11,12],seed:[8,9,11],seed_kw:[8,9],seemlessli:8,seg_kw:[8,9],segment:[2,3,7,8,11,12],segment_id:[8,9],segmentation_imag:8,select:[1,2,7,8,11],selected_onli:[7,8],selectiom:[],selection_onli:8,selectionio:6,selector:[6,8,11],selector_path:8,self:6,separ:[6,9],sequenti:[2,6,11,12],seri:[6,8,12],serial:2,serv:11,set:[2,6,7,8,11,12],set_cmap:6,set_mean_mask:8,set_otsu_mask:8,set_region_mask:[],setup:[3,4],sever:[1,5,6,8,11],shade:[],shape:[8,9],share:[2,8,11],shift:7,should:[2,11],show:[2,6,7,8,9],show_background_extract:7,show_correct:7,show_fit:7,show_resampl:7,sigma:[6,8,9],signal:6,silhouette_path:8,silhouetteio:8,silhouettelayerio:8,similar:[6,8,11],similarii:6,similarli:11,simplest:[],singl:[2,8,10,11],size:[6,7,8,9,10],size_attr:6,size_ratio:6,skimag:2,skip:11,sklearn:6,slice:6,slide:6,slower:6,small:[9,12],smaller:[],smooth:[6,9],snr:6,sns:7,some:[11,12],sort:6,sourc:[5,6,7,8,9,10],space:[2,7,11],span:11,spatial:2,spatialcorrel:6,spatialproperti:6,spatio:[],specif:[6,11],specifi:[6,8],spectral:7,spline:6,squar:7,src:6,stabl:[],stack:[6,10,11,12],stack_dir:8,stack_directori:8,stack_id:[8,11,12],stack_ind:12,stackinterfac:10,stackio:8,standard:[2,6],start:6,stat:6,statist:[5,6],statsmodel:[],std:[6,8,9],still:12,store:[2,8,11],store_pixel:7,str:[5,6,7,8,10],strategi:[6,8],string:10,strip:5,structur:[8,11],structure_dim:8,studi:[3,12],subcompon:8,subdir:8,subdirectori:[2,8,11,12],subgraph:6,subject:[7,11],submodul:1,subpopul:[3,5,6],subsampl:6,subsequ:[2,11,12],suggest:11,suit:12,summari:[5,6],summarystatist:5,suppli:11,support:[2,6],support_label:6,support_s:6,supportx:6,surface_figur:6,surround:6,tabl:1,tar:[],target:8,target_typ:[],techniqu:6,tempor:[],term:[],tessel:[],test:5,text:6,than:[6,7,11],thei:[2,8,11],them:[2,12],thi:[2,6,8,11],threahold:8,three:[2,8,11,12],threshold:[6,8],through:6,throughput:[],thu:[],tick:6,tick_posit:6,tif:[2,8,11,12],tif_path:8,tiff:8,tifffil:[],time:[2,6,11],timeseri:6,tissu:[2,11],to_rgb:8,tol:6,took:10,tool:[5,6,7,8,9,10],top:[],topolog:6,topologicalproperti:6,traceback:10,train:[2,6,8,11],train_annot:8,transform:[6,9],transpar:12,tree:6,trend:[6,7],tri:6,trial:6,triangl:6,triangul:6,triangular:6,tripcolor:6,triplot:6,tupl:[6,7,8,9],tutori:11,twice:11,two:[2,5,6,12],twolevel:6,type1:5,type2:5,type:[5,6,8,11],typic:[],ubound:6,uncertain:6,under:[2,8,11],undirect:6,undo:10,uniform:7,uniformli:7,uniqu:[2,6,8,9,11],unique_dist:6,univari:6,univariatemixtur:6,univariatemixtureclassifi:6,univariatemodelselect:6,univers:0,unsupervis:6,until:11,unweight:6,updat:[2,10,11],update_cmap:9,update_mark:10,update_polygon:10,upon:11,upper:[6,7],use:[6,11],used:[2,5,6,7,8,11,12],user:[2,12],usersguid:[],uses:[2,11],using:[5,6,7,8,11,12],util:[],valu:[2,5,6,7,8,9,11],variabl:[6,7],variou:[2,6],vector:6,version:2,versu:6,vertic:[],via:[0,3,4,6,9,11,12],violin:5,violinplot:5,visual:[5,6,8,9,10],vmax:[6,8],vmin:[6,8],volum:6,voronoi:[],voxel:9,voxel_s:9,wai:11,watersh:[8,9],watershed_lin:9,weight:[6,8],weighted_bi:[6,8],weightedgraph:[6,8],weightfunct:6,welcom:[],well:[6,11],whc:8,when:[11,12],where:[2,7,10],whether:[2,6,12],which:[2,5,6,8,9,12],which_lay:10,whose:[2,6],wide:12,width:[],wildtyp:5,window:6,window_s:6,wing:3,within:[2,3,6,7,8,9,10,11,12],withing:12,work:[3,4,11],workflow:2,would:[],write:8,write_silhouett:8,www:[],x_norm:6,xbin:7,xkei:7,xpo:9,xraw:7,xvar:7,xykei:[6,8],yan:12,yane833:[],yaxi:5,ybin:7,yellow:12,ykei:7,ylabel:5,your:[11,12],yourself:11,ypo:9,yraw:7,yvar:7,z_attr:6,zero:[2,7,11],zxyc:11},titles:["Contact Us","Documentation","File Structure","Fly-QMA","Installation","Analysis Module","Annotation Module","Bleedthrough Module","Data Module","Measurement Module","Selection Module","Getting Started","Example Usage"],titleterms:{about:[],addit:12,aggreg:12,analysi:[5,6,11],annot:[2,6],assign:6,background:7,bleedthrough:[7,12],bottom:[],cell:[],character:7,classifi:[],clone:[],coeffici:7,concurr:[],contact:0,control:[],correct:[7,12],data:[8,12],depend:[],document:1,event:10,exampl:12,experi:[2,8],express:[9,11,12],extract:7,file:2,fly:3,flyey:[],format:[],genotyp:[],get:11,gui:[],handl:10,imag:[2,8,9,11,12],indic:[],individu:[],input:[],instal:[3,4],interest:[],interfac:[8,10],label:6,layer:[2,8],level:[],linear:[],load:[11,12],manag:[],measur:[9,11,12],middl:[],mixtur:6,model:6,modul:[5,6,7,8,9,10],prepar:11,process:[],qma:3,region:[],resampl:7,roi:12,segment:9,select:[6,10,12],silhouett:8,spatial:6,stack:[2,8],standard:[],start:11,structur:2,submodul:[],tabl:[],top:[],usag:12,user:10,visual:7,welcom:[]}})