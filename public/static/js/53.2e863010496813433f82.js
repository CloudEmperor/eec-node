webpackJsonp([53],{"4Mkj":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("3cXf"),o=i.n(a),s=i("Onke"),r={name:"RoleManagement",data:function(){return{pageTitle:"角色管理",isAdd:!0,data:{},tableData:[],userDialogFormVisible:!1,authorizationDialogFormVisible:!1,distributionDialogFormVisible:!1,form:{name:"",id:void 0,specialtyId:"",academyId:""},page:{keywords:"",page:1,rows:15},rules:{name:[{required:!0,message:"请输入角色名称",trigger:"blur"}],academyId:[{required:!0,message:"请选择所属学院",trigger:"blur"}],specialtyId:[{required:!0,message:"请选择所属专业",trigger:"blur"}]},authorizationForm:{roleID:"",menuIDs:[]},distributionForm:{roleID:"",menuIDs:[]},authorizationRules:{menuIDs:[{required:!0,message:"请选择资源",trigger:"blur"}]},distributionRules:{menuIDs:[{required:!0,message:"请选择资源",trigger:"blur"}]},filterText:"",filterText1:"",authorizationTree:[],distributionTree:[],defaultProps:{children:"children",label:"name"},roleName:"",academyId:"",specialtyId:"",academyOptions:"",specialtyOptions:"",flag:!1}},created:function(){},mounted:function(){this.initData(),this.sysMenuAll(),this.distributionAll(),this.roleName=localStorage.getItem("roleName")},watch:{filterText:function(t){this.$refs.tree.filter(t)},filterText1:function(t){this.$refs.tree1.filter(t)},academyIdOfForm:function(t){t?(this.flag&&(this.form.specialtyId=""),this.getSpecialty(t)):(this.specialtyOptions=[{id:"",name:"请先选择所属学院"}],this.form.specialtyId="")}},computed:{dialogTitle:function(){return this.isAdd?"添加角色":"编辑角色"},academyIdOfForm:function(){return this.form.academyId}},methods:{getacademy:function(){var t=this;this.bodyLoading=!0,this.$get("/basic/academy/all?type=0").then(function(e){1===e.status?(t.academyOptions=e.data,t.academyOptions.push({id:"0",name:"无"})):t.$notify({title:"提示",message:e.message,type:"error",duration:"2000"}),t.bodyLoading=!1}).catch(function(){t.$notify({title:"提示",message:"获取所属学院失败请重试!",type:"error",duration:"2000"}),t.bodyLoading=!1})},getSpecialty:function(t){var e=this;this.bodyLoading=!0,this.$get("/basic/specialty/all/"+t).then(function(t){1===t.status?(e.specialtyOptions=t.data,e.specialtyOptions.push({id:"0",name:"无"}),e.flag=!0):e.$notify({title:"提示",message:t.message,type:"error",duration:"2000"}),e.bodyLoading=!1}).catch(function(){e.$notify({title:"提示",message:"获取所属班级失败请重试!",type:"error",duration:"2000"}),e.bodyLoading=!1})},initData:function(){var t=this,e=s.a.sysRoleList;this.$post(e,this.page).then(function(e){1===e.status?(t.data=e,t.tableData=e.data):t.$notify.error({title:"error",duration:1500,message:e.message})}).catch(function(t){console.log(t)})},sysMenuAll:function(){var t=this;this.$get("system/sysMenu/allDist").then(function(e){if(1===e.status){var i=e.data;t.authorizationTree=i}else t.$notify.error({title:"error",duration:1500,message:e.message})}).catch(function(t){console.log(t)})},distributionAll:function(){var t=this;this.$get("system/sysMenu/allDist").then(function(e){if(1===e.status){var i=e.data;t.distributionTree=i}else t.$notify.error({title:"error",duration:1500,message:e.message})}).catch(function(t){console.log(t)})},sysMenuRole:function(t){var e=this,i=s.a.sysMenuRole({roleID:t,type:1});this.$get(i).then(function(t){if(1===t.status){var i=t.data||[];e.authorizationDialogFormVisible=!0,e.authorizationTree.forEach(function(t){i.forEach(function(e,a){t.id===e&&i.splice(a,1)})}),e.authorizationTree.forEach(function(t){t.children&&t.children.forEach(function(t){i.forEach(function(e,a){t.id==e&&t.children&&i.splice(a,1)})})}),e.$nextTick(function(){e.$refs.tree.setCheckedKeys(i)})}else e.$notify.error({title:"error",duration:1500,message:t.message})})},distributionRole:function(t){var e=this;this.distributionDialogFormVisible=!0,this.$nextTick(function(){e.$refs.distributionForm.resetFields()});var i=s.a.sysMenuRole({roleID:t,type:2});this.$get(i).then(function(t){if(1===t.status){var i=t.data||[];e.distributionTree.forEach(function(t){i.forEach(function(e,a){t.id===e&&i.splice(a,1)})}),e.distributionTree.forEach(function(t){t.children.forEach(function(t){i.forEach(function(e,a){t.id==e&&t.children&&i.splice(a,1)})})}),e.$nextTick(function(){e.$refs.tree1.setCheckedKeys(i)})}else e.$notify.error({title:"error",duration:1500,message:t.message})})},headInfo:function(t){this.pageTitle=t[1]},authorizationRow:function(t){this.sysMenuRole(t.id),this.authorizationForm.roleID=t.id},distributionRow:function(t){this.distributionForm.roleID=t.id,this.distributionRole(t.id)},checkChangeTree:function(t,e){this.authorizationForm.menuIDs=this.$refs.tree.getCheckedKeys()},checkChangeTree1:function(t,e){this.distributionForm.menuIDs=this.$refs.tree1.getCheckedKeys()},filterNode:function(t,e){return!t||-1!==e.name.indexOf(t)},filterNode1:function(t,e){return!t||-1!==e.name.indexOf(t)},createAuthorization:function(t){var e=this;this.$refs[t].validate(function(t){if(t){var i=JSON.parse(o()(e.authorizationForm.menuIDs));e.authorizationTree;i=i.concat(e.$refs.tree.getHalfCheckedKeys()),i=e.unique(i);var a={roleID:e.authorizationForm.roleID,menuIDs:i,type:1};e.authorizationAdd(a)}})},createDistribution:function(t){var e=this;this.$refs[t].validate(function(t){if(t){var i=JSON.parse(o()(e.distributionForm.menuIDs));e.distributionTree;i=i.concat(e.$refs.tree1.getHalfCheckedKeys()),i=e.unique(i);var a={roleID:e.distributionForm.roleID,menuIDs:i,type:2};e.distributionAdd(a)}})},cancelAuthorization:function(t){this.authorizationDialogFormVisible=!1,this.$refs[t].resetFields()},handleAuthorizationDialogClose:function(){this.$refs.authorizationForm.resetFields(),this.authorizationDialogFormVisible=!1},openAdd:function(){this.userDialogFormVisible=!0,this.form={name:"",id:void 0,academyId:"",specialtyId:""},"学院管理员"===localStorage.getItem("roleName")&&(this.form.academyId=localStorage.getItem("academyId")),this.getacademy(),this.isAdd=!0},search:function(){this.resetTemp(),this.initData()},handleSizeChange:function(t){this.page.rows=t,this.initData()},handleCurrentChange:function(t){this.page.page=t,this.initData()},create:function(t){var e=this;this.$refs[t].validate(function(t){t&&(e.isAdd?e.userAdd():e.userEdit())})},cancel:function(t){var e=this;this.userDialogFormVisible=!1,setTimeout(function(){e.$refs.form.resetFields()},500)},handleDialogClose:function(){var t=this;this.userDialogFormVisible=!1,setTimeout(function(){t.$refs.form.resetFields()},500)},deleteRow:function(t){var e=this;this.$confirm("确定删除该角色?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.userDel(t.id)}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},editRow:function(t){this.flag=!1;var e={name:t.name,id:t.id,specialtyId:t.specialtyId||"",academyId:t.academyId};"学院管理员"===localStorage.getItem("roleName")&&(this.form.academyId=localStorage.getItem("academyId")),this.form=e,this.getacademy(),this.userDialogFormVisible=!0,this.isAdd=!1},authorizationAdd:function(t){var e=this,i=s.a.sysRoleGrant;this.$post(i,t).then(function(t){1===t.status?(e.$notify.success({title:"success",duration:1500,message:t.message}),e.authorizationDialogFormVisible=!1,e.resetTemp(),e.initData()):e.$notify.error({title:"error",duration:1500,message:t.message})}).catch(function(t){console.log(t)})},distributionAdd:function(t){var e=this,i=s.a.sysRoleGrant;this.$post(i,t).then(function(t){1===t.status?(e.$notify.success({title:"success",duration:1500,message:t.message}),e.distributionDialogFormVisible=!1,e.resetTemp(),e.initData()):e.$notify.error({title:"error",duration:1500,message:t.message})}).catch(function(t){console.log(t)})},userAdd:function(){var t=this,e=s.a.sysRoleAdd;this.$post(e,this.form).then(function(e){1===e.status?(t.$notify.success({title:"success",duration:1500,message:e.message}),t.userDialogFormVisible=!1,t.resetTemp(),t.initData()):t.$notify.error({title:"error",duration:1500,message:e.message})}).catch(function(t){console.log(t)})},userEdit:function(){var t=this,e=s.a.sysRoleEdit;this.$put(e,this.form).then(function(e){1===e.status?(t.$notify.success({title:"success",duration:1500,message:e.message}),t.userDialogFormVisible=!1,t.initData()):t.$notify.error({title:"error",duration:1500,message:e.message})}).catch(function(t){console.log(t)})},userDel:function(t){var e=this,i=s.a.sysRoleDel({id:t});this.$deletes(i).then(function(t){1===t.status?(e.$notify.success({title:"success",duration:1500,message:t.message}),e.initData()):e.$notify.error({title:"error",duration:1500,message:t.message})}).catch(function(t){console.log(t)})},resetTemp:function(){this.page.page=1,this.page.rows=15},unique:function(t){for(var e={},i=[],a=0;a<t.length;a++)e[t[a]]||(e[t[a]]=!0,i.push(t[a]));return i}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"center"},[i("div",{staticClass:"center_breadcrumb"},[i("crumb",{staticStyle:{padding:"0 5px"}},[i("div",{staticClass:"new--btn",attrs:{slot:"right"},on:{click:t.openAdd},slot:"right"},[t._v("+ 新建")])])],1),t._v(" "),i("div",{staticClass:"center_content"},[i("div",{staticClass:"center_content_search"},[i("div",{staticClass:"center_content_search_left"},[i("div",{staticClass:"search-input-suffix"},[i("label",[t._v("角色搜索：")]),t._v(" "),i("el-input",{staticClass:"search",attrs:{placeholder:"请输入搜索关键词",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.page.keywords,callback:function(e){t.$set(t.page,"keywords",e)},expression:"page.keywords"}})],1),t._v(" "),i("div",{staticClass:"search-input-suffix",staticStyle:{margin:"0 0 0 20px"}},[i("div",{staticClass:"search--btn",on:{click:t.search}},[t._v("搜索")])])])]),t._v(" "),i("div",{staticClass:"table-container"},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[i("el-table-column",{attrs:{prop:"name",label:"角色名称"}}),t._v(" "),i("el-table-column",{attrs:{prop:"id",label:"角色ID"}}),t._v(" "),i("el-table-column",{attrs:{prop:"creatorVal",label:"创建人"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作",width:"330"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"operate-button distance"},[i("SvgIcon",{attrs:{"icon-class":"iconbianji1"}}),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),t.editRow(e.row)}}},[t._v("\n                编辑\n                ")])],1),t._v(" "),i("div",{staticClass:"operate-button"},[i("SvgIcon",{attrs:{"icon-class":"iconshanchu"}}),t._v(" "),i("el-button",{staticStyle:{color:"#ff5858"},attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),t.deleteRow(e.row)}}},[t._v("\n                删除\n                ")])],1),t._v(" "),i("div",{staticClass:"operate-button distance"},[i("SvgIcon",{attrs:{"icon-class":"iconshouquan",size:"15px"}}),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),t.authorizationRow(e.row)}}},[t._v("目录授权")])],1),t._v(" "),i("div",{staticClass:"operate-button"},[i("SvgIcon",{attrs:{"icon-class":"iconshouquan",size:"15px"}}),t._v(" "),i("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(i){return i.preventDefault(),t.distributionRow(e.row)}}},[t._v("可分配授权")])],1)]}}])})],1),t._v(" "),i("div",{staticClass:"center_pagination"},[i("el-pagination",{attrs:{background:"","current-page":t.page.page,"page-sizes":[15,30,40,50],"page-size":t.page.rows,layout:"prev, pager, next, jumper, sizes, total",total:t.data.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)]),t._v(" "),i("el-dialog",{staticClass:"set-el-dialog",attrs:{title:t.dialogTitle,visible:t.userDialogFormVisible,"before-close":t.handleDialogClose,"close-on-click-modal":!1,width:"30%"},on:{"update:visible":function(e){t.userDialogFormVisible=e}}},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[i("el-form-item",{attrs:{label:"角色名",prop:"name"}},[i("el-input",{attrs:{placeholder:"请输入角色名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"所属学院",prop:"academyId"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择所属学院",disabled:!("学校管理员"===t.roleName||"系统管理员"===t.roleName)},model:{value:t.form.academyId,callback:function(e){t.$set(t.form,"academyId",e)},expression:"form.academyId"}},t._l(t.academyOptions,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"所属专业",prop:"specialtyId"}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择所属专业"},model:{value:t.form.specialtyId,callback:function(e){t.$set(t.form,"specialtyId",e)},expression:"form.specialtyId"}},t._l(t.specialtyOptions,function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){return t.cancel("form")}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.create("form")}}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{staticClass:"set-el-dialog authorization-dialog",attrs:{title:"角色授权",visible:t.authorizationDialogFormVisible,"before-close":t.handleAuthorizationDialogClose,"close-on-click-modal":!1},on:{"update:visible":function(e){t.authorizationDialogFormVisible=e}}},[i("el-form",{ref:"authorizationForm",attrs:{model:t.authorizationForm,rules:t.authorizationRules}},[i("el-form-item",{attrs:{prop:"menuIDs"}},[i("el-input",{attrs:{placeholder:"输入关键字搜索"},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}}),t._v(" "),i("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:t.authorizationTree,props:t.defaultProps,"node-key":"id","show-checkbox":"","default-expand-all":"","filter-node-method":t.filterNode},on:{"check-change":t.checkChangeTree}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){return t.cancelAuthorization("authorizationForm")}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.createAuthorization("authorizationForm")}}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{staticClass:"set-el-dialog authorization-dialog",attrs:{title:"可分配授权",visible:t.distributionDialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.distributionDialogFormVisible=e}}},[i("el-form",{ref:"distributionForm",attrs:{model:t.distributionForm,rules:t.distributionRules}},[i("el-form-item",{attrs:{prop:"menuIDs"}},[i("el-input",{attrs:{placeholder:"输入关键字搜索"},model:{value:t.filterText1,callback:function(e){t.filterText1=e},expression:"filterText1"}}),t._v(" "),i("el-tree",{ref:"tree1",staticClass:"filter-tree",attrs:{data:t.distributionTree,props:t.defaultProps,"node-key":"id","show-checkbox":"","default-expand-all":"","filter-node-method":t.filterNode1},on:{"check-change":t.checkChangeTree1}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.distributionDialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.createDistribution("distributionForm")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var l=i("C7Lr")(r,n,!1,function(t){i("Ebd5")},null,null);e.default=l.exports},Ebd5:function(t,e){}});
//# sourceMappingURL=53.2e863010496813433f82.js.map