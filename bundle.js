// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).binomcoef=n()}(this,(function(){"use strict";var r=Math.floor;var n=function(n){return r(n)===n};var e=function(r){return r!=r},t=n;var f=function(r){return t(r/2)};var u=function(r){return f(r>0?r-1:r+1)},i=Math.round,o=n,a=e,c=u,d=i;var l=function r(n,e){var t,f;if(a(n)||a(e))return NaN;if(!o(n)||!o(e))return NaN;if(e<0)return 0;if(n<0)return t=r(-n+e-1,e),c(e)&&(t=-t),t;if(e>n)return 0;if(0===e||e===n)return 1;if(1===e||e===n-1)return n;for(n-e<e&&(e=n-e),t=n,f=2;f<=e;f++)t*=(n-f+1)/f;return o(t)?t:d(t)};return l}));
//# sourceMappingURL=bundle.js.map
