module.exports = join;
var toArray = require('@timelaps/to/array');
var isUndefined = require('@timelaps/is/undefined');

function join(array, delimiter) {
    return toArray(array).join(isUndefined(delimiter) ? ',' : delimiter);
}