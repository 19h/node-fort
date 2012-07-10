# fort

Sort, min, and max by a transform function.

[![build status](https://secure.travis-ci.org/substack/node-fort.png)](http://travis-ci.org/substack/node-fort)

![cannon](http://substack.net/images/cannon.png)

# example

## minimum of some rows

``` js
var fort = require('fort');
var rows = [ { x : 5 }, { x : 3 }, { x : 2 }, { x : 9 } ];

var r = fort.min(rows, function (row) { return row.x });
console.dir(r);
```

*** 

```
{ x: 2 }
```

## ascending rows

``` js
var fort = require('fort');
var rows = [ { x : 5 }, { x : 3 }, { x : 2 }, { x : 9 } ];

var res = fort.ascend(rows, function (row) { return row.x });
console.dir(res);
```

***

```
[ { x: 2 }, { x: 3 }, { x: 5 }, { x: 9 } ]
```

## ascending modulo sort

``` js
var fort = require('fort');
var xs = [ 3, 2, 4, 6, 2, 8, 1, 7 ];

var res = fort.rise(xs, function (x) { return x % 4 });
console.dir(res);
```

***

```
[ 4, 8, 1, 2, 6, 2, 3, 7 ]
```

# methods

## fort.min(xs, f)

Return the minimum value from the elements in `xs` after transforming by `f(x)`
on each element `x` in `xs`.

The return value will be from the original elements in `xs`, not the transformed
set.

## fort.max(xs, f)

Return the minimum value from the elements in `xs` after transforming by `f(x)`
on each element `x` in `xs`.

The return value will be from the original elements in `xs`, not the transformed
set.

## fort.ascend(xs, f)

Return the elements from `xs` sorted into ascending order after transforming by
`f(x)` on each `x` element in `xs`.

The return array will be comprised of the original elements from `xs`, not the
transformed values from `f(x)`.

## fort.descend(xs, f)

Return the elements from `xs` sorted into descending order after transforming by
`f(x)` on each `x` element in `xs`.

The return array will be comprised of the original elements from `xs`, not the
transformed values from `f(x)`.

## fort.rise(xs, f)

Alias for `fort.ascend()` that is more consistent with the fort theme of this
module.

## fort.fall(xs, f)

Alias for `fort.descend()` that is more consistent with the fort theme of this
module.

# install

With [npm](http://npmjs.org) do:

```
npm install fort
```

# license

MIT
