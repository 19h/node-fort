var fort = require('../');

var xs = [ 3, 2, 4, 6, 2, 8, 1, 7 ];
var res = fort.rise(xs, function (x) { return x % 4 });
console.dir(res);
