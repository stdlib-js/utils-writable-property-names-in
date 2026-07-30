"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var n=v(function(b,u){
var p=require('@stdlib/utils-property-names/dist'),c=require('@stdlib/utils-get-prototype-of/dist'),f=require('@stdlib/assert-is-writable-property/dist'),q=require('@stdlib/assert-has-own-property/dist'),h=require('@stdlib/object-ctor/dist');function l(t){var r,a,e,s,i,o;if(t==null)return[];e=h(t),r=[],a={};do{for(s=p(e),o=0;o<s.length;o++)i=s[o],q(a,i)===!1&&f(e,i)&&r.push(i),a[i]=!0;e=c(e)}while(e);return r}u.exports=l
});var m=n();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
