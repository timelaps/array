var toArray = require('@timelaps/to/array');
var isNil = require('@timelaps/is/nil');
var isArrayLike = require('@timelaps/is/array-like');
var indicesGenerator = require('@timelaps/fn/generator/indices');
var reduceFrom = require('@timelaps/n/reduce/from');
module.exports = [].reduce ? function (array_, fn, memo) {
    var array = isArrayLike(array_) ? toArray(array_) : [];
    return arguments.length >= 3 ? array.reduce(fn, memo) : array.reduce(fn);
} : reduceFrom(isArrayLike, indicesGenerator);