var toFunction = require('@timelaps/to/function');
var flattens = require('../worker');
var isArrayLike = require('@timelaps/is/array-like');
module.exports = flattenSelectively;

function flattenSelectively(list, filter) {
    return flattens(list, toFunction(filter), flattenSelectively);
}