webpackJsonp([41],{JqLG:function(e,t){},XSBo:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("3cXf"),i=s.n(a),r=s("+fBX"),l=s("oAV5"),o={name:"Publish",components:{Editor:r.a},data:function(){return{pageTitle:["问卷","发起问卷"],times:[],introduction:"",roleOptions:[],selectRole:[],isIpLimit:!0,form:{type:1,formId:this.$route.query.id||0,startTime:"",endTIme:"",isIpLimit:"1",data:"",sendName:"",subject:"",html:""},rules:{sendName:[{required:!0,message:"请填写发件人",trigger:"blur"}],subject:[{required:!0,message:"请填写主题",trigger:"blur"}]},filterText:"",defaultProps:{children:"children",label:"realName"},api:{listEndEmailForRol:"/form/rest/FormMainBaseBusiness/listEndEmailForRole/v1",listEndShareForRole:"/form/rest/FormMainBaseBusiness/listEndShareForRole/v1",publish:"/form/rest/FormMainBaseBusiness/publish/v1"}}},created:function(){this.shareForRole()},mounted:function(){},watch:{filterText:function(e){this.$refs.tree.filter(e)}},methods:{radioChange:function(e){2!==this.form.type&&(this.roleOptions=[],this.selectRole=[],this.shareForRole())},shareForRole:function(){var e=this,t=1===this.form.type?this.api.listEndEmailForRol:this.api.listEndShareForRole;this.$get(t).then(function(t){if(200===t.code)if(1===e.form.type){var s=[{id:"001",realName:"校友",children:t.data.alumnus||[]},{id:"002",realName:"专家",children:t.data.expert||[]},{id:"003",realName:"企业",children:t.data.enterprise||[]}];e.roleOptions=s}else{var a=[{id:"001",realName:"学生",type:"student",children:t.data.student.map(function(e,t){return{id:"001"+t,type:"student",realName:e.specialtyName,children:e.specialtyList.map(function(e,s){return{id:"001"+t+s,type:"student",realName:e.className,children:e.classList||[]}})}})},{id:"002",realName:"教师",children:t.data.teacher||[]}];e.roleOptions=a}})},checkChange:function(e,t,s){this.selectRole=this.countermand(this.$refs.tree.getCheckedNodes())},repeatFn:function(e){var t=this,s=this;e.children?e.children.forEach(function(e){e.children?t.repeatFn(e):s.selectRole.push(e)}):s.selectRole.push(e)},countermand:function(e){var t=[];return e.forEach(function(e){e.children||t.push(e)}),t},resetChecked:function(){this.selectRole=[],this.$refs.tree.setCheckedKeys([])},timeChange:function(){this.form.startTime=Object(l.a)(Date.parse(this.times[0]),"yyyy-MM-dd"),this.form.endTIme=Object(l.a)(Date.parse(this.times[1]),"yyyy-MM-dd")},usePublish:function(e){var t=this;this.$refs[e].validate(function(e){if(e){if(0===t.selectRole.length&&2!==t.form.type)return void t.$message("请选择分享人");t.form.data=2===t.form.type?"":i()(t.selectRole),t.form.isIpLimit=t.isIpLimit?"1":"0",t.$post(t.api.publish,t.form).then(function(e){200===e.code?(t.$notify.success({title:"success",duration:1500,message:"发布成功"}),setTimeout(function(){t.$router.push({path:2===t.form.type?"/evaluationAndFeedback/addressShare":"/evaluationAndFeedback/researchProgress",query:{type:"process",id:t.form.formId}})},800)):t.$notify.error({title:"error",duration:1500,message:e.msg})})}})},filterNode:function(e,t){return!e||-1!==t.realName.indexOf(e)},unique:function(e){for(var t={},s=[],a=0;a<e.length;a++)t[e[a].id]||(t[e[a].id]=!0,s.push(e[a]));return s}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"center"},[s("div",{staticClass:"center_content"},[s("div",{staticClass:"center_breadcrumb"},[s("crumb",{attrs:{data:e.pageTitle}})],1),e._v(" "),s("div",{staticClass:"table-container publish"},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[s("p",{staticClass:"small-title-tip tips"},[e._v("答题设置")]),e._v(" "),s("el-form-item",{staticClass:"first",attrs:{label:"设置开始/结束时间",prop:"name"}},[s("el-date-picker",{attrs:{type:"daterange","range-separator":"-","start-placeholder":"设置开始时间","end-placeholder":"设置结束时间"},on:{change:e.timeChange},model:{value:e.times,callback:function(t){e.times=t},expression:"times"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"答题限制",prop:"name"}},[s("el-checkbox",{model:{value:e.isIpLimit,callback:function(t){e.isIpLimit=t},expression:"isIpLimit"}},[e._v("每个IP只能答题一次")])],1),e._v(" "),s("p",{staticClass:"small-title-tip tips"},[e._v("分享方式")]),e._v(" "),s("el-radio-group",{staticClass:"share",on:{change:e.radioChange},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[s("el-radio",{attrs:{label:1}},[s("div",{staticClass:"share_way"},[s("SvgIcon",{attrs:{"icon-class":"iconyouxiang",size:"35px"}}),e._v(" "),s("div",{staticClass:"share_way_txt"},[s("label",[e._v("邮件分享")]),e._v(" "),s("i",[e._v("通过邮件方式分享问卷")])])],1)]),e._v(" "),s("el-radio",{attrs:{label:2}},[s("div",{staticClass:"share_way"},[s("SvgIcon",{attrs:{"icon-class":"icondaochu",size:"35px"}}),e._v(" "),s("div",{staticClass:"share_way_txt"},[s("label",[e._v("链接分享")]),e._v(" "),s("i",[e._v("通过链接方式分享问卷")])])],1)]),e._v(" "),s("el-radio",{attrs:{label:3}},[s("div",{staticClass:"share_way"},[s("SvgIcon",{attrs:{"icon-class":"icondaochu",size:"35px"}}),e._v(" "),s("div",{staticClass:"share_way_txt"},[s("label",[e._v("系统内分享")]),e._v(" "),s("i",[e._v("通过系统推送")])])],1)])],1),e._v(" "),2!==e.form.type?s("p",{staticClass:"small-title-tip tips"},[e._v("分享人群")]):e._e(),e._v(" "),1===e.form.type||3===e.form.type?s("div",{staticClass:"share-person"},[s("div",{staticClass:"share-person_head"},[s("el-button",{attrs:{type:"text"},on:{click:e.resetChecked}},[e._v("全部清空")])],1),e._v(" "),s("div",{staticClass:"share-person_body"},[s("div",{staticClass:"lt"},[s("div",{staticClass:"lt_head"},[s("span",{staticClass:"sp"},[e._v("联系人")])]),e._v(" "),s("div",{staticClass:"lt_body"},[s("el-input",{attrs:{placeholder:"搜索联系人"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),s("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:e.roleOptions,props:e.defaultProps,"show-checkbox":!0,"node-key":"id","filter-node-method":e.filterNode},on:{"check-change":e.checkChange}})],1)]),e._v(" "),s("div",{staticClass:"rt"},e._l(e.selectRole,function(t,a){return s("span",{key:a},[e._v(e._s(t.email)+","+e._s(t.realName))])}),0)])]):e._e(),e._v(" "),2===e.form.type?s("div",{staticClass:"share-person"}):e._e(),e._v(" "),1===e.form.type?s("div",[s("p",{staticClass:"small-title-tip tips"},[e._v("邮件内容")]),e._v(" "),s("el-form-item",{attrs:{label:"发件人",prop:"sendName"}},[s("el-input",{attrs:{placeholder:""},model:{value:e.form.sendName,callback:function(t){e.$set(e.form,"sendName",t)},expression:"form.sendName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"主题",prop:"subject"}},[s("el-input",{attrs:{placeholder:""},model:{value:e.form.subject,callback:function(t){e.$set(e.form,"subject",t)},expression:"form.subject"}})],1),e._v(" "),s("el-form-item",[s("editor",{attrs:{"input-content":e.introduction},model:{value:e.form.html,callback:function(t){e.$set(e.form,"html",t)},expression:"form.html"}})],1)],1):e._e()],1),e._v(" "),s("div",{staticClass:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.usePublish("form")}}},[e._v("发布问卷")])],1)],1)])])},staticRenderFns:[]};var c=s("C7Lr")(o,n,!1,function(e){s("JqLG")},null,null);t.default=c.exports}});
//# sourceMappingURL=41.8bb307b4611eb3443ec0.js.map