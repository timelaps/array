module.exports = slice;
var toArray = require('@timelaps/to/array');
var possibleArrayIndex = require('@timelaps/n/index/possible');

function slice(array, start, end) {
    return toArray(array).slice(possibleArrayIndex(start), possibleArrayIndex(end));
}