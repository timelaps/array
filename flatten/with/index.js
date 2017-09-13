module.exports = flattenWith;
var toFunction = require('@timelaps/to/function');
var flattens = require('../worker');
var isArrayLike = require('@timelaps/is/array-like');

function flattenWith(list, filter) {
    return flattens(list, toFunction(filter), flattenWith);
}