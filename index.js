exports.min = function (xs, f) {
    var mapped = xs.map(f || identity);
    var ix = 0;
    for (var i = 1; i < mapped.length; i++) {
        if (mapped[i] < mapped[ix]) ix = i;
    }
    return xs[ix];
};

exports.max = function (xs, f) {
    var mapped = xs.map(f || identity);
    var ix = 0;
    for (var i = 1; i < mapped.length; i++) {
        if (mapped[i] > mapped[ix]) ix = i;
    }
    return xs[ix];
};

exports.ascend = comparator(function (a, b) {
    if (a.x < b.x) return -1;
    if (a.x > b.x) return 1;
    return 0;
});

exports.descend = comparator(function (a, b) {
    if (a.x < b.x) return 1;
    if (a.x > b.x) return -1;
    return 0;
});

function comparator (cmp) {
    return function (xs, f) {
        if (!f) f = identity;
        var mapped = xs.map(function (x, i) {
            return { i : i, x : f(x) };
        });
        var sorted = mapped.sort(cmp);
        return sorted.map(function (s) { return xs[s.i] });
    };
};

function identity (x) { return x }
