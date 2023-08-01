// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).writablePropertyNamesIn=r()}(this,(function(){"use strict";var t=void 0!==Object.getOwnPropertyNames,r=Object.getOwnPropertyNames;function e(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function u(){return o&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;function f(t,r){return null!=t&&c.call(t,r)}var l="function"==typeof Symbol?Symbol.toStringTag:"";var a,p=u()?function(t){var r,e,n;if(null==t)return i.call(t);e=t[l],r=f(t,l);try{t[l]=void 0}catch(r){return i.call(t)}return n=i.call(t),r?t[l]=e:delete t[l],n}:function(t){return i.call(t)};function s(t){return"[object Arguments]"===p(t)}a=function(){return s(arguments)}();var y=a,b="function"==typeof Object.defineProperty?Object.defineProperty:null;var v,g=Object.defineProperty,d=Object.prototype,j=d.toString,h=d.__defineGetter__,m=d.__defineSetter__,w=d.__lookupGetter__,O=d.__lookupSetter__;v=function(){try{return b({},"x",{}),!0}catch(t){return!1}}()?g:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(w.call(t,r)||O.call(t,r)?(n=t.__proto__,t.__proto__=d,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&h&&h.call(t,r,e.get),i&&m&&m.call(t,r,e.set),t};var _=v;function S(t,r,e){_(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function P(t){return"string"==typeof t}var E=String.prototype.valueOf;var I=u();function T(t){return"object"==typeof t&&(t instanceof String||(I?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object String]"===p(t)))}function A(t){return P(t)||T(t)}function N(t){return"number"==typeof t}S(A,"isPrimitive",P),S(A,"isObject",T);var k=Number,x=k.prototype.toString;var B=u();function V(t){return"object"==typeof t&&(t instanceof k||(B?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object Number]"===p(t)))}function F(t){return N(t)||V(t)}function L(t){return t!=t}function G(t){return N(t)&&L(t)}function Y(t){return V(t)&&L(t.valueOf())}function C(t){return G(t)||Y(t)}S(F,"isPrimitive",N),S(F,"isObject",V),S(C,"isPrimitive",G),S(C,"isObject",Y);var D=Number.POSITIVE_INFINITY,M=k.NEGATIVE_INFINITY,X=Math.floor;function H(t){return X(t)===t}function W(t){return t<D&&t>M&&H(t)}function R(t){return N(t)&&W(t)}function U(t){return V(t)&&W(t.valueOf())}function q(t){return R(t)||U(t)}S(q,"isPrimitive",R),S(q,"isObject",U);var z=Object.prototype.propertyIsEnumerable;var J,K=!z.call("beep","0");function Q(t,r){var e;return null!=t&&(!(e=z.call(t,r))&&K&&A(t)?!G(r=+r)&&R(r)&&r>=0&&r<t.length:e)}J=Array.isArray?Array.isArray:function(t){return"[object Array]"===p(t)};var Z,$=J;Z=y?s:function(t){return null!==t&&"object"==typeof t&&!$(t)&&"number"==typeof t.length&&H(t.length)&&t.length>=0&&t.length<=4294967295&&f(t,"callee")&&!Q(t,"callee")};var tt=Z,rt=Array.prototype.slice;function et(t){return null!==t&&"object"==typeof t}var nt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!$(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(et);S(et,"isObjectLikeArray",nt);var ot=Q((function(){}),"prototype"),ut=!Q({toString:null},"toString");function it(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&H(t.length)&&t.length>=0&&t.length<=9007199254740991}function ct(t,r,e){var n,o;if(!it(t)&&!P(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!R(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(C(r)){for(;o<n;o++)if(C(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var ft=/./;function lt(t){return"boolean"==typeof t}var at=Boolean.prototype.toString;var pt=u();function st(t){return"object"==typeof t&&(t instanceof Boolean||(pt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===p(t)))}function yt(t){return lt(t)||st(t)}function bt(){return new Function("return this;")()}S(yt,"isPrimitive",lt),S(yt,"isObject",st);var vt="object"==typeof self?self:null,gt="object"==typeof window?window:null,dt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},jt="object"==typeof dt?dt:null;var ht=function(t){if(arguments.length){if(!lt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return bt()}if(vt)return vt;if(gt)return gt;if(jt)return jt;throw new Error("unexpected error. Unable to resolve global object.")}(),mt=ht.document&&ht.document.childNodes,wt=Int8Array;function Ot(){return/^\s*function\s*([^(]*)/i}var _t=/^\s*function\s*([^(]*)/i;function St(t){var r,e,n,o;if(("Object"===(e=p(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=_t.exec(n.toString()))return r[1]}return et(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}S(Ot,"REGEXP",_t);var Pt="function"==typeof ft||"object"==typeof wt||"function"==typeof mt?function(t){return St(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?St(t).toLowerCase():r};function Et(t){return t.constructor&&t.constructor.prototype===t}var It=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Tt="undefined"==typeof window?void 0:window;var At=function(){var t;if("undefined"===Pt(Tt))return!1;for(t in Tt)try{-1===ct(It,t)&&f(Tt,t)&&null!==Tt[t]&&"object"===Pt(Tt[t])&&Et(Tt[t])}catch(t){return!0}return!1}(),Nt="undefined"!=typeof window;var kt,xt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];kt=n?function(){return 2!==(e(arguments)||"").length}(1,2)?function(t){return tt(t)?e(rt.call(t)):e(t)}:e:function(t){var r,e,n,o,u,i,c;if(o=[],tt(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!f(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!et(t))return o;e=ot&&n}for(u in t)e&&"prototype"===u||!f(t,u)||o.push(String(u));if(ut)for(r=function(t){if(!1===Nt&&!At)return Et(t);try{return Et(t)}catch(t){return!1}}(t),c=0;c<xt.length;c++)i=xt[c],r&&"constructor"===i||!f(t,i)||o.push(String(i));return o};var Bt,Vt=kt;Bt=t?function(t){return r(Object(t))}:function(t){return Vt(Object(t))};var Ft=Bt;var Lt,Gt,Yt=Object.getPrototypeOf;Gt=Object.getPrototypeOf,Lt="function"===Pt(Gt)?Yt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===p(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Ct=Lt;function Dt(t){return null==t?null:(t=Object(t),Ct(t))}var Mt,Xt=void 0!==Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyDescriptor;Mt=Xt?function(t,r){var e;return null==t||void 0===(e=Ht(t,r))?null:e}:function(t,r){return f(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};var Wt=Mt;function Rt(t,r){var e=Wt(t,r);return null!==e&&(!0===e.writable||"function"==typeof e.set)}return function(t){var r,e,n,o,u,i;if(null==t)return[];n=Object(t),r=[],e={};do{for(o=Ft(n),i=0;i<o.length;i++)!1===f(e,u=o[i])&&Rt(n,u)&&r.push(u),e[u]=!0;n=Dt(n)}while(n);return r}}));
//# sourceMappingURL=browser.js.map
