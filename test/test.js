/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var EPS = require( '@stdlib/constants-float64-eps' );
var binomcoef = require( './../lib' );


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof binomcoef, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for any parameter', function test( t ) {
	var v = binomcoef( 3, NaN );
	t.equal( isnan( v ), true, 'returns NaN' );

	v = binomcoef( NaN, 2 );
	t.equal( isnan( v ), true, 'returns NaN' );

	t.end();
});

tape( 'the function evaluates the binomial coefficient for integers `m` and `k`', function test( t ) {
	var expected;
	var delta;
	var tol;
	var m;
	var k;
	var v;
	var i;

	m = integers.m;
	k = integers.k;
	expected = integers.expected;
	for ( i = 0; i < m.length; i++ ) {
		v = binomcoef( m[ i ], k[ i ] );
		if ( v === expected[ i ] ) {
			t.equal( v, expected[ i ], 'returns '+expected[i]+' when provided m: '+m[i]+' and k: '+k[i] );
		} else {
			delta = abs( v - expected[ i ] );
			tol = EPS * abs( expected[ i ] );
			t.ok( delta <= tol, 'within tolerance. m: ' + m[ i ] + ' k: ' + k[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if the `n` value is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		2.5,
		'5',
		null,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isnan( binomcoef( values[i], 2 ) ), true, 'returns NaN when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `NaN` if the `k` value is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		2.5,
		'5',
		null,
		true,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.equal( isnan( binomcoef( 2, values[i] ) ), true, 'returns NaN when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `0` for a negative integer `k`', function test( t ) {
	var v = binomcoef( 2, -1 );
	t.equal( v, 0.0, 'returns 0' );

	v = binomcoef( 2, -2 );
	t.equal( v, 0.0, 'returns 0' );
	t.end();
});
