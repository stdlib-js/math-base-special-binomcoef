// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-safe-integer@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-odd@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gcd@v0.2.1-esm/index.mjs";function m(d,a){var o,f,j,h,l,p,v;if(e(d)||e(a))return NaN;if(!t(d)||!t(a))return NaN;if(a<0)return 0;if(f=1,d<0&&(d=-d+a-1,r(a)&&(f*=-1)),a>d)return 0;if(0===a||a===d)return f;if(1===a||a===d-1)return f*d;for(v=i(s/d),o=1,l=1;l<=a&&!(o>v);l++)o*=d,o/=l,d-=1;return l>a?f*o:(j=m(d,a-l+1),h=m(a,a-l+1),f*(o/=h/=p=n(j,h))*(j/=p))}export{m as default};
//# sourceMappingURL=index.mjs.map