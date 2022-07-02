// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var n=function(n){return r(n)===n};var t=function(r){return r!=r},u=n;var f=function(r){return u(r/2)};var e=function(r){return f(r>0?r-1:r+1)},a=Math.round;function i(r,u){var f,o;if(t(r)||t(u))return NaN;if(!n(r)||!n(u))return NaN;if(u<0)return 0;if(r<0)return f=i(-r+u-1,u),e(u)&&(f=-f),f;if(u>r)return 0;if(0===u||u===r)return 1;if(1===u||u===r-1)return r;for(r-u<u&&(u=r-u),f=r,o=2;o<=u;o++)f*=(r-o+1)/o;return n(f)?f:a(f)}export{i as default};
//# sourceMappingURL=mod.js.map
