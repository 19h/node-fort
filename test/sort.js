var test = require('tap').test;
var fort = require('../');

test('ascend', function (t) {
    t.same(fort.ascend([4,1,3,2]), [1,2,3,4], 'identity');
    t.same(
        fort.ascend([4,1,3,2], function (x) { return x % 4 }),
        [4,1,2,3],
        'mod 4 ascend'
    );
    t.same(
        fort.rise(['a','b','@','_','A','Z'], function (c) {
            return c.charCodeAt(0) % 13;
        }),
        ['A','_','a','b','@','Z'],
        'mod 13 character code ascend'
    );
    t.end();
});

test('descend', function (t) {
    t.same(fort.descend([4,1,3,2]), [4,3,2,1], 'identity');
    t.same(
        fort.descend([4,1,3,2], function (x) { return x % 4 }),
        [3,2,1,4],
        'mod 4 descend'
    );
    t.same(
        fort.fall(['a','b','@','_','A','Z'], function (c) {
            return c.charCodeAt(0) % 13;
        }),
        ['@','Z','b','a','_','A'],
        'mod 13 character code descend'
    );
    t.end();
});
