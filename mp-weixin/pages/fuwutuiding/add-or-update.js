(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fuwutuiding/add-or-update"],{2374:function(e,n,t){"use strict";t.r(n);var u=t("836d"),r=t.n(u);for(var i in u)"default"!==i&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=r.a},"59f4":function(e,n,t){"use strict";(function(e){t("5048"),t("921b");u(t("66fd"));var n=u(t("c03f"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"6bc2":function(e,n,t){"use strict";var u,r=function(){var e=this,n=e.$createElement;e._self._c},i=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}))},"836d":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,u,r,i,a){try{var o=e[i](a),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(u,r)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(u,r){var a=e.apply(n,t);function o(e){i(a,u,r,o,c,"next",e)}function c(e){i(a,u,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("8615"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{zhanghao:"",xingming:"",fuwumingcheng:"",fuwuleixing:"",fuwurenyuan:"",tupian:"",sfsh:"",shhf:"",userid:""},user:{},ro:{zhanghao:!1,xingming:!1,fuwumingcheng:!1,fuwuleixing:!1,fuwurenyuan:!1,tupian:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var n=a(u.default.mark((function n(t){var r,i,a,o;return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(i=n.sent,this.user=i.data,this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=13;break}return this.ruleForm.id=t.id,n.next=11,this.$api.info("fuwutuiding",this.ruleForm.id);case 11:i=n.sent,this.ruleForm=i.data;case 13:if(!t.cross){n.next=48;break}a=e.getStorageSync("crossObj"),n.t0=u.default.keys(a);case 16:if((n.t1=n.t0()).done){n.next=48;break}if(o=n.t1.value,"zhanghao"!=o){n.next=22;break}return this.ruleForm.zhanghao=a[o],this.ro.zhanghao=!0,n.abrupt("continue",16);case 22:if("xingming"!=o){n.next=26;break}return this.ruleForm.xingming=a[o],this.ro.xingming=!0,n.abrupt("continue",16);case 26:if("fuwumingcheng"!=o){n.next=30;break}return this.ruleForm.fuwumingcheng=a[o],this.ro.fuwumingcheng=!0,n.abrupt("continue",16);case 30:if("fuwuleixing"!=o){n.next=34;break}return this.ruleForm.fuwuleixing=a[o],this.ro.fuwuleixing=!0,n.abrupt("continue",16);case 34:if("fuwurenyuan"!=o){n.next=38;break}return this.ruleForm.fuwurenyuan=a[o],this.ro.fuwurenyuan=!0,n.abrupt("continue",16);case 38:if("tupian"!=o){n.next=42;break}return this.ruleForm.tupian=a[o],this.ro.tupian=!0,n.abrupt("continue",16);case 42:if("userid"!=o){n.next=46;break}return this.ruleForm.userid=a[o],this.ro.userid=!0,n.abrupt("continue",16);case 46:n.next=16;break;case 48:this.styleChange();case 49:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=a(u.default.mark((function e(){return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.id){e.next=5;break}return e.next=3,this.$api.update("fuwutuiding",this.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,this.$api.add("fuwutuiding",this.ruleForm);case 7:this.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),u=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),u=u>9?u:"0"+u,r=r>9?r:"0"+r,"".concat(t,"-").concat(u,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},9100:function(e,n,t){"use strict";var u=t("92a8"),r=t.n(u);r.a},"92a8":function(e,n,t){},c03f:function(e,n,t){"use strict";t.r(n);var u=t("6bc2"),r=t("2374");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("9100");var a,o=t("f0c5"),c=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,"be55c988",null,!1,u["a"],a);n["default"]=c.exports}},[["59f4","common/runtime","common/vendor"]]]);