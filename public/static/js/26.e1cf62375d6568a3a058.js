webpackJsonp([26],{"4iAO":function(t,e){},ZwtL:function(t,e,i){t.exports=i.p+"static/img/studentLearning.dae00d8.png"},rvFN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("g416"),n={name:"Idea",data:function(){return{pageTitle:"认证理念",pageTitleArr:[],isAdd:!0,data:{}}},created:function(){},mounted:function(){this.initData()},methods:{initData:function(){var t=this,e=a.a.conceptInfo;this.$get(e).then(function(e){1===e.status?e.data?(t.isAdd=!1,t.data=e.data):t.isAdd=!0:t.$notify.error({title:"error",duration:1500,message:e.message})})},create:function(){this.$router.push({path:"/trainingProgram/ideaCreate",query:{type:"add",pageTitle:this.pageTitleArr}})},edit:function(){this.$router.push({path:"/trainingProgram/ideaCreate",query:{type:"edit",pageTitle:this.pageTitleArr}})},headInfo:function(t){this.pageTitleArr=t,this.pageTitle=t[1]}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center"},[a("div",{staticClass:"center_breadcrumb"},[a("Crumb",{on:{headInfo:t.headInfo}})],1),t._v(" "),a("div",{staticClass:"center_content"},[a("div",{staticClass:"center_content_title"},[a("SvgIcon",{attrs:{"icon-class":"icondatixitongguanli",size:"20px"}}),t._v(" "),a("span",[t._v(t._s(t.pageTitle))])],1),t._v(" "),t.isAdd?a("div",{staticClass:"defaultPage"},[a("img",{attrs:{src:i("ZwtL"),alt:""}}),t._v(" "),a("el-button",{staticClass:"idea-add",attrs:{type:"primary",icon:"el-icon-plus",round:""},on:{click:t.create}},[t._v("新建")])],1):t._e(),t._v(" "),t.isAdd?t._e():a("div",{staticClass:"table-container"},[a("div",{staticClass:"idea-title"},[a("p",{domProps:{textContent:t._s(t.data.title)}}),t._v(" "),a("span",{staticClass:"idea-edit",on:{click:t.edit}},[a("SvgIcon",{attrs:{"icon-class":"icon-edit-line",size:"15px"}}),t._v(" "),a("el-button",{staticClass:"idea-edit--btn",attrs:{type:"text",size:"small"}},[t._v(" 编辑")])],1)]),t._v(" "),a("div",{staticClass:"idea-introduce",domProps:{innerHTML:t._s(t.data.content)}})])])])},staticRenderFns:[]};var r=i("C7Lr")(n,s,!1,function(t){i("4iAO")},null,null);e.default=r.exports}});
//# sourceMappingURL=26.e1cf62375d6568a3a058.js.map