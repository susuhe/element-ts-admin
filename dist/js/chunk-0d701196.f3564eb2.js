(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d701196"],{"09a5":function(t,e,n){},4373:function(t,e,n){"use strict";var i=n("8944"),o=n.n(i);o.a},"7f94":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"el-app-container"},[n("div",{staticClass:"header-container"},[n("div",{staticClass:"icon"},[t._v("Maskletter")]),n("el-header",{staticClass:"el-header"},[n("el-row",[n("el-col",{attrs:{span:20}},[n("h4",{staticStyle:{color:"#666",display:"inline-block","margin-right":"20px"}},[t._v(t._s(t.$route.meta.title))]),n("div",{attrs:{id:"navigation-ui-tool"}})]),n("el-col",{staticStyle:{"font-size":"12px","text-align":"right"},attrs:{span:4}},[n("el-dropdown",[n("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("查看")]),n("el-dropdown-item",[t._v("新增")]),n("el-dropdown-item",{nativeOn:{click:function(e){return t.logout(e)}}},[t._v("退出")])],1)],1),n("span",[t._v("王小虎")])],1)],1)],1)],1),n("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-active":t.$route.path,router:!0}},[n("MlMenu",{attrs:{routers:t.routers}})],1)],1),n("el-container",{staticClass:"app-container"},[n("el-main",{staticStyle:{position:"relative",overflow:"auto",padding:"0px"}},[n("div",{staticStyle:{width:"100%",height:"100%",position:"relative",overflow:"auto","overflow-x":"hidden"}},[n("transition",{attrs:{name:"animation"}},[n("router-view")],1)],1)])],1)],1)},o=[],r=(n("d81d"),n("d3b7"),n("ac1f"),n("5319"),n("9ab4")),a=n("2fe1"),l=n("8bbf"),s=n.n(l),c=n("a026"),u=n("2f62"),p=m("computed",u["e"]);m("computed",u["c"]),m("methods",u["b"]),m("methods",u["d"]);function m(t,e){function n(n,i){return Object(a["a"])((function(o,r){o[t]||(o[t]={});var a,l=(a={},a[r]=n,a);o[t][r]=void 0!==i?e(i,l)[r]:e(l)[r]}))}function i(t,e){if("string"===typeof e){var i=e,o=t;return n(i,void 0)(o,i)}var r=d(e),a=t;return n(a,r)}return i}function d(t){var e=t&&t.namespace;if("string"===typeof e)return"/"!==e[e.length-1]?e+"/":e}var h=s.a.extend({template:'\n        <el-dialog :title="title" :visible.sync="cropperShow">\n            <div ref=\'div\'></div>\n        </dialog>\n    ',data:function(){return{cropperShow:!1,title:""}},methods:{open:function(t,e){var n=this;setTimeout((function(){n.title=e,t.$mount(n.$refs.div)}))}}}),f={render:c["a"].compile("\n        <div>\n            <slot></slot>\n        </div>\n    ").render,props:["item"],mounted:function(){var t=this,e=document.createElement("div");e.setAttribute("style","position:absolute;left:0px;top:0px;right:0px;bottom:0px;"),t.$parent.$el.appendChild(e),t.item&&t.item.meta.dialog&&e.addEventListener("click",(function(e){e.stopPropagation(),t.showDialog(t.item)}))},methods:{showDialog:function(t){return Object(r["b"])(this,void 0,void 0,(function(){var e,n,i,o;return Object(r["e"])(this,(function(r){switch(r.label){case 0:return e=document.createElement("div"),document.body.appendChild(e),t.component.mixin?(n=t.component,[3,3]):[3,1];case 1:return[4,t.component()];case 2:i=r.sent(),n=i.default,r.label=3;case 3:return o=new h,o.$mount(e),o.cropperShow=!0,o.open(new n,t.meta.title),[2]}}))}))}}},v={name:"router-menu",components:{MlDisableMenuRouter:f},render:c["a"].compile("\n        <div>\n            <template v-for='item in routers' >\n            <el-submenu v-if='item.children && item.children.length' :index=\"(parentPath?'/'+parentPath:parentPath)+'/'+item.path\" @click.native='click([item.path])'>\n                <template slot=\"title\"><i :class=\"item.meta.icon||'el-icon-platform-eleme'\"></i>{{item.meta.title}}</template>\n                <router-menu :routers='item.children' :parentPath='parentPath?parentPath+\"/\"+item.path:item.path' />\n            </el-submenu>\n            <el-menu-item v-else :index=\"(parentPath?'/'+parentPath:parentPath)+'/'+item.path\" @click.native='click([item.path])'>\n                <ml-disable-menu-router :item='item'>\n                    <i :class=\"item.meta.icon||'el-icon-platform-eleme'\"></i>\n                    <span >{{item.meta.title}}</span>\n                </ml-disable-menu-router>\n            </el-menu-item>\n        </template>\n        </div>\n    ").render,props:{routers:{},parentPath:{default:""}},methods:{click:function(t){this.$emit("change",t.map((function(t){return"/"+t})))}}},b=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.menuOpeneds=[],e.isCollapse=!1,e}return Object(r["d"])(e,t),e.prototype.logout=function(){return Object(r["b"])(this,void 0,Promise,(function(){return Object(r["e"])(this,(function(t){switch(t.label){case 0:return[4,this.$confirm("确定退出吗").toPromise()];case 1:return t.sent(),sessionStorage.removeItem("login"),this.$router.replace("/login"),[2]}}))}))},e.prototype.menuSelectEvent=function(t){console.log(t)},Object(r["c"])([p("routers")],e.prototype,"routers",void 0),e=Object(r["c"])([Object(a["b"])({components:{MlMenu:v}})],e),e}(s.a),g=b,w=g,x=(n("4373"),n("f406"),n("2877")),y=Object(x["a"])(w,i,o,!1,null,"828f8c52",null);e["default"]=y.exports},8944:function(t,e,n){},f406:function(t,e,n){"use strict";var i=n("09a5"),o=n.n(i);o.a}}]);
//# sourceMappingURL=chunk-0d701196.f3564eb2.js.map