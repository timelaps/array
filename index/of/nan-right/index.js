var isNan = require('@timelaps/is/nan');
var forEachEndRight = require('@timelaps/n/for/each/end/right');
module.exports = indexOfNaN;

function indexOfNaN(array, fromIndex, toIndex) {
    return forEachEndRight(array, isNan, fromIndex, toIndex);
}