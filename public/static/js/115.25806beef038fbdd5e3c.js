webpackJsonp([115],{MPSU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("+fBX"),r=a("g416"),o={name:"IdeaCreate",components:{Editor:i.a},data:function(){return{pageName:"培养目标",pageTitleArr:[],type:this.$route.query.type,uploadUrl:"",fileList:[],titlebarShow:!1,introduction:"",form:{title:"",promulgator:"",file:"",content:"",id:void 0},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}]}}},created:function(){this.pageName=this.$route.query.pageTitle[1],this.pageTitleArr=[this.$route.query.pageTitle[0],this.$route.query.pageTitle[1]+("add"===this.$route.query.type?"新增":"编辑")]},mounted:function(){this.uploadUrl=r.a.upload({baseUrl:this.API_URL}),"edit"===this.type&&this.initData()},computed:{titleType:function(){return"add"===this.$route.query.type?"新增":"编辑"}},methods:{initData:function(){var t=this,e=r.a.conceptInfo;this.$get(e).then(function(e){if(1===e.status){var a={title:e.data.title,promulgator:e.data.promulgator,file:e.data.file||"",content:e.data.content,id:e.data.id},i=[{name:e.data.fileName||"",url:e.data.file||""}];t.introduction=e.data.content,t.fileList=e.data.file?i:[],t.form=a}else t.$notify.error({title:"error",duration:1500,message:e.message})})},handleRemove:function(t,e){this.form.file=""},handleSuccess:function(t){this.form.file=t.data.id},handleExceed:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 "+t.length+" 个文件，共选择了 "+(t.length+e.length)+" 个文件"),t.size>20480&&this.$message.warning("亲！您上传的文件大小受限,请重新上")},beforeRemove:function(t,e){return this.$confirm("确定移除 "+t.name+"？")},save:function(t){var e=this;this.$refs[t].validate(function(t){t&&("add"===e.type?e.userAdd():e.userEdit())})},userAdd:function(){var t=this,e=r.a.conceptAdd;this.$post(e,this.form).then(function(e){1===e.status?(t.$notify.success({title:"success",duration:1500,message:e.message}),setTimeout(function(){t.$router.push("/trainingProgram/idea")},800)):t.$notify.error({title:"error",duration:1500,message:e.message})})},userEdit:function(){var t=this,e=r.a.conceptEdit;this.$put(e,this.form).then(function(e){1===e.status?(t.$notify.success({title:"success",duration:1500,message:e.message}),setTimeout(function(){t.$router.push("/trainingProgram/idea")},800)):t.$notify.error({title:"error",duration:1500,message:e.message})})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-page"},[a("div",{staticClass:"create-page_breadcrumb"},[a("Crumb",{attrs:{data:t.pageTitleArr}})],1),t._v(" "),a("div",{staticClass:"create-page_content"},[a("div",{staticClass:"create-page_title"},[a("div",{staticClass:"create-page_title-font"},[a("SvgIcon",{attrs:{"icon-class":"iconyijianfankui",size:"17px"}}),t._v(" "),a("span",[t._v(t._s(t.pageName))])],1)]),t._v(" "),a("div",{staticClass:"create-page_body"},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"标题:",prop:"title"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"发布者:",prop:"promulgator"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.form.promulgator,callback:function(e){t.$set(t.form,"promulgator",e)},expression:"form.promulgator"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"内容:",prop:"content"}},[a("editor",{attrs:{"upload-url":"api","input-content":t.introduction},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),a("el-form-item",[a("div",{staticClass:"file-upload idea-upload"},[a("el-upload",{staticClass:"upload-demo",attrs:{action:t.uploadUrl,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,"on-success":t.handleSuccess,limit:1,accept:".doc,.docx,.pdf","file-list":t.fileList,"on-exceed":t.handleExceed}},[a("i",{staticClass:"el-icon-upload el-icon--right"}),t._v(" "),a("el-button",{attrs:{type:"text"}},[t._v("上传附件")]),t._v(" "),a("div",{staticClass:"el-upload__tip idea-tip",attrs:{slot:"tip"},slot:"tip"},[t._v("支持文件格式：.doc .docx .pdf ，单个文件不能超过20M")])],1)],1)])],1),t._v(" "),a("div",{staticClass:"create-page_body-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.save("form")}}},[t._v("保存并发布")])],1)],1)])])},staticRenderFns:[]};var n=a("C7Lr")(o,s,!1,function(t){a("QTGY")},null,null);e.default=n.exports},QTGY:function(t,e){}});
//# sourceMappingURL=115.25806beef038fbdd5e3c.js.map