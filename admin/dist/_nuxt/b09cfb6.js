(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{276:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function l(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(r=o[n])>=0||(i[r]=e[r]);return i}function u(e){return 1==(null!=(t=e)&&"object"==typeof t&&!1===Array.isArray(t))&&"[object Object]"===Object.prototype.toString.call(e);var t}var a=Object.prototype,f=a.toString,v=a.hasOwnProperty,d=/^\s*function (\w+)/;function s(e){var t,r=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(r){var n=r.toString().match(d);return n?n[1]:""}return""}var y=function(e){var t,r;return!1!==u(e)&&"function"==typeof(t=e.constructor)&&!1!==u(r=t.prototype)&&!1!==r.hasOwnProperty("isPrototypeOf")},p=function(e){return e},h=function(e,t){return v.call(e,t)},b=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},g=Array.isArray||function(e){return"[object Array]"===f.call(e)},m=function(e){return"[object Function]"===f.call(e)},O=function(e){return y(e)&&h(e,"_vueTypes_name")},_=function(e){return y(e)&&(h(e,"type")||["_vueTypes_name","validator","default","required"].some((function(t){return h(e,t)})))};function j(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function w(e,t,r){var n;void 0===r&&(r=!1);var i=!0,o="";n=y(e)?e:{type:e};var u=O(n)?n._vueTypes_name+" - ":"";if(_(n)&&null!==n.type){if(void 0===n.type)return i;if(!n.required&&void 0===t)return i;void 0===n.type?o="any":g(n.type)?(i=n.type.some((function(e){return!0===w(e,t,!0)})),o=n.type.map((function(e){return s(e)})).join(" or ")):i="Array"===(o=s(n))?g(t):"Object"===o?y(t):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(e){if(null==e)return"";var t=e.constructor.toString().match(d);return t?t[1]:""}(t)===o:t instanceof n.type}if(!i){var a=u+'value "'+t+'" should be of type "'+o+'"';return!1===r?(p(a),!1):a}if(h(n,"validator")&&m(n.validator)){var c=p,l=[];if(p=function(e){l.push(e)},i=n.validator(t),p=c,!i){var f=(l.length>1?"* ":"")+l.join("\n* ");return l.length=0,!1===r?(p(f),i):f}}return i}function x(e,t){var r=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(e){return void 0===e?(h(this,"default")&&delete this.default,this):m(e)||!0===w(this,e,!0)?(this.default=g(e)?function(){return[].concat(e)}:y(e)?function(){return Object.assign({},e)}:e,this):(p(this._vueTypes_name+' - invalid default value: "'+e+'"'),this)}}}),n=r.validator;return m(n)&&(r.validator=j(n,r)),r}function k(e,t){var r=x(e,t);return Object.defineProperty(r,"validate",{value:function(e){return m(this.validator)&&p(this._vueTypes_name+" - calling .validate() will overwrite the current custom validator function. Validator info:\n"+JSON.stringify(this)),this.validator=j(e,this),this}})}function T(e,t,r){var n,i,u=(n=t,i={},Object.getOwnPropertyNames(n).forEach((function(e){i[e]=Object.getOwnPropertyDescriptor(n,e)})),Object.defineProperties({},i));if(u._vueTypes_name=e,!y(r))return u;var a,o,c=r.validator,f=l(r,["validator"]);if(m(c)){var s=u.validator;s&&(s=null!==(o=(a=s).__original)&&void 0!==o?o:a),u.validator=j(s?function(e){return s.call(this,e)&&c.call(this,e)}:c,u)}return Object.assign(u,f)}function P(e){return e.replace(/^(?!\s*$)/gm,"  ")}var $=function(){function e(){}return e.extend=function(e){var t=this;if(g(e))return e.forEach((function(e){return t.extend(e)})),this;var r=e.name,n=e.validate,i=void 0!==n&&n,u=e.getter,a=void 0!==u&&u,o=l(e,["name","validate","getter"]);if(h(this,r))throw new TypeError('[VueTypes error]: Type "'+r+'" already defined');var c,f=o.type;return O(f)?(delete o.type,Object.defineProperty(this,r,a?{get:function(){return T(r,f,o)}}:{value:function(){var e,t=T(r,f,o);return t.validator&&(t.validator=(e=t.validator).bind.apply(e,[t].concat([].slice.call(arguments)))),t}})):(c=a?{get:function(){var e=Object.assign({},o);return i?k(r,e):x(r,e)},enumerable:!0}:{value:function(){var e,t,n=Object.assign({},o);return e=i?k(r,n):x(r,n),n.validator&&(e.validator=(t=n.validator).bind.apply(t,[e].concat([].slice.call(arguments)))),e},enumerable:!0},Object.defineProperty(this,r,c))},o(e,null,[{key:"any",get:function(){return k("any",{})}},{key:"func",get:function(){return k("function",{type:Function}).def(this.defaults.func)}},{key:"bool",get:function(){return k("boolean",{type:Boolean}).def(this.defaults.bool)}},{key:"string",get:function(){return k("string",{type:String}).def(this.defaults.string)}},{key:"number",get:function(){return k("number",{type:Number}).def(this.defaults.number)}},{key:"array",get:function(){return k("array",{type:Array}).def(this.defaults.array)}},{key:"object",get:function(){return k("object",{type:Object}).def(this.defaults.object)}},{key:"integer",get:function(){return x("integer",{type:Number,validator:function(e){return b(e)}}).def(this.defaults.integer)}},{key:"symbol",get:function(){return x("symbol",{validator:function(e){return"symbol"==typeof e}})}}]),e}();$.defaults={},$.custom=function(e,t){if(void 0===t&&(t="custom validation failed"),"function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return x(e.name||"<<anonymous function>>",{validator:function(r){var n=e(r);return n||p(this._vueTypes_name+" - "+t),n}})},$.oneOf=function(e){if(!g(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var t='oneOf - value should be one of "'+e.join('", "')+'."',r=e.reduce((function(e,t){if(null!=t){var r=t.constructor;-1===e.indexOf(r)&&e.push(r)}return e}),[]);return x("oneOf",{type:r.length>0?r:void 0,validator:function(r){var n=-1!==e.indexOf(r);return n||p(t),n}})},$.instanceOf=function(e){return x("instanceOf",{type:e})},$.oneOfType=function(e){if(!g(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var t=!1,r=[],n=0;n<e.length;n+=1){var i=e[n];if(_(i)){if(O(i)&&"oneOf"===i._vueTypes_name){r=r.concat(i.type||[]);continue}if(m(i.validator)&&(t=!0),void 0!==i.type){r=r.concat(i.type);continue}}r.push(i)}return r=r.filter((function(e,t){return r.indexOf(e)===t})),x("oneOfType",t?{type:r,validator:function(t){var r=[],n=e.some((function(e){var n=w(O(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return"string"==typeof n&&r.push(n),!0===n}));return n||p("oneOfType - provided value does not match any of the "+r.length+" passed-in validators:\n"+P(r.join("\n"))),n}}:{type:r})},$.arrayOf=function(e){return x("arrayOf",{type:Array,validator:function(t){var r,n=t.every((function(t){return!0===(r=w(e,t,!0))}));return n||p("arrayOf - value validation error:\n"+P(r)),n}})},$.objectOf=function(e){return x("objectOf",{type:Object,validator:function(t){var r,n=Object.keys(t).every((function(n){return!0===(r=w(e,t[n],!0))}));return n||p("objectOf - value validation error:\n"+P(r)),n}})},$.shape=function(e){var t=Object.keys(e),r=t.filter((function(t){var r;return!!(null===(r=e[t])||void 0===r?void 0:r.required)})),n=x("shape",{type:Object,validator:function(n){var i=this;if(!y(n))return!1;var o=Object.keys(n);if(r.length>0&&r.some((function(e){return-1===o.indexOf(e)}))){var u=r.filter((function(e){return-1===o.indexOf(e)}));return p(1===u.length?'shape - required property "'+u[0]+'" is not defined.':'shape - required properties "'+u.join('", "')+'" are not defined.'),!1}return o.every((function(r){if(-1===t.indexOf(r))return!0===i._vueTypes_isLoose||(p('shape - shape definition does not include a "'+r+'" property. Allowed keys: "'+t.join('", "')+'".'),!1);var o=w(e[r],n[r],!0);return"string"==typeof o&&p('shape - "'+r+'" property validation error:\n '+P(o)),!0===o}))}});return Object.defineProperty(n,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(n,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),n},$.utils={validate:function(e,t){return!0===w(t,e,!0)},toType:function(e,t,r){return void 0===r&&(r=!1),r?k(e,t):x(e,t)}};var C=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(function(e){var t;return void 0===e&&(e={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),(t=function(t){function r(){return t.apply(this,arguments)||this}return i(r,t),o(r,null,[{key:"sensibleDefaults",get:function(){return c({},this.defaults)},set:function(t){this.defaults=!1!==t?c({},!0!==t?t:e):{}}}]),r}($)).defaults=c({},e),t}());t.a=C},278:function(e,t,r){"use strict";r.r(t);r(60);var n=r(276),o={props:{type:n.a.string.def("primary"),label:n.a.string.def("Save"),iconBtn:n.a.bool.def(!1),icon:n.a.string.def("checkmark"),additionalClasses:n.a.string.def("")},computed:{classes:function(){var e=this.iconBtn?"px-4 py-2":"p-2";return"bg-".concat(this.type||"primary"," ").concat(e)}}},c=r(22),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{class:[e.classes,e.additionalClasses,"border text-white rounded text-center"],attrs:{type:"button"},on:{click:function(t){return e.$emit("click")}}},[e.iconBtn?r("span",[r("Icon",{attrs:{name:e.icon}})],1):r("span",[e._v(e._s(e.label))])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:r(280).default})},280:function(e,t,r){"use strict";r.r(t);var n={props:{name:r(276).a.string.def("")}},o=r(22),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",this._g({class:{"fill-current w-4 h-4 icon":!0,"cursor-pointer":!!this.$listeners}},this.$listeners),[t("use",{attrs:{"xlink:href":"#icon-"+this.name}})])}),[],!1,null,null,null);t.default=component.exports},284:function(e,t,r){"use strict";r.r(t);var n={},o=r(22),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("portal",{attrs:{to:"modal"}},[r("div",{staticClass:"flex flex-col justify-center items-center m-16"},[r("h4",{staticClass:"font-bold text-lg text-center mb-4"},[e._v(e._s(e.$t("general.sure")))]),e._v(" "),r("div",{staticClass:"flex justify-center"},[r("Btn",{attrs:{label:e.$t("general.confirm"),"additional-classes":"mr-4"},on:{click:function(t){return e.$emit("confirm")}}}),e._v(" "),r("Btn",{attrs:{label:e.$t("general.cancel"),type:"secondary"},on:{click:function(t){return e.$emit("cancel")}}})],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Btn:r(278).default})},353:function(e,t,r){"use strict";r.r(t);r(17),r(60),r(30),r(18),r(130),r(53),r(46),r(47),r(31),r(14),r(32),r(19),r(33);var n=r(13),o=r(11),c=(r(25),r(4)),l=r(26);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,c,l,f,v,d,y,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,n=e.$axios,c=r.i18n.locale,l=[],f=[],t.prev=4,t.next=7,Promise.all([n.get("/api/travels"),n.get("/api/articles")]);case 7:v=t.sent,d=Object(o.a)(v,2),y=d[0],h=d[1],l=y.data,f=h.data,t.next=18;break;case 15:t.prev=15,t.t0=t.catch(4),console.warn(t.t0);case 18:return t.abrupt("return",{locale:c,travels:l,articles:f});case 19:case"end":return t.stop()}}),t,null,[[4,15]])})))()},data:function(){return{columns:["title","countries","desc","steps","published","actions"],travelToDelete:null}},computed:v({},Object(l.c)("modal",["modalId"])),methods:v(v({},Object(l.b)("modal",["setVisible","setModalId"])),{},{reloadData:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([e.$axios.get("/api/travels"),e.$axios.get("/api/articles")]);case 3:r=t.sent,n=Object(o.a)(r,2),c=n[0],l=n[1],e.travels=c?c.data:[],e.articles=l?l.data:[],t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.warn(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},getTravelSteps:function(e){var t=this;return this.articles.filter((function(t){return t.article_travel_id===e.travel_id})).map((function(a){return'<a href="/articles/'.concat(a.article_id,'">').concat(a["article_place_".concat(t.locale)],"</a>")})).join(", ")},getColumnValue:function(col,e){switch(col){case"steps":return this.getTravelSteps(e);case"countries":return JSON.parse(e["travel_".concat(col,"_").concat(this.locale)]).join(", ");case"published":return!!e["travel_".concat(col,"_").concat(this.locale)];default:return e["travel_".concat(col,"_").concat(this.locale)]}},openRemoveModal:function(e){this.travelToDelete=e,this.setModalId("remove-travel"),this.setVisible(!0)},closeRemoveModal:function(){this.setModalId(null),this.setVisible(!1)},removeTravel:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.delete("/api/travels/".concat(e.travelToDelete.travel_id));case 3:e.$toast.success(e.$t("travel.remove.success")),e.closeRemoveModal(),e.travelToDelete=null,e.reloadData(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.warn(t.t0),e.$toast.error(e.$t("travel.remove.error"));case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},openNewTravel:function(){this.$router.push("/travels/new")}})},y=r(22),component=Object(y.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"travels-page flex justify-between"},[r("div",{staticClass:"sidebar"}),e._v(" "),r("div",{staticClass:"travels-page__container m-4"},[r("table",{staticClass:"table-fixed"},[r("thead",{staticClass:"border-t-2 border-blue-500"},[r("tr",e._l(e.columns,(function(col){return r("th",{key:col,class:{"px-4 py-2":!0,"w-1/4":"desc"!==col,"w-1/2":"desc"===col}},[e._v("\n            "+e._s(e.$t("travels."+col))+"\n          ")])})),0)]),e._v(" "),r("tbody",e._l(e.travels,(function(t,i){return r("tr",{key:t.travel_id,class:{"bg-gray-200":i%2==0}},e._l(e.columns,(function(col,n){return r("td",{key:col+"-"+n,staticClass:"border-b-2 border px-4 py-2"},["actions"!==col?r("div",{domProps:{innerHTML:e._s(e.getColumnValue(col,t))}}):r("div",{staticClass:"flex justify-between"},[r("nuxt-link",{attrs:{to:"/travels/"+t.travel_id}},[r("Icon",{attrs:{name:"pencil"}})],1),e._v(" "),r("Icon",{attrs:{name:"bin"},on:{click:function(r){return e.openRemoveModal(t)}}})],1)])})),0)})),0)]),e._v(" "),r("div",{staticClass:"flex justify-end w-full my-4"},[r("Btn",{attrs:{"icon-btn":"",icon:"plus"},on:{click:e.openNewTravel}})],1)]),e._v(" "),"remove-travel"===e.modalId?r("RemoveModal",{on:{confirm:e.removeTravel,cancel:e.closeRemoveModal}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:r(280).default,Btn:r(278).default,RemoveModal:r(284).default})}}]);