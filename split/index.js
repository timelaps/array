module.exports = split;
var toString = require('@timelaps/to/string');
var isUndefined = require('@timelaps/is/undefined');

function split(string, delimiter) {
    return toString(string).split(isUndefined(delimiter) ? '' : delimiter);
}