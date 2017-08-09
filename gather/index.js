module.exports = gather;
var concat = require('../concat');
var map = require('@timelaps/n/map');
var isFunction = require('@timelaps/is/function');

function gather(list, handler) {
    return concat(isFunction(handler) ? map(list, handler) : list);
}