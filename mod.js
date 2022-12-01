// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function n(n){return r(n)===n}function t(r){return r!=r}function u(r){return n(r/2)}var f=Math.round;function e(r,i){var a,o,c;if(t(r)||t(i))return NaN;if(!n(r)||!n(i))return NaN;if(i<0)return 0;if(r<0)return a=e(-r+i-1,i),u((c=i)>0?c-1:c+1)&&(a=-a),a;if(i>r)return 0;if(0===i||i===r)return 1;if(1===i||i===r-1)return r;for(r-i<i&&(i=r-i),a=r,o=2;o<=i;o++)a*=(r-o+1)/o;return n(a)?a:f(a)}export{e as default};
//# sourceMappingURL=mod.js.map
