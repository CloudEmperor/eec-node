webpackJsonp([19],{Ou4a:function(t,a){},jBeU:function(t,a){},kQIM:function(t,a,i){"use strict";var s=i("aA9S"),e=i.n(s),r=i("3cXf"),n=i.n(r),o=i("WCPx"),l=i.n(o),c={name:"SeriesBar",props:{id:{type:String,default:"seriesBar"},chartHeight:{type:String,default:"300px"},chartWidth:{type:String,default:"100%"},seriesBarData:{type:Object,default:function(){return{}}},color:{type:Array,default:function(){return["#38A0FF","#4CCA73","#F9D337"]}},gradual:{type:Array,default:function(){return[{color:"#03B187",gradual:"#8EE9CA"},{color:"#FFA351",gradual:"#FFE098"},{color:"#5AB3FF",gradual:"#B3DCFF"},{color:"#ECEAFF",gradual:"#D5CFFF"}]}},labelShow:{type:Boolean,default:!1},isMax:{type:Boolean,default:!1},isMin:{type:Boolean,default:!1}},data:function(){return{chart:null,labelOption:{normal:{show:!1,position:"insideBottom",distance:15,align:"left",verticalAlign:"middle",rotate:90,formatter:"{c}",fontSize:12,rich:{name:{textBorderColor:"#fff"}}}}}},created:function(){},mounted:function(){this.initChart()},watch:{seriesBarData:function(t,a){this.initChart()}},methods:{initChart:function(){var t=this;t.chart=l.a.init(document.getElementById(t.id)),t.chart.setOption(t.getSeriesBarOption()),window.addEventListener("resize",function(){t.chart&&t.chart.resize()})},getSeriesBarOption:function(){return this.labelOption.normal.show=this.labelShow,{color:this.color,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{x:"70%",data:this.seriesBarData.legendData||[],textStyle:{color:"#aaa"}},grid:{bottom:"10%",left:"5%",right:"5%"},toolbox:{show:!0,feature:{saveAsImage:{show:!0,excludeComponents:["toolbox"],pixelRatio:2}}},calculable:!0,xAxis:[{type:"category",axisLine:{show:!1,lineStyle:{color:"#aaa"}},axisTick:{show:!1},data:this.seriesBarData.xAxisData||[],axisLabel:{interval:0,rotate:0}}],yAxis:[{type:"value",axisLine:{show:!1,lineStyle:{color:"#aaa"}},axisTick:{show:!1},min:this.isMax?function(t){return 0}:void 0,max:this.isMax?function(t){return 1}:void 0}],series:this.seriesInitFn()}},seriesInitFn:function(){function t(){return"#"+("00000"+parseInt(Math.random()*Math.pow(32,4)).toString(16)).substr(-4)}var a=JSON.parse(n()(this.seriesBarData.seriesData||[])),i={type:"bar",barWidth:30,label:this.labelOption},s=this.gradual;if(this.gradual.length<a.length)for(var r=a.length-this.gradual.length,o=0;o<r;o++)s.push({color:t(),gradual:t()});return a.forEach(function(t,a){t.barGap="0",t.itemStyle={normal:{color:new l.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:s[a].gradual},{offset:1,color:s[a].color}],!1)}},e()(t,i)}),a}},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"seriesBar",style:{height:this.chartHeight,width:this.chartWidth},attrs:{id:this.id}})},staticRenderFns:[]};var d=i("C7Lr")(c,u,!1,function(t){i("Ou4a")},"data-v-23b1bc82",null);a.a=d.exports},yjQN:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});i("Gwkq");var s={name:"CollegeCourse",components:{echarts5:i("kQIM").a},data:function(){return{active:0,obj:{},goalList:[],seriesBarData:{},page:{grade:""},options:[{name:"2015级",id:"1"},{name:"2016级",id:"2"}],pointList:[],wordlist:[],pointListsifon:[],name:""}},created:function(){},mounted:function(){this.ifondata()},methods:{tabactive:function(t){this.active=t},goback:function(){this.$router.go(-1)},ifondata:function(){var t=this;this.seriesBarData={},this.$get("/basic/specialty/portrayal/courseAnalyze?courseId="+this.$route.query.id).then(function(a){if(1==a.status){t.obj=a.data.course,t.goalList=a.data.goalList,t.pointList=a.data.pointGoals;var i=[],s=[],e=[];a.data.goalratioMark.forEach(function(t,a){s.push(t.name),0===a?t.marks.forEach(function(t,a){e.push(String(t.grade)+"-"+Number(t.grade+1)+"学年"),i.push({grade:t.grade,children:[t.goalmark]})}):t.marks.forEach(function(t,a){i.forEach(function(a,i){t.grade===a.grade&&a.children.push(t.goalmark)})})});var r={legendData:e,xAxisData:s,seriesData:e.map(function(t){return{name:t,barGap:"0",data:[]}})};i.forEach(function(t,a){r.seriesData[a].data=t.children}),t.seriesBarData=r,t.wordlist=a.data.reportList,a.fileId,t.fileId=a.fileId}})},xiazai:function(t){window.location.href=this.API_URL+"/teacher/courseGoalExport/portrayal/getCourseDetail?classId="+t.classId+"&courseId="+this.$route.query.id+"&teacherId="+t.teacherId}}},e={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"college-full-screen college Mixeddataifon1"},[i("div",{staticClass:"college_content"},[i("div",{staticClass:"Curriculum"},[i("div",{staticClass:"Curriculum_img"},[i("div",{staticClass:"Curriculum_back",on:{click:t.goback}},[i("i",{staticClass:"el-icon-back",staticStyle:{color:"#b0f9e0"}}),t._v(" "),i("span",[t._v("返回上级")])]),t._v(" "),i("h1",[t._v(t._s(t.obj.courseName)+"分析")])]),t._v(" "),i("div",{staticClass:"Curriculum-dv"},[i("h2",[t._v(t._s(t.obj.courseName)+"分析")]),t._v(" "),i("ul",[i("li",[t._v("上课学期："+t._s(t.obj.term))]),t._v(" "),i("li",[t._v("课程类型："+t._s(t.obj.className))]),t._v(" "),i("li",[t._v("考核方式及比例："+t._s(t.obj.examine))]),t._v(" "),i("li",[t._v("学时："+t._s(t.obj.period))]),t._v(" "),i("li",[t._v("学分："+t._s(t.obj.credit))]),t._v(" "),i("li",[t._v("任课老师："+t._s(t.obj.leaderName))])])]),t._v(" "),i("div",{staticClass:"Curriculum-mu"},[i("div",{staticClass:"g_box"},[i("div",{staticClass:"g_title"},[t._v("课程目标")]),t._v(" "),i("ul",{staticClass:"g_ul"},t._l(t.goalList,function(a,s){return i("li",{key:s,staticClass:"g_li"},[i("div",{staticClass:"g_li-lf"},[t._v(t._s(s+1))]),t._v(" "),i("div",{staticClass:"g_li-rt"},[i("p",[t._v(t._s(a.name))]),t._v(" "),i("span",[t._v(t._s(a.content))]),t._v(" "),i("ul",[i("li",[t._v("\r\n                                        "+t._s(a.point)+"\r\n                                    ")])])])])}),0)])]),t._v(" "),i("div",{staticClass:"Curriculum-mu"},[i("div",{staticClass:"g_box"},[i("div",{staticClass:"g_title"},[t._v("支撑指标点")]),t._v(" "),i("ul",{staticClass:"g_ul"},t._l(t.pointList,function(a,s){return i("li",{key:s,staticClass:"g_li"},[i("div",{staticClass:"g_li-lf"},[t._v(t._s(a.pointCode))]),t._v(" "),i("div",{staticClass:"g_li-rt"},[i("p",{staticStyle:{"font-weight":"bold"}},[t._v("指标点"+t._s(a.pointCode))]),t._v(" "),i("span",[t._v(t._s(a.pointContent))])])])}),0)])]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"Curriculum_echarts"},[i("echarts5",{attrs:{id:"sbilityQueryBar","series-bar-data":t.seriesBarData,isMax:!0,isMin:!0}})],1),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"Curriculum_word"},t._l(t.wordlist,function(a,s){return i("div",{key:s,staticClass:"Curriculum_sp",on:{click:function(i){return t.xiazai(a)}}},[i("svgIcon",{staticStyle:{"margin-left":"10px","font-size":"50px"},attrs:{"icon-class":"iconkechengdagang-word"}}),t._v(" "),i("span",[t._v(t._s(a.className+a.teacherName))])],1)}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"Curriculum_search"},[a("div",{staticClass:"Curriculum_search_lf"},[a("span",{staticClass:"cl-btn"},[this._v("课程目标达成评价")])]),this._v(" "),a("div",{staticClass:"Curriculum_sear_rt"})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"Curriculum_search"},[a("div",{staticClass:"Curriculum_search_lf"},[a("span",{staticClass:"cl-btn"},[this._v("课程目标达成评价报告")])]),this._v(" "),a("div",{staticClass:"Curriculum_sear_rt"})])}]};var r=i("C7Lr")(s,e,!1,function(t){i("jBeU")},null,null);a.default=r.exports}});
//# sourceMappingURL=19.a8fdf15845e01b701de6.js.map