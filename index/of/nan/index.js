var isNan = require('@timelaps/is/nan');
var forEachEnd = require('@timelaps/n/for/each/end');
module.exports = function indexOfNaN(array, fromIndex, toIndex) {
    return forEachEnd(array, isNan, fromIndex, toIndex);
};