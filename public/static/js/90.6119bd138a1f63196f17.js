webpackJsonp([90],{"+gs1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("fn1C"),n=a("oAV5"),s=a("fcG9"),o={components:{QueryFilter:i.a,Crumb:s.a},data:function(){return{form:{busiGroup3:"",ext1:"",ext2:"",ext3:"",page:1,pageSize:15},tableData:[],total:0,bodyLoading:!0,roleName:localStorage.getItem("roleName"),queryAuthority:[],api:{listEndCourseQuality:"/form/rest/FormMainBaseBusiness/listEndCourseQuality/v1"}}},created:function(){"学院管理员"===this.roleName||"教师"===this.roleName?this.queryAuthority=[1,2,4,5]:"专业管理员"!==this.roleName&&"课程负责人"!==this.roleName||(this.queryAuthority=[2,4,5])},mounted:function(){this.getList()},methods:{querySelect:function(t){this.form.busiGroup3=t.specialtyId,this.form.ext1=t.versionId,this.form.ext2=t.classId,this.form.ext3=t.schedulingGradesId,this.form.page=1,this.form.pageSize=15,this.getList()},getList:function(){var t=this;this.$post(this.api.listEndCourseQuality,this.form).then(function(e){t.bodyLoading=!1,200===e.code&&(t.tableData=e.data.rows,t.total=e.data.total)})},handleAdd:function(){},handleEdit:function(t){this.$router.push({path:"/courseQualityEvaluation/courseNewifon",query:{id:t.id,title:t.formName}})},handleView:function(t){this.$router.push({path:"/evaluationAndFeedback/questionnairePreview",query:{entryType:"rest",id:t.id}})},handleStart:function(t){this.$router.push({path:"/courseQualityEvaluation/originalpage",query:{id:t.id}})},handleSizeChange:function(t){this.form.pageSize=t,this.getList()},handleCurrentChange:function(t){this.form.page=t,this.getList()}},filters:{time:function(t){return t?Object(n.a)(t,"yyyy-MM-dd"):""}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.bodyLoading,expression:"bodyLoading",modifiers:{body:!0}}],staticClass:"courseQualityAnalysis"},[a("crumb",{staticStyle:{padding:"0 5px"}}),t._v(" "),a("div",{staticClass:"mainContainer"},[a("query-filter",{attrs:{showData:t.queryAuthority},on:{onSelect:t.querySelect}}),t._v(" "),a("div",{staticClass:"tableBody"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"问卷名称",width:"200","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.row.formName)+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"ext2",label:"调查年级"}}),t._v(" "),a("el-table-column",{attrs:{prop:"receiveNum",label:"回收数量"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"240"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{directives:[{name:"havaRole",rawName:"v-havaRole",value:"courseQualityAnalysis",expression:"'courseQualityAnalysis'"}],attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleEdit(e.row)}}},[a("SvgIcon",{attrs:{"icon-class":"icondiaochafenxi"}}),t._v("  调查分析\n            ")],1),t._v(" "),a("el-button",{directives:[{name:"havaRole",rawName:"v-havaRole",value:"courseQualityAnalysisView",expression:"'courseQualityAnalysisView'"}],attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleView(e.row)}}},[a("SvgIcon",{attrs:{"icon-class":"iconyulan"}}),t._v("  预览\n            ")],1),t._v(" "),a("el-button",{directives:[{name:"havaRole",rawName:"v-havaRole",value:"courseQualityAnalysisStart",expression:"'courseQualityAnalysisStart'"}],attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleStart(e.row)}}},[a("SvgIcon",{attrs:{"icon-class":"iconyuanshidajuan"}}),t._v("  原始答卷\n            ")],1)]}}])})],1)],1),t._v(" "),a("div",{staticClass:"pagination"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.form.page,"page-sizes":[15,30,40,50],"page-size":t.form.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1)],1)},staticRenderFns:[]};var l=a("C7Lr")(o,r,!1,function(t){a("HSh5")},null,null);e.default=l.exports},HSh5:function(t,e){}});
//# sourceMappingURL=90.6119bd138a1f63196f17.js.map