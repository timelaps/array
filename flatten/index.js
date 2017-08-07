var toArray = require('@timelaps/to/array');
var flattens = require('./worker');
var isArrayLike = require('@timelaps/is/array-like');
module.exports = function flatten(list) {
    return flattens(list, isArrayLike, toArray);
};