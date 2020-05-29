webpackJsonp([125],{didF:function(e,t){},oR4b:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("3cXf"),o=i.n(s),a=i("g416"),r={name:"CourseManagement",components:{SetCourse:i("wmnq").a},data:function(){return{uploadData:{courseId:""},uploadUrl1:"",pageTitle:"课程管理",icon:"el-icon-refresh",dialogVisible:!1,uploadDisabled:!1,uploadUrl:"",active:1,totals:0,isAdd:!0,isSubmit:!1,tableData:[],userDialogFormVisible:!1,setCourseDialogFormVisible:!1,setCourseData:{},versionOptions:[],courseClassification:[],fieldCoursePropertyOptions:[],courseClassifications:[],fieldCoursePropertyOptionsed:[],fieldTermOptions:[],academyOptions:[],form:{versionId:"",code:"",classificationId:"",name:"",courseProperty:"",leader:"",credit:"",period:"",term:null,id:void 0},page:{versionId:"",classificationId:"",courseProperty:null,keywords:"",term:"",page:1,rows:15},rules:{name:[{required:!0,message:"请输入课程名称",trigger:"blur"}],versionId:[{required:!0,message:"请选择培养方案版本",trigger:"blur"}],code:[{required:!0,message:"请输入课程编码",trigger:"blur"}],classificationId:[{required:!0,message:"请选择课程分类",trigger:"blur"}],courseProperty:[{required:!0,message:"请选择课程类型",trigger:"blur"}],leader:[{required:!0,message:"请选择课程负责人",trigger:"blur"}],credit:[{required:!0,message:"请输入学分",trigger:"blur"}],period:[{required:!0,message:"请输入总学时",trigger:"blur"}],term:[{required:!0,message:"请输入开课学时",trigger:"blur"}]}}},created:function(){},mounted:function(){this.getList(),this.initFn()},computed:{dialogTitle:function(){return this.isAdd?"添加课程":"编辑课程"}},methods:{initFn:function(){this.versionAll(),this.fieldCourseProperty(),this.courseClassificationAll(),this.fieldTerm(),this.getAcademy()},getAcademy:function(){var e=this;this.$get("/basic/teacher/allSysUserId").then(function(t){e.academyOptions=t.data||[]})},getList:function(){var e=this;localStorage.getItem("versionId")?(this.page.versionId=localStorage.getItem("versionId"),this.initData()):setTimeout(function(){e.getList()},200)},initData:function(){var e=this,t=a.a.courseList;this.$post(t,this.page).then(function(t){1===t.status?(e.totals=+t.data.total,e.tableData=t.data.list):e.$notify.error({title:"error",duration:1500,message:t.message})})},versionAll:function(){var e=this,t=a.a.versionAll;this.$get(t).then(function(t){1===t.status?e.versionOptions=t.data:e.$notify.error({title:"error",duration:1500,message:t.message})})},courseClassificationAll:function(){var e=this,t=a.a.courseClassificationAll;this.$get(t).then(function(t){if(1===t.status){e.courseClassifications=JSON.parse(o()(t.data)),e.courseClassification=t.data,e.courseClassification.unshift({id:"",name:"全部"})}else e.$notify.error({title:"error",duration:1500,message:t.message})})},fieldCourseProperty:function(){var e=this,t=a.a.fieldCourseProperty;this.$get(t).then(function(t){if(1===t.status){e.fieldCoursePropertyOptionsed=JSON.parse(o()(t.data)),e.fieldCoursePropertyOptions=t.data,e.fieldCoursePropertyOptions.unshift({code:null,value:"全部"})}else e.$notify.error({title:"error",duration:1500,message:t.message})})},fieldTerm:function(){var e=this,t=a.a.fieldTerm;this.$get(t).then(function(t){1===t.status?e.fieldTermOptions=t.data:e.$notify.error({title:"error",duration:1500,message:t.message})})},headInfo:function(e){this.pageTitle=e[1]},search:function(){this.resetTemp(),this.initData()},handleSizeChange:function(e){this.page.rows=e,this.initData()},handleCurrentChange:function(e){this.page.page=e,this.initData()},openAdd:function(){var e=this;this.isAdd=!0,this.isSubmit=!1,this.userDialogFormVisible=!0,this.$nextTick(function(){e.form={versionId:"",code:"",classificationId:"",name:"",courseProperty:"",leader:"",credit:"",period:"",term:null,id:void 0},e.form.versionId=localStorage.getItem("versionId"),e.$refs.form.resetFields()})},deleteRow:function(e){var t=this;this.$confirm("确定删除该课程?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.userDel(e.id)}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},editRow:function(e){var t={versionId:e.versionId,code:e.code,classificationId:e.classificationId,name:e.name,courseProperty:e.courseProperty,leader:e.leader,credit:e.credit,period:e.period,term:e.term,id:e.id};this.form.versionId=localStorage.getItem("versionId"),this.form=t,this.userDialogFormVisible=!0,this.isAdd=!1,this.isSubmit=!1},setRow:function(e){this.setCourseData=e,this.setCourseDialogFormVisible=!0},closeSetCourseDialog:function(e){this.setCourseDialogFormVisible=e},successSetCourseDialog:function(e){this.courseSet(e)},create:function(e){var t=this;this.$refs[e].validate(function(e){e&&(t.isSubmit=!0,t.isAdd?t.userAdd():t.userEdit())})},setCourseCreate:function(e){this.$refs[e].validate(function(e){})},cancel:function(e){this.userDialogFormVisible=!1,this.$refs[e].resetFields()},handleDialogClose:function(){this.$refs.form.resetFields(),this.userDialogFormVisible=!1},setCourseCancel:function(e){this.setCourseDialogFormVisible=!1,this.$refs[e].resetFields()},userAdd:function(){var e=this,t=a.a.courseAdd;this.$post(t,this.form).then(function(t){1===t.status?(e.isSubmit=!0,e.$notify.success({title:"success",duration:1500,message:t.message}),e.userDialogFormVisible=!1,e.resetTemp(),e.initData()):(e.isSubmit=!1,e.$notify.error({title:"error",duration:1500,message:t.message}))}).catch(function(t){e.isSubmit=!1,console.log(t)})},userDel:function(e){var t=this,i=a.a.courseDel({id:e});this.$deletes(i).then(function(e){1===e.status?(t.$notify.success({title:"success",duration:1500,message:e.message}),t.initData()):t.$notify.error({title:"error",duration:1500,message:e.message})}).catch(function(e){console.log(e)})},userEdit:function(){var e=this,t=a.a.courseEdit;this.$put(t,this.form).then(function(t){1===t.status?(e.isSubmit=!0,e.$notify.success({title:"success",duration:1500,message:t.message}),e.userDialogFormVisible=!1,e.initData()):(e.isSubmit=!1,e.$notify.error({title:"error",duration:1500,message:t.message}))}).catch(function(t){e.isSubmit=!1,console.log(t)})},courseSet:function(e){var t=this,i=a.a.courseSet;this.$put(i,e).then(function(e){1===e.status?(t.$notify.success({title:"success",duration:1500,message:e.message}),t.initData()):t.$notify.error({title:"error",duration:1500,message:e.message})}).catch(function(e){console.log(e)})},resetTemp:function(){this.page.page=1,this.page.rows=15},handleClick:function(){this.uploadDisabled=!1},handleExport:function(){var e=this;this.active=1,this.dialogVisible=!0;var t=localStorage.getItem("x_token");this.uploadUrl=this.API_URL+"/basic/import/courseInformation?x-token="+t+"&versionId="+localStorage.getItem("versionId"),this.$nextTick(function(){e.$refs.uploadXls.clearFiles()})},handleExceed:function(e,t){this.$notify.warning({title:"提示",message:"当前限制选择 1 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件"})},onProgress:function(){this.active=2,this.uploadDisabled=!0},handleSuccess:function(e){var t=this;1===e.status?(this.$notify.success({title:"提示",message:"导入成功!"}),this.active=3,this.uploadDisabled=!1,this.getList()):(e.data?this.$notify.error({title:"提示",message:"导入失败!"+e.data[0].message}):this.$notify.error({title:"提示",message:e.message}),this.active=1,this.uploadDisabled=!1),this.$nextTick(function(){t.$refs.uploadXls.clearFiles()})},download:function(){location.href=this.API_URL+"/basic/import/template/courseInformation"},onError:function(){var e=this;this.$notify.error({title:"提示",message:"上传失败!请尝试重新上传!"}),this.active=1,this.uploadDisabled=!1,this.$nextTick(function(){e.$refs.uploadXls.clearFiles()})},tmpButtomClick:function(e){var t=this;this.uploadData.courseId=e;var i=localStorage.getItem("x_token");this.uploadUrl1=this.API_URL+"/teacher/batch/course/batchUpload?x-token="+i,this.$nextTick(function(){t.$refs["uploadFile"+e].clearFiles()})},handleSuccess1:function(e){var t=this;console.log(e),200===e.code?this.$notify.success({title:"提示",message:"导入成功!"}):this.$notify.error({title:"提示",message:"导入失败!"}),this.$nextTick(function(){t.$refs["uploadFile"+t.uploadData.courseId].clearFiles()})},onError1:function(){var e=this;this.$notify.error({title:"提示",message:"上传失败!请尝试重新上传!"}),this.$nextTick(function(){e.$refs["uploadFile"+e.uploadData.courseId].clearFiles()})},handleExceed1:function(e,t){this.$notify.warning({title:"提示",message:"当前限制选择 1 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件"})}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"center"},[i("div",{staticClass:"center_breadcrumb"},[i("crumb",{staticStyle:{padding:"0 5px"}},[i("div",{staticClass:"new--btn",attrs:{slot:"right"},on:{click:e.openAdd},slot:"right"},[e._v("+ 新建")]),e._v(" "),i("div",{staticStyle:{float:"left","margin-right":"10px",color:"#03B187",cursor:"pointer"},attrs:{slot:"right",icon:"el-icon-plus"},on:{click:e.handleExport},slot:"right"},[i("SvgIcon",{staticStyle:{float:"left",margin:"32px 5px 0 0"},attrs:{"icon-class":"icondaoru",size:"18px"}}),e._v(" 导入")],1)])],1),e._v(" "),i("div",{staticClass:"center_content"},[i("div",{staticClass:"center_content_search"},[i("div",{staticClass:"center_content_search_left",staticStyle:{width:"100%"}},[i("div",{staticClass:"search-input-suffix gap",staticStyle:{display:"none"}},[i("label",[e._v("培养方案版本：")]),e._v(" "),i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.page.versionId,callback:function(t){e.$set(e.page,"versionId",t)},expression:"page.versionId"}},e._l(e.versionOptions,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),i("div",{staticClass:"search-input-suffix gap"},[i("label",[e._v("课程性质：")]),e._v(" "),i("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.page.courseProperty,callback:function(t){e.$set(e.page,"courseProperty",t)},expression:"page.courseProperty"}},e._l(e.fieldCoursePropertyOptions,function(e){return i("el-option",{key:e.code,attrs:{label:e.value,value:e.code}})}),1)],1),e._v(" "),i("div",{staticClass:"search-input-suffix gap"},[i("label",[e._v("课程类型：")]),e._v(" "),i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.page.classificationId,callback:function(t){e.$set(e.page,"classificationId",t)},expression:"page.classificationId"}},e._l(e.courseClassification,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),i("div",{staticClass:"search-input-suffix"},[i("label",[e._v("课程搜索：")]),e._v(" "),i("el-input",{staticClass:"search",attrs:{placeholder:"请输入搜索关键词",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.page.keywords,callback:function(t){e.$set(e.page,"keywords",t)},expression:"page.keywords"}})],1),e._v(" "),i("div",{staticClass:"search--btn",staticStyle:{margin:"0 0 0 20px"},on:{click:e.getList}},[e._v("搜索")])])]),e._v(" "),i("div",{staticClass:"table-container"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[i("el-table-column",{attrs:{prop:"code",label:"课程编码",align:"left"}}),e._v(" "),i("el-table-column",{attrs:{prop:"name",label:"课程名称"}}),e._v(" "),i("el-table-column",{attrs:{prop:"classificationVal",label:"课程类型"}}),e._v(" "),i("el-table-column",{attrs:{prop:"credit",label:"总学分",align:"center",width:"80"}}),e._v(" "),i("el-table-column",{attrs:{prop:"period",label:"总学时",align:"center",width:"80"}}),e._v(" "),i("el-table-column",{attrs:{prop:"termVal",label:"开课学期",width:"100"}}),e._v(" "),i("el-table-column",{attrs:{prop:"leaderName",label:"课程负责人",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"constructionSituation",align:"center",label:"课程建设情况"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",{staticClass:"operate-button distance"},[i("SvgIcon",{attrs:{"icon-class":"iconbianji1"}}),e._v(" "),i("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),e.editRow(t.row)}}},[e._v("编辑")])],1),e._v(" "),i("div",{staticClass:"operate-button distance"},[i("SvgIcon",{attrs:{"icon-class":"iconshanchu"}}),e._v(" "),i("el-button",{staticStyle:{color:"#ff5858"},attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),e.deleteRow(t.row)}}},[e._v("删除")])],1),e._v(" "),i("div",{staticClass:"operate-button"},[i("SvgIcon",{attrs:{"icon-class":"iconkechengshezhi"}}),e._v(" "),i("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),e.setRow(t.row)}}},[e._v("课程设置")])],1)]}}])})],1),e._v(" "),i("div",{staticClass:"center_pagination"},[i("el-pagination",{attrs:{background:"","current-page":e.page.page,"page-sizes":[15,30,40,50],"page-size":e.page.rows,layout:"prev, pager, next, jumper, sizes, total",total:e.totals},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]),e._v(" "),i("el-dialog",{staticClass:"set-el-dialog",attrs:{title:e.dialogTitle,visible:e.userDialogFormVisible,"before-close":e.handleDialogClose,"close-on-click-modal":!1},on:{"update:visible":function(t){e.userDialogFormVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"课程名称",prop:"name"}},[i("el-input",{attrs:{placeholder:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"培养方案版本",prop:"versionId"}},[i("el-select",{attrs:{placeholder:"请选择培养方案版本",disabled:""},model:{value:e.form.versionId,callback:function(t){e.$set(e.form,"versionId",t)},expression:"form.versionId"}},e._l(e.versionOptions,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"课程编码",prop:"code"}},[i("el-input",{attrs:{placeholder:""},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"课程类型",prop:"classificationId"}},[i("el-select",{attrs:{filterable:"",placeholder:"请选择课程类型"},model:{value:e.form.classificationId,callback:function(t){e.$set(e.form,"classificationId",t)},expression:"form.classificationId"}},e._l(e.courseClassifications,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"课程性质",prop:"courseProperty"}},[i("el-select",{attrs:{placeholder:"请选择课程性质"},model:{value:e.form.courseProperty,callback:function(t){e.$set(e.form,"courseProperty",t)},expression:"form.courseProperty"}},e._l(e.fieldCoursePropertyOptionsed,function(e){return i("el-option",{key:e.code,attrs:{label:e.value,value:e.code}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"课程负责人",prop:"leader"}},[i("el-select",{attrs:{placeholder:"请选择课程负责人",filterable:""},model:{value:e.form.leader,callback:function(t){e.$set(e.form,"leader",t)},expression:"form.leader"}},e._l(e.academyOptions,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"学分",prop:"credit"}},[i("el-input-number",{attrs:{"controls-position":"right",min:.1,max:99},model:{value:e.form.credit,callback:function(t){e.$set(e.form,"credit",t)},expression:"form.credit"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"总学时",prop:"period"}},[i("el-input-number",{attrs:{"controls-position":"right",min:1,max:9999},model:{value:e.form.period,callback:function(t){e.$set(e.form,"period",t)},expression:"form.period"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"开课学期",prop:"term"}},[i("el-select",{attrs:{filterable:"",placeholder:"请选择开课学期"},model:{value:e.form.term,callback:function(t){e.$set(e.form,"term",t)},expression:"form.term"}},e._l(e.fieldTermOptions,function(e){return i("el-option",{key:e.code,attrs:{label:e.value,value:e.code}})}),1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){return e.cancel("form")}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary",disabled:e.isSubmit},on:{click:function(t){return e.create("form")}}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{staticClass:"set-el-dialog set-course-dialog",attrs:{title:"导入数据",visible:e.dialogVisible,width:"35%","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",{staticStyle:{height:"400px"}},[i("div",{staticStyle:{height:"400px","min-width":"280px",width:"50%",float:"left"}},[i("el-steps",{attrs:{direction:"vertical",active:e.active}},[i("el-step",{attrs:{title:"上传文件",icon:"el-icon-upload"}}),e._v(" "),i("el-step",{attrs:{title:"检查数据",icon:e.icon,description:"等待文件上传完毕后自动检查表格数据。"}}),e._v(" "),i("el-step",{attrs:{title:"完成",icon:"el-icon-success"}})],1)],1),e._v(" "),i("div",{staticStyle:{position:"absolute",top:"105px",left:"85px"}},[i("p",{staticStyle:{padding:"10px 0","font-size":"12px"}},[e._v("\n          导入数据前，请先\n          "),i("el-button",{attrs:{type:"text",size:"mini"},on:{click:e.download}},[e._v("下载模板")]),e._v("，按照模板格式录入数据。\n        ")],1),e._v(" "),i("div",{staticClass:"file-upload"},[i("el-upload",{ref:"uploadXls",staticClass:"upload-demo",attrs:{disabled:e.uploadDisabled,action:e.uploadUrl,"on-success":e.handleSuccess,"on-progress":e.onProgress,"on-error":e.onError,limit:1,"show-file-list":!1,accept:".xls, .xlsx",name:"file","on-exceed":e.handleExceed}},[i("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.handleClick}},[i("i",{staticClass:"el-icon-upload el-icon--right"}),e._v(" 上传文件\n            ")]),e._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("支持文件格式：.xls .xlsx。")])],1)],1)])])]),e._v(" "),i("set-course",{attrs:{"course-data":e.setCourseData},on:{close:e.closeSetCourseDialog,success:e.successSetCourseDialog},model:{value:e.setCourseDialogFormVisible,callback:function(t){e.setCourseDialogFormVisible=t},expression:"setCourseDialogFormVisible"}})],1)},staticRenderFns:[]};var n=i("C7Lr")(r,l,!1,function(e){i("didF")},null,null);t.default=n.exports}});
//# sourceMappingURL=125.68f5437df092b0c98c25.js.map