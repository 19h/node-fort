var test = require('tap').test;
var fort = require('../');

test('min', function (t) {
    t.equal(fort.min([4,1,3,2]), 1, 'identity minimum');
    t.equal(
        fort.min([4,1,3,2], function (x) { return x % 4 }),
        4,
        'mod 4 min'
    );
    t.equal(
        fort.min(['a','b','@','_','A','Z'], function (c) {
            return c.charCodeAt(0) % 13;
        }),
        'A', // 65 = 13 * 5
        'mod 13 character code min'
    );
    t.end();
});

test('max', function (t) {
    t.equal(fort.max([4,1,3,2]), 4, 'identity maximum');
    t.equal(
        fort.max([4,1,3,2], function (x) { return x % 4 }),
        3,
        'mod 4 max'
    );
    t.equal(
        fort.max(['a','b','@','_','A','Z'], function (c) {
            return c.charCodeAt(0) % 13;
        }),
        '@', // 64 % 13 = 12
        'mod 13 character code max'
    );
    t.end();
});
