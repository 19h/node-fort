var fort = require('../');
var rows = [ { x : 5 }, { x : 3 }, { x : 2 }, { x : 9 } ];

var res = fort.ascend(rows, function (row) { return row.x });
console.dir(res);
