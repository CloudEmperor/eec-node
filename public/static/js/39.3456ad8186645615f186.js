webpackJsonp([39],{jMeQ:function(e,t){},q4Wy:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("fn1C"),i=a("oAV5"),s=a("fcG9"),r={components:{QueryFilter:n.a,Crumb:s.a},data:function(){return{form:{busiGroup3:"",ext1:"",ext2:"",page:1,pageSize:15},tableData:[],total:0,loading:!1,bodyLoading:!0,roleName:localStorage.getItem("roleName"),queryAuthority:[],api:{listEndRequirementsMet:"/form/rest/FormMainBaseBusiness/listEndRequirementsMet/v1"}}},created:function(){"学院管理员"===this.roleName?this.queryAuthority=[1,2,3]:"专业管理员"===this.roleName&&(this.queryAuthority=[2,3])},mounted:function(){this.getList()},methods:{querySelect:function(e){this.form.busiGroup3=e.specialtyId,this.form.ext1=e.versionId,this.form.ext2=e.gradesId,this.form.page=1,this.form.pageSize=15,this.getList()},getList:function(){var e=this;this.$post(this.api.listEndRequirementsMet,this.form).then(function(t){e.bodyLoading=!1,200===t.code&&(e.tableData=t.data.rows,e.total=t.data.total)})},handleAdd:function(){},handleEdit:function(e){this.$router.push({path:"/assessmentOfGraduationRequirements/Newifon",query:{id:e.id,title:e.formName}})},handleView:function(e){this.$router.push({path:"/evaluationAndFeedback/questionnairePreview",query:{entryType:"rest",id:e.id}})},handleStart:function(e){this.$router.push({path:"/assessmentOfGraduationRequirements/Newpage",query:{id:e.id,type:""+e.formType}})},handleSizeChange:function(e){this.form.pageSize=e,this.getList()},handleCurrentChange:function(e){this.form.page=e,this.getList()}},filters:{time:function(e){return e?Object(i.a)(e,"yyyy-MM-dd"):""}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.bodyLoading,expression:"bodyLoading",modifiers:{body:!0}}],staticClass:"graduationRequirementsAnalysis"},[a("crumb",{staticStyle:{padding:"0 5px"}}),e._v(" "),a("div",{staticClass:"mainContainer"},[a("query-filter",{attrs:{showData:e.queryAuthority},on:{onSelect:e.querySelect}}),e._v(" "),a("div",{staticClass:"tableBody"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"问卷名称","show-overflow-tooltip":!0,width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                      "+e._s(t.row.formName)+"\n                  ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"调查对象"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(0===t.row.formType?"学生":"教师"))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"ext2",label:"调查年级"}}),e._v(" "),a("el-table-column",{attrs:{prop:"receiveNum",label:"回收数量"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"havaRole",rawName:"v-havaRole",value:"graduationRequirementsAnalysis",expression:"'graduationRequirementsAnalysis'"}],attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleEdit(t.row)}}},[a("SvgIcon",{attrs:{"icon-class":"icondiaochafenxi"}}),e._v("  调查分析\n            ")],1),e._v(" "),a("el-button",{directives:[{name:"havaRole",rawName:"v-havaRole",value:"graduationRequirementsAnalysisView",expression:"'graduationRequirementsAnalysisView'"}],attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleView(t.row)}}},[a("SvgIcon",{attrs:{"icon-class":"iconyulan"}}),e._v("  预览\n            ")],1),e._v(" "),a("el-button",{directives:[{name:"havaRole",rawName:"v-havaRole",value:"graduationRequirementsAnalysisStart",expression:"'graduationRequirementsAnalysisStart'"}],attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleStart(t.row)}}},[a("SvgIcon",{attrs:{"icon-class":"iconyuanshidajuan"}}),e._v("  原始答卷\n            ")],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"pagination"},[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.form.page,"page-sizes":[15,30,40,50],"page-size":e.form.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1)],1)},staticRenderFns:[]};var l=a("C7Lr")(r,o,!1,function(e){a("jMeQ")},null,null);t.default=l.exports}});
//# sourceMappingURL=39.3456ad8186645615f186.js.map