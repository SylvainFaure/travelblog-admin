(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{286:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function c(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}function u(e){return 1==(null!=(t=e)&&"object"==typeof t&&!1===Array.isArray(t))&&"[object Object]"===Object.prototype.toString.call(e);var t}var a=Object.prototype,f=a.toString,d=a.hasOwnProperty,v=/^\s*function (\w+)/;function s(e){var t,n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:e;if(n){var r=n.toString().match(v);return r?r[1]:""}return""}var y=function(e){var t,n;return!1!==u(e)&&"function"==typeof(t=e.constructor)&&!1!==u(n=t.prototype)&&!1!==n.hasOwnProperty("isPrototypeOf")},p=function(e){return e},h=function(e,t){return d.call(e,t)},b=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},g=Array.isArray||function(e){return"[object Array]"===f.call(e)},m=function(e){return"[object Function]"===f.call(e)},O=function(e){return y(e)&&h(e,"_vueTypes_name")},j=function(e){return y(e)&&(h(e,"type")||["_vueTypes_name","validator","default","required"].some((function(t){return h(e,t)})))};function w(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function _(e,t,n){var r;void 0===n&&(n=!1);var i=!0,o="";r=y(e)?e:{type:e};var u=O(r)?r._vueTypes_name+" - ":"";if(j(r)&&null!==r.type){if(void 0===r.type)return i;if(!r.required&&void 0===t)return i;void 0===r.type?o="any":g(r.type)?(i=r.type.some((function(e){return!0===_(e,t,!0)})),o=r.type.map((function(e){return s(e)})).join(" or ")):i="Array"===(o=s(r))?g(t):"Object"===o?y(t):"String"===o||"Number"===o||"Boolean"===o||"Function"===o?function(e){if(null==e)return"";var t=e.constructor.toString().match(v);return t?t[1]:""}(t)===o:t instanceof r.type}if(!i){var a=u+'value "'+t+'" should be of type "'+o+'"';return!1===n?(p(a),!1):a}if(h(r,"validator")&&m(r.validator)){var l=p,c=[];if(p=function(e){c.push(e)},i=r.validator(t),p=l,!i){var f=(c.length>1?"* ":"")+c.join("\n* ");return c.length=0,!1===n?(p(f),i):f}}return i}function k(e,t){var n=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(e){return void 0===e?(h(this,"default")&&delete this.default,this):m(e)||!0===_(this,e,!0)?(this.default=g(e)?function(){return[].concat(e)}:y(e)?function(){return Object.assign({},e)}:e,this):(p(this._vueTypes_name+' - invalid default value: "'+e+'"'),this)}}}),r=n.validator;return m(r)&&(n.validator=w(r,n)),n}function x(e,t){var n=k(e,t);return Object.defineProperty(n,"validate",{value:function(e){return m(this.validator)&&p(this._vueTypes_name+" - calling .validate() will overwrite the current custom validator function. Validator info:\n"+JSON.stringify(this)),this.validator=w(e,this),this}})}function T(e,t,n){var r,i,u=(r=t,i={},Object.getOwnPropertyNames(r).forEach((function(e){i[e]=Object.getOwnPropertyDescriptor(r,e)})),Object.defineProperties({},i));if(u._vueTypes_name=e,!y(n))return u;var a,o,l=n.validator,f=c(n,["validator"]);if(m(l)){var s=u.validator;s&&(s=null!==(o=(a=s).__original)&&void 0!==o?o:a),u.validator=w(s?function(e){return s.call(this,e)&&l.call(this,e)}:l,u)}return Object.assign(u,f)}function P(e){return e.replace(/^(?!\s*$)/gm,"  ")}var $=function(){function e(){}return e.extend=function(e){var t=this;if(g(e))return e.forEach((function(e){return t.extend(e)})),this;var n=e.name,r=e.validate,i=void 0!==r&&r,u=e.getter,a=void 0!==u&&u,o=c(e,["name","validate","getter"]);if(h(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var l,f=o.type;return O(f)?(delete o.type,Object.defineProperty(this,n,a?{get:function(){return T(n,f,o)}}:{value:function(){var e,t=T(n,f,o);return t.validator&&(t.validator=(e=t.validator).bind.apply(e,[t].concat([].slice.call(arguments)))),t}})):(l=a?{get:function(){var e=Object.assign({},o);return i?x(n,e):k(n,e)},enumerable:!0}:{value:function(){var e,t,r=Object.assign({},o);return e=i?x(n,r):k(n,r),r.validator&&(e.validator=(t=r.validator).bind.apply(t,[e].concat([].slice.call(arguments)))),e},enumerable:!0},Object.defineProperty(this,n,l))},o(e,null,[{key:"any",get:function(){return x("any",{})}},{key:"func",get:function(){return x("function",{type:Function}).def(this.defaults.func)}},{key:"bool",get:function(){return x("boolean",{type:Boolean}).def(this.defaults.bool)}},{key:"string",get:function(){return x("string",{type:String}).def(this.defaults.string)}},{key:"number",get:function(){return x("number",{type:Number}).def(this.defaults.number)}},{key:"array",get:function(){return x("array",{type:Array}).def(this.defaults.array)}},{key:"object",get:function(){return x("object",{type:Object}).def(this.defaults.object)}},{key:"integer",get:function(){return k("integer",{type:Number,validator:function(e){return b(e)}}).def(this.defaults.integer)}},{key:"symbol",get:function(){return k("symbol",{validator:function(e){return"symbol"==typeof e}})}}]),e}();$.defaults={},$.custom=function(e,t){if(void 0===t&&(t="custom validation failed"),"function"!=typeof e)throw new TypeError("[VueTypes error]: You must provide a function as argument");return k(e.name||"<<anonymous function>>",{validator:function(n){var r=e(n);return r||p(this._vueTypes_name+" - "+t),r}})},$.oneOf=function(e){if(!g(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var t='oneOf - value should be one of "'+e.join('", "')+'."',n=e.reduce((function(e,t){if(null!=t){var n=t.constructor;-1===e.indexOf(n)&&e.push(n)}return e}),[]);return k("oneOf",{type:n.length>0?n:void 0,validator:function(n){var r=-1!==e.indexOf(n);return r||p(t),r}})},$.instanceOf=function(e){return k("instanceOf",{type:e})},$.oneOfType=function(e){if(!g(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var t=!1,n=[],r=0;r<e.length;r+=1){var i=e[r];if(j(i)){if(O(i)&&"oneOf"===i._vueTypes_name){n=n.concat(i.type||[]);continue}if(m(i.validator)&&(t=!0),void 0!==i.type){n=n.concat(i.type);continue}}n.push(i)}return n=n.filter((function(e,t){return n.indexOf(e)===t})),k("oneOfType",t?{type:n,validator:function(t){var n=[],r=e.some((function(e){var r=_(O(e)&&"oneOf"===e._vueTypes_name?e.type||null:e,t,!0);return"string"==typeof r&&n.push(r),!0===r}));return r||p("oneOfType - provided value does not match any of the "+n.length+" passed-in validators:\n"+P(n.join("\n"))),r}}:{type:n})},$.arrayOf=function(e){return k("arrayOf",{type:Array,validator:function(t){var n,r=t.every((function(t){return!0===(n=_(e,t,!0))}));return r||p("arrayOf - value validation error:\n"+P(n)),r}})},$.objectOf=function(e){return k("objectOf",{type:Object,validator:function(t){var n,r=Object.keys(t).every((function(r){return!0===(n=_(e,t[r],!0))}));return r||p("objectOf - value validation error:\n"+P(n)),r}})},$.shape=function(e){var t=Object.keys(e),n=t.filter((function(t){var n;return!!(null===(n=e[t])||void 0===n?void 0:n.required)})),r=k("shape",{type:Object,validator:function(r){var i=this;if(!y(r))return!1;var o=Object.keys(r);if(n.length>0&&n.some((function(e){return-1===o.indexOf(e)}))){var u=n.filter((function(e){return-1===o.indexOf(e)}));return p(1===u.length?'shape - required property "'+u[0]+'" is not defined.':'shape - required properties "'+u.join('", "')+'" are not defined.'),!1}return o.every((function(n){if(-1===t.indexOf(n))return!0===i._vueTypes_isLoose||(p('shape - shape definition does not include a "'+n+'" property. Allowed keys: "'+t.join('", "')+'".'),!1);var o=_(e[n],r[n],!0);return"string"==typeof o&&p('shape - "'+n+'" property validation error:\n '+P(o)),!0===o}))}});return Object.defineProperty(r,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(r,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),r},$.utils={validate:function(e,t){return!0===_(t,e,!0)},toType:function(e,t,n){return void 0===n&&(n=!1),n?x(e,t):k(e,t)}};var S=function(e){function t(){return e.apply(this,arguments)||this}return i(t,e),t}(function(e){var t;return void 0===e&&(e={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),(t=function(t){function n(){return t.apply(this,arguments)||this}return i(n,t),o(n,null,[{key:"sensibleDefaults",get:function(){return l({},this.defaults)},set:function(t){this.defaults=!1!==t?l({},!0!==t?t:e):{}}}]),n}($)).defaults=l({},e),t}());t.a=S},287:function(e,t,n){"use strict";n.r(t);n(60);var r=n(286),o={props:{type:r.a.string.def("primary"),label:r.a.string.def("Save"),iconBtn:r.a.bool.def(!1),icon:r.a.string.def("checkmark"),additionalClasses:r.a.string.def("")},computed:{classes:function(){var e=this.iconBtn?"px-4 py-2":"p-2";return"bg-".concat(this.type||"primary"," ").concat("raw"===this.type?"":"border text-white"," ").concat(e)}}},l=n(23),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:[e.classes,e.additionalClasses,"rounded text-center flex items-center"],attrs:{type:"button"},on:{click:function(t){return e.$emit("click")}}},[e.iconBtn?e._e():n("span",[e._v(e._s(e.label))]),e._v(" "),e.icon&&!e.iconBtn?n("span",{staticClass:"pl-2"},[n("Icon",{attrs:{name:e.icon}})],1):n("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.label,expression:"label"}]},[n("Icon",{attrs:{name:e.icon}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Icon:n(289).default})},289:function(e,t,n){"use strict";n.r(t);var r=n(286),o={props:{name:r.a.string.def(""),small:r.a.bool.def(!1)}},l=n(23),component=Object(l.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",this._g({class:{"fill-current icon":!0,"cursor-pointer":!!this.$listeners,"w-2 h-2":this.small,"w-4 h-4":!this.small}},this.$listeners),[t("use",{attrs:{"xlink:href":"#icon-"+this.name}})])}),[],!1,null,null,null);t.default=component.exports},291:function(e,t,n){"use strict";n.r(t);var r=n(286),o={props:{type:r.a.string.def("text"),name:r.a.string.def("input"),id:r.a.string.def("input"),label:r.a.string.def(""),placeholder:r.a.string.def(""),required:r.a.bool.def(!1),disabled:r.a.bool.def(!1),value:r.a.string.def(""),small:r.a.bool.def(!1)}},l=n(23),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"mt-2 mb-4":!e.small}},[e.label?n("h4",{staticClass:"label font-bold my-4"},[n("span",{staticClass:"bg-white z-10 pr-6"},[e._v(e._s(e.label))])]):e._e(),e._v(" "),n("input",{class:[e.small?"text-xs":"","w-full p-2 rounded border"],attrs:{id:e.id,type:e.type,name:e.name,required:e.required,disabled:e.disabled,placeholder:e.placeholder},domProps:{value:e.value},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("enter")},input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},318:function(e,t,n){var content=n(350);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(62).default)("5f660ca3",content,!0,{sourceMap:!1})},349:function(e,t,n){"use strict";var r=n(318);n.n(r).a},350:function(e,t,n){(t=n(61)(!1)).push([e.i,".login{height:calc(100vh - 72px)}",""]),e.exports=t},374:function(e,t,n){"use strict";n.r(t);n(19),n(30),n(17),n(46),n(47),n(31),n(38),n(64),n(18),n(32);var r=n(4),o=n(12),l=n(26);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={data:function(){return{loginModel:{email:"",password:""}}},methods:f(f({},Object(l.b)("auth",["setUser","setIsLogged","setToken"])),{},{saveToken:function(e){this.setToken(e);var t=JSON.parse(atob(e.split(".")[1])),n={email:t.email,role:t.role,token:e};window.localStorage.getItem("user")&&window.localStorage.removeItem("user"),window.localStorage.setItem("user",JSON.stringify(n))},handleLogin:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post("/api/users/signin",f({},e.loginModel));case 3:200===(n=t.sent).status&&200===n.data.status?(e.saveToken(n.data.token),e.$toast.success("You are correctly logged in!"),e.$router.push("/")):e.$toast.error("Your credentials are wrong, try again!"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.warn(t.t0),e.$toast.error("Ops! There is a problem!");case 11:return t.prev=11,e.loginModel={email:"",password:""},t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,7,11,14]])})))()}})},v=(n(349),n(23)),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login w-screen flex justify-center items-center"},[n("div",[n("p",[e._v(e._s(e.$t("login.title")))]),e._v(" "),n("InputText",{staticClass:"my-2",attrs:{placeholder:e.$t("login.email")},model:{value:e.loginModel.email,callback:function(t){e.$set(e.loginModel,"email",t)},expression:"loginModel.email"}}),e._v(" "),n("InputText",{staticClass:"my-2",attrs:{type:"password",placeholder:e.$t("login.password")},model:{value:e.loginModel.password,callback:function(t){e.$set(e.loginModel,"password",t)},expression:"loginModel.password"}}),e._v(" "),n("div",{staticClass:"flex justify-end"},[n("Btn",{attrs:{"icon-btn":""},on:{click:e.handleLogin}})],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{InputText:n(291).default,Btn:n(287).default})}}]);