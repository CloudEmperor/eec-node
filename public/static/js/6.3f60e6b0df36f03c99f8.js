webpackJsonp([6],{"2MGj":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("/NnM"),i=a("poDs"),r=a("LBf5"),n=a("Dvq4"),l={name:"TeacherResults",components:{SeriesBar:i.a,Scatter:r.a,LineMarker:n.a},data:function(){return{falgechange:!1,pageTitle:"成绩分析",activeIndex:0,gradeOptions:[],classOptions:[],targetStr:[],tableHeight:"",gradualColor:[{color:"#03B187",gradual:"#8EE9CA"},{color:"#5AB3FF",gradual:"#B3DCFF"},{color:"#ECEAFF",gradual:"#D5CFFF"}],gradualColorTwo:[{color:"#03B187",gradual:"#8EE9CA"},{color:"#FFA351",gradual:"#FFE098"},{color:"#5AB3FF",gradual:"#B3DCFF"},{color:"#ECEAFF",gradual:"#D5CFFF"}],page:{grade:"",className:[],courseId:"",versionId:localStorage.getItem("versionId")},isShow:!1,list:[],tableData:{},seriesBarData:{},scatterData:[],isScatterShow:!1,seriesBarDataAchievement:{},lineData:{},form:{proposal:"",courseSchedulingId:""},courseAnalysis:[],achievelist:[],teacherlist:[]}},created:function(){},mounted:function(){this.getclass()},methods:{getclass:function(){var t=this,e=localStorage.getItem("userId");this.$get("/teacher/scoreAnalysis/selectCourseListByTreacherId?teacherId="+e).then(function(e){1===e.status&&(t.teacherlist=e.data,t.teacherlist.unshift({id:"",name:"全部 "}))})},cahngejump:function(){this.falgechange=!this.falgechange},initData:function(){var t=this,e=this.page.className.join(","),a={grade:this.page.grade,className:e,courseId:this.page.courseId,versionId:localStorage.getItem("versionId")},i=s.a.scoreAnalysisSelectScore(a);this.$get(i).then(function(e){if(0===e.length)t.isShow=!1,t.$notify.info({duration:1500,message:"未查到您所需要的内容"});else{t.isShow=!0,t.isScatterShow=!0,t.activeIndex=0,t.list=e,t.tableData=e[0],t.form.proposal=t.tableData.proposal,t.form.courseSchedulingId=t.tableData.courseSchedulingId,t.scatterData=t.tableData.scoreGaols,t.achievelist=t.tableData.achieve,t.courseAnalysis=t.tableData.courseAnalysis;var a=[];t.courseAnalysis.forEach(function(t){a.push(t.result.length)}),console.log(Math.max.apply(Math,a),"tmpArr"),Math.max.apply(Math,a)<3?t.tableHeight="130px":t.tableHeight=44*Math.max.apply(Math,a)+44+"px",t.initEchartData()}})},scoreAnalysisGrade:function(t){var e=this,a="/teacher/scoreAnalysis/grade/"+localStorage.getItem("versionId")+"/"+t;this.$get(a).then(function(t){e.gradeOptions=t})},scoreAnalysisClass:function(t){var e=this,a=s.a.scoreAnalysisClass,i={grade:t};this.$get(a,i).then(function(t){e.classOptions=t})},educe:function(){var t=this;this.$get(this.API_URL+"/teacher/courseAnalyze/downmodel?grade=0&classId="+this.tableData.classId+"&courseId="+this.tableData.courseId).then(function(e){window.location.href=t.API_URL+"/teacher/courseAnalyze/downmodel?grade=0&classId="+t.tableData.classId+"&courseId="+t.tableData.courseId}),this.falgechange=!1},educe1:function(){var t=localStorage.getItem("x_token"),e=this.API_URL+"/teacher/courseGoalExport/getCourseDetail?classId="+this.tableData.classId+"&courseId="+this.tableData.courseId+"&x-token="+t;window.location.href=e,this.falgechange=!1},initEchartData:function(){var t={legendData:this.tableData.scoreAnalysis,xAxisData:this.tableData.goals,seriesData:this.tableData.classScore.map(function(t){return{name:t.type,barGap:"5%",data:t.scores}})},e={legendData:this.tableData.achievementAnalysis,xAxisData:this.tableData.goals,seriesData:this.tableData.achievementScore.map(function(t){return{name:t.type,barGap:"5%",data:t.reach}})};this.seriesBarData=t,this.seriesBarDataAchievement=e,this.lineData={xAxisdData:this.tableData.goals,seriesData:this.tableData.achievementScore[0].reach},this.targetStr=this.tableData.achievementScore[1].reach[0]},tabClick:function(t){var e=this;this.isScatterShow=!1,this.scatterData=[],this.activeIndex=t,this.tableData=this.list[t],this.form.proposal=this.tableData.proposal,this.form.courseSchedulingId=this.tableData.courseSchedulingId,this.achievelist=this.tableData.achieve,this.courseAnalysis=this.tableData.courseAnalysis;var a=[];this.courseAnalysis.forEach(function(t){a.push(t.result.length)}),this.tableHeight=44*Math.max.apply(Math,a)+44+"px",this.initEchartData(),setTimeout(function(){e.isScatterShow=!0,e.scatterData=e.tableData.scoreGaols},500)},gradeSelect:function(){this.page.className=[],this.scoreAnalysisClass(this.page.grade)},courseIdSelect:function(){this.scoreAnalysisGrade(this.page.courseId)},search:function(){this.initData()},headInfo:function(t){this.pageTitle=t[1]},scoreAnalysisSaveproposal:function(){var t=this,e=s.a.scoreAnalysisSaveproposal;this.$post(e,this.form).then(function(e){e.success?t.$notify.success({title:"success",duration:1500,message:"提交成功"}):t.$notify.error({title:"error",duration:1500,message:"提交失败"})})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"center",attrs:{id:"teacherResults"}},[s("div",{staticClass:"center_breadcrumb"},[s("Crumb",{on:{headInfo:t.headInfo}})],1),t._v(" "),s("div",{staticClass:"center_content"},[s("div",{staticClass:"center_content_search"},[s("p",{staticClass:"t_p"},[t._v("请先按条件查询您所要查询的学年、班级")]),t._v(" "),s("div",{staticClass:"center_content_search_left t_s"},[s("div",{staticClass:"t_box"},[s("div",{staticClass:"search-input-suffix gap"},[s("label",[t._v("课程名称：")]),t._v(" "),s("el-select",{attrs:{placeholder:"请选择课程名称"},on:{change:t.courseIdSelect},model:{value:t.page.courseId,callback:function(e){t.$set(t.page,"courseId",e)},expression:"page.courseId"}},t._l(t.teacherlist,function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),s("div",{staticClass:"search-input-suffix gap"},[s("label",[t._v("所属学年：")]),t._v(" "),s("el-select",{attrs:{placeholder:"请选择所属学年"},on:{change:t.gradeSelect},model:{value:t.page.grade,callback:function(e){t.$set(t.page,"grade",e)},expression:"page.grade"}},t._l(t.gradeOptions,function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1),t._v(" "),s("div",{staticClass:"search-input-suffix gap"},[s("label",[t._v("所属班级：")]),t._v(" "),s("el-select",{staticStyle:{width:"306px"},attrs:{multiple:"",placeholder:"请先选择所属班级 可多选"},model:{value:t.page.className,callback:function(e){t.$set(t.page,"className",e)},expression:"page.className"}},t._l(t.classOptions,function(t){return s("el-option",{key:t,attrs:{label:t,value:t}})}),1)],1)])]),t._v(" "),s("div",{staticClass:"t_b"},[s("span",{on:{click:t.search}},[t._v("查 询")])])]),t._v(" "),t.isShow?t._e():s("div",{staticClass:"defaultPage"},[s("img",{attrs:{src:a("m82q"),alt:""}}),t._v(" "),s("p",[t._v("选择学年、班级查看分析")])]),t._v(" "),t.isShow?s("div",{staticClass:"teacherResults_tab"},[t._l(t.list,function(e,a){return[s("span",{key:a,staticClass:"t_btn",class:{active:t.activeIndex===a},on:{click:function(e){return t.tabClick(a)}}},[t._v("\r\n                    "+t._s(e.courseName)+"\r\n                ")])]})],2):t._e(),t._v(" "),t.isShow?s("div",{staticClass:"teacherResults_container"},[s("div",{staticClass:"teacherResults_container_body"},[s("div",{staticClass:"teacherResults_container_title"},[s("span",[t._v(t._s(t.tableData.courseName))]),t._v(" "),s("div",{staticStyle:{float:"right",padding:"0px 20px",border:"1px solid rgba(238,238,238,1)","border-radius":"14px","margin-right":"45px",cursor:"pointer","line-height":"28px"},on:{click:t.cahngejump}},[s("SvgIcon",{attrs:{"icon-class":"icondaochu-excel"}}),t._v("  "),s("label",{staticStyle:{"font-size":"14px",color:"#ccc",cursor:"pointer"}},[t._v("导出报告")])],1),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.falgechange,expression:"falgechange"}],staticClass:"teacherResults-dv"},[s("ul",[s("li",{on:{click:t.educe}},[t._v("课程目标达成度计算过程表")]),t._v(" "),s("li",{on:{click:t.educe1}},[t._v("课程质量评价报告")])])])]),t._v(" "),s("div",{staticClass:"teacherResults_container_content"},[s("ul",[s("li",[s("b",[t._v("开课学期:")]),s("span",[t._v(t._s(t.tableData.term))])]),t._v(" "),s("li",[s("b",[t._v("课程类型:")]),s("span",[t._v(t._s(t.tableData.classification))])]),t._v(" "),s("li",[s("b",[t._v("考核方式:")]),s("span",[t._v(t._s(t.tableData.examine))])]),t._v(" "),s("li",[s("b",[t._v("学时:")]),s("span",[t._v(t._s(t.tableData.period))])]),t._v(" "),s("li",[s("b",[t._v("学分:")]),s("span",[t._v(t._s(t.tableData.credit))])]),t._v(" "),s("li",[s("b",[t._v("任课老师:")]),s("span",[t._v(t._s(t.tableData.teacherName))])])])])]),t._v(" "),s("div",{staticClass:"teacherResults_container_body"},[t._m(0),t._v(" "),s("div",{staticClass:"teacherResults_container_content"},[0===t.courseAnalysis.length?s("p",{staticClass:"zanwu"},[t._v("暂无数据")]):t._e(),t._v(" "),t._l(t.courseAnalysis,function(e,a){return s("div",{key:a,staticClass:"graph",staticStyle:{"margin-top":"15px",display:"flex"}},[s("div",{staticClass:"graph_dv1",style:{height:t.tableHeight}},[s("p",{staticClass:"graph_dvp"},[t._v(t._s(e.examType))])]),t._v(" "),s("table",{staticClass:"el-table el-table--border",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[t._m(1,!0),t._v(" "),s("div"),t._v(" "),t._l(e.result,function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.questionName))]),t._v(" "),s("td",[t._v(t._s(e.total))]),t._v(" "),s("td",[t._v(t._s(e.courseGold))]),t._v(" "),s("td",[t._v("毕业要求"+t._s(e.index_point_code))])])})],2)])})],2)]),t._v(" "),s("div",{staticClass:"teacherResults_container_body"},[t._m(2),t._v(" "),s("div",{staticClass:"teacherResults_container_content",staticStyle:{"margin-top":"15px"}},[0===t.achievelist.length?s("p",{staticClass:"zanwu"},[t._v("暂无数据")]):t._e(),t._v(" "),s("div",{staticClass:"graph"},[s("table",{staticClass:"el-table el-table--border",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[t._m(3),t._v(" "),t._l(t.achievelist,function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(e.goalName))]),t._v(" "),s("td",[t._v(t._s(e.totalscore))]),t._v(" "),e.avgscore?s("td",[t._v(t._s(e.avgscore.toFixed(1)))]):t._e(),t._v(" "),e.targetmark?s("td",[t._v(t._s(e.targetmark.toFixed(2)))]):t._e(),t._v(" "),s("td",[t._v(t._s(e.indexPoint))]),t._v(" "),s("td",[t._v(t._s(e.pointMark))])])})],2)])])]),t._v(" "),s("div",{staticClass:"teacherResults_container_body"},[t._m(4),t._v(" "),s("div",{staticClass:"teacherResults_container_content"},[s("p",{staticClass:"small-title"},[t._v("班级整体达成情况")]),t._v(" "),s("div",{staticClass:"graph"},[s("series-bar",{attrs:{id:"bar-1","series-bar-data":t.seriesBarData,chartHeight:"350px",gradual:t.gradualColor}}),t._v(" "),s("p",{staticClass:"sign-name"},[t._v("成绩分析")])],1),t._v(" "),s("div",{staticClass:"graph"},[s("series-bar",{attrs:{id:"bar-2","series-bar-data":t.seriesBarDataAchievement,chartHeight:"350px",gradual:t.gradualColorTwo}}),t._v(" "),s("p",{staticClass:"sign-name"},[t._v("达成情况分析")])],1)])]),t._v(" "),s("div",{staticClass:"teacherResults_container_body"},t._l(t.scatterData,function(e,a){return s("div",{key:a,staticClass:"teacherResults_container_content"},[s("p",{staticClass:"small-title"},[t._v(t._s(e.goalContent))]),t._v(" "),t.isScatterShow?s("div",{staticClass:"graph"},[s("scatter",{attrs:{id:"scatter-"+a,"scatter-data":e.studentScore,"target-data":t.targetStr,chartHeight:"350px"}})],1):t._e()])}),0),t._v(" "),s("div",{staticClass:"teacherResults_container_body"},[t._m(5),t._v(" "),s("div",{staticClass:"teacherResults_container_content"},[s("div",{staticClass:"graph hspace"},[s("el-input",{attrs:{type:"textarea",rows:13,placeholder:"请在此输入您宝贵的意见..."},model:{value:t.form.proposal,callback:function(e){t.$set(t.form,"proposal",e)},expression:"form.proposal"}})],1)])]),t._v(" "),s("div",{staticClass:"teacherResults_container_footer"},[s("div",{staticClass:"submit--btn",on:{click:t.scoreAnalysisSaveproposal}},[t._v("提交")])])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"teacherResults_container_title"},[e("span",[this._v("课程成绩分析")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",{staticStyle:{width:"100px","text-align":"center"}},[this._v("项目")]),this._v(" "),e("th",{staticStyle:{width:"200px","text-align":"center"}},[this._v("考核总分")]),this._v(" "),e("th",{staticStyle:{width:"500px","text-align":"center"}},[this._v("支撑课程教学目标")]),this._v(" "),e("th",{staticStyle:{width:"400px","text-align":"center"}},[this._v("支撑毕业要求和指标点")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"teacherResults_container_title"},[e("span",[this._v("课程达成分析")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("教学目标")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("考核总分")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("考核平均分")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("课程目标达成度")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("支撑毕业要求指标点")]),t._v(" "),a("th",{staticStyle:{width:"400px","text-align":"center"}},[t._v("本课程对该指标点达成度评价值")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"teacherResults_container_title"},[e("span",[this._v("成绩分析")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"teacherResults_container_title"},[e("span",[this._v("改进意见")])])}]};var o=a("C7Lr")(l,c,!1,function(t){a("bJV2")},null,null);e.default=o.exports},CHlS:function(t,e){},Dvq4:function(t,e,a){"use strict";var s=a("WCPx"),i=a.n(s),r={name:"LineMarker",props:{id:{type:String,default:"LineMarker"},chartHeight:{type:String,default:"200px"},chartWidth:{type:String,default:"100%"},lineData:{type:Object,default:function(){return{}}},color:{type:String,default:"#0188fd"}},data:function(){return{chart:null}},created:function(){},mounted:function(){this.initChart()},watch:{seriesBarData:function(t,e){this.initChart()}},methods:{initChart:function(){var t=this;t.chart=i.a.init(document.getElementById(t.id)),t.chart.setOption(t.getSeriesBarOption()),window.addEventListener("resize",function(){t.chart&&t.chart.resize()})},getSeriesBarOption:function(){return{title:{text:"",subtext:""},tooltip:{trigger:"axis",formatter:function(t){return t[0].name+"<br/>"+t[0].marker+"达成度："+t[0].value}},legend:{},toolbox:{show:!0,feature:{saveAsImage:{show:!0,excludeComponents:["toolbox"],pixelRatio:2}}},xAxis:{type:"category",boundaryGap:!1,data:this.lineData.xAxisdData||[],axisLabel:{interval:0,rotate:45}},yAxis:{type:"value",axisLabel:{formatter:"{value}"}},series:[{name:"",type:"line",itemStyle:{normal:{color:this.color,lineStyle:{color:this.color}}},data:this.lineData.seriesData||[]}]}}},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"lineMarker",style:{height:this.chartHeight,width:this.chartWidth},attrs:{id:this.id}})},staticRenderFns:[]};var l=a("C7Lr")(r,n,!1,function(t){a("CHlS")},"data-v-bb49f8a6",null);e.a=l.exports},LBf5:function(t,e,a){"use strict";var s=a("a3Yh"),i=a.n(s),r=a("WCPx"),n=a.n(r),l={name:"Scatter",props:{id:{type:String,default:"scatter"},chartHeight:{type:String,default:"200px"},chartWidth:{type:String,default:"100%"},scatterData:{type:Array,default:function(){return[]}},targetData:{type:String,default:null}},data:function(){return{chart:null}},created:function(){},mounted:function(){this.initChart()},watch:{scatterData:function(t,e){this.initChart()}},methods:{initChart:function(){var t=this;t.chart=n.a.init(document.getElementById(t.id)),t.chart.setOption(t.getSeriesBarOption()),window.addEventListener("resize",function(){t.chart&&t.chart.resize()})},getSeriesBarOption:function(){return{title:{text:""},grid:{left:"3%",right:"7%",bottom:"3%",containLabel:!0},tooltip:{showDelay:0,formatter:function(t){return t.value.length>1?t.name+"<br/>"+t.marker+t.value[0]+": "+t.value[1]:t.name+"<br/>"+t.marker+t.name+": "+t.value},axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}}},toolbox:{show:!0,feature:{saveAsImage:{show:!0,excludeComponents:["toolbox"],pixelRatio:2}}},legend:{},xAxis:[i()({type:"category",name:"姓名",scale:!0,splitLine:{lineStyle:{show:!0,type:"dashed"}},axisLabel:{interval:0,rotate:45,textStyle:{fontSize:12,color:"#4a4a4a"},formatter:"{value}"}},"splitLine",{show:!1})],dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],left:"7%",bottom:-25,start:0,end:90}],yAxis:[{type:"value",name:"达成度",scale:!0,min:function(t){return 0},max:function(t){return t.max<1?1:t.max},axisLabel:{textStyle:{color:"#4a4a4a"},formatter:"{value}"},splitLine:{show:!1}}],color:["rgb(129, 227, 238)"],series:[{name:"",type:"scatter",data:this.scatterData,markArea:{silent:!0,itemStyle:{normal:{color:"transparent",borderWidth:1,borderType:"dashed"}}},markPoint:{data:[{type:"max",symbolSize:50},{type:"min",symbolSize:40}]},markLine:{data:[{type:"average",name:"平均值",lineStyle:{normal:{type:"dashed",color:"#008000"}}},{yAxis:this.targetData,name:"期望值",tooltip:{show:!0,formatter:function(t){return t.name+"<br/>"+t.marker+t.value}},lineStyle:{normal:{type:"dashed",color:"#DC143C"}}}]}}]}}},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"scatter",style:{height:this.chartHeight,width:this.chartWidth},attrs:{id:this.id}})},staticRenderFns:[]};var o=a("C7Lr")(l,c,!1,function(t){a("QXR6")},"data-v-730ad678",null);e.a=o.exports},QXR6:function(t,e){},bJV2:function(t,e){}});
//# sourceMappingURL=6.3f60e6b0df36f03c99f8.js.map