(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d936cf76"],{5992:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("div",{staticStyle:{color:"#666"}},[t._v("注:后续添加筛选,分页功能")]),a("br"),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("默认使用")])]),a("MlTable",{attrs:{column:t.column,data:t.tableData}})],1),a("br"),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("使用slot")])]),a("MlTable",{attrs:{column:t.column2,data:t.tableData},scopedSlots:t._u([{key:"name",fn:function(e){var a=e.scope;return[t._v(" ??"+t._s(a.name)+" ")]}},{key:"other",fn:function(e){return[a("el-button",[t._v("添加")])]}}])})],1),a("br"),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("动态设置列")]),a("div",{staticStyle:{float:"right"}},[t._v("显示的列: "),a("el-checkbox-group",{staticStyle:{float:"right"},on:{change:t.columChange},model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[a("el-checkbox",{attrs:{label:"date"}},[t._v("日期")]),a("el-checkbox",{attrs:{label:"name"}},[t._v("姓名")]),a("el-checkbox",{attrs:{label:"address"}},[t._v("地址")])],1)],1)]),a("MlTable",{attrs:{column:t.dynamicTable,data:t.tableData}})],1),a("br"),a("el-card",[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("直接使用内置接口请求，最简洁模式，内置分页功能 ，只需添加url属性配置,自动请求接口")])]),a("MlTable",{attrs:{column:t.dynamicTable,url:"/tableData",length:6,filter:t.tableFilters}})],1)],1)},l=[],n=(a("4de4"),a("c975"),a("9ab4")),c=a("2fe1"),o=a("8bbf"),s=a.n(o),i=a("450a"),u=a("c947"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.item={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},e.tableFilters=[{type:"input",placeholder:"请输入",name:"name",label:"手机号"},{type:"select",placeholder:"请选择",name:"gender",label:"年级",data:[{value:1,label:"一年级"},{value:2,label:"二年级"}]}],e.column=[{prop:"date",title:"日期"},{prop:"name",title:"姓名"},{prop:"address",title:"地址"}],e.column2=[{prop:"date",title:"日期"},{prop:"name",title:"姓名",slot:"name"},{prop:"address",title:"地址"},{slot:"other",align:"right"}],e.dynamicTable=e.column,e.tableData=[],e.checkList=["date","name","address"],e}return Object(n["d"])(e,t),e.prototype.columChange=function(t){this.dynamicTable=this.column.filter((function(e){return-1!=t.indexOf(e.prop)}))},e.prototype.created=function(){return Object(n["b"])(this,void 0,void 0,(function(){var t;return Object(n["e"])(this,(function(e){switch(e.label){case 0:return[4,u["a"].getTable(5).toPromise()];case 1:return t=e.sent(),this.tableData=t.data,[2]}}))}))},e=Object(n["c"])([Object(c["b"])({components:{MlTable:i["a"]}})],e),e}(s.a),b=d,h=b,m=a("2877"),p=Object(m["a"])(h,r,l,!1,null,null,null);e["default"]=p.exports},c947:function(t,e,a){"use strict";a("e9b9");var r=a("3809"),l=function(){function t(){}return t.Login=function(t){return Object(r["a"])({method:"POST",url:"/login",data:t})},t.getTable=function(t){return void 0===t&&(t=2),Object(r["a"])({method:"GET",url:"/tableData",params:{length:t}})},t.getUserInfo=function(){return Object(r["a"])({method:"POST",url:"/getUserInfo"})},t.getUserPeople=function(t){return Object(r["a"])({method:"POST",url:"/getUserPeople"})},t.getUserSchool=function(t){return Object(r["a"])({method:"POST",url:"/getUserSchool"})},t.getUserGrade=function(){return Object(r["a"])({method:"POST",url:"/getUserGrade"})},t.getEchartData1=function(){return Object(r["a"])({method:"POST",url:"/echart-demo1"})},t.getEchartData2=function(){return Object(r["a"])({method:"POST",url:"/echart-demo2"})},t.getCkeditorContent=function(){return Object(r["a"])({method:"POST",url:"/ckeditor-content"})},t.getMdContent=function(){return Object(r["a"])({method:"POST",url:"/md-content"})},t}();e["a"]=l}}]);
//# sourceMappingURL=chunk-d936cf76.0d531c52.js.map