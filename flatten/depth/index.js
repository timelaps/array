module.exports = flattenDepth;
var isUndefined = require('@timelaps/is/undefined');
var flattens = require('../worker');
var isArrayLike = require('@timelaps/is/array-like');

function flattenDepth(list, depth_) {
    var depth = isUndefined(depth_) ? 1 : depth_;
    if (depth <= 0) {
        return list;
    }
    return flattens(list, isArrayLike, function (item) {
        return flattenDepth(item, --depth);
    });
}