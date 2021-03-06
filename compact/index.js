module.exports = compact;
var filter = require('../filter');
var isNil = require('@timelaps/is/nil');

function compact(list) {
    return filter(list, isNotNil);
}

function isNotNil(item) {
    return !isNil(item);
}