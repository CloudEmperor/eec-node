webpackJsonp([69],{IIQJ:function(t,e){},"or8/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("oAV5"),i={name:"ResearchResults",components:{},data:function(){return{pageTitle:["问卷调查","已完成问卷"],page:{classifyId:"0",keyword:"",page:1,pageSize:15},typeOptions:[],data:{},tableData:[],api:{classify:"/form/rest/FormClassifyBusiness/listAll/v1",listEnd:"/form/rest/FormMainBaseBusiness/listEnd/v1",discard:"/form/rest/FormMainBaseBusiness/discard/v1",reStart:"/form/rest/FormMainBaseBusiness/reStart/v1"}}},created:function(){this.classifyAll(),this.initData()},mounted:function(){},methods:{classifyAll:function(){var t=this;this.$post(this.api.classify).then(function(e){200===e.code&&(t.typeOptions=e.data,t.typeOptions.unshift({classifyName:"全部",id:"0"}))})},initData:function(){var t=this;this.$post(this.api.listEnd,this.page).then(function(e){200===e.code?(t.data=e.data,t.tableData=e.data.rows):t.$notify.error({title:"error",duration:1500,message:"获取列表失败"})})},search:function(){this.resetTemp(),this.initData()},continueCollectRow:function(t){var e=this;this.$confirm("是否继续收集问卷?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$post(e.api.reStart,{formId:t}).then(function(t){200===t.code?(e.$notify.success({title:"success",duration:1500,message:"操作成功"}),e.initData()):e.$notify.error({title:"error",duration:1500,message:t.msg})})}).catch(function(){e.$message({type:"info",message:"已取消"})})},analyzeRow:function(t,e){this.$router.push({path:"/evaluationAndFeedback/analysisQuestionnaire",query:{id:t,title:e}})},discardRow:function(t){var e=this;this.$confirm("确定废弃该问卷?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$post(e.api.discard,{formId:t}).then(function(t){200===t.code?(e.$notify.success({title:"success",duration:1500,message:"操作成功"}),e.initData()):e.$notify.error({title:"error",duration:1500,message:t.msg})})}).catch(function(){e.$message({type:"info",message:"已取消"})})},previewRow:function(t){this.$router.push({path:"/evaluationAndFeedback/questionnairePreview",query:{id:t,entryType:"new"}})},seeRow:function(t){this.$router.push({path:"/evaluationAndFeedback/originalQuestionnaireList",query:{id:t}})},handleSizeChange:function(t){this.page.pageSize=t,this.initData()},handleCurrentChange:function(t){this.page.page=t,this.initData()},resetTemp:function(){this.page.page=1,this.page.pageSize=15}},filters:{time:function(t){return t?Object(n.a)(t,"yyyy-MM-dd"):""}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center"},[a("div",{staticClass:"center_breadcrumb"},[a("crumb",{attrs:{data:t.pageTitle}})],1),t._v(" "),a("div",{staticClass:"center_content"},[a("div",{staticClass:"center_content_search"},[a("div",{staticClass:"center_content_search_left"},[a("div",{staticClass:"search-input-suffix gap"},[a("label",[t._v("问卷类型：")]),t._v(" "),a("el-select",{attrs:{placeholder:"全部"},model:{value:t.page.type,callback:function(e){t.$set(t.page,"type",e)},expression:"page.type"}},t._l(t.typeOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.classifyName,value:t.id}})}),1)],1),t._v(" "),a("div",{staticClass:"search-input-suffix"},[a("label",[t._v("问卷搜索：")]),t._v(" "),a("el-input",{staticClass:"search",attrs:{placeholder:"请输入搜索关键词",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.page.keyword,callback:function(e){t.$set(t.page,"keyword",e)},expression:"page.keyword"}}),t._v(" "),a("div",{staticClass:"search--btn",staticStyle:{"margin-left":"20px"},on:{click:t.search}},[t._v("搜索")])],1)])]),t._v(" "),a("div",{staticClass:"table-container"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"问卷名称","show-overflow-tooltip":!0,width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                       "+t._s(e.row.formName)+"\n                   ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"classifyName",label:"问卷类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"code",label:"样本"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                   "+t._s(e.row.receiveNum+"/"+e.row.sendNum)+"\n               ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"420"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"operate-button distance"},[a("SvgIcon",{attrs:{"icon-class":"icondiaochafenxi"}}),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.continueCollectRow(e.row.id)}}},[t._v("\n                       继续收集\n                       ")])],1),t._v(" "),a("div",{staticClass:"operate-button distance"},[a("SvgIcon",{attrs:{"icon-class":"iconfenxiwenjuan"}}),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.analyzeRow(e.row.id,e.row.formName)}}},[t._v("\n                       分析问卷\n                       ")])],1),t._v(" "),a("div",{staticClass:"operate-button distance"},[a("SvgIcon",{attrs:{"icon-class":"iconshanchu"}}),t._v(" "),a("el-button",{staticStyle:{color:"#ff5858"},attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.discardRow(e.row.id)}}},[t._v("\n                       废弃\n                       ")])],1),t._v(" "),a("div",{staticClass:"operate-button"},[a("SvgIcon",{attrs:{"icon-class":"iconyulan"}}),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.previewRow(e.row.id)}}},[t._v("\n                       预览\n                       ")])],1),t._v(" "),a("div",{staticClass:"operate-button"},[a("SvgIcon",{attrs:{"icon-class":"iconyulan"}}),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.seeRow(e.row.id)}}},[t._v("\n                       查看原始问卷\n                       ")])],1)]}}])})],1),t._v(" "),a("div",{staticClass:"center_pagination"},[a("el-pagination",{attrs:{background:"","current-page":t.page.page,"page-sizes":[15,30,40,50],"page-size":t.page.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:t.data.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])])},staticRenderFns:[]};var o=a("C7Lr")(i,s,!1,function(t){a("IIQJ")},null,null);e.default=o.exports}});
//# sourceMappingURL=69.0642e198db0ff991664c.js.map