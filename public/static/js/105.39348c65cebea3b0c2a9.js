webpackJsonp([105],{"599D":function(e,t){},IGFd:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("3cXf"),i=s.n(a),r=(s("7Adc"),{components:{Crumb:s("fcG9").a},data:function(){return{userDialogFormVisible:!1,userDialogFormVisible1:!1,isAdd:!0,rules:{classifyName:[{required:!0,message:"请选择课程",trigger:"blur"}],remarks:[{required:!0,message:"请选择学年",trigger:"blur"}],remarks3:[{required:!0,message:"请选择配置方式：",trigger:"blur"}]},currentPage4:1,pageSize:15,total:0,file:"",index:1,formInline:{user:""},tableData:[],options:[],value:"",options1:[{code:"0",value:"请选择"},{code:"1",value:"第一学期"},{code:"2",value:"第二学期"}],curriculum:[],value1:"",options2:[],value2:"",form:{file:"",classifyName:"",remarks:"",remarks3:"0",id:"",teacherId:""},arr:"",bodyLoading:!1,object:{},teacherlist:[],roleName:localStorage.getItem("roleName")}},computed:{dialogTitle:function(){return this.isAdd?"新建试卷配置":"编辑试卷配置"}},methods:{cancel:function(e){this.userDialogFormVisible=!1,this.$refs[e].resetFields()},cancel1:function(e){this.userDialogFormVisible1=!1,this.$refs[e].resetFields()},allteacher:function(){var e=this;this.$get("/teacher/examgoal/allteams/"+this.object.course_id+"/"+this.object.grade).then(function(t){1==t.status&&(e.teacherlist=t.data)})},addexamination:function(){var e=this,t={courseId:this.form.classifyName,grade:this.form.remarks,configType:this.form.remarks3};this.$post("/basic/sys/tracourseconfig/add",t).then(function(t){1==t.status?(e.$notify.success({title:"success",duration:1500,message:"新增成功"}),e.getall(),e.userDialogFormVisible=!1):e.$notify.error({title:"error",duration:1500,message:"新增失败"})})},userEdit:function(){var e=this,t={id:this.form.id,courseId:this.form.classifyName,grade:this.form.remarks,configType:this.form.remarks3};this.$post("/basic/sys/tracourseconfig/edit",t).then(function(t){1==t.status?(e.$notify.success({title:"success",duration:1500,message:"编辑成功"}),e.getall(),e.userDialogFormVisible=!1):e.$notify.error({title:"error",duration:1500,message:"编辑失败"})})},create:function(e){var t=this;this.$refs[e].validate(function(e){e&&(t.isAdd?t.addexamination():t.userEdit())})},create1:function(e){this.$router.push({path:"/Construction/Toconfiguretwo",query:{id:this.object.course_id,name:this.object.name,teacherId:e.teacherId,type:"查看",grade:this.object.grade}}),this.userDialogFormVisible1=!1},openAdd:function(){this.userDialogFormVisible=!0,this.form={classifyName:"",remarks:"",remarks3:""},this.isAdd=!0},handleDialogClose:function(){this.$refs.form.resetFields(),this.userDialogFormVisible=!1},handleDialogClose1:function(){this.userDialogFormVisible1=!1},luiii:function(e){"请选择学期"==e?(this.options1=[],this.options1.push("请选择")):(this.arr="abc",this.getall())},getcourse:function(){var e=this;this.$get("/basic/scheduling/courseByLeader ").then(function(t){1===t.status&&(e.curriculum=t.data)})},getgrades:function(){var e=this;this.$get("/basic/scheduling/grades/"+localStorage.getItem("specialtyId")).then(function(t){if(1===t.status){var s=[];t.data.forEach(function(e){s.push({id:e,name:e+"-"+(e+1)+"学年"})}),e.options=s,e.options.unshift({name:"全部学年",id:""})}else e.$notify.error({title:"error",duration:1500,message:t.message})})},changgrades:function(e){var t=this;this.$get("/basic/scheduling/grades/"+localStorage.getItem("specialtyId")+"/"+e).then(function(e){if(1===e.status){t.options2=JSON.parse(i()(e.data)),e.data.unshift({name:"请选择"})}else t.$notify.error({title:"error",duration:1500,message:e.message})})},termscahnge:function(){this.getall()},getall:function(){var e=this;this.bodyLoading=!0;var t={grade:this.value,term:this.value1,name:this.formInline.user,page:this.currentPage4,rows:this.pageSize};this.$post("/basic/sys/tracourseconfig/findCourseConfigList",t).then(function(t){1==t.status&&(e.tableData=t.data.list,e.total=Number(t.data.total)),e.bodyLoading=!1}).catch(function(t){e.bodyLoading=!1})},handleEdit:function(e,t){this.form.classifyName=e.course_id,this.form.remarks=e.grade,this.form.remarks3=e.config_type,this.form.id=e.id;this.userDialogFormVisible=!0,this.isAdd=!1},change:function(e,t){var s=this;this.object=t,this.allteacher(),"教师"===this.roleName?this.$router.push({path:"/Construction/Toconfiguretwo",query:{id:t.course_id,name:t.name,teacherId:localStorage.getItem("userId"),grade:t.grade}}):0===t.config_type?t.leader===localStorage.getItem("userId")?(this.userDialogFormVisible1=!0,this.$router.push({path:"/Construction/Toconfiguretwo",query:{id:t.course_id,name:t.name,teacherId:localStorage.getItem("userId"),grade:t.grade}})):this.$notify({title:"提示",message:"亲！您没有该权限!",type:"warning",duration:1500}):1===t.config_type&&(t.leader===localStorage.getItem("userId")?this.userDialogFormVisible1=!0:t.teams.split(",").forEach(function(e){e===localStorage.getItem("userId")?s.$router.push({path:"/Construction/Toconfiguretwo",query:{id:t.course_id,name:t.name,teacherId:localStorage.getItem("userId"),grade:t.grade}}):s.$notify({title:"提示",message:"亲！您没有该权限!",type:"warning",duration:1500})}))},jump:function(e,t){this.$router.push({path:"/studentside/graduation",query:{id:e,schedulingId:t}})},userDel:function(e){var t=this;this.$deletes("/basic/sys/tracourseconfig/del/"+e).then(function(e){1==e.status?(t.$notify.success({title:"success",duration:1500,message:"删除成功"}),t.getall()):t.$notify.error({title:"error",duration:1500,message:"删除失败"})})},handleDelete:function(e){var t=this;this.$confirm("确定删除该课程?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.userDel(e.id)}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},handleSizeChange:function(e){this.pageSize=e,this.getall()},handleCurrentChange:function(e){this.currentPage4=e,this.getall()}},mounted:function(){this.getall(),this.getcourse(),this.getgrades()}}),o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.bodyLoading,expression:"bodyLoading",modifiers:{body:!0}}],staticClass:"teachers1 padding students"},[s("crumb",{staticStyle:{padding:"0 5px"}},[s("div",{directives:[{name:"havaRole",rawName:"v-havaRole",value:"courseQualityQuestionnaireAdd",expression:"'courseQualityQuestionnaireAdd'"}],staticClass:"new--btn",attrs:{slot:"right"},on:{click:e.openAdd},slot:"right"},[e._v("+ 新建")])]),e._v(" "),s("div",{staticClass:"teachers1-inp"},[s("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[s("span",{staticClass:"ssssss"},[e._v("学年：")]),e._v(" "),s("el-select",{staticClass:"pppp",attrs:{placeholder:"请选择学年"},on:{change:e.luiii},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1),e._v(" "),s("span",{staticClass:"sssss"},[e._v("学期：")]),e._v(" "),s("el-select",{staticClass:"pppp",attrs:{placeholder:"请选择学期"},on:{change:e.termscahnge},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}},e._l(e.options1,function(e){return s("el-option",{key:e.code,attrs:{label:e.value,value:e.code}})}),1),e._v(" "),s("el-form-item",{attrs:{label:"课程搜索："}},[s("el-input",{attrs:{placeholder:"请输入搜索关键词"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),e._v(" "),s("div",{staticClass:"search--btn",staticStyle:{margin:"6px 0 0 20px"},on:{click:e.getall}},[e._v("搜索")])],1)],1),e._v(" "),s("div",{staticClass:"teachers1-tab"},[[s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[s("el-table-column",{attrs:{label:"课程编码"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.code))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"课程名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("div",{staticStyle:{cursor:"pointer"},on:{click:function(s){return e.jump(t.row.course_id,t.row.id)}}},[s("span",[e._v(e._s(t.row.name))])])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"课程分类"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.pname))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"学年"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.grade)+" - "+e._s(Number(t.row.grade)+1)+"学年")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"考核方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",[e._v(e._s(t.row.ppname))])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"配置状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.finish?s("span",[e._v("已配置")]):e._e(),e._v(" "),1==t.row.finish?s("span",[e._v("未配置")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"配置方式",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.config_type?s("span",[e._v("统一配置")]):e._e(),e._v(" "),1==t.row.config_type?s("span",[e._v("单独配置")]):e._e()]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.handleEdit(t.row,e.index)}}},[s("SvgIcon",{attrs:{"icon-class":"iconbianji1"}}),e._v("  编辑\r\n                        ")],1),e._v(" "),s("el-button",{staticStyle:{color:"#ff5858"},attrs:{type:"text",size:"small"},on:{click:function(s){return e.handleDelete(t.row)}}},[s("SvgIcon",{attrs:{"icon-class":"iconshanchu"}}),e._v("  删除\r\n                        ")],1),e._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.change(t.$index,t.row)}}},[s("SvgIcon",{attrs:{"icon-class":"iconkechengshezhi"}}),e._v("  配置考察内容与课程目标关系\r\n                        ")],1)]}}])})],1)]],2),e._v(" "),s("el-dialog",{staticClass:"set-el-dialog",attrs:{title:e.dialogTitle,visible:e.userDialogFormVisible,"before-close":e.handleDialogClose,"close-on-click-modal":!1},on:{"update:visible":function(t){e.userDialogFormVisible=t}}},[s("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[s("el-form-item",{attrs:{label:"选择课程：",prop:"classifyName"}},[s("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择课程",size:"small"},on:{change:e.changgrades},model:{value:e.form.classifyName,callback:function(t){e.$set(e.form,"classifyName",t)},expression:"form.classifyName"}},e._l(e.curriculum,function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),s("el-form-item",{attrs:{label:"选择学年：",prop:"remarks"}},[s("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择学年",size:"small"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}},e._l(e.options2,function(e){return s("el-option",{key:e,attrs:{label:e+" - "+(e+1)+"学年",value:e}})}),1)],1),e._v(" "),s("el-form-item",{attrs:{label:"配置方式：",prop:"remarks3"}},[s("el-radio-group",{model:{value:e.form.remarks3,callback:function(t){e.$set(e.form,"remarks3",t)},expression:"form.remarks3"}},[s("el-radio",{attrs:{label:0}},[e._v("统一配置")]),e._v(" "),s("el-radio",{attrs:{label:1}},[e._v("单独配置")])],1)],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){return e.cancel("form")}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.create("form")}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{staticClass:"set-el-dialog",attrs:{title:"选择教师",visible:e.userDialogFormVisible1,"before-close":e.handleDialogClose1,"close-on-click-modal":!1},on:{"update:visible":function(t){e.userDialogFormVisible1=t}}},e._l(e.teacherlist,function(t,a){return s("div",{key:a,staticClass:"teachers1_name",on:{click:function(s){return e.create1(t)}}},[e._v("\r\n            "+e._s(t.name)+"\r\n        ")])}),0),e._v(" "),s("div",[[s("div",{staticClass:"block"},[s("el-pagination",{attrs:{background:"","current-page":e.currentPage4,"page-sizes":[15,30,40,50],"page-size":e.pageSize,layout:"prev, pager, next, jumper, sizes, total",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)]],2)],1)},staticRenderFns:[]};var n=s("C7Lr")(r,o,!1,function(e){s("599D")},null,null);t.default=n.exports}});
//# sourceMappingURL=105.39348c65cebea3b0c2a9.js.map