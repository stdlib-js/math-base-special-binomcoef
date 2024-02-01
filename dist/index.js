"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=g(function(A,N){
var n=require('@stdlib/constants-float64-max-safe-integer/dist'),q=require('@stdlib/math-base-assert-is-integer/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-assert-is-odd/dist'),E=require('@stdlib/math-base-special-floor/dist'),m=require('@stdlib/math-base-special-gcd/dist');function s(e,r){var i,u,t,f,a,v,o;if(c(e)||c(r))return NaN;if(!q(e)||!q(r))return NaN;if(r<0||(u=1,e<0&&(e=-e+r-1,b(r)&&(u*=-1)),r>e))return 0;if(r===0||r===e)return u;if(r===1||r===e-1)return u*e;for(o=E(n/e),i=1,a=1;a<=r&&!(i>o);a++)i*=e,i/=a,e-=1;return a>r?u*i:(t=s(e,r-a+1),f=s(r,r-a+1),v=m(t,f),t/=v,f/=v,i/=f,u*i*t)}N.exports=s
});var p=d();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
