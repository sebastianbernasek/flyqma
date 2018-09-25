Search.setIndex({docnames:["contact","documentation","index","installation","modules/annotation","modules/bleedthrough","modules/data","modules/measurement","modules/selection","start","usage"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["contact.rst","documentation.rst","index.rst","installation.rst","modules/annotation.rst","modules/bleedthrough.rst","modules/data.rst","modules/measurement.rst","modules/selection.rst","start.rst","usage.rst"],objects:{"":{clones:[4,0,0,"-"]},"clones.annotation":{classifiers:[4,0,0,"-"],concurrency:[4,0,0,"-"],genotype:[4,0,0,"-"],labelers:[4,0,0,"-"]},"clones.annotation.classifiers":{CellClassifier:[4,1,1,""],CommunityClassifier:[4,1,1,""],KM:[4,1,1,""]},"clones.annotation.classifiers.CellClassifier":{from_measurements:[4,2,1,""],load:[4,3,1,""],save:[4,4,1,""]},"clones.annotation.classifiers.CommunityClassifier":{build_classifier:[4,3,1,""],from_layer:[4,2,1,""],get_mode:[4,2,1,""]},"clones.annotation.classifiers.KM":{get_values:[4,4,1,""],set_cmap:[4,4,1,""],show:[4,4,1,""]},"clones.annotation.concurrency":{ConcurrencyLabeler:[4,1,1,""]},"clones.annotation.concurrency.ConcurrencyLabeler":{assign_labels:[4,4,1,""],evaluate_distance:[4,4,1,""]},"clones.annotation.genotype":{CloneVisualization:[4,1,1,""],CommunityBasedGenotype:[4,1,1,""],Tessellation:[4,1,1,""]},"clones.annotation.genotype.CommunityBasedGenotype":{build_classifier:[4,4,1,""],from_layer:[4,2,1,""]},"clones.annotation.genotype.Tessellation":{build_region_area_mask:[4,4,1,""],evaluate_region_area:[4,4,1,""],set_region_mask:[4,4,1,""],show:[4,4,1,""]},"clones.annotation.labelers":{AttributeLabeler:[4,1,1,""],CelltypeLabeler:[4,1,1,""]},"clones.annotation.labelers.AttributeLabeler":{assign_labels:[4,4,1,""]},"clones.bleedthrough":{background:[5,0,0,"-"],correction:[5,0,0,"-"],models:[5,0,0,"-"]},"clones.bleedthrough.background":{BackgroundExtraction:[5,1,1,""]},"clones.bleedthrough.background.BackgroundExtraction":{build_background_mask:[5,4,1,""],dilate_foreground:[5,2,1,""],extract_pixels:[5,4,1,""],isolate_pixels:[5,4,1,""]},"clones.bleedthrough.correction":{LayerCorrection:[5,1,1,""]},"clones.bleedthrough.correction.LayerCorrection":{correct_measurements:[5,4,1,""],load:[5,3,1,""],save:[5,4,1,""],save_figs:[5,4,1,""],show_correction:[5,4,1,""],show_fit:[5,4,1,""]},"clones.bleedthrough.models":{GLM:[5,1,1,""],OLS:[5,1,1,""]},"clones.bleedthrough.models.GLM":{fit:[5,4,1,""]},"clones.bleedthrough.models.OLS":{detrend:[5,4,1,""],fit:[5,4,1,""],predict:[5,4,1,""]},"clones.data":{experiments:[6,0,0,"-"],layers:[6,0,0,"-"],stacks:[6,0,0,"-"]},"clones.data.experiments":{Experiment:[6,1,1,""]},"clones.data.experiments.Experiment":{aggregate_measurements:[6,4,1,""],load_stack:[6,4,1,""]},"clones.data.layers":{Layer:[6,1,1,""]},"clones.data.layers.Layer":{add_subdir:[6,4,1,""],apply_annotation:[6,4,1,""],apply_concurrency:[6,4,1,""],apply_correction:[6,4,1,""],apply_normalization:[6,4,1,""],apply_selection:[6,4,1,""],build_graph:[6,4,1,""],find_subdirs:[6,4,1,""],initialize:[6,4,1,""],load:[6,4,1,""],load_correction:[6,4,1,""],load_inclusion:[6,4,1,""],load_labels:[6,4,1,""],load_measurements:[6,4,1,""],load_metadata:[6,4,1,""],make_subdir:[6,4,1,""],mark_boundaries:[6,4,1,""],measure:[6,4,1,""],plot_graph:[6,4,1,""],process_measurements:[6,4,1,""],save:[6,4,1,""],save_measurements:[6,4,1,""],save_metadata:[6,4,1,""],save_segmentation:[6,4,1,""],segment:[6,4,1,""]},"clones.data.stacks":{Stack:[6,1,1,""]},"clones.data.stacks.Stack":{aggregate_measurements:[6,4,1,""],initialize:[6,4,1,""],load_classifier:[6,4,1,""],load_image:[6,4,1,""],load_layer:[6,4,1,""],load_metadata:[6,4,1,""],save_metadata:[6,4,1,""]},"clones.measurement":{measure:[7,0,0,"-"],segmentation:[7,0,0,"-"]},"clones.measurement.measure":{Measurements:[7,1,1,""]},"clones.measurement.measure.Measurements":{build_dataframe:[7,4,1,""],evaluate_centroids:[7,2,1,""],measure_centroids:[7,4,1,""],measure_expression:[7,4,1,""],measure_segment_size:[7,4,1,""]},"clones.measurement.segmentation":{Segmentation:[7,1,1,""]},"clones.measurement.segmentation.Segmentation":{array_to_dict:[7,2,1,""],exclude_edge_segments:[7,4,1,""],exclude_small_segments:[7,4,1,""],find_maxima:[7,2,1,""],get_borders:[7,2,1,""],get_seeds_from_distance:[7,3,1,""],get_segment_mask:[7,3,1,""],show:[7,4,1,""],update_cmap:[7,4,1,""],watershed:[7,4,1,""]},"clones.selection":{"interface":[8,0,0,"-"],gui:[8,0,0,"-"]},"clones.selection.gui":{GUI:[8,1,1,""]},"clones.selection.gui.GUI":{connect:[8,4,1,""],disconnect:[8,4,1,""],exit:[8,4,1,""],load:[8,2,1,""],on_click:[8,4,1,""],on_key:[8,4,1,""],save:[8,4,1,""],which_layer:[8,4,1,""]},"clones.selection.interface":{LayerInterface:[8,1,1,""],LayerVisualization:[8,1,1,""],StackInterface:[8,1,1,""]},"clones.selection.interface.LayerInterface":{add_point:[8,4,1,""],clear:[8,4,1,""],load:[8,4,1,""],remove_point:[8,4,1,""],save:[8,4,1,""],undo:[8,4,1,""],update_polygon:[8,4,1,""]},"clones.selection.interface.LayerVisualization":{add_marker:[8,4,1,""],add_polygon:[8,4,1,""],clear_markers:[8,4,1,""],overlay:[8,4,1,""],remove_marker:[8,4,1,""],remove_polygon:[8,4,1,""],render_images:[8,4,1,""],update_marker:[8,4,1,""]},"clones.selection.interface.StackInterface":{build_interface:[8,4,1,""],load:[8,4,1,""]},clones:{annotation:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","staticmethod","Python static method"],"3":["py","classmethod","Python class method"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:staticmethod","3":"py:classmethod","4":"py:method"},terms:{"1px":7,"boolean":[4,6,7,10],"class":[4,5,6,7,8],"float":[4,5,6,7],"function":[1,2,5,10],"import":10,"int":[4,5,6,7,9],"long":9,"new":9,"return":[4,5,6,7,8],"static":[4,5,7,8],"true":[4,5,6,7,8,10],"while":[6,10],For:[9,10],IDs:7,OLS:5,Such:[],The:[0,2,6,9,10],These:9,Use:7,_id:6,abov:6,access:9,achiev:7,across:9,action:8,activ:8,active_polyhon:8,add:[4,6,8,10],add_mark:8,add_point:8,add_polygon:8,add_subdir:6,added:[4,8,9,10],adding:[4,8],addit:9,adjac:[4,6],adjust:10,after:[3,5],aggreg:[6,9],aggregate_measur:[6,9,10],all:[4,5,6,7,8,9,10],allow:10,also:10,altern:9,amar:0,analys:9,analysi:10,analyz:[2,9,10],ani:[0,9,10],annot:[1,2,6,9],anoth:6,appear:10,appli:[4,5,7,9],applic:0,apply_annot:6,apply_concurr:6,apply_correct:6,apply_norm:6,apply_select:6,area:[4,7],arg:[4,5,6,7,8],argument:[4,6,9],arr:7,arrai:[4,5,6,7,8],arrang:9,array_to_dict:7,assign:[4,6,9],assign_label:4,attribut:[4,5,6,7,8,9,10],attributelabel:4,augment:6,autom:[2,4,9],automat:[9,10],avail:[6,10],axes:8,background:[1,6,9],backgroundextract:5,bagheri:0,base:[4,8,9,10],basi:[4,6],basic:[2,10],becom:9,been:9,befor:5,begin:[8,9],behav:9,below:[1,9,10],benefit:9,beta:3,between:[2,4,5,7,9],bg_mask:5,bin_siz:5,binari:[5,7],biolog:0,bit:[6,9],bleedthrough:[1,2,6,9],blue:8,bool:[4,5,6,7,8],border:7,bound:[5,8],boundari:[6,8,10],box:5,boxplot:5,brief:10,build:[4,7,8],build_background_mask:5,build_classifi:4,build_datafram:7,build_graph:6,build_interfac:8,build_region_area_mask:4,call:9,callabl:[4,6],cell:[1,2,5,6,7,8,9],cell_classifi:[4,6,9],cellclassifi:[4,6],celltyp:[4,6],celltypelabel:4,center:[7,8],center_of_mass:7,central:9,centroid:[6,7],channel:[5,6,7,8,9,10],channel_index:6,chemic:0,classif:4,classifi:[1,6,9],classifier_path:6,classify_on:4,classmethod:[4,5,7],clear:8,clear_mark:8,click:[8,10],clonal:2,clone:[1,3,4,5,6,7,8,9,10],clonevisu:4,cluster:[4,6],cluster_id:4,cluster_to_group:4,cmap:[4,7,8],code:10,collect:[2,6,9],color:[4,5,6,7,8,9],colormap:[4,7,8],column:10,command:10,common:4,commun:[4,6],community_genotyp:4,communitybasedgenotyp:4,communityclassifi:4,compar:2,comparison:2,compil:6,complementari:1,complet:[9,10],compon:[],concurr:[1,6],concurrencylabel:4,concurrent_:[4,6],condit:[6,9],cone:[8,10],confoc:[2,7],connect:[4,6,8,10],consequ:9,consist:10,constitu:10,construct:[5,8],constructor:9,contact:[],contain:[7,9,10],content:1,contour:[6,7,9],control:2,convert:7,correct:[1,2,6,9],correct_measur:5,correl:5,correspond:[9,10],count:6,counter:6,cours:9,creat:[6,9,10],cross:6,curat:[6,8,9],current:[7,8,9,10],customiz:9,data:[1,2,4,5,7,8],datafram:[4,6,7],dataset:9,defin:[9,10],denot:[4,7],depart:0,depend:5,depict:9,depth:[6,9],descript:1,detail:[1,10],detect:[2,6,7,9],determin:4,detrend:5,develop:[0,2,7,9],deviat:7,dict:[4,6,7],dictionari:7,differ:[2,6],difficult:9,dilat:5,dilate_foreground:5,dimens:6,dimension:9,directori:[4,5,6,9,10],dirnam:6,dirpath:[4,6],disc:[2,6,9],disconnect:8,displai:10,dissect:9,distanc:[4,6,7],distinct:2,distribut:[3,5],do_stuff:9,document:[9,10],domain:5,dot:10,download:3,dpi:[5,6],draw:10,drosophila:[2,7,9],duplic:[8,10],dure:[2,9,10],each:[4,6,7,8,9,10],edg:6,edge_mask:7,effect:9,email:0,enabl:2,enclos:[4,10],engin:0,entail:2,entir:[9,10],epithelium:2,etc:9,euclidean:7,evalu:[4,7],evaluate_centroid:7,evaluate_dist:4,evaluate_region_area:4,event:1,ever:9,exampl:9,except:8,exclud:[5,6,7,8],exclude_boundari:6,exclude_edge_seg:7,exclude_small_seg:7,exclus:[9,10],execut:9,exemplar:8,exemplari:8,exist:[4,6,8,9],exit:[8,10],expand:2,experi:[1,9,10],experiment:[2,6,9],express:[1,2],extens:9,extract:1,extract_pixel:5,eye:[2,6,9,10],eyes:7,facilit:2,fall:6,fals:[4,5,6,9,10],familiar:9,fastest:9,feel:[0,9],field:[2,4,6],fig:[4,5,6],figsiz:[5,6,7],figur:[4,5,6,7,10],file:[4,5,6,8,10],filter:10,find:[6,7],find_maxima:7,find_subdir:6,first:9,fit:[4,5,9],fit_kw:5,fix:2,flag:[6,8],flip:7,fluorec:9,fluoresc:[2,5,6,7,9,10],flyei:[],flyey:[0,1,9,10],fmt:5,focus:[],follow:[1,8],foregound:5,foreground:[5,7],format:[5,9],free:[0,9],from:[4,5,6,8,9,10],from_lay:4,from_measur:4,full:[6,9,10],fulli:6,func:4,further:10,gain:9,gamma:5,gene:[2,10],gener:[4,5,7,10],genmod:5,genotyp:[1,6],get:[4,7],get_bord:7,get_mod:4,get_seeds_from_dist:7,get_segment_mask:7,get_valu:4,given:[2,9,10],glm:5,graph:[4,6],graph_kw:6,green:8,grid:10,group:[2,4],group_id:4,gui:8,handl:1,handler:8,has:9,hdf:9,header:9,help:2,here:[],higher:9,histogram:4,hub:9,ident:5,identifi:[2,6,9],ids:6,imag:[1,2,4,5,6,8],image_kw:6,implement:9,includ:[4,6,7,8,9,10],inclus:[4,6,8],incorpor:6,ind:8,independ:5,index:6,indic:[4,10],individu:[1,5,6,8,9,10],inf:7,inform:6,inherit:[4,5,6,8],initi:[2,6,9],input:10,instanc:9,instanti:[4,8],instruct:10,intend:2,intens:[2,5,6,7,9],interest:10,interfac:[1,10],interior:6,introduct:10,irregularli:9,isol:5,isolate_pixel:5,iter:[5,6,9],its:[0,4,9,10],json:9,jupyt:9,just:10,keep:5,kei:[8,10],keyword:[4,6,9],kmean:4,kwarg:4,lab:0,label:[1,2,6,7,9],larg:10,larger:4,last:[8,10],later:2,latest:3,launch:10,layer:[1,4,5,8,9,10],layer_id:[6,9,10],layercorrect:[5,6,10],layerinterfac:8,layers_path:6,layervisu:8,least:5,length:[6,7],level:[2,5,6,7],lib:10,lies:10,like:[4,5,6,8,10],limit:[2,9],line:[7,10],linear:[1,6],link:5,list:[6,8],load:[4,5,6,8],load_classifi:6,load_correct:6,load_imag:6,load_inclus:6,load_label:6,load_lay:[6,9],load_measur:6,load_metadata:6,load_stack:[6,9,10],local:[4,7,9],log:4,look:10,made:10,mai:[9,10],major:[],make:[5,6],make_subdir:6,manag:[5,6,8],manner:9,manual:[2,6,8,9],manuscript:10,map:[4,7],mark:[6,8,9,10],mark_boundari:6,marker:[7,8],markers:8,mask:[4,5,6,7,9,10],masked_arrai:5,mass:7,matplot:10,matplotlib:[4,6,7,8],max_dist:[4,6],max_edg:6,maxima:7,maximum:[4,5,6,7],maxit:5,mean:[4,9],measur:[1,2,5,6,8],measure_centroid:7,measure_express:7,measure_segment_s:7,memori:9,merg:4,metadata:[6,8,9],method:[3,5,7,9,10],microscopi:[2,9],might:10,min_area:[6,7],min_dist:7,min_pop:[4,6],minimum:[4,6,7],mode:5,model:1,more:[9,10],most:[4,10],msg:8,mth:9,multilay:6,multipl:8,must:9,name:[4,5,6],ndarrai:[4,5,6,7,9],nearest:4,necessari:9,need:9,neighbor:4,neuron:[8,10],niter:[5,10],none:[4,5,6,8],normal:6,northwestern:0,note:[7,9],notebook:9,now:9,npy:9,nth:9,nuclear:[6,7],nuclei:2,num_peak:7,number:[4,5,6,7,9],numebr:5,object:[4,5,6,7,8,9],obtain:6,occur:4,offer:[9,10],offset:5,on_click:8,on_kei:8,onc:10,one:9,onli:9,oper:[9,10],optim:5,option:9,order:[7,9],ordinari:5,organ:[1,6],other:[4,10],our:[2,9,10],outsid:5,overal:8,overlai:[7,8,9,10],overlap:9,overview:9,overwrit:9,own:9,packag:[2,10],page:[],pair:[4,6,7],param:4,paramet:[4,5,6,7,9],part:2,particular:[9,10],particularli:[],pass:9,path:[4,5,6,8,9,10],pattern:2,pdf:9,peak:7,perform:[4,7,9,10],pip:3,pixel:[4,5,6,7,9],place:[8,9],platform:[0,2],pleas:[0,1,9,10],plot:[4,5,6],plot_graph:6,png:[5,9],pnt:[2,9],point:[8,10],polygon:8,popul:[4,6],posit:[5,7],predict:5,preprocess:[6,9],preprocessing_kw:6,present:10,primarili:2,process:[4,6],process_measur:6,properti:[6,7,10],protein:7,provid:[4,5,6,7,8,10],prune:6,pts:8,python:[],quantif:[2,9],quantifi:[2,7],quantil:[4,5,6],quantit:2,quantiti:6,question:0,r_normal:4,rang:10,rather:9,raw:[6,9],read:9,recent:10,recommend:9,red:[8,10],refer:10,reflect:9,regard:0,region:[4,8,9,10],regularli:[5,9],releas:2,relev:6,remov:[5,6,7,8,10],remove_mark:8,remove_point:8,remove_polygon:8,remove_zero:5,render_imag:8,reopen:10,repeat:9,replic:2,report:[2,7,9],repres:6,requir:2,resampl:5,resample_cutoff:5,resample_s:5,reset:8,resid:9,residu:5,resolut:[5,6],respect:[1,9],result:[6,9,10],retin:2,rgb:[5,6,7,8,9],row:10,run:[6,7,8],same:[6,9],sampl:5,save:[4,5,6,8,9,10],save_fig:5,save_measur:6,save_metadata:6,save_segment:6,scalar:6,scipi:7,search:[],section:6,see:[9,10],seed:[6,7,9],seed_kw:[6,7],seg_kw:[6,7],segment:[1,2,5,6,9,10],segment_id:7,select:[1,2,5,6,9],selected_onli:[5,6],selectiom:9,separ:7,sequenti:[9,10],seri:10,serv:9,set:[4,6,9,10],set_cmap:4,set_region_mask:4,setup:9,sever:[1,4],shade:4,shape:[6,7],share:6,shift:5,should:9,show:[4,5,7],show_correct:[5,10],show_fit:5,sigma:7,similar:[6,9],similarli:9,simplest:3,singl:[6,8,9],size:[4,5,6,7,8],skip:9,sklearn:4,small:[7,10],smaller:4,smooth:7,sns:5,some:[9,10],sourc:[4,5,6,7,8],space:[5,9],spatio:4,specif:9,specifi:[4,6],squar:5,stack:[1,8,10],stack_dir:6,stack_directori:6,stack_id:[6,9,10],stack_ind:10,stackinterfac:8,standard:9,statist:2,std:7,still:10,store:[6,9],str:[4,5,6,8],string:8,studi:[2,9],subdir:6,subdirectori:[6,9,10],subject:9,submodul:1,subpopul:2,subsequ:10,suit:[],tabl:1,tar:3,target:[2,4],target_typ:4,tempor:4,term:9,tessel:4,than:[4,9],thei:[6,9],them:10,thi:[2,9,10],three:[6,10],threshold:[4,6],tif:[6,9,10],tif_path:6,tiff:6,time:9,took:8,tool:[2,4,7,8],top:6,traceback:8,transform:7,transpar:10,trend:5,tupl:[5,6,7],two:10,type:[4,6,9],typic:2,under:[6,9],undo:8,uniform:5,uniformli:5,uniqu:[4,6,7,9],univers:0,updat:[6,8],update_cmap:7,update_mark:8,update_polygon:8,upon:9,upper:5,use:9,used:[2,4,5,6,10],user:[1,10],using:[5,9,10],valu:[4,5,6,7,9],variabl:5,vector:4,vertic:4,via:[0,3,7,9,10],visual:[4,6,7,8],voronoi:4,voxel:7,voxel_s:7,wai:9,watersh:[6,7],watershed_lin:7,weight:6,weighted_bi:6,welcom:[],when:[9,10],where:[5,8],whether:[4,10],which:[4,6,7,10],which_lay:8,wide:10,within:[2,5,6,7,8,9,10],withing:10,work:9,would:9,xpo:7,xvar:5,yan:[2,9],yane833:[],yellow:10,your:9,ypo:7,yvar:5,zero:5},titles:["Contact Us","Documentation","NU FlyEye: Clones","Installation","ANNOTATION","BLEEDTHROUGH CONTROL","DATA","MEASUREMENT","SELECTION","Getting Started","Example Usage"],titleterms:{about:[],addit:10,aggreg:10,annot:4,background:5,bleedthrough:[5,10],cell:[4,10],classifi:4,clone:2,concurr:4,contact:0,control:5,correct:[5,10],data:[6,9,10],document:1,event:8,exampl:10,experi:6,express:[7,9,10],extract:5,file:9,flyey:2,genotyp:4,get:9,gui:10,handl:8,imag:[7,9,10],indic:[],individu:4,input:9,instal:3,interfac:8,label:4,layer:6,linear:5,load:[9,10],measur:[4,7,9,10],model:5,process:9,segment:7,select:[8,10],stack:[6,9],start:9,structur:9,submodul:[],tabl:[],usag:10,user:8,welcom:[]}})