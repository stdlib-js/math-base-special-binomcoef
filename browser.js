// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r=Number.POSITIVE_INFINITY,n=Math.floor;function e(r){return n(r)===r}function f(r){return r!=r}function t(r){return e(r/2)}var u=Number.NEGATIVE_INFINITY,o=2147483647;return function i(N,a){var c,d,I,l,s,b,m,p;if(f(N)||f(a))return NaN;if(!e(N)||!e(a))return NaN;if(a<0)return 0;if(d=1,N<0&&(N=-N+a-1,t((p=a)>0?p-1:p+1)&&(d*=-1)),a>N)return 0;if(0===a||a===N)return d;if(1===a||a===N-1)return d*N;for(N-a<a&&(a=N-a),m=n(9007199254740991/N),c=1,s=1;s<=a&&!(c>m);s++)c*=N,c/=s,N-=1;return s>a?d*c:(I=i(N,a-s+1))===r?d*I:(b=function(n,t){return f(n)||f(t)||n===r||t===r||n===u||t===u?NaN:e(n)&&e(t)?(n<0&&(n=-n),t<0&&(t=-t),n<=o&&t<=o?function(r,n){var e,f=0;if(0===r)return n;if(0===n)return r;for(;0==(1&r)&&0==(1&n);)r>>>=1,n>>>=1,f+=1;for(;0==(1&r);)r>>>=1;for(;n;){for(;0==(1&n);)n>>>=1;r>n&&(e=n,n=r,r=e),n-=r}return r<<f}(n,t):function(r,n){var e,f=1;if(0===r)return n;if(0===n)return r;for(;r%2==0&&n%2==0;)r/=2,n/=2,f*=2;for(;r%2==0;)r/=2;for(;n;){for(;n%2==0;)n/=2;r>n&&(e=n,n=r,r=e),n-=r}return f*r}(n,t)):NaN}(I,l=i(a,a-s+1)),d*(c/=l/=b)*(I/=b))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).binomcoef=n();
//# sourceMappingURL=browser.js.map
