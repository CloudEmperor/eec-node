webpackJsonp([17],{R5OQ:function(r,t,e){r.exports=e.p+"static/img/bottomCloud.83b2a75.png"},ZcVf:function(r,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("3cXf"),o=e.n(s),a=e("M9A7"),n={name:"modifyPassword",data:function(){var r=this;return{userName:"",form:{oldPassword:"",newPassword:"",confirmPassword:""},rules:{oldPassword:[{required:!0,message:"请输入原登录密码",trigger:"blur"}],newPassword:[{required:!0,validator:function(r,t,e){t||e(new Error("设置设置6至20位登录密码")),/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/.test(t)?e():e(new Error("密码6至20位，必须包含字母与数字"))},trigger:"blur"}],confirmPassword:[{required:!0,validator:function(t,e,s){e||s(new Error("请再次输入登录密码")),e===r.form.newPassword?s():s(new Error("两次密码不一致"))},trigger:"blur"}]}}},mounted:function(){this.initData()},methods:{initData:function(){var r=this,t=a.a.userInfo;this.$get(t).then(function(t){1===t.status?r.userName=t.data.userName:r.$notify.error({title:"error",duration:1500,message:t.message})})},submit:function(r){var t=this;this.$refs[r].validate(function(r){if(r){var e=JSON.parse(o()(t.form));t.setPassword(e)}})},setPassword:function(r){var t=this,e=a.a.changePassword;this.$put(e,r).then(function(r){1===r.status?(localStorage.removeItem("x_token"),t.$notify.success({title:"success",duration:1500,message:"修改密码成功请重新登录!"}),t.$nextTick(function(){t.$router.push({path:"/"})})):t.$notify.error({title:"error",duration:1500,message:r.message})})}}},i={render:function(){var r=this,t=r.$createElement,s=r._self._c||t;return s("div",{staticClass:"mainContent"},[s("div",{staticClass:"formContent"},[s("div",{staticClass:"formTitle"},[s("img",{attrs:{src:e("a7wL"),alt:""}}),r._v(" "),s("div",[r._v(r._s(r.userName)+", 初次登陆，请修改密码!")])]),r._v(" "),s("div",{staticClass:"formbody"},[s("el-form",{ref:"form",attrs:{model:r.form,rules:r.rules}},[s("el-form-item",{attrs:{prop:"oldPassword",label:"原登录密码"}},[s("el-input",{attrs:{placeholder:"请输入原登录密码",type:"password"},model:{value:r.form.oldPassword,callback:function(t){r.$set(r.form,"oldPassword",t)},expression:"form.oldPassword"}})],1),r._v(" "),s("el-form-item",{attrs:{prop:"newPassword",label:"新登录密码"}},[s("el-input",{attrs:{autocomplete:"new-password",placeholder:"设置6至20位新登录密码",type:"password"},model:{value:r.form.newPassword,callback:function(t){r.$set(r.form,"newPassword",t)},expression:"form.newPassword"}})],1),r._v(" "),s("el-form-item",{attrs:{prop:"confirmPassword",label:"确认密码"}},[s("el-input",{attrs:{type:"password",autocomplete:"new-password",placeholder:"请再次输入登录密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&r._k(t.keyCode,"enter",13,t.key,"Enter")?null:r.submit("form")}},model:{value:r.form.confirmPassword,callback:function(t){r.$set(r.form,"confirmPassword",t)},expression:"form.confirmPassword"}})],1)],1),r._v(" "),s("el-button",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{type:"primary"},on:{click:function(t){return r.submit("form")}}},[r._v("确定")])],1)]),r._v(" "),s("img",{staticClass:"bottomImg",attrs:{src:e("R5OQ")}})])},staticRenderFns:[]};var d=e("C7Lr")(n,i,!1,function(r){e("j1X7")},"data-v-69b70e12",null);t.default=d.exports},a7wL:function(r,t,e){r.exports=e.p+"static/img/headImg.c24adc4.png"},j1X7:function(r,t){}});
//# sourceMappingURL=17.b999b5eab2011a27bd41.js.map