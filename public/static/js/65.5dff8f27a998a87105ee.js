webpackJsonp([65],{"5JMQ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"center"},[a("div",{staticClass:"center_breadcrumb"},[a("crumb",{attrs:{data:e.pageTitle}})],1),e._v(" "),a("div",{staticClass:"center_content"},[a("div",{staticClass:"center_content_search"},[a("div",{staticClass:"center_content_search_left"},[a("div",{staticClass:"search-input-suffix gap"},[a("label",[e._v("所属年级：")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.gradesChange},model:{value:e.page.ext2,callback:function(t){e.$set(e.page,"ext2",t)},expression:"page.ext2"}},e._l(e.gradesOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),"0"===e.type?a("div",{staticClass:"search-input-suffix"},[a("label",[e._v("所属班级：")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.page.classId,callback:function(t){e.$set(e.page,"classId",t)},expression:"page.classId"}},e._l(e.classOptions,function(e){return a("el-option",{key:e.classId,attrs:{label:e.className,value:e.classId}})}),1)],1):e._e(),e._v(" "),a("div",{staticClass:"search--btn",staticStyle:{margin:"0 0 0 20px"},on:{click:e.search}},[e._v("搜索")])])]),e._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},["0"===e.type?a("el-table-column",{attrs:{prop:"usercode",label:"学生学号",width:"200"}}):e._e(),e._v(" "),"1"===e.type?a("el-table-column",{attrs:{prop:"number",label:"教师编号",width:"200"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"0"===e.type?"学生姓名":"教师姓名"}}),e._v(" "),"1"===e.type?a("el-table-column",{attrs:{prop:"classname",label:"所带课程"}}):e._e(),e._v(" "),"0"===e.type?a("el-table-column",{attrs:{prop:"specialtyname",label:"所属专业"}}):e._e(),e._v(" "),"0"===e.type?a("el-table-column",{attrs:{prop:"grade",label:"所属年级"}}):e._e(),e._v(" "),"0"===e.type?a("el-table-column",{attrs:{prop:"classname",label:"所属班级"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"havaRole",rawName:"v-havaRole",value:"graduationRequirementsAnalysisView",expression:"'graduationRequirementsAnalysisView'"}],attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleView(t.row.userid)}}},[a("i",{staticClass:"el-icon-view"}),e._v("  查看答卷\n                            ")])]}}])})],1),e._v(" "),a("div",{staticClass:"center_pagination"},[a("el-pagination",{attrs:{background:"","current-page":e.page.page,"page-sizes":[15,30,40,50],"page-size":e.page.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])])},staticRenderFns:[]};var i=a("C7Lr")({data:function(){return{pageTitle:["调查进度","原始答卷"],type:this.$route.query.type,page:{ext2:"",classId:"",formID:this.$route.query.id,page:1,pageSize:15},gradesOptions:[],classOptions:[],tableData:[{}],total:0,bodyLoading:!0,api:{listOriginalPage:"/form/rest/FormAnserBusiness/listOriginalPage/v1",grades:"/basic/class/grades",classall:function(e){return"/basic/class/gradeByall/"+e}}}},mounted:function(){this.initData(),this.getGrades()},methods:{initData:function(){var e=this;this.$post(this.api.listOriginalPage,this.page).then(function(t){e.bodyLoading=!1,200===t.code&&(e.tableData=t.data.rows||[],e.total=t.data.total)})},getGrades:function(){var e=this;this.$get(this.api.grades).then(function(t){1===t.status&&(e.gradesOptions=t.data||[],e.gradesOptions.unshift({id:"",name:"全部 "}))})},search:function(){this.page.page=1,this.page.pageSize=15,this.initData()},gradesChange:function(){this.classall(this.page.ext2)},classall:function(e){var t=this;this.$get(this.api.classall(e)).then(function(e){1===e.status&&(t.classOptions=e.data||[],t.classOptions.unshift({classId:"",className:"全部 "}))})},handleView:function(e){this.$router.push({path:"/assessmentOfGraduationRequirements/aResult",query:{formId:this.page.formID,userId:e}})},handleSizeChange:function(e){this.page.pageSize=e,this.initData()},handleCurrentChange:function(e){this.page.page=e,this.initData()}}},s,!1,function(e){a("pjvT")},null,null);t.default=i.exports},pjvT:function(e,t){}});
//# sourceMappingURL=65.5dff8f27a998a87105ee.js.map