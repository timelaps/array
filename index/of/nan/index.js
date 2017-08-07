var isNan = require('@timelaps/is/nan');
var forEachEnd = require('../../../base/for-each-end');
module.exports = function indexOfNaN(array, fromIndex, toIndex) {
    return forEachEnd(array, isNan, fromIndex, toIndex);
};