webpackJsonp([117],{WAIB:function(t,e){},zIdZ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("3cXf"),a=i.n(n),s=i("HzJ8"),o=i.n(s),r=function(){function t(t){var e,i={times:1,num:0};if(e=t,Math.floor(e)===e)return i.num=t,i;var n=t+"",a=n.indexOf("."),s=n.substr(a+1).length,o=Math.pow(10,s),r=parseInt(t*o+.5,10);return i.times=o,i.num=r,i}function e(e,i,n){var a=t(e),s=t(i),o=a.num,r=s.num,c=a.times,u=s.times,l=c>u?c:u;switch(n){case"add":return(c===u?o+r:c>u?o+r*(c/u):o*(u/c)+r)/l;case"subtract":return(c===u?o-r:c>u?o-r*(c/u):o*(u/c)-r)/l;case"multiply":return o*r/(c*u);case"divide":return o/r*(u/c)}}return{add:function(t,i){return e(t,i,"add")},subtract:function(t,i){return e(t,i,"subtract")},multiply:function(t,i){return e(t,i,"multiply")},divide:function(t,i){return e(t,i,"divide")}}}(),c={name:"TestWorld",data:function(){var t=this;return{content:"",falge3:!1,isLoading:!1,AllList:[],videolist:[],course_id:this.$route.query.id,coursename:this.$route.query.coursename,grade:this.$route.query.grade,arrid:"",ruleForm2:{pass:"",checkPass:"",age:""},rules2:{ratio:[{validator:function(e,i,n){var a=[];function s(t){var e=0,i=!0,a=!1,s=void 0;try{for(var c,u=o()(t);!(i=(c=u.next()).done);i=!0){var l=c.value.ratio||0;e=r.add(e,l)}}catch(t){a=!0,s=t}finally{try{!i&&u.return&&u.return()}finally{if(a)throw s}}return 1===e?"next":n(new Error("每道题分目标权重总和等于1"))}t.AllList.forEach(function(t,e){t.contentList.forEach(function(t,i){var n={indexVal:e+"_"+i,contentList:[]};t.newgoalratio.forEach(function(e,i){n.contentList.push({ratio:t["ratio_"+i]||0})}),a.push(n)})});for(var c=0,u=a.length;c<u;c++)if("next"===s(a[c].contentList)){if(!a[c+1]){n();break}s(a[c+1].contentList)}},trigger:"blur"}]}}},methods:{getexamgoal:function(){var t=this;this.$get("/basic/traExamContent/contentBindGoalView/"+this.course_id+"/"+this.$route.query.scheduId).then(function(e){if(1==e.status){var i="";e.data.forEach(function(t){t.contentList.forEach(function(e,n){i=t.titles.length,t.titles&&t.titles.length&&(e.arr=e.ratio,e.newgoalratio=e.goalratio.reverse(),t.titles.forEach(function(t,i){e.newgoalratio.forEach(function(n,a){n.goalId===t.couseGoalId&&(e["ratio_"+i]=n.ratio||0)})}))})}),t.arrid=i,t.AllList=e.data,t.isLoading=!0}})},addExamine:function(t){var e=this,i=JSON.parse(a()(this.AllList[t].titles));this.$get("/basic/courseGoal/getId").then(function(n){var a={name:"",examId:"",newgoalratio:i||[]};a.newgoalratio.forEach(function(t,e){t.goalId=t.couseGoalId,t.contentId=n}),e.AllList[t].contentList.push(a)})},addad:function(){this.falge3=!0},assaf:function(){this.falge3=!1},setCourseDel:function(t,e){var i=this;this.$deletes("/basic/traExamContent/del/"+t).then(function(t){1===t.status?(i.$notify.success({title:"success",duration:1500,message:"删除成功"}),i.getexamgoal()):i.$notify.error({title:"error",duration:1500,message:t.message})}).catch(function(t){console.log(t)})},delratio:function(t,e,i){t.id?this.setCourseDel(t.id,e):(this.$notify.success({title:"success",duration:1500,message:"删除成功"}),this.AllList[i].contentList.splice(e,1))},submit:function(t,e){var i=this;this.$refs[e].validate(function(e){if(e){var n=[];i.AllList.forEach(function(t,e){t.contentList.forEach(function(e,a){e.newgoalratio.forEach(function(a,s){n.push({name:e.name,courseId:i.course_id,examineId:t.examine_id,examGoalId:t.titles[s].couseGoalId,ratio:e["ratio_"+s]||0,id:e.id||"",contentId:a.contentId})})})}),i.$post("/basic/traExamContent/contentBindGoal",n).then(function(e){1===e.status?0===t?(i.getexamgoal(),i.$notify.success({title:"success",duration:1500,message:"保存成功"})):i.$router.push({path:"/Construction/TestPaperConfigurationHb"}):i.$notify.error({title:"error",duration:1500,message:e.message})})}else i.$notify.warning({title:"warning",duration:1500,message:"每道题分目标权重总和等于1"})})}},mounted:function(){this.getexamgoal()}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ToconfigureHubei students"},[t._m(0),t._v(" "),i("div",{staticClass:"ToconfigureHubei-dv1"},[i("h2",[t._v("《"+t._s(t.coursename)+"》课程试卷配置")]),t._v(" "),t._m(1)]),t._v(" "),i("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm2,"status-icon":"",rules:t.rules2}},[i("el-form-item",{attrs:{prop:"ratio"}},[i("div",{staticStyle:{"padding-top":"30px","background-color":"#fff"}},t._l(t.AllList,function(e,n){return i("div",{key:n,staticClass:"ToconfigureHubei-dv2"},[i("h2",{staticClass:"ToconfigureHubei-dv2h2"},[t._v("评价依据"+t._s(n+1)+t._s(e.examine_name)+"考试：考查内容与课程目标对应关系及权重")]),t._v(" "),t.isLoading?i("table",{staticClass:"el-table el-table--border cc-table",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[i("tr",[i("th",{staticStyle:{width:"90px","text-align":"center"}},[t._v("编号")]),t._v(" "),i("th",{staticStyle:{width:"500px","text-align":"center"}},[t._v("考查内容（可以是试卷题号或考查知识点）")]),t._v(" "),t._l(e.titles,function(e,n){return i("th",{key:n,staticStyle:{"padding-left":"20px","text-align":"center"}},[t._v(t._s(e.couseGoalName))])})],2),t._v(" "),t._l(e.contentList,function(a,s){return i("tr",{key:s},[i("td",{staticStyle:{"padding-left":"30px","text-align":"inherit"},on:{mousemove:t.addad,mouseleave:t.assaf}},[t._v(t._s(s+1)+"\n                                "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.falge3,expression:"falge3"}],staticClass:"table-sop"},[i("i",{directives:[{name:"show",rawName:"v-show",value:t.falge3,expression:"falge3"}],staticClass:"el-icon-circle-close ",on:{click:function(e){return t.delratio(a,s,n)}}})])]),t._v(" "),i("td",{staticStyle:{width:"189px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"iteme.name"}],ref:"id",refInFor:!0,staticStyle:{height:"30px","margin-left":"8px",border:"0"},attrs:{type:"text",autofocus:"autofocus"},domProps:{value:a.name},on:{input:function(e){e.target.composing||t.$set(a,"name",e.target.value)}}})]),t._v(" "),t._l(e.titles,function(e,n){return i("td",{key:n},[i("el-input-number",{attrs:{"controls-position":"right",min:0,max:1,placeholder:"权重"},model:{value:a["ratio_"+n],callback:function(e){t.$set(a,"ratio_"+n,e)},expression:"iteme[`ratio_${index}`]"}})],1)})],2)})],2):t._e(),t._v(" "),i("div",{staticClass:"setCourseTitle add-examine-button",on:{click:function(e){return t.addExamine(n)}}},[i("SvgIcon",{staticClass:"setCourseTitle_svg",attrs:{"icon-class":"icontianjia",size:"20px"}}),t._v(" "),i("span",{staticClass:"setCourseTitle_span"},[t._v("添加考查题目")])],1),t._v(" "),i("div",{staticClass:"setCourseTitle tishi"},[t._v("* 每道题分目标权重总和等于1")])])}),0)])],1),t._v(" "),i("div",{staticClass:"ToconfigureHubei-dv3"},[[i("div",{staticClass:"search--btn",staticStyle:{margin:"0 0 0 20px"},on:{click:function(e){return t.submit(t.next=0,"ruleForm2")}}},[t._v("保 存")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit(t.next=1,"ruleForm2")}}},[t._v("提交")])]],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ToconfigureHubei-dv"},[e("span",{staticClass:"spano"},[this._v("试卷配置")]),this._v(" > "),e("span",{staticClass:"spant"},[this._v("配置考查内容与课程目标对应关系")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ToconfigureHubei_dv"},[i("ul",[i("li",[i("span",{staticClass:"ToconfigureHubei_span3"},[t._v("1")]),t._v(" "),i("span",{staticClass:"ToconfigureHubei_span2"},[t._v("课程目标评价依据")])]),t._v(" "),i("li",{staticStyle:{color:"#fff"}},[t._v("••••＞")]),t._v(" "),i("li",[i("span",{staticClass:"ToconfigureHubei_span1"},[t._v("2")]),t._v(" "),i("span",{staticClass:"ToconfigureHubei_span2"},[t._v("考查内容与课程目标对应关系")])])])])}]};var l=i("C7Lr")(c,u,!1,function(t){i("WAIB")},null,null);e.default=l.exports}});
//# sourceMappingURL=117.3235a359ed23879ff3d0.js.map