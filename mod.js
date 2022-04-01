// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var n=function(n){return r(n)===n};var t=function(r){return r!=r},u=n;var f=function(r){return u(r/2)};var e=function(r){return f(r>0?r-1:r+1)},a=Math.round,i=n,o=t,v=e,c=a;var N=function r(n,t){var u,f;if(o(n)||o(t))return NaN;if(!i(n)||!i(t))return NaN;if(t<0)return 0;if(n<0)return u=r(-n+t-1,t),v(t)&&(u=-u),u;if(t>n)return 0;if(0===t||t===n)return 1;if(1===t||t===n-1)return n;for(n-t<t&&(t=n-t),u=n,f=2;f<=t;f++)u*=(n-f+1)/f;return i(u)?u:c(u)},d=N;export{d as default};
//# sourceMappingURL=mod.js.map
