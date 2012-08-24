var test = require('tap').test;
var fort = require('../');

test('ascend', function (t) {
    t.same([4,1,3,2].sort(fort.ascend()), [1,2,3,4], 'identity');
    t.same(
        [4,1,3,2].sort(fort.ascend(function (x) { return x % 4 })),
        [4,1,2,3],
        'mod 4 ascend'
    );
    t.same(
        ['a','b','@','_','A','Z'].sort(fort.rise(function (c) {
            return c.charCodeAt(0) % 13;
        })),
        ['A','_','a','b','@','Z'],
        'mod 13 character code ascend'
    );
    t.end();
});

test('descend', function (t) {
    t.same([4,1,3,2].sort(fort.descend()), [4,3,2,1], 'identity');
    t.same(
        [4,1,3,2].sort(fort.descend(function (x) { return x % 4 })),
        [3,2,1,4],
        'mod 4 descend'
    );
    t.same(
        ['a','b','@','_','A','Z'].sort(fort.fall(function (c) {
            return c.charCodeAt(0) % 13;
        })),
        ['@','Z','b','a','_','A'],
        'mod 13 character code descend'
    );
    t.end();
});
