webpackJsonp([3],{CHlS:function(e,t){},Dvq4:function(e,t,a){"use strict";var s=a("WCPx"),i=a.n(s),r={name:"LineMarker",props:{id:{type:String,default:"LineMarker"},chartHeight:{type:String,default:"200px"},chartWidth:{type:String,default:"100%"},lineData:{type:Object,default:function(){return{}}},color:{type:String,default:"#0188fd"}},data:function(){return{chart:null}},created:function(){},mounted:function(){this.initChart()},watch:{seriesBarData:function(e,t){this.initChart()}},methods:{initChart:function(){var e=this;e.chart=i.a.init(document.getElementById(e.id)),e.chart.setOption(e.getSeriesBarOption()),window.addEventListener("resize",function(){e.chart&&e.chart.resize()})},getSeriesBarOption:function(){return{title:{text:"",subtext:""},tooltip:{trigger:"axis",formatter:function(e){return e[0].name+"<br/>"+e[0].marker+"达成度："+e[0].value}},legend:{},toolbox:{show:!0,feature:{saveAsImage:{show:!0,excludeComponents:["toolbox"],pixelRatio:2}}},xAxis:{type:"category",boundaryGap:!1,data:this.lineData.xAxisdData||[],axisLabel:{interval:0,rotate:45}},yAxis:{type:"value",axisLabel:{formatter:"{value}"}},series:[{name:"",type:"line",itemStyle:{normal:{color:this.color,lineStyle:{color:this.color}}},data:this.lineData.seriesData||[]}]}}},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},n={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"lineMarker",style:{height:this.chartHeight,width:this.chartWidth},attrs:{id:this.id}})},staticRenderFns:[]};var l=a("C7Lr")(r,n,!1,function(e){a("CHlS")},"data-v-bb49f8a6",null);t.a=l.exports},LBf5:function(e,t,a){"use strict";var s=a("a3Yh"),i=a.n(s),r=a("WCPx"),n=a.n(r),l={name:"Scatter",props:{id:{type:String,default:"scatter"},chartHeight:{type:String,default:"200px"},chartWidth:{type:String,default:"100%"},scatterData:{type:Array,default:function(){return[]}},targetData:{type:String,default:null}},data:function(){return{chart:null}},created:function(){},mounted:function(){this.initChart()},watch:{scatterData:function(e,t){this.initChart()}},methods:{initChart:function(){var e=this;e.chart=n.a.init(document.getElementById(e.id)),e.chart.setOption(e.getSeriesBarOption()),window.addEventListener("resize",function(){e.chart&&e.chart.resize()})},getSeriesBarOption:function(){return{title:{text:""},grid:{left:"3%",right:"7%",bottom:"3%",containLabel:!0},tooltip:{showDelay:0,formatter:function(e){return e.value.length>1?e.name+"<br/>"+e.marker+e.value[0]+": "+e.value[1]:e.name+"<br/>"+e.marker+e.name+": "+e.value},axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}}},toolbox:{show:!0,feature:{saveAsImage:{show:!0,excludeComponents:["toolbox"],pixelRatio:2}}},legend:{},xAxis:[i()({type:"category",name:"姓名",scale:!0,splitLine:{lineStyle:{show:!0,type:"dashed"}},axisLabel:{interval:0,rotate:45,textStyle:{fontSize:12,color:"#4a4a4a"},formatter:"{value}"}},"splitLine",{show:!1})],dataZoom:[{type:"slider",show:!0,xAxisIndex:[0],left:"7%",bottom:-25,start:0,end:90}],yAxis:[{type:"value",name:"达成度",scale:!0,min:function(e){return 0},max:function(e){return e.max<1?1:e.max},axisLabel:{textStyle:{color:"#4a4a4a"},formatter:"{value}"},splitLine:{show:!1}}],color:["rgb(129, 227, 238)"],series:[{name:"",type:"scatter",data:this.scatterData,markArea:{silent:!0,itemStyle:{normal:{color:"transparent",borderWidth:1,borderType:"dashed"}}},markPoint:{data:[{type:"max",symbolSize:50},{type:"min",symbolSize:40}]},markLine:{data:[{type:"average",name:"平均值",lineStyle:{normal:{type:"dashed",color:"#008000"}}},{yAxis:this.targetData,name:"期望值",tooltip:{show:!0,formatter:function(e){return e.name+"<br/>"+e.marker+e.value}},lineStyle:{normal:{type:"dashed",color:"#DC143C"}}}]}}]}}},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"scatter",style:{height:this.chartHeight,width:this.chartWidth},attrs:{id:this.id}})},staticRenderFns:[]};var c=a("C7Lr")(l,o,!1,function(e){a("QXR6")},"data-v-730ad678",null);t.a=c.exports},LLCv:function(e,t){},QXR6:function(e,t){},ataE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("a3Yh"),i=a.n(s),r=a("/NnM"),n=a("poDs"),l=a("3cXf"),o=a.n(l),c={props:{value:{type:Boolean,default:!1},courseData:{type:Array,default:[]},indexVal:{type:Number,default:""}},data:function(){return{checkAll:!1,checkAll1:!1,checkedCities:[],checkedCities1:[],cities:[],citiesarr:[],citiesmin:[],isIndeterminate:!0,isIndeterminate1:!0,dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},watch:{value:function(e){e&&this.resetTemps(this.courseData,this.indexVal),this.dialogFormVisible=e}},methods:{handleCheckAllChange:function(e){var t=[];this.citiesarr.forEach(function(e){t.push(e.val)}),this.checkedCities=e?t:[],this.isIndeterminate=!1},handleCheckAllChange1:function(e){var t=[];this.citiesmin.forEach(function(e){t.push(e.val)}),this.checkedCities1=e?t:[],this.isIndeterminate1=!1},handleCheckedCitiesChange:function(e){var t=e.length;this.checkAll=t===this.citiesarr.length,this.isIndeterminate=t>0&&t<this.citiesarr.length},handleCheckedCitiesChange1:function(e){var t=e.length;this.checkAll1=t===this.citiesmin.length,this.isIndeterminate1=t>0&&t<this.citiesmin.length},setCourseCancel:function(e){this.dialogFormVisible=!1,this.$emit("close",!1)},setCourseCreate:function(e){var t=this.checkedCities.concat(this.checkedCities1),a=[];this.courseData[this.indexVal].newstudentScore.forEach(function(e){t.forEach(function(t){t===e[0]&&a.push([e[0],e[1]])})}),this.courseData[this.indexVal].studentScore=a;var s=JSON.parse(o()(this.courseData));this.$emit("success",s),this.setCourseCancel("form")},haddTheTestClose:function(){this.dialogFormVisible=!1,this.$emit("close",!1)},resetTemps:function(e,t){var a=[],s=[],i=[],r=[];e.forEach(function(e,n){n===t&&(e.newstudentScore.forEach(function(t){Number(e.target)<=Number(t[1])?a.push({id:Number(t[1]),val:t[0]}):s.push({id:Number(t[1]),val:t[0]})}),e.studentScore.forEach(function(t){Number(e.target)<=Number(t[1])?i.push(t[0]):r.push(t[0])}))}),this.checkedCities=i,this.checkedCities1=r,this.citiesarr=a,this.citiesmin=s,this.checkedCities.length&&this.checkedCities.length===this.citiesarr.length?(this.isIndeterminate=!1,this.checkAll=!0):this.checkedCities.length&&this.checkedCities.length<this.citiesarr.length?(this.isIndeterminate=!0,this.checkAll=!1):(this.isIndeterminate=!1,this.checkAll=!1),this.checkedCities1.length&&this.checkedCities1.length===this.citiesmin.length?(this.isIndeterminate1=!1,this.checkAll1=!0):this.checkedCities1.length&&this.checkedCities1.length<this.citiesmin.length?(this.isIndeterminate1=!0,this.checkAll1=!1):(this.isIndeterminate1=!1,this.checkAll1=!1)}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"screeing"},[a("el-dialog",{attrs:{title:"筛选样本学生",visible:e.dialogFormVisible,"before-close":e.haddTheTestClose},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"已达成学生"}},[[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" "),a("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),a("el-checkbox-group",{staticStyle:{"margin-left":"82px"},on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(t){e.checkedCities=t},expression:"checkedCities"}},e._l(e.citiesarr,function(t){return a("el-checkbox",{key:t.val,attrs:{label:t.val}},[e._v(e._s(t.val))])}),1)]],2),e._v(" "),a("el-form-item",{attrs:{label:"未达成学生"}},[[a("el-checkbox",{attrs:{indeterminate:e.isIndeterminate1},on:{change:e.handleCheckAllChange1},model:{value:e.checkAll1,callback:function(t){e.checkAll1=t},expression:"checkAll1"}},[e._v("全选")]),e._v(" "),a("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),a("el-checkbox-group",{staticStyle:{"margin-left":"82px"},on:{change:e.handleCheckedCitiesChange1},model:{value:e.checkedCities1,callback:function(t){e.checkedCities1=t},expression:"checkedCities1"}},e._l(e.citiesmin,function(t){return a("el-checkbox",{key:t.val,attrs:{label:t.val}},[e._v(e._s(t.val))])}),1)]],2)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.setCourseCancel("form")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.setCourseCreate("form")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var d=a("C7Lr")(c,h,!1,function(e){a("LLCv")},"data-v-7ff0a406",null).exports,u=a("LBf5"),g=a("Dvq4"),m=a("aA9S"),v=a.n(m),f=a("WCPx"),p=a.n(f),_={name:"SeriesBar",props:{id:{type:String,default:"seriesBar"},chartHeight:{type:String,default:"300px"},chartWidth:{type:String,default:"100%"},seriesBarData:{type:Object,default:function(){return{}}},color:{type:Array,default:function(){return["#03B187","#5AB3FF","#D5CFFF"]}},gradual:{type:Array,default:function(){return[{color:"#8EE9CA",gradual:"#03B187"},{color:"#B3DCFF",gradual:"#5AB3FF"},{color:"#ECEAFF",gradual:"#D5CFFF"},{color:"#ECEAFF",gradual:"#D5CFFF"}]}},labelShow:{type:Boolean,default:!1},isMax:{type:Boolean,default:!1},isMin:{type:Boolean,default:!1}},data:function(){return{chart:null,labelOption:{normal:{show:!1,position:"insideBottom",distance:15,align:"left",verticalAlign:"middle",rotate:90,formatter:"{c}",fontSize:12,rich:{name:{textBorderColor:"#fff"}}}}}},created:function(){},mounted:function(){this.initChart()},watch:{seriesBarData:function(e,t){this.initChart()}},methods:{initChart:function(){var e=this;e.chart=p.a.init(document.getElementById(e.id)),e.chart.setOption(e.getSeriesBarOption()),window.addEventListener("resize",function(){e.chart&&e.chart.resize()})},getSeriesBarOption:function(){return this.labelOption.normal.show=this.labelShow,{color:this.color,tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(142,233,202,0.2)"}}},title:{text:this.seriesBarData.title||[],textStyle:{color:"#696969",fontSize:14}},legend:{right:21,top:0,data:this.seriesBarData.legendData||[],textStyle:{color:this.color}},grid:{left:"0.5%",right:"0.5%",bottom:"10%",containLabel:!0},calculable:!0,xAxis:[{type:"category",axisLine:{show:!1,lineStyle:{color:"#aaa"}},axisTick:{show:!1},data:this.seriesBarData.xAxisData||[],axisLabel:{interval:0,rotate:this.seriesBarData.xAxisData.length>8?45:0}}],yAxis:[{type:"value",axisLine:{show:!1,lineStyle:{color:"#aaa"}},axisTick:{show:!1},min:this.isMax?function(e){return 0}:void 0,max:this.isMax?function(e){return 1}:void 0}],series:this.seriesInitFn()}},seriesInitFn:function(){function e(){return"#"+("00000"+parseInt(Math.random()*Math.pow(32,4)).toString(16)).substr(-4)}var t=JSON.parse(o()(this.seriesBarData.seriesData||[])),a={type:"bar",barWidth:30,label:this.labelOption},s=this.gradual;if(this.gradual.length<t.length)for(var i=t.length-this.gradual.length,r=0;r<i;r++)s.push({color:e(),gradual:e()});return t.forEach(function(e,t){e.barGap="0",e.itemStyle={normal:{barBorderRadius:[5,5,0,0],color:new p.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s[t].gradual},{offset:1,color:s[t].color}],!1)}},v()(e,a)}),t}},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},b={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"seriesBar",style:{height:this.chartHeight,width:this.chartWidth},attrs:{id:this.id}})},staticRenderFns:[]};var C=a("C7Lr")(_,b,!1,function(e){a("nSV3")},"data-v-450ff489",null).exports,x={props:{value:{type:Boolean,default:!1}},components:{echarts7:C},data:function(){return{seriesBarData:{},dialogFormVisible:!1,form:{year:""},yearlist:[{id:"1",name:"2014-2015学年"},{id:"2",name:"2015-2016学年"},{id:"3",name:"2016-2017学年"}],ComparisonYearslist:[{examine:"总览：《汽车试验与测试技术》课程历年达成情况",examineId:"628280854518431744",success:200,table:[{examName:"2015-2016学年",relations:[{goalId:"0",goalName:"学年",ke:"2015-2016学年"},{goalId:"1",goalName:"课程目标1",ke:.7},{goalId:"2",goalName:"课程目标2",ke:.7},{goalId:"3",goalName:"课程目标3",ke:.7},{goalId:"4",goalName:"课程目标4",ke:.7}]},{examName:"2015-2016学年",relations:[{goalId:"0",goalName:"学年",ke:"2015-2016学年"},{goalId:"1",goalName:"课程目标1",ke:.7},{goalId:"2",goalName:"课程目标2",ke:.7},{goalId:"3",goalName:"课程目标3",ke:.7},{goalId:"4",goalName:"课程目标4",ke:.7}]},{examName:"2015-2016学年",relations:[{goalId:"0",goalName:"学年",ke:"2015-2016学年"},{goalId:"1",goalName:"课程目标1",ke:.7},{goalId:"2",goalName:"课程目标2",ke:.7},{goalId:"3",goalName:"课程目标3",ke:.7},{goalId:"4",goalName:"课程目标4",ke:.7}]}]},{examine:"总览：《汽车试验与测试技术》课程历年达成情况",examineId:"628280854518431744",success:200,table:[{examName:"2015-2016学年",relations:[{goalId:"0",goalName:"学年",ke:"2015-2016学年"},{goalId:"1",goalName:"总分",ke:.7},{goalId:"2",goalName:"平均分",ke:.7},{goalId:"3",goalName:"达成度",ke:.7},{goalId:"4",goalName:"达成比例",ke:.7}]},{examName:"2015-2016学年",relations:[{goalId:"0",goalName:"学年",ke:"2015-2016学年"},{goalId:"1",goalName:"课程目标1",ke:.7},{goalId:"2",goalName:"课程目标2",ke:.7},{goalId:"3",goalName:"课程目标3",ke:.7},{goalId:"4",goalName:"课程目标4",ke:.7}]},{examName:"2015-2016学年",relations:[{goalId:"0",goalName:"学年",ke:"2015-2016学年"},{goalId:"1",goalName:"课程目标1",ke:.7},{goalId:"2",goalName:"课程目标2",ke:.7},{goalId:"3",goalName:"课程目标3",ke:.7},{goalId:"4",goalName:"课程目标4",ke:.7}]}]}]}},created:function(){},mounted:function(){this.ComparisonYearslist.forEach(function(e){e.tableHeader=JSON.parse(o()(e.table[0].relations))}),this.getecharts()},watch:{value:function(e){this.dialogFormVisible=e}},methods:{haddTheTestClose:function(){this.dialogFormVisible=!1,this.$emit("close",!1)},courseIdSelect:function(){},getecharts:function(){var e=[{legendData:"历年达成情况对比",name:"课程目标 1",point:"指标点1-3",marks:[{goalmark:.4,grade:2016},{goalmark:.5,grade:2017},{goalmark:.61718372,grade:2018}]},{legendData:"历年达成情况对比",name:"课程目标 2",point:"指标点1-3",marks:[{goalmark:.6,grade:2016},{goalmark:.4,grade:2017},{goalmark:.2,grade:2018}]},{legendData:"历年达成情况对比",name:"课程目标 3",point:"指标点1-3",marks:[{goalmark:.61718372,grade:2016},{goalmark:.7,grade:2017},{goalmark:.8,grade:2018}]}];if(e){var t=[],a=[],s=[];e.forEach(function(e,i){a.push(e.name),0===i?e.marks.forEach(function(e,a){s.push(String(e.grade)+"-"+Number(e.grade+1)+"学年"),t.push({grade:e.grade,children:[e.goalmark]})}):e.marks.forEach(function(e,a){t.forEach(function(t,a){e.grade===t.grade&&t.children.push(e.goalmark)})})});var i={title:"历年达成情况对比",legendData:s,xAxisData:a,seriesData:s.map(function(e){return{name:e,barGap:"0",data:[]}})};t.forEach(function(e,t){i.seriesData[t].data=e.children}),this.seriesBarData=i}}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"set-course ComparisonYears"},[a("el-dialog",{staticClass:"set-el-dialog set-course-dialog",attrs:{title:"历年数据对比",visible:e.dialogFormVisible,"before-close":e.haddTheTestClose,width:"80%"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("div",{staticClass:"search-input-suffix gap",staticStyle:{display:"inline-block",position:"absolute",left:"140px",top:"17px"}},[a("el-select",{attrs:{placeholder:"请选择年级"},on:{change:e.courseIdSelect},model:{value:e.form.year,callback:function(t){e.$set(e.form,"year",t)},expression:"form.year"}},e._l(e.yearlist,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),e._l(e.ComparisonYearslist,function(t,s){return a("div",{key:s,staticClass:"ComparisonYears_dv"},[a("p",{staticClass:"ComparisonYears_p"},[a("span",{staticClass:"ComparisonYears_spanone"}),e._v(" "),a("span",{staticClass:"ComparisonYears_sapntwo"},[e._v(e._s(t.examine))])]),e._v(" "),a("div",{staticClass:"teacherResults_container_content"},[a("div",{staticClass:"graph",staticStyle:{"margin-top":"15px",display:"flex"}},[a("table",{staticClass:"el-table el-table--border",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[a("colgroup",[a("col"),e._v(" "),a("col"),e._v(" "),e._l(t.tableHeader,function(e,t){return a("col",{key:t})})],2),e._v(" "),a("tr",e._l(t.tableHeader,function(t,s){return a("th",{key:s,staticStyle:{width:"100px","text-align":"center"}},[e._v(e._s(t.goalName))])}),0),e._v(" "),e._l(t.table,function(t,s){return a("tr",{key:s},e._l(t.relations,function(t,s){return a("td",{key:s},[e._v("\r\n                                "+e._s(t.ke)+"\r\n                            ")])}),0)})],2)])]),e._v(" "),0==s?a("div",{staticClass:"ComparisonYears_echarts"},[a("echarts7",{attrs:{id:"sbilityQueryBar","series-bar-data":e.seriesBarData,isMax:!0,isMin:!0}})],1):e._e()])})],2)],1)},staticRenderFns:[]};var k,D=a("C7Lr")(x,y,!1,function(e){a("uvXQ")},null,null).exports,S={name:"TeacherResults",components:{SeriesBar:n.a,Screeningtree:d,Scatter:u.a,LineMarker:g.a,ComparisonYears:D},data:function(){return{setCourseDialogFormVisible:!1,setCourseData:[],indexval:0,ComparisonYearsshow:!1,falgechange:!1,pageTitle:"成绩分析",activeIndex:0,gradeOptions:[],classOptions:[],targetStr:[],tableHeight:"",gradualColor:[{color:"#03B187",gradual:"#8EE9CA"},{color:"#5AB3FF",gradual:"#B3DCFF"},{color:"#ECEAFF",gradual:"#D5CFFF"}],gradualColorTwo:[{color:"#03B187",gradual:"#8EE9CA"},{color:"#FFA351",gradual:"#FFE098"},{color:"#5AB3FF",gradual:"#B3DCFF"},{color:"#ECEAFF",gradual:"#D5CFFF"}],page:{grade:"",className:[],courseId:"",versionId:localStorage.getItem("versionId")},isShow:!1,list:[],tableData:{},seriesBarData:{},scatterData:[],newscatterData:[],isScatterShow:!1,seriesBarDataAchievement:{},lineData:{},form:{proposal:"",courseSchedulingId:""},courseAnalysis:[],achievelist:[],teacherlist:[],newAchievement:[]}},created:function(){},mounted:function(){this.getclass()},methods:(k={showyear:function(){this.ComparisonYearsshow=!0},closeSetCourseDialog:function(e){this.ComparisonYearsshow=e},getclass:function(){var e=this,t=localStorage.getItem("userId");this.$get("/teacher/scoreAnalysis/selectCourseListByTreacherId?teacherId="+t).then(function(t){1===t.status&&(e.teacherlist=t.data,e.teacherlist.unshift({id:"",name:"全部 "}))})},setRow:function(e,t){this.setCourseData=e,this.indexval=t,this.setCourseDialogFormVisible=!0}},i()(k,"closeSetCourseDialog",function(e){this.setCourseDialogFormVisible=e}),i()(k,"successSetCourseDialog",function(e){this.isScatterShow=!0,this.scatterData=e}),i()(k,"cahngejump",function(){this.falgechange=!this.falgechange}),i()(k,"initData",function(){var e=this,t=this.page.className.join(","),a={grade:this.page.grade,className:t,courseId:this.page.courseId,versionId:localStorage.getItem("versionId")},s=r.a.scoreAnalysisSelectScore(a);this.$get(s).then(function(t){if(0===t.length)e.isShow=!1,e.$notify.info({duration:1500,message:"未查到您所需要的内容"});else{e.isShow=!0,e.isScatterShow=!0,e.activeIndex=0,e.list=t,e.tableData=t[0],e.tableData.scoreGaols.forEach(function(e){e.newstudentScore=e.studentScore}),e.form.proposal=e.tableData.proposal,e.form.courseSchedulingId=e.tableData.courseSchedulingId,e.scatterData=e.tableData.scoreGaols,e.achievelist=e.tableData.achieve||null,e.courseAnalysis=e.tableData.courseAnalysis||null;var a=e.tableData.newAchievement||[];a.forEach(function(e){e.degree=0,e.goaldata.forEach(function(t){var a=t.avgscore/t.totalscore,s=Number(t.avgmark)*t.ratio;t.markDegree=a.toFixed(3),e.degree+=s}),e.degree=e.degree.toFixed(2)}),e.newAchievement=a;var s=[];e.courseAnalysis.forEach(function(e){s.push(e.result.length)}),e.tableHeight=44*Math.max.apply(Math,s)+44+"px",e.initEchartData()}})}),i()(k,"scoreAnalysisGrade",function(e){var t=this,a="/teacher/scoreAnalysis/grade/"+localStorage.getItem("versionId")+"/"+e;this.$get(a).then(function(e){t.gradeOptions=e})}),i()(k,"scoreAnalysisClass",function(e){var t=this,a=r.a.scoreAnalysisClass,s={grade:e,courseId:this.page.courseId};this.$get(a,s).then(function(e){t.classOptions=e})}),i()(k,"educe",function(){var e=this;this.$get(this.API_URL+"/teacher/courseAnalyze/downmodel?grade=0&classId="+this.tableData.classId+"&courseId="+this.tableData.courseId).then(function(t){window.location.href=e.API_URL+"/teacher/courseAnalyze/downmodel?grade=0&classId="+e.tableData.classId+"&courseId="+e.tableData.courseId}),this.falgechange=!1}),i()(k,"educe1",function(){var e=localStorage.getItem("x_token"),t=this.API_URL+"/teacher/courseGoalExport/getCourseDetailHb?classId="+this.tableData.classId+"&courseId="+this.tableData.courseId+"&x-token="+e;window.location.href=t,this.falgechange=!1}),i()(k,"initEchartData",function(){var e={legendData:this.tableData.scoreAnalysis,xAxisData:this.tableData.goals,seriesData:this.tableData.classScore.map(function(e){return{name:e.type,barGap:"5%",data:e.scores}})},t={legendData:this.tableData.achievementAnalysis,xAxisData:this.tableData.goals,seriesData:this.tableData.achievementScore.map(function(e){return{name:e.type,barGap:"5%",data:e.reach}})};this.seriesBarData=e,this.seriesBarDataAchievement=t,this.lineData={xAxisdData:this.tableData.goals,seriesData:this.tableData.achievementScore[0].reach},this.targetStr=this.tableData.achievementScore[1].reach[0]}),i()(k,"tabClick",function(e){var t=this;this.isScatterShow=!1,this.scatterData=[],this.activeIndex=e,this.tableData=this.list[e],this.form.proposal=this.tableData.proposal,this.form.courseSchedulingId=this.tableData.courseSchedulingId,this.achievelist=this.tableData.achieve||null,this.courseAnalysis=this.tableData.courseAnalysis||null;var a=this.tableData.newAchievement||[];a.forEach(function(e){e.degree=0,e.goaldata.forEach(function(t){var a=t.avgscore/t.totalscore,s=Number(t.avgmark)*t.ratio;t.markDegree=a.toFixed(3),e.degree+=s}),e.degree=e.degree.toFixed(2)}),this.newAchievement=a;var s=[];this.courseAnalysis.forEach(function(e){s.push(e.result.length)}),this.tableHeight=44*Math.max.apply(Math,s)+44+"px",this.initEchartData(),setTimeout(function(){t.isScatterShow=!0,t.scatterData=t.tableData.scoreGaols,t.scatterData1=t.tableData.scoreGaols},500)}),i()(k,"gradeSelect",function(){this.page.className=[],this.scoreAnalysisClass(this.page.grade)}),i()(k,"courseIdSelect",function(){this.scoreAnalysisGrade(this.page.courseId)}),i()(k,"search",function(){this.initData()}),i()(k,"headInfo",function(e){this.pageTitle=e[1]}),i()(k,"scoreAnalysisSaveproposal",function(){var e=this,t=r.a.scoreAnalysisSaveproposal;this.$post(t,this.form).then(function(t){t.success?e.$notify.success({title:"success",duration:1500,message:"提交成功"}):e.$notify.error({title:"error",duration:1500,message:"提交失败"})})}),k)},I={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"center",attrs:{id:"teacherResults"}},[s("div",{staticClass:"center_breadcrumb"},[s("Crumb",{on:{headInfo:e.headInfo}})],1),e._v(" "),s("div",{staticClass:"center_content"},[s("div",{staticClass:"center_content_search"},[s("p",{staticClass:"t_p"},[e._v("请先按条件查询您所要查询的学年、班级")]),e._v(" "),s("div",{staticClass:"center_content_search_left t_s"},[s("div",{staticClass:"t_box"},[s("div",{staticClass:"search-input-suffix gap"},[s("label",[e._v("课程名称：")]),e._v(" "),s("el-select",{attrs:{placeholder:"请选择课程名称"},on:{change:e.courseIdSelect},model:{value:e.page.courseId,callback:function(t){e.$set(e.page,"courseId",t)},expression:"page.courseId"}},e._l(e.teacherlist,function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),s("div",{staticClass:"search-input-suffix gap"},[s("label",[e._v("所属学年：")]),e._v(" "),s("el-select",{attrs:{placeholder:"请选择所属学年"},on:{change:e.gradeSelect},model:{value:e.page.grade,callback:function(t){e.$set(e.page,"grade",t)},expression:"page.grade"}},e._l(e.gradeOptions,function(e){return s("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1),e._v(" "),s("div",{staticClass:"search-input-suffix gap"},[s("label",[e._v("所属班级：")]),e._v(" "),s("el-select",{staticStyle:{width:"306px"},attrs:{multiple:"",placeholder:"请先选择所属班级 可多选"},model:{value:e.page.className,callback:function(t){e.$set(e.page,"className",t)},expression:"page.className"}},e._l(e.classOptions,function(e){return s("el-option",{key:e,attrs:{label:e,value:e}})}),1)],1)])]),e._v(" "),s("div",{staticClass:"t_b"},[s("span",{on:{click:e.search}},[e._v("查 询")])])]),e._v(" "),e.isShow?e._e():s("div",{staticClass:"defaultPage"},[s("img",{attrs:{src:a("m82q"),alt:""}}),e._v(" "),s("p",[e._v("选择学年、班级查看分析")])]),e._v(" "),e.isShow?s("div",{staticClass:"teacherResults_tab"},[e._l(e.list,function(t,a){return[s("span",{key:a,staticClass:"t_btn",class:{active:e.activeIndex===a},on:{click:function(t){return e.tabClick(a)}}},[e._v("\r\n                    "+e._s(t.courseName)+"\r\n                ")])]})],2):e._e(),e._v(" "),e.isShow?s("div",{staticClass:"teacherResults_container"},[s("div",{staticClass:"teacherResults_container_body"},[s("div",{staticClass:"teacherResults_container_title"},[s("span",[e._v(e._s(e.tableData.courseName))]),e._v(" "),s("div",{staticStyle:{float:"right",padding:"0px 20px",border:"1px solid rgba(238,238,238,1)","border-radius":"14px","margin-right":"45px",cursor:"pointer","line-height":"28px"},on:{click:e.cahngejump}},[s("SvgIcon",{attrs:{"icon-class":"icondaochu-excel"}}),e._v("  "),s("label",{staticStyle:{"font-size":"14px",color:"#ccc",cursor:"pointer"}},[e._v("导出报告")])],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.falgechange,expression:"falgechange"}],staticClass:"teacherResults-dv"},[s("ul",[s("li",{on:{click:e.educe}},[e._v("课程目标达成度计算过程表")]),e._v(" "),s("li",{on:{click:e.educe1}},[e._v("课程质量评价报告")])])])]),e._v(" "),s("div",{staticClass:"teacherResults_container_content"},[s("ul",[s("li",[s("b",[e._v("开课学期:")]),s("span",[e._v(e._s(e.tableData.term))])]),e._v(" "),s("li",[s("b",[e._v("课程类型:")]),s("span",[e._v(e._s(e.tableData.classification))])]),e._v(" "),s("li",[s("b",[e._v("考核方式:")]),s("span",[e._v(e._s(e.tableData.examine))])]),e._v(" "),s("li",[s("b",[e._v("学时:")]),s("span",[e._v(e._s(e.tableData.period))])]),e._v(" "),s("li",[s("b",[e._v("学分:")]),s("span",[e._v(e._s(e.tableData.credit))])]),e._v(" "),s("li",[s("b",[e._v("任课老师:")]),s("span",[e._v(e._s(e.tableData.teacherName))])])])])]),e._v(" "),e._l(e.newAchievement,function(t,a){return s("div",{key:a,staticClass:"teacherResults_container_body"},[s("div",{staticClass:"teacherResults_container_title"},[s("span",[e._v(e._s(t.goalname))])]),e._v(" "),s("div",{staticClass:"teacherResults_container_content",staticStyle:{"margin-top":"15px"}},[0===t.goaldata.length?s("p",{staticClass:"zanwu"},[e._v("暂无数据")]):e._e(),e._v(" "),t.goaldata.length?s("div",{staticClass:"graph"},[s("table",{staticClass:"el-table el-table--border goal-table",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[e._m(0,!0),e._v(" "),e._l(t.goaldata,function(a,i){return s("tr",{key:i},[s("td",[e._v(e._s(a.examine_name)+"("+e._s(a.ratio)+")")]),e._v(" "),s("td",[e._v(e._s(a.contentName))]),e._v(" "),s("td",[e._v(e._s(a.totalscore))]),e._v(" "),s("td",[e._v(e._s(a.avgscore))]),e._v(" "),s("td",[e._v(e._s(a.markDegree?a.markDegree:""))]),e._v(" "),s("td",{staticStyle:{color:"#03b187","font-size":"18px"},attrs:{rowspan:t.goaldata.length}},[e._v("\r\n                                    "+e._s(0===i&&t.degree?t.degree:"")+"\r\n                                ")])])})],2)]):e._e()])])}),e._v(" "),s("div",{staticClass:"teacherResults_container_body"},[e._m(1),e._v(" "),s("div",{staticClass:"teacherResults_container_content"},[s("p",{staticClass:"small-title"},[e._v("班级整体达成情况")]),e._v(" "),s("div",{staticClass:"graph"},[s("series-bar",{attrs:{id:"bar-1","series-bar-data":e.seriesBarData,chartHeight:"350px",gradual:e.gradualColor}}),e._v(" "),s("p",{staticClass:"sign-name"},[e._v("成绩分析")])],1),e._v(" "),s("div",{staticClass:"graph"},[s("series-bar",{attrs:{id:"bar-2","series-bar-data":e.seriesBarDataAchievement,chartHeight:"350px",gradual:e.gradualColorTwo}}),e._v(" "),s("p",{staticClass:"sign-name"},[e._v("达成情况分析")])],1)])]),e._v(" "),s("div",{staticClass:"teacherResults_container_body"},e._l(e.scatterData,function(t,a){return s("div",{key:a,staticClass:"teacherResults_container_content"},[s("p",{staticClass:"small-title"},[e._v(e._s(t.goalContent))]),e._v(" "),s("p",{staticClass:"screen_dv",on:{click:function(t){return e.setRow(e.scatterData,a)}}},[e._v("筛选")]),e._v(" "),e.isScatterShow?s("div",{staticClass:"graph"},[s("scatter",{attrs:{id:"scatter-"+a,"scatter-data":t.studentScore,"target-data":e.targetStr,chartHeight:"350px"}})],1):e._e(),e._v(" "),s("Screeningtree",{attrs:{"course-data":e.setCourseData,"index-val":e.indexval},on:{close:e.closeSetCourseDialog,success:e.successSetCourseDialog},model:{value:e.setCourseDialogFormVisible,callback:function(t){e.setCourseDialogFormVisible=t},expression:"setCourseDialogFormVisible"}})],1)}),0),e._v(" "),s("div",{staticClass:"teacherResults_container_body"},[e._m(2),e._v(" "),s("div",{staticClass:"teacherResults_container_content"},[s("div",{staticClass:"graph hspace"},[s("el-input",{attrs:{type:"textarea",rows:13,placeholder:"请在此输入您宝贵的意见..."},model:{value:e.form.proposal,callback:function(t){e.$set(e.form,"proposal",t)},expression:"form.proposal"}})],1)])]),e._v(" "),s("div",{staticClass:"teacherResults_container_footer"},[s("div",{staticClass:"submit--btn",on:{click:e.scoreAnalysisSaveproposal}},[e._v("提交")])])],2):e._e(),e._v(" "),s("ComparisonYears",{on:{close:e.closeSetCourseDialog},model:{value:e.ComparisonYearsshow,callback:function(t){e.ComparisonYearsshow=t},expression:"ComparisonYearsshow"}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("考核方式")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("考核内容")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("考核总分")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("班级平均分")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("分考核方式达成度")]),e._v(" "),a("th",{staticStyle:{width:"200px","text-align":"center","border-right":"0"}},[e._v("达成度")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"teacherResults_container_title"},[t("span",[this._v("成绩分析")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"teacherResults_container_title"},[t("span",[this._v("改进意见")])])}]};var A=a("C7Lr")(S,I,!1,function(e){a("fcLi")},null,null);t.default=A.exports},fcLi:function(e,t){},nSV3:function(e,t){},uvXQ:function(e,t){}});
//# sourceMappingURL=3.cd730854a93eda11e965.js.map