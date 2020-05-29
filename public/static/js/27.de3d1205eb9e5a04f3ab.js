webpackJsonp([27],{Cm4t:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("3cXf"),n=a.n(i),r=a("brjS"),s=a("Z+s7"),o={name:"NumberItem",props:{data:{type:Object,default:function(){return{}}},indexVal:{type:Number,default:0}},data:function(){return{}},created:function(){},mounted:function(){},methods:{inputChange:function(){this.$emit("onChange",this.indexVal,this.data)},delItem:function(){this.$emit("onDelete",this.indexVal)}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-item"},[a("el-input",{staticClass:"content-item_input",attrs:{placeholder:""},on:{change:t.inputChange},model:{value:t.data.examine_name,callback:function(e){t.$set(t.data,"examine_name",e)},expression:"data.examine_name"}}),t._v(" "),a("el-input-number",{staticClass:"content-item_number",attrs:{min:0,"controls-position":"right"},on:{change:t.inputChange},model:{value:t.data.ratio,callback:function(e){t.$set(t.data,"ratio",e)},expression:"data.ratio"}}),t._v(" "),a("label",{on:{click:t.delItem}},[a("SvgIcon",{attrs:{"icon-class":"iconqudiao",size:"20px"}})],1)],1)},staticRenderFns:[]};var l=a("C7Lr")(o,c,!1,function(t){a("pLwG")},"data-v-fb006122",null).exports,u={name:"AppraisalMethod",components:{TitleCurmb:r.a,CourseSteps:s.a,NumberItem:l},data:function(){var t=this;return{courseName:this.$route.query.title,loadding:!1,programObjective:[],programObjectiveDelArr:[],tableData:[],form:{programObjective:[],tableData:[]},rules:{programObjective:[{required:!0,validator:function(e,a,i){var n=0;0===t.programObjective.length&&i(new Error("请添加考核方式")),t.programObjective.forEach(function(t){""!==t.examine_name&&""!==t.ratio&&0!==t.ratio||n++}),0===n?i():i(new Error("课课程考核与评价方式不能有空"))},trigger:"blur"}],tableData:[{required:!0,validator:function(e,a,i){var n=0,r=0,s=0;t.tableData.forEach(function(t,e){r+=t.examList.length,t.examList.forEach(function(e,a){s++,""!==t["scale_"+a]&&"0"!==t["scale_"+a]||n++})}),r===s&&0===n?i():0!==n&&i(new Error("考核与评价方式及成绩比例不能有空"))},trigger:"blur"}]},api:{details:function(t){return"/basic/course/setExamPattenView/"+t},getId:function(){return"/basic/courseGoal/getId"},save:function(){return"/basic/course/setExamPatten"}}}},created:function(){this.initData()},mounted:function(){},methods:{initData:function(){var t=this,e=this.api.details(this.$route.query.id);this.$get(e).then(function(e){1===e.status?(t.programObjective=e.data.examList||[],t.programObjective.forEach(function(t){t.changed=1}),t.tableData=e.data.pointCourseGoals||[],t.dataConversionFun("init")):t.$notify.error({title:"error",duration:1500,message:e.message})})},addProgramObjective:function(){var t=this;this.$get(this.api.getId()).then(function(e){var a={examine_name:"",changed:0,ratio:null,examine_id:e};t.programObjective.push(a),t.dataConversionFun("add")})},contentItemChange:function(t,e){this.programObjective[t]=e,this.dataConversionFun("change")},contentItemDel:function(t){var e=this.programObjective.length,a=JSON.parse(n()(this.programObjective[t]));a&&1===a.changed&&(this.programObjective[t].changed=2,this.programObjectiveDelArr.push(this.programObjective[t])),this.programObjective.splice(t,1),this.dataConversionFun("del",t,e)},dataConversionFun:function(t,e,a){var i=this;this.loadding=!1;var r=JSON.parse(n()(this.programObjective));switch(t){case"init":this.tableData.forEach(function(t,e){t.pointCodeContent="支撑毕业要求指标点"+(t.pointCode||""),t.examList=[],t.ratios&&t.ratios.length&&t.ratios.forEach(function(e){r.forEach(function(a,i){e.examId===a.examine_id&&(t["scale_"+i]=e.value)})}),r.forEach(function(e,a){e.title=(e.examine_name||"")+"("+(e.ratio||"")+")",t.ratios&&0!==t.ratios.length||(t["scale_"+a]=t["scale_"+a]||""),t.examList.push(e)})});break;case"add":var s=r.length-1;this.tableData.forEach(function(t,e){t["scale_"+s]="";var a=r[s];a.title="(0)",t.examList.push(a)});break;case"del":this.tableData.forEach(function(t,r){for(var s=JSON.parse(n()(t)),o=0;o<a;o++)o>=e&&(t["scale_"+o]=s["scale_"+(o+1)],t.examList[o]=s.examList[o+1]);delete t["scale_"+(a-1)],i.tableData[r].examList.splice(a-1,1)});break;case"change":this.tableData.forEach(function(t,e){t.pointCodeContent="支撑毕业要求指标点"+(t.pointCode||""),t.examList=[],r.forEach(function(a,n){a.title=a.examine_name+"("+a.ratio+")",t["scale_"+n]=t["scale_"+n]||"",t.examList.push(a),i.$set(i.tableData[e].examList[n],"title",a.examine_name+"("+a.ratio+")")}),i.$set(i.tableData,e,t)})}this.tableData.length&&(this.loadding=!0)},formSubmit:function(t,e){var a=this;"save"===e?(this.$refs[t].resetFields(),this.userSave("save")):this.$refs[t].validate(function(t){t&&a.userSave("next")})},userSave:function(t){var e=this,a=JSON.parse(n()(this.programObjective)).concat(this.programObjectiveDelArr).map(function(t){return{id:t.examine_id,courseId:e.$route.query.id,ratio:t.ratio,examName:t.examine_name,changed:t.changed}}),i=[];this.tableData.forEach(function(t){t.examList.forEach(function(e,a){var n={examId:e.examine_id,goalId:t.goalId,ratio:t["scale_"+a]};i.push(n)})});var r={id:this.$route.query.id,examineList:a,goalExams:i};this.$post(this.api.save(),r).then(function(a){1===a.status?(e.$notify.success({title:"success",duration:1500,message:a.message}),"next"===t?e.$router.push({path:"/Construction/evaluationCriterion",query:{id:e.$route.query.id,title:e.courseName}}):e.initData()):e.$notify.error({title:"error",duration:1500,message:a.message})})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"course-construction"},[a("title-curmb"),t._v(" "),a("course-steps",{attrs:{title:t.courseName,step:4}}),t._v(" "),a("div",{staticClass:"course-construction_body"},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"0"}},[a("h2",[t._v("课程考核与评价方式")]),t._v(" "),a("el-row",[a("el-form-item",{attrs:{prop:"programObjective"}},t._l(t.programObjective,function(e,i){return a("number-item",{key:i,attrs:{data:e,indexVal:i},on:{onChange:t.contentItemChange,onDelete:t.contentItemDel}})}),1),t._v(" "),a("div",{staticClass:"add-step-title add-step-button",on:{click:t.addProgramObjective}},[a("SvgIcon",{attrs:{"icon-class":"icontianjia",size:"20px"}}),a("span",[t._v("添加考核方式")])],1),t._v(" "),a("div",{staticClass:"show-button"},[a("SvgIcon",{attrs:{"icon-class":"iconxiangxiajiantou",size:"12px"}}),t._v("\n                     生成考核与评价方式及成绩比例\n                ")],1)],1),t._v(" "),a("h2",[t._v("考核与评价方式及成绩比例")]),t._v(" "),a("el-row",[a("el-form-item",{attrs:{prop:"tableData"}},[t.loadding?a("table",{staticClass:"el-table el-table--border cc-table  el-table--fit  el-table--enable-row-hover el-table--enable-row-transition",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[a("thead",{staticClass:"has-gutter el-table__header"},[a("tr",[a("th",[a("div",{staticClass:"cell"},[t._v("课程目标")])]),t._v(" "),a("th",[a("div",{staticClass:"cell"},[t._v("毕业要求指标点")])]),t._v(" "),t._l(t.tableData[0].examList,function(e,i){return a("th",{key:i},[a("div",{staticClass:"cell"},[t._v(t._s(e.title))])])})],2)]),t._v(" "),t.loadding?a("tbody",{staticClass:"el-table__body"},t._l(t.tableData,function(e,i){return a("tr",{key:i,staticClass:"el-table__row"},[a("td",[a("div",{staticClass:"cell"},[t._v(t._s(e.goalName))])]),t._v(" "),a("td",[a("div",{staticClass:"cell"},[t._v(t._s(e.pointCodeContent))])]),t._v(" "),t._l(e.examList,function(n,r){return a("td",{key:i+"_"+r},[a("div",{staticClass:"cell"},[a("div",{staticClass:"el-input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e["scale_"+r],expression:"item[`scale_${n}`]"}],staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off",placeholder:""},domProps:{value:e["scale_"+r]},on:{input:function(a){a.target.composing||t.$set(e,"scale_"+r,a.target.value)}}})])])])})],2)}),0):t._e()]):t._e()]),t._v(" "),t.tableData.length?a("p",{staticClass:"b-remark",staticStyle:{"text-align":"right"}},[t._v("注：该表格中比例为课程整体成绩比例。")]):t._e()],1),t._v(" "),a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:6,offset:9}},[a("div",{staticClass:"c-footer"},[a("el-button",{on:{click:function(e){return t.formSubmit("form","save")}}},[t._v("保  存")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.formSubmit("form","next")}}},[t._v("下一步")])],1)])],1)],1)],1)],1)},staticRenderFns:[]};var m=a("C7Lr")(u,d,!1,function(t){a("cbq8")},"data-v-55ff4b78",null);e.default=m.exports},cbq8:function(t,e){},pLwG:function(t,e){}});
//# sourceMappingURL=27.de3d1205eb9e5a04f3ab.js.map