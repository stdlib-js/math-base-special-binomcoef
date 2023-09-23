"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=v(function(d,s){
var t=require('@stdlib/math-base-assert-is-integer/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-assert-is-odd/dist'),q=require('@stdlib/math-base-special-round/dist');function a(e,r){var i,u;if(f(e)||f(r))return NaN;if(!t(e)||!t(r))return NaN;if(r<0)return 0;if(e<0)return i=a(-e+r-1,r),n(r)&&(i=-i),i;if(r>e)return 0;if(r===0||r===e)return 1;if(r===1||r===e-1)return e;for(e-r<r&&(r=e-r),i=e,u=2;u<=r;u++)i*=(e-u+1)/u;return t(i)?i:q(i)}s.exports=a
});var c=o();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
