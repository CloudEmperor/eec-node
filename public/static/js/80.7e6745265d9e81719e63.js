webpackJsonp([80],{"3Ua+":function(t,e){},jfSu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("3cXf"),l=a.n(s),i=a("a3Yh"),o=a.n(i),n={components:{},data:function(){var t;return t={dialogFormVisible:!1,dialogFormVisible1:!1,formLabelWidth:"120px",flag:!1,flag1:!1,addstu:"",currentPage4:1,total:0,page:1,pageSize:15,pageNum:1,form:{academyId:"",specialtyId:"",name:"",code:"",grade:"",email:"",phone:"",classId:"",slaveClassCode:"",nowGrade:"",atSchoolStatus:"",id:""},formInline:{user:""},rules:{academyId:[{required:!0,message:"请选择学院",trigger:"blur"}],specialtyId:[{required:!0,message:"请选择专业",trigger:"blur"}],grade:[{required:!0,message:"请选择入学年级",trigger:"blur"}],classId:[{required:!0,message:"请选择班级",trigger:"blur"}],slaveClassCode:[{required:!0,message:"请选择分流班级",trigger:"blur"}],nowGrade:[{required:!0,message:"请选择现在年级",trigger:"blur"}],atSchoolStatus:[{required:!0,message:"请选择在校状态",trigger:"blur"}],name:[{required:!0,message:"请输入学生姓名",trigger:"blur"}],code:[{validator:function(t,e,a){/^[0-9]*\d{4,}$/.test(e)?a():a(new Error("学号必须是由4-9位数字"))},trigger:"blur",required:!0}],phone:[{validator:function(t,e,a){""==e||void 0==e?a():/[0-9]{11}/.test(e)?a():a(new Error("请输入正确的手机号格式"))},trigger:"blur"}],email:[{validator:function(t,e,a){""==e||void 0==e?a():/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(e)?a():a(new Error("请输入正确的邮箱格式"))},trigger:"blur"}]},tableData:[],loading:!0,optionsarr:[],valuearr:"",options:[],gradevalue:"",classValvalue:""},o()(t,"form",{file:""}),o()(t,"file",""),o()(t,"index",1),o()(t,"fileList",[]),o()(t,"options",[]),o()(t,"options1",[]),o()(t,"options2",[]),o()(t,"options3",[]),o()(t,"options4",[]),o()(t,"options5",[]),o()(t,"options6",[]),o()(t,"optionsarr1",[]),o()(t,"valuearr1",""),o()(t,"optionsarr3",[]),o()(t,"valuearr3",""),o()(t,"optionsarr5",[]),o()(t,"dataspecialtyId",!1),t},methods:{successdata:function(t,e){this.dialogFormVisible1=!0,this.teacherssId=e},uploadUrl:function(){var t=localStorage.getItem("x_token");return this.API_URL+"/basic/import/student?x-token="+t},xiazai:function(){location.href=this.API_URL+"/basic/import/template/student"},submitUpload:function(){3===this.index&&(this.studentlist(),this.dialogFormVisible1=!1,this.index=1)},handleRemove:function(t,e){this.form.file=""},handleExceed:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 "+t.length+" 个文件，共选择了 "+(t.length+e.length)+" 个文件"),t.size>20480&&this.$message.warning("sorry 上传文件大于20M,请重新上")},closciick:function(t){2===this.index&&(this.index=1),this.dialogFormVisible1=!1},handleSuccess:function(t,e,a){1===t.status?(this.$notify.success({title:"success",message:t.message}),this.index=3):(null==t.data?this.$notify.warning({title:"warning",message:t.message}):this.$notify.warning({title:"warning",message:t.data[0].message}),this.index=2,this.dialogFormVisible1=!0)},handleError:function(t,e,a){this.$notify.error({title:"错误",message:"文件上传失败"})},beforeRemove:function(t,e){3===this.index?this.index=1:2===this.index&&(this.index=1),this.$confirm("确定移除 "+t.name+"？")},atSchoolStatus:function(){var t=this;this.$get("/system/dict/field/atSchoolStatus").then(function(e){1==e.status&&(t.options5=JSON.parse(l()(e.data)),t.optionsarr5=e.data,t.optionsarr5.unshift({code:null,value:"全部"}))})},onSubmit:function(){var t=this,e={academyId:this.valuearr,specialtyId:this.valuearr1,classId:this.valuearr3,keywords:this.formInline.user,page:this.pageNum,rows:this.pageSize};this.$post("/basic/student/list",e).then(function(e){1==e.status&&(t.tableData=e.data,t.total=e.total,t.loading=!1)})},studentlist:function(){var t=this,e={rows:this.pageSize,page:this.pageNum};this.$post("/basic/student/list",e).then(function(e){1==e.status&&(t.tableData=e.data,t.total=e.total,t.loading=!1)})},handleEdit:function(t,e){var a=this;this.addstu="编辑学生",this.flag1=!0,this.flag=!1,this.dataspecialtyId=!1,this.dialogFormVisible=!0,this.form.id=e.id,this.form=JSON.parse(l()(e)),this.$get("/basic/specialty/all/"+e.academyId).then(function(t){1==t.status&&(a.options1=t.data)}),this.shuntClassAll(e.specialtyId),this.allxue1()},addstudent:function(){var t=this;this.$post("/basic/student/add",this.form).then(function(e){1==e.status?(t.$notify({message:"新增成功",type:"success"}),t.tableData.unshift(e.data),t.studentlist(),t.allxue1()):0==e.status&&t.$notify.warning({message:e.message,type:"warning"})})},allxue:function(){var t=this;this.$get("/basic/academy/all?type=1").then(function(e){1==e.status&&(t.optionsarr=e.data,t.optionsarr.unshift({id:"",name:"全部"}))})},allxue1:function(){var t=this;this.$get("/basic/academy/all?type=1").then(function(e){console.log(e,"res"),1==e.status&&(t.options=JSON.parse(l()(e.data)))})},changes2:function(t){var e=this,a=t||"";this.$get("/basic/specialty/all/"+a).then(function(t){1==t.status&&(e.options1=JSON.parse(l()(t.data)))})},changes:function(t){var e=this,a=t||"";a?this.$get("/basic/specialty/all/"+a).then(function(t){1==t.status&&(e.optionsarr1=t.data,e.optionsarr1.unshift({id:"",name:"全部"}))}):this.optionsarr1=[]},changes1:function(){var t=this,e=this.value;this.$get("/basic/specialty/all/"+e).then(function(e){1==e.status&&(t.options1=e.data)})},shuntClassAll:function(t){var e=this,a=t||"";this.$get("/basic/class/shuntClassAll?specialtyId="+a+"&type=1").then(function(t){1==t.status&&(e.options4=t.data,e.dataspecialtyId=!0)})},gradesClass:function(){var t=this;this.$get("basic/class/grades").then(function(e){1==e.status&&(t.options2=e.data,t.options6=e.data)})},changes3:function(){var t=this,e=this.valuearr1;e?this.$get("/basic/class/all/"+e).then(function(e){1==e.status&&(t.optionsarr3=e.data,t.optionsarr3.unshift({id:"",name:"全部"}))}):this.optionsarr3=[]},seccons2:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.addstudent(),e.dialogFormVisible=!1,e.studentlist()})},resetForm:function(t){this.$refs[t].resetFields(),this.dialogFormVisible=!1,this.form={}},handleClose:function(){this.dialogFormVisible=!1,this.$refs.form.resetFields(),this.form={}},seccons22:function(t){var e=this;this.$refs[t].validate(function(a){if(!a)return console.log("error submit!!"),!1;e.form.classId=e.form.classId,e.form.slaveClassCode=e.form.slaveClassCode,e.$put("/basic/student/edit",e.form).then(function(a){1==a.status?(e.$notify.success({title:"success",message:"编辑成功"}),e.studentlist(),e.$refs[t].resetFields(),e.dialogFormVisible=!1):0==a.status&&(e.$notify.warning({title:"warning",message:a.message}),e.studentlist())})})},close:function(){this.addstu="添加学生",this.flag=!0,this.flag1=!1,this.dialogFormVisible=!0,this.form={},this.allxue1(),this.value="",this.value1=""},handleDelete:function(t,e){var a=this;this.$confirm("确定删除该信息?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$deletes("/basic/student/del/"+e.id).then(function(t){1==t.status?a.onSubmit():0==t.status&&a.$notify.warning({title:"warning",message:t.message})})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},indexMethod:function(t){return 1*t},handleSizeChange:function(t){this.pageSize=t,this.onSubmit()},handleCurrentChange:function(t){this.pageNum=t,this.onSubmit()}},mounted:function(){this.allxue(),this.studentlist(),this.gradesClass(),this.atSchoolStatus()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"classManagement padding students"},[a("el-dialog",{attrs:{title:t.addstu,visible:t.dialogFormVisible,"before-close":t.handleClose,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{attrs:{label:"学号：","label-width":t.formLabelWidth,prop:"code"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入学号"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"姓名：","label-width":t.formLabelWidth,prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属学院：","label-width":t.formLabelWidth,prop:"academyId"}},[a("el-select",{attrs:{placeholder:"请选择所属学院"},on:{change:t.changes2},model:{value:t.form.academyId,callback:function(e){t.$set(t.form,"academyId",e)},expression:"form.academyId"}},t._l(t.options,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"所属专业：","label-width":t.formLabelWidth,prop:"specialtyId"}},[a("el-select",{attrs:{placeholder:"请选择所属专业"},on:{change:t.shuntClassAll},model:{value:t.form.specialtyId,callback:function(e){t.$set(t.form,"specialtyId",e)},expression:"form.specialtyId"}},t._l(t.options1,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"入学年份：","label-width":t.formLabelWidth,prop:"grade"}},[a("el-select",{attrs:{placeholder:"请选择入学年份"},model:{value:t.form.grade,callback:function(e){t.$set(t.form,"grade",e)},expression:"form.grade"}},t._l(t.options2,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"班级：","label-width":t.formLabelWidth,prop:"classId"}},[a("el-select",{attrs:{placeholder:"请选择班级"},model:{value:t.form.classId,callback:function(e){t.$set(t.form,"classId",e)},expression:"form.classId"}},t._l(t.options4,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"在校状态：","label-width":t.formLabelWidth,prop:"atSchoolStatus"}},[a("el-select",{attrs:{placeholder:"请选择在校状态"},model:{value:t.form.atSchoolStatus,callback:function(e){t.$set(t.form,"atSchoolStatus",e)},expression:"form.atSchoolStatus"}},t._l(t.options5,function(t){return a("el-option",{key:t.code,attrs:{label:t.value,value:t.code}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"现在年级：","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择现在年级"},model:{value:t.form.nowGrade,callback:function(e){t.$set(t.form,"nowGrade",e)},expression:"form.nowGrade"}},t._l(t.options6,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"邮箱：","label-width":t.formLabelWidth,prop:"email"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入邮箱"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"手机号：","label-width":t.formLabelWidth,prop:"phone"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入手机号"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){return t.resetForm("form")}}},[t._v("取 消")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],attrs:{type:"primary"},on:{click:function(e){return t.seccons2("form")}}},[t._v("确 定")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.flag1,expression:"flag1"}],attrs:{type:"primary"},on:{click:function(e){return t.seccons22("form")}}},[t._v("确 定")])],1)],1),t._v(" "),a("form",{attrs:{model:t.form,enctype:"Content-Type: multipart/form-data"}},[a("el-dialog",{attrs:{title:"导入在校生信息",visible:t.dialogFormVisible1,"show-close":!0,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible1=e}}},[a("div",{staticClass:"steps-dv1",staticStyle:{height:"350px"}},[a("el-steps",{attrs:{active:t.index,direction:"vertical"}},[a("el-step",{attrs:{title:"上传文件",icon:"el-icon-edit"}},[a("template",{slot:"description"},[a("div",[t._v("\r\n                                导入在校生信息之前，请先“\r\n                                "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"请先下载模板",placement:"top-start"}},[a("span",{staticClass:"span-dv",on:{click:t.xiazai}},[t._v("下载模板")])]),t._v("”，按照模板格式录入数据。\r\n                            ")],1)])],2),t._v(" "),a("el-step",{attrs:{title:"检查数据",icon:"el-icon-upload",description:"等待文件上传完毕后自动检查表格数据。"}},[a("template",{slot:"description"},[a("div",[t._v("等待文件上传完毕后自动检查表格数据。")])])],2),t._v(" "),a("el-step",{attrs:{title:"完成",icon:"el-icon-picture"}})],1),t._v(" "),a("el-upload",{ref:"upload",staticClass:"upload-demo steps-btn",attrs:{action:t.uploadUrl(),accept:".xls","on-remove":t.handleRemove,"file-list":t.fileList,"auto-upload":!0,"on-success":t.handleSuccess,"on-error":t.handleError,"before-remove":t.beforeRemove,limit:1,"on-exceed":t.handleExceed}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("支持文件格式：.xls 类型的文件，且不超过20M")])],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.closciick}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitUpload}},[t._v("确 定")])],1)])],1),t._v(" "),a("crumb",{staticStyle:{padding:"0 5px"}},[a("div",{staticClass:"new--btn",attrs:{slot:"right"},on:{click:t.close},slot:"right"},[t._v("+ 新建")]),t._v(" "),a("div",{staticStyle:{float:"left","margin-right":"10px",color:"#03B187",cursor:"pointer"},attrs:{slot:"right",icon:"el-icon-plus"},on:{click:t.successdata},slot:"right"},[a("SvgIcon",{staticStyle:{float:"left",margin:"32px 5px 0 0"},attrs:{"icon-class":"icondaoru",size:"18px"}}),t._v(" 导入")],1)]),t._v(" "),a("div",{staticClass:"classManagement-tab"},[a("div",{staticClass:"classManagement-inp"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[a("span",{staticClass:"ssss"},[t._v("所属学院：")]),t._v(" "),a("el-select",{staticClass:"pppp",attrs:{placeholder:"请选择院校"},on:{change:t.changes},model:{value:t.valuearr,callback:function(e){t.valuearr=e},expression:"valuearr"}},t._l(t.optionsarr,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),a("span",{staticClass:"sssss"},[t._v("所属专业：")]),t._v(" "),a("el-select",{staticClass:"pppp",attrs:{placeholder:"请先选择学院"},on:{change:t.changes3},model:{value:t.valuearr1,callback:function(e){t.valuearr1=e},expression:"valuearr1"}},t._l(t.optionsarr1,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),a("span",{staticClass:"sssss"},[t._v("所属班级：")]),t._v(" "),a("el-select",{staticClass:"pppp",attrs:{placeholder:"请先选择专业"},model:{value:t.valuearr3,callback:function(e){t.valuearr3=e},expression:"valuearr3"}},t._l(t.optionsarr3,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),a("span",{staticClass:"sssss"},[t._v("学生搜索：")]),t._v(" "),a("el-input",{staticClass:"pppp",attrs:{placeholder:"请输入学生姓名或学号"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}}),t._v(" "),a("div",{staticClass:"search--btn",staticStyle:{margin:"6px 0 0 20px"},on:{click:t.onSubmit}},[t._v("搜索")])],1)],1),t._v(" "),[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{label:"学号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.code))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"入学年份"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.grade)+"级")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"所属学院"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.academyVal))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"所属专业"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.specialtyVal))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"班级"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.classVal))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"在校状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.atSchoolStatusVal))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"现在年级"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.nowGrade?a("span",[t._v(t._s(e.row.nowGrade)+"级")]):a("span",[t._v(t._s(e.row.nowGrade))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[a("SvgIcon",{attrs:{"icon-class":"iconbianji1"}}),t._v("  编辑\r\n                        ")],1),t._v(" "),a("el-button",{staticStyle:{color:"#ff5858"},attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[a("SvgIcon",{attrs:{"icon-class":"iconshanchu"}}),t._v("  删除\r\n                        ")],1)]}}])})],1)]],2),t._v(" "),a("div",[[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.pageNum,"page-sizes":[15,30,40,50],"page-size":t.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]],2)],1)},staticRenderFns:[]};var c=a("C7Lr")(n,r,!1,function(t){a("3Ua+")},null,null);e.default=c.exports}});
//# sourceMappingURL=80.7e6745265d9e81719e63.js.map