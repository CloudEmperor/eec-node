webpackJsonp([77],{eCJy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("3cXf"),i=a.n(o),l={components:{crumb:a("fcG9").a},data:function(){return{dialogFormVisible:!1,formLabelWidth:"150px",falg:!1,falg1:!1,Addpro:"",form:{name:"",code:"",intro:"",academyId:"",creatorVal:"",lengthOfSchooling:null,isfirst:0,authenticationStatus:0},creatorValArr:[],currentPage4:1,total:0,page:1,pageSize:15,pageNum:1,formInline:{user:""},rules:{value:[{required:!0,message:"请输入所属学院",trigger:"blur"}],name:[{required:!0,message:"请输入专业名称",trigger:"blur"}],lengthOfSchooling:[{required:!0,validator:function(t,e,a){/^[0-9]*$/.test(e)?a():a(new Error("修业年限为数字类型"))},trigger:"blur",message:"修业年限为数字类型"}],code:[{required:!0,message:"请输入专业编号",trigger:"blur"}]},tableData:[],loading:!0,options:[],value:"",options0:[],value0:"",options1:[],value1:"",arrleaderdata:!1,statusOptions:[{code:0,value:"已认证"},{code:1,value:"未认证"},{code:2,value:"已申请"}]}},mounted:function(){this.initData(),this.allxue()},methods:{initData:function(){var t=this,e={academyId:this.value0,keywords:this.formInline.user,page:this.pageNum,rows:this.pageSize};this.$post("/basic/specialty/list",e).then(function(e){1==e.status&&(t.tableData=e.data,t.total=e.total,t.loading=!1)})},ppp:function(t){this.$refs.form.resetFields(),this.dialogFormVisible=!1,this.initData(),this.form={}},allxue:function(){var t=this;this.$get("/basic/academy/all?type=1").then(function(e){t.options=JSON.parse(i()(e.data)),t.options0=e.data,t.options0.unshift({id:"",name:"全部"})})},searchacademyId:function(t){var e=this,a=this.form.academyId.toString();this.$get("basic/user/type/1/"+a).then(function(a){e.creatorValArr=a.data,e.arrleaderdata&&e.creatorValArr.push(t)})},changes1:function(){var t=this;this.$get("/basic/specialty/all/"+this.value0).then(function(e){t.options1=e.data})},specialtyadd:function(){var t=this,e={name:this.form.name,code:this.form.code,intro:this.form.intro,academyId:this.form.academyId,leader:this.form.creatorVal,lengthOfSchooling:Number(this.form.lengthOfSchooling),isfirst:this.form.isfirst,authenticationStatus:this.form.authenticationStatus};this.$post("/basic/specialty/add",e).then(function(e){1==e.status?(t.$notify({message:"新增成功",type:"success",title:"success"}),t.initData()):0==e.status&&t.$notify.warning({message:e.message,type:"warning"})})},handleEdit:function(t,e){this.Addpro="编辑专业",this.falg=!1,this.falg1=!0,this.dialogFormVisible=!0,this.form=JSON.parse(i()(e)),this.form.academyId=e.academyId,this.form.creatorVal=e.leader,this.form.lengthOfSchooling=e.lengthOfSchooling;this.form.id;var a={id:e.leader,name:e.leaderVal};this.arrleaderdata=!0,this.allxue(),this.searchacademyId(a)},seccons1:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.specialtyadd(),e.dialogFormVisible=!1,e.form={}})},seccons2:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;var a={code:e.form.code,name:e.form.name,id:e.form.id,intro:e.form.intro,academyId:e.form.academyId||"",lengthOfSchooling:Number(e.form.lengthOfSchooling),leader:null==e.form.creatorVal?"":e.form.creatorVal,isfirst:e.form.isfirst,authenticationStatus:e.form.authenticationStatus};e.$put("/basic/specialty/edit",a).then(function(t){1==t.status?(e.$notify.success({title:"success",message:"编辑成功"}),e.initData(),e.dialogFormVisible=!1,e.$refs.form.resetFields()):0==t.status&&(e.$notify.warning({title:"warning",message:t.message}),e.initData(),e.dialogFormVisible=!0)})})},close:function(){this.Addpro="添加专业",this.falg=!0,this.falg1=!1,this.dialogFormVisible=!0,this.form={name:"",code:"",intro:"",academyId:"",creatorVal:"",lengthOfSchooling:null,isfirst:0,authenticationStatus:0},this.allxue()},handleClose:function(){this.$refs.form.resetFields(),this.dialogFormVisible=!1,this.initData(),this.form={}},handleDelete:function(t,e){var a=this;this.$confirm("确定删除该信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$deletes("/basic/specialty/del/"+e.id).then(function(t){console.log(t),1==t.status?a.initData():0==t.status&&a.$notify.warning({title:"warning",message:t.message})})}).catch(function(){a.$notify({type:"info",message:"已取消删除"})})},indexMethod:function(t){return 1*t},handleSizeChange:function(t){this.pageSize=t,this.initData()},handleCurrentChange:function(t){this.pageNum=t,this.initData()}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"professional padding students"},[a("el-dialog",{attrs:{title:t.Addpro,visible:t.dialogFormVisible,"before-close":t.handleClose,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{attrs:{label:"所属学院：","label-width":t.formLabelWidth,prop:"academyId"}},[a("el-select",{attrs:{placeholder:"请选择所属学院"},on:{change:t.searchacademyId},model:{value:t.form.academyId,callback:function(e){t.$set(t.form,"academyId",e)},expression:"form.academyId"}},t._l(t.options,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"专业代码：","label-width":t.formLabelWidth,prop:"code"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入专业代码"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"专业名称：","label-width":t.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入专业名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"专业负责人：","label-width":t.formLabelWidth,prop:"creatorVal"}},[a("el-select",{attrs:{placeholder:"请选择专业负责人",filterable:""},model:{value:t.form.creatorVal,callback:function(e){t.$set(t.form,"creatorVal",e)},expression:"form.creatorVal"}},t._l(t.creatorValArr,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"修业年限：","label-width":t.formLabelWidth,prop:"lengthOfSchooling"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入修业年限"},model:{value:t.form.lengthOfSchooling,callback:function(e){t.$set(t.form,"lengthOfSchooling",e)},expression:"form.lengthOfSchooling"}}),t._v(" "),a("p",{staticStyle:{position:"absolute",top:"0",right:"-23px"}},[t._v("年")])],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"是否省级一流专业：","label-width":t.formLabelWidth,prop:"isfirst"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择"},model:{value:t.form.isfirst,callback:function(e){t.$set(t.form,"isfirst",e)},expression:"form.isfirst"}},[a("el-option",{attrs:{label:"是",value:0}}),t._v(" "),a("el-option",{attrs:{label:"否",value:1}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"认证状态：","label-width":t.formLabelWidth,prop:"authenticationStatus"}},[a("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择认证状态"},model:{value:t.form.authenticationStatus,callback:function(e){t.$set(t.form,"authenticationStatus",e)},expression:"form.authenticationStatus"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t.code,attrs:{label:t.value,value:t.code}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"专业简介：","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off",type:"textarea",rows:7,placeholder:"请输入专业简介"},model:{value:t.form.intro,callback:function(e){t.$set(t.form,"intro",e)},expression:"form.intro"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.ppp}},[t._v("取 消")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.falg,expression:"falg"}],attrs:{type:"primary"},on:{click:function(e){return t.seccons1("form")}}},[t._v("确 定")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.falg1,expression:"falg1"}],attrs:{type:"primary"},on:{click:function(e){return t.seccons2("form")}}},[t._v("确 定")])],1)],1),t._v(" "),a("crumb",{staticStyle:{padding:"0 5px"}},[a("div",{staticClass:"new--btn",attrs:{slot:"right"},on:{click:t.close},slot:"right"},[t._v("+ 新建")])]),t._v(" "),a("div",{staticClass:"professional-tab1"},[a("div",{staticClass:"professional-inp"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("span",{staticClass:"ssssss"},[t._v("所属学院：")]),t._v(" "),a("el-select",{staticClass:"pppp",attrs:{placeholder:"全部"},on:{change:t.changes1},model:{value:t.value0,callback:function(e){t.value0=e},expression:"value0"}},t._l(t.options0,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),a("span",{staticClass:"ssssss"},[t._v("专业搜索：")]),t._v(" "),a("el-input",{staticClass:"pppp",attrs:{placeholder:"专业代码，名称"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}}),t._v(" "),a("div",{staticClass:"search--btn",staticStyle:{"margin-top":"6px"},on:{click:t.initData}},[t._v("搜索")])],1)],1),t._v(" "),[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"专业代码",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.code))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"专业名称",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"所属学院",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.academyName))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"专业介绍",width:"auto"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",width:"600",content:e.row.intro}},[a("div",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.row.intro))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"专业负责人",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.leaderVal))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"修业年限",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.lengthOfSchooling))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[a("SvgIcon",{attrs:{"icon-class":"iconbianji1"}}),t._v("  编辑\n            ")],1),t._v(" "),a("el-button",{staticStyle:{color:"#ff5858"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[a("SvgIcon",{attrs:{"icon-class":"iconshanchu"}}),t._v("  删除\n            ")],1)]}}])})],1)]],2),t._v(" "),a("div",[[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.pageNum,"page-sizes":[15,30,40,50],"page-size":t.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]],2)],1)},staticRenderFns:[]};var n=a("C7Lr")(l,s,!1,function(t){a("owd9")},null,null);e.default=n.exports},owd9:function(t,e){}});
//# sourceMappingURL=77.3a8edc98b9a7d77bd66e.js.map