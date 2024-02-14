// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).writablePropertyNamesIn=e()}(this,(function(){"use strict";var r=void 0!==Object.getOwnPropertyNames,e=Object,t=e.getOwnPropertyNames;function n(r){return Object.keys(Object(r))}var i=void 0!==Object.keys;function o(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var a=o();function c(){return a&&"symbol"==typeof Symbol.toStringTag}var u=Object.prototype.toString;var l=Object.prototype.hasOwnProperty;function f(r,e){return null!=r&&l.call(r,e)}var s="function"==typeof Symbol?Symbol:void 0,p="function"==typeof s?s.toStringTag:"";var g,d=c()?function(r){var e,t,n;if(null==r)return u.call(r);t=r[p],e=f(r,p);try{r[p]=void 0}catch(e){return u.call(r)}return n=u.call(r),e?r[p]=t:delete r[p],n}:function(r){return u.call(r)};function b(r){return"[object Arguments]"===d(r)}g=function(){return b(arguments)}();var h=g,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var v=Object.defineProperty;function w(r){return"number"==typeof r}function m(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function j(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+m(i):m(i)+r,n&&(r="-"+r)),r}var _=String.prototype.toLowerCase,E=String.prototype.toUpperCase;function S(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!w(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=j(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=j(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===E.call(r.specifier)?E.call(t):_.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function O(r){return"string"==typeof r}var k=Math.abs,x=String.prototype.toLowerCase,T=String.prototype.toUpperCase,I=String.prototype.replace,A=/e\+(\d)$/,V=/e-(\d)$/,P=/^(\d+)$/,F=/^(\d+)e/,$=/\.0$/,C=/\.0*e/,N=/(\..*[^0])0*e/;function B(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!w(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":k(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=I.call(t,N,"$1e"),t=I.call(t,C,"e"),t=I.call(t,$,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=I.call(t,A,"e+0$1"),t=I.call(t,V,"e-0$1"),r.alternate&&(t=I.call(t,P,"$1."),t=I.call(t,F,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===T.call(r.specifier)?T.call(t):x.call(t)}function L(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function R(r,e,t){var n=e-r.length;return n<0?r:r=t?r+L(n):L(n)+r}var G=String.fromCharCode,W=isNaN,Z=Array.isArray;function X(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function M(r){var e,t,n,i,o,a,c,u,l;if(!Z(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(O(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=X(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,W(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=S(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!W(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(o)?String(n.arg):G(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=B(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=j(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function D(r){var e,t,n,i;for(t=[],i=0,n=U.exec(r);n;)(e=r.slice(i,U.lastIndex-n[0].length)).length&&t.push(e),t.push(Y(n)),i=U.lastIndex,n=U.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function z(r){return"string"==typeof r}function H(r){var e,t;if(!z(r))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[D(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return M.apply(null,e)}var q,J=Object.prototype,K=J.toString,Q=J.__defineGetter__,rr=J.__defineSetter__,er=J.__lookupGetter__,tr=J.__lookupSetter__;q=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?v:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===K.call(r))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===K.call(t))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(er.call(r,e)||tr.call(r,e)?(n=r.__proto__,r.__proto__=J,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Q&&Q.call(r,e,t.get),a&&rr&&rr.call(r,e,t.set),r};var nr=q;function ir(r,e,t){nr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function or(r){return"string"==typeof r}var ar=String.prototype.valueOf;var cr=c();function ur(r){return"object"==typeof r&&(r instanceof String||(cr?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object String]"===d(r)))}function lr(r){return or(r)||ur(r)}function fr(r){return"number"==typeof r}ir(lr,"isPrimitive",or),ir(lr,"isObject",ur);var sr=Number,pr=sr.prototype.toString;var gr=c();function dr(r){return"object"==typeof r&&(r instanceof sr||(gr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===d(r)))}function br(r){return fr(r)||dr(r)}function hr(r){return r!=r}function yr(r){return fr(r)&&hr(r)}function vr(r){return dr(r)&&hr(r.valueOf())}function wr(r){return yr(r)||vr(r)}ir(br,"isPrimitive",fr),ir(br,"isObject",dr),ir(wr,"isPrimitive",yr),ir(wr,"isObject",vr);var mr=Number.POSITIVE_INFINITY,jr=sr.NEGATIVE_INFINITY,_r=Math.floor;function Er(r){return _r(r)===r}function Sr(r){return r<mr&&r>jr&&Er(r)}function Or(r){return fr(r)&&Sr(r)}function kr(r){return dr(r)&&Sr(r.valueOf())}function xr(r){return Or(r)||kr(r)}ir(xr,"isPrimitive",Or),ir(xr,"isObject",kr);var Tr=Object.prototype.propertyIsEnumerable;var Ir,Ar=!Tr.call("beep","0");function Vr(r,e){var t;return null!=r&&(!(t=Tr.call(r,e))&&Ar&&lr(r)?!yr(e=+e)&&Or(e)&&e>=0&&e<r.length:t)}Ir=Array.isArray?Array.isArray:function(r){return"[object Array]"===d(r)};var Pr,Fr=Ir;Pr=h?b:function(r){return null!==r&&"object"==typeof r&&!Fr(r)&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=4294967295&&f(r,"callee")&&!Vr(r,"callee")};var $r=Pr,Cr=Array.prototype.slice;function Nr(r){return null!==r&&"object"==typeof r}var Br=function(r){if("function"!=typeof r)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Nr);ir(Nr,"isObjectLikeArray",Br);var Lr=Vr((function(){}),"prototype"),Rr=!Vr({toString:null},"toString");function Gr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=9007199254740991}function Wr(r,e,t){var n,i;if(!Gr(r)&&!or(r))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Or(t))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(wr(e)){for(;i<n;i++)if(wr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Zr=/./;function Xr(r){return"boolean"==typeof r}var Mr=Boolean,Ur=Boolean.prototype.toString;var Yr=c();function Dr(r){return"object"==typeof r&&(r instanceof Mr||(Yr?function(r){try{return Ur.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===d(r)))}function zr(r){return Xr(r)||Dr(r)}function Hr(){return new Function("return this;")()}ir(zr,"isPrimitive",Xr),ir(zr,"isObject",Dr);var qr="object"==typeof self?self:null,Jr="object"==typeof window?window:null,Kr="object"==typeof global?global:null,Qr="object"==typeof globalThis?globalThis:null;var re=function(r){if(arguments.length){if(!Xr(r))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Hr()}if(Qr)return Qr;if(qr)return qr;if(Jr)return Jr;if(Kr)return Kr;throw new Error("unexpected error. Unable to resolve global object.")}(),ee=re.document&&re.document.childNodes,te=Int8Array;function ne(){return/^\s*function\s*([^(]*)/i}var ie=/^\s*function\s*([^(]*)/i;function oe(r){var e,t,n,i;if(("Object"===(t=d(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ie.exec(n.toString()))return e[1]}return Nr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ir(ne,"REGEXP",ie);var ae="function"==typeof Zr||"object"==typeof te||"function"==typeof ee?function(r){return oe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?oe(r).toLowerCase():e};function ce(r){return r.constructor&&r.constructor.prototype===r}var ue=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],le="undefined"==typeof window?void 0:window;var fe=function(){var r;if("undefined"===ae(le))return!1;for(r in le)try{-1===Wr(ue,r)&&f(le,r)&&null!==le[r]&&"object"===ae(le[r])&&ce(le[r])}catch(r){return!0}return!1}(),se="undefined"!=typeof window;var pe,ge=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];pe=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(r){return $r(r)?n(Cr.call(r)):n(r)}:n:function(r){var e,t,n,i,o,a,c;if(i=[],$r(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!f(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Nr(r))return i;t=Lr&&n}for(o in r)t&&"prototype"===o||!f(r,o)||i.push(String(o));if(Rr)for(e=function(r){if(!1===se&&!fe)return ce(r);try{return ce(r)}catch(r){return!1}}(r),c=0;c<ge.length;c++)a=ge[c],e&&"constructor"===a||!f(r,a)||i.push(String(a));return i};var de,be=pe;de=r?function(r){return t(e(r))}:function(r){return be(e(r))};var he=de,ye=Object,ve=/./,we="function"==typeof Object.defineProperty?Object.defineProperty:null;var me=Object.defineProperty;function je(r){return"number"==typeof r}function _e(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Ee(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+_e(i):_e(i)+r,n&&(r="-"+r)),r}var Se=String.prototype.toLowerCase,Oe=String.prototype.toUpperCase;function ke(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!je(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ee(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ee(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Oe.call(r.specifier)?Oe.call(t):Se.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function xe(r){return"string"==typeof r}var Te=Math.abs,Ie=String.prototype.toLowerCase,Ae=String.prototype.toUpperCase,Ve=String.prototype.replace,Pe=/e\+(\d)$/,Fe=/e-(\d)$/,$e=/^(\d+)$/,Ce=/^(\d+)e/,Ne=/\.0$/,Be=/\.0*e/,Le=/(\..*[^0])0*e/;function Re(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!je(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Te(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ve.call(t,Le,"$1e"),t=Ve.call(t,Be,"e"),t=Ve.call(t,Ne,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ve.call(t,Pe,"e+0$1"),t=Ve.call(t,Fe,"e-0$1"),r.alternate&&(t=Ve.call(t,$e,"$1."),t=Ve.call(t,Ce,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ae.call(r.specifier)?Ae.call(t):Ie.call(t)}function Ge(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function We(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Ge(n):Ge(n)+r}var Ze=String.fromCharCode,Xe=isNaN,Me=Array.isArray;function Ue(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ye(r){var e,t,n,i,o,a,c,u,l;if(!Me(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(xe(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Ue(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Xe(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Xe(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ke(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Xe(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Xe(o)?String(n.arg):Ze(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Re(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ee(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=We(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var De=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ze(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function He(r){var e,t,n,i;for(t=[],i=0,n=De.exec(r);n;)(e=r.slice(i,De.lastIndex-n[0].length)).length&&t.push(e),t.push(ze(n)),i=De.lastIndex,n=De.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function qe(r){return"string"==typeof r}function Je(r){var e,t;if(!qe(r))throw new TypeError(Je("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[He(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Ye.apply(null,e)}var Ke,Qe=Object.prototype,rt=Qe.toString,et=Qe.__defineGetter__,tt=Qe.__defineSetter__,nt=Qe.__lookupGetter__,it=Qe.__lookupSetter__;Ke=function(){try{return we({},"x",{}),!0}catch(r){return!1}}()?me:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===rt.call(r))throw new TypeError(Je("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===rt.call(t))throw new TypeError(Je("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(nt.call(r,e)||it.call(r,e)?(n=r.__proto__,r.__proto__=Qe,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&et&&et.call(r,e,t.get),a&&tt&&tt.call(r,e,t.set),r};var ot=Ke;function at(r,e,t){ot(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function ct(r){return"boolean"==typeof r}var ut=o();function lt(){return ut&&"symbol"==typeof Symbol.toStringTag}var ft=Object.prototype.toString;var st="function"==typeof Symbol?Symbol:void 0,pt="function"==typeof st?st.toStringTag:"";var gt=lt()?function(r){var e,t,n;if(null==r)return ft.call(r);t=r[pt],e=f(r,pt);try{r[pt]=void 0}catch(e){return ft.call(r)}return n=ft.call(r),e?r[pt]=t:delete r[pt],n}:function(r){return ft.call(r)},dt=Boolean,bt=Boolean.prototype.toString;var ht=lt();function yt(r){return"object"==typeof r&&(r instanceof dt||(ht?function(r){try{return bt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===gt(r)))}function vt(r){return ct(r)||yt(r)}function wt(){return new Function("return this;")()}at(vt,"isPrimitive",ct),at(vt,"isObject",yt);var mt="object"==typeof self?self:null,jt="object"==typeof window?window:null,_t="object"==typeof global?global:null,Et="object"==typeof globalThis?globalThis:null;var St=function(r){if(arguments.length){if(!ct(r))throw new TypeError(Je("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return wt()}if(Et)return Et;if(mt)return mt;if(jt)return jt;if(_t)return _t;throw new Error("unexpected error. Unable to resolve global object.")}(),Ot=St.document&&St.document.childNodes,kt=Int8Array;function xt(){return/^\s*function\s*([^(]*)/i}var Tt,It=/^\s*function\s*([^(]*)/i;at(xt,"REGEXP",It),Tt=Array.isArray?Array.isArray:function(r){return"[object Array]"===gt(r)};var At=Tt;function Vt(r){return null!==r&&"object"==typeof r}var Pt=function(r){if("function"!=typeof r)throw new TypeError(Je("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!At(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Vt);function Ft(r){var e,t,n,i;if(("Object"===(t=gt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=It.exec(n.toString()))return e[1]}return Vt(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}at(Vt,"isObjectLikeArray",Pt);var $t="function"==typeof ve||"object"==typeof kt||"function"==typeof Ot?function(r){return Ft(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ft(r).toLowerCase():e};var Ct,Nt,Bt=Object.getPrototypeOf;Nt=Object.getPrototypeOf,Ct="function"===$t(Nt)?Bt:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===gt(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Lt=Ct;function Rt(r){return null==r?null:(r=ye(r),Lt(r))}var Gt,Wt=void 0!==Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptor;Gt=Wt?function(r,e){var t;return null==r||void 0===(t=Zt(r,e))?null:t}:function(r,e){return f(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var Xt=Gt;function Mt(r,e){var t=Xt(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)}return function(r){var e,t,n,i,o,a;if(null==r)return[];n=Object(r),e=[],t={};do{for(i=he(n),a=0;a<i.length;a++)!1===f(t,o=i[a])&&Mt(n,o)&&e.push(o),t[o]=!0;n=Rt(n)}while(n);return e}}));
//# sourceMappingURL=index.js.map
