// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r=void 0!==Object.getOwnPropertyNames,e=Object,t=e.getOwnPropertyNames;function n(r){return Object.keys(Object(r))}var i=void 0!==Object.keys;function o(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var a=o();function c(){return a&&"symbol"==typeof Symbol.toStringTag}var u=Object.prototype.toString,l=Object.prototype.hasOwnProperty;function f(r,e){return null!=r&&l.call(r,e)}var s,p="function"==typeof Symbol?Symbol:void 0,g="function"==typeof p?p.toStringTag:"",d=c()?function(r){var e,t,n;if(null==r)return u.call(r);t=r[g],e=f(r,g);try{r[g]=void 0}catch(e){return u.call(r)}return n=u.call(r),e?r[g]=t:delete r[g],n}:function(r){return u.call(r)};function h(r){return"[object Arguments]"===d(r)}s=function(){return h(arguments)}();var b=s,y="function"==typeof Object.defineProperty?Object.defineProperty:null,v=Object.defineProperty;function w(r){return"number"==typeof r}function m(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function j(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+m(i):m(i)+r,n&&(r="-"+r)),r}var _=String.prototype.toLowerCase,E=String.prototype.toUpperCase;function S(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!w(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=j(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=j(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===E.call(r.specifier)?E.call(t):_.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function O(r){return"string"==typeof r}var k=Math.abs,x=String.prototype.toLowerCase,T=String.prototype.toUpperCase,I=String.prototype.replace,A=/e\+(\d)$/,V=/e-(\d)$/,P=/^(\d+)$/,F=/^(\d+)e/,$=/\.0$/,C=/\.0*e/,N=/(\..*[^0])0*e/;function B(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!w(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":k(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=I.call(t,N,"$1e"),t=I.call(t,C,"e"),t=I.call(t,$,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=I.call(t,A,"e+0$1"),t=I.call(t,V,"e-0$1"),r.alternate&&(t=I.call(t,P,"$1."),t=I.call(t,F,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===T.call(r.specifier)?T.call(t):x.call(t)}function L(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function R(r,e,t){var n=e-r.length;return n<0?r:r=t?r+L(n):L(n)+r}var G=String.fromCharCode,W=isNaN,Z=Array.isArray;function X(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function M(r){var e,t,n,i,o,a,c,u,l;if(!Z(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(O(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=X(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,W(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,W(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=S(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!W(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=W(o)?String(n.arg):G(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=B(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=j(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=R(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function D(r){var e,t,n,i;for(t=[],i=0,n=U.exec(r);n;)(e=r.slice(i,U.lastIndex-n[0].length)).length&&t.push(e),t.push(Y(n)),i=U.lastIndex,n=U.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function z(r){return"string"==typeof r}function H(r){var e,t;if(!z(r))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[D(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return M.apply(null,e)}var q,J=Object.prototype,K=J.toString,Q=J.__defineGetter__,rr=J.__defineSetter__,er=J.__lookupGetter__,tr=J.__lookupSetter__;q=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?v:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===K.call(r))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===K.call(t))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(er.call(r,e)||tr.call(r,e)?(n=r.__proto__,r.__proto__=J,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Q&&Q.call(r,e,t.get),a&&rr&&rr.call(r,e,t.set),r};var nr=q;function ir(r,e,t){nr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function or(r){return"string"==typeof r}var ar=String.prototype.valueOf,cr=c();function ur(r){return"object"==typeof r&&(r instanceof String||(cr?function(r){try{return ar.call(r),!0}catch(r){return!1}}(r):"[object String]"===d(r)))}function lr(r){return or(r)||ur(r)}function fr(r){return"number"==typeof r}ir(lr,"isPrimitive",or),ir(lr,"isObject",ur);var sr=Number,pr=sr.prototype.toString,gr=c();function dr(r){return"object"==typeof r&&(r instanceof sr||(gr?function(r){try{return pr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===d(r)))}function hr(r){return fr(r)||dr(r)}function br(r){return r!=r}function yr(r){return fr(r)&&br(r)}function vr(r){return dr(r)&&br(r.valueOf())}function wr(r){return yr(r)||vr(r)}ir(hr,"isPrimitive",fr),ir(hr,"isObject",dr),ir(wr,"isPrimitive",yr),ir(wr,"isObject",vr);var mr=Number.POSITIVE_INFINITY,jr=sr.NEGATIVE_INFINITY,_r=Math.floor;function Er(r){return _r(r)===r}function Sr(r){return r<mr&&r>jr&&Er(r)}function Or(r){return fr(r)&&Sr(r)}function kr(r){return dr(r)&&Sr(r.valueOf())}function xr(r){return Or(r)||kr(r)}ir(xr,"isPrimitive",Or),ir(xr,"isObject",kr);var Tr,Ir=Object.prototype.propertyIsEnumerable,Ar=!Ir.call("beep","0");function Vr(r,e){var t;return null!=r&&(!(t=Ir.call(r,e))&&Ar&&lr(r)?!yr(e=+e)&&Or(e)&&e>=0&&e<r.length:t)}Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===d(r)};var Pr,Fr=Tr;Pr=b?h:function(r){return null!==r&&"object"==typeof r&&!Fr(r)&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=4294967295&&f(r,"callee")&&!Vr(r,"callee")};var $r=Pr,Cr=Array.prototype.slice;function Nr(r){return null!==r&&"object"==typeof r}var Br=function(r){if("function"!=typeof r)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Nr);ir(Nr,"isObjectLikeArray",Br);var Lr=Vr((function(){}),"prototype"),Rr=!Vr({toString:null},"toString");function Gr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=9007199254740991}function Wr(r,e,t){var n,i;if(!Gr(r)&&!or(r))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Or(t))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(wr(e)){for(;i<n;i++)if(wr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Zr=/./;function Xr(r){return"boolean"==typeof r}var Mr=Boolean,Ur=Boolean.prototype.toString,Yr=c();function Dr(r){return"object"==typeof r&&(r instanceof Mr||(Yr?function(r){try{return Ur.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===d(r)))}function zr(r){return Xr(r)||Dr(r)}function Hr(){return new Function("return this;")()}ir(zr,"isPrimitive",Xr),ir(zr,"isObject",Dr);var qr="object"==typeof self?self:null,Jr="object"==typeof window?window:null,Kr="object"==typeof globalThis?globalThis:null,Qr=function(r){if(arguments.length){if(!Xr(r))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Hr()}if(Kr)return Kr;if(qr)return qr;if(Jr)return Jr;throw new Error("unexpected error. Unable to resolve global object.")}(),re=Qr.document&&Qr.document.childNodes,ee=Int8Array;function te(){return/^\s*function\s*([^(]*)/i}var ne=/^\s*function\s*([^(]*)/i;function ie(r){var e,t,n,i;if(("Object"===(t=d(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ne.exec(n.toString()))return e[1]}return Nr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ir(te,"REGEXP",ne);var oe="function"==typeof Zr||"object"==typeof ee||"function"==typeof re?function(r){return ie(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?ie(r).toLowerCase():e};function ae(r){return r.constructor&&r.constructor.prototype===r}var ce,ue=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],le="undefined"==typeof window?void 0:window,fe=function(){var r;if("undefined"===oe(le))return!1;for(r in le)try{-1===Wr(ue,r)&&f(le,r)&&null!==le[r]&&"object"===oe(le[r])&&ae(le[r])}catch(r){return!0}return!1}(),se="undefined"!=typeof window,pe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ce=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(r){return $r(r)?n(Cr.call(r)):n(r)}:n:function(r){var e,t,n,i,o,a,c;if(i=[],$r(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!f(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(0==(n="function"==typeof r)&&!Nr(r))return i;t=Lr&&n}for(o in r)t&&"prototype"===o||!f(r,o)||i.push(String(o));if(Rr)for(e=function(r){if(!1===se&&!fe)return ae(r);try{return ae(r)}catch(r){return!1}}(r),c=0;c<pe.length;c++)a=pe[c],e&&"constructor"===a||!f(r,a)||i.push(String(a));return i};var ge,de=ce;ge=r?function(r){return t(e(r))}:function(r){return de(e(r))};var he=ge,be=Object,ye=/./,ve="function"==typeof Object.defineProperty?Object.defineProperty:null,we=Object.defineProperty;function me(r){return"number"==typeof r}function je(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function _e(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+je(i):je(i)+r,n&&(r="-"+r)),r}var Ee=String.prototype.toLowerCase,Se=String.prototype.toUpperCase;function Oe(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!me(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=_e(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=_e(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Se.call(r.specifier)?Se.call(t):Ee.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ke(r){return"string"==typeof r}var xe=Math.abs,Te=String.prototype.toLowerCase,Ie=String.prototype.toUpperCase,Ae=String.prototype.replace,Ve=/e\+(\d)$/,Pe=/e-(\d)$/,Fe=/^(\d+)$/,$e=/^(\d+)e/,Ce=/\.0$/,Ne=/\.0*e/,Be=/(\..*[^0])0*e/;function Le(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!me(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":xe(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ae.call(t,Be,"$1e"),t=Ae.call(t,Ne,"e"),t=Ae.call(t,Ce,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ae.call(t,Ve,"e+0$1"),t=Ae.call(t,Pe,"e-0$1"),r.alternate&&(t=Ae.call(t,Fe,"$1."),t=Ae.call(t,$e,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Ie.call(r.specifier)?Ie.call(t):Te.call(t)}function Re(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Ge(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Re(n):Re(n)+r}var We=String.fromCharCode,Ze=isNaN,Xe=Array.isArray;function Me(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ue(r){var e,t,n,i,o,a,c,u,l;if(!Xe(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(ke(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Me(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ze(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ze(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Oe(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ze(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ze(o)?String(n.arg):We(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Le(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_e(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ge(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var Ye=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function De(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function ze(r){var e,t,n,i;for(t=[],i=0,n=Ye.exec(r);n;)(e=r.slice(i,Ye.lastIndex-n[0].length)).length&&t.push(e),t.push(De(n)),i=Ye.lastIndex,n=Ye.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function He(r){return"string"==typeof r}function qe(r){var e,t;if(!He(r))throw new TypeError(qe("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[ze(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Ue.apply(null,e)}var Je,Ke=Object.prototype,Qe=Ke.toString,rt=Ke.__defineGetter__,et=Ke.__defineSetter__,tt=Ke.__lookupGetter__,nt=Ke.__lookupSetter__;Je=function(){try{return ve({},"x",{}),!0}catch(r){return!1}}()?we:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Qe.call(r))throw new TypeError(qe("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Qe.call(t))throw new TypeError(qe("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(tt.call(r,e)||nt.call(r,e)?(n=r.__proto__,r.__proto__=Ke,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&rt&&rt.call(r,e,t.get),a&&et&&et.call(r,e,t.set),r};var it=Je;function ot(r,e,t){it(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function at(r){return"boolean"==typeof r}var ct=o();function ut(){return ct&&"symbol"==typeof Symbol.toStringTag}var lt=Object.prototype.toString,ft="function"==typeof Symbol?Symbol:void 0,st="function"==typeof ft?ft.toStringTag:"",pt=ut()?function(r){var e,t,n;if(null==r)return lt.call(r);t=r[st],e=f(r,st);try{r[st]=void 0}catch(e){return lt.call(r)}return n=lt.call(r),e?r[st]=t:delete r[st],n}:function(r){return lt.call(r)},gt=Boolean,dt=Boolean.prototype.toString,ht=ut();function bt(r){return"object"==typeof r&&(r instanceof gt||(ht?function(r){try{return dt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===pt(r)))}function yt(r){return at(r)||bt(r)}function vt(){return new Function("return this;")()}ot(yt,"isPrimitive",at),ot(yt,"isObject",bt);var wt="object"==typeof self?self:null,mt="object"==typeof window?window:null,jt="object"==typeof globalThis?globalThis:null,_t=function(r){if(arguments.length){if(!at(r))throw new TypeError(qe("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return vt()}if(jt)return jt;if(wt)return wt;if(mt)return mt;throw new Error("unexpected error. Unable to resolve global object.")}(),Et=_t.document&&_t.document.childNodes,St=Int8Array;function Ot(){return/^\s*function\s*([^(]*)/i}var kt,xt=/^\s*function\s*([^(]*)/i;ot(Ot,"REGEXP",xt),kt=Array.isArray?Array.isArray:function(r){return"[object Array]"===pt(r)};var Tt=kt;function It(r){return null!==r&&"object"==typeof r}var At=function(r){if("function"!=typeof r)throw new TypeError(qe("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Tt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(It);function Vt(r){var e,t,n,i;if(("Object"===(t=pt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=xt.exec(n.toString()))return e[1]}return It(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ot(It,"isObjectLikeArray",At);var Pt,Ft,$t="function"==typeof ye||"object"==typeof St||"function"==typeof Et?function(r){return Vt(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Vt(r).toLowerCase():e},Ct=Object.getPrototypeOf;Ft=Object.getPrototypeOf,Pt="function"===$t(Ft)?Ct:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===pt(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Nt=Pt;function Bt(r){return null==r?null:(r=be(r),Nt(r))}var Lt,Rt=void 0!==Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptor;Lt=Rt?function(r,e){var t;return null==r||void 0===(t=Gt(r,e))?null:t}:function(r,e){return f(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};var Wt=Lt;function Zt(r,e){var t=Wt(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)}return function(r){var e,t,n,i,o,a;if(null==r)return[];n=Object(r),e=[],t={};do{for(i=he(n),a=0;a<i.length;a++)!1===f(t,o=i[a])&&Zt(n,o)&&e.push(o),t[o]=!0;n=Bt(n)}while(n);return e}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).writablePropertyNamesIn=e();
//# sourceMappingURL=browser.js.map
