var flattens = require('../worker');
var isArrayLike = require('@timelaps/is/array-like');
module.exports = function flattenDeep(list) {
    return flattens(list, isArrayLike, flattenDeep);
};