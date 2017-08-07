var baseForEachEnd = require('../for-each-end');
var lastIndex = require('../../index/last');
var isNil = require('@timelaps/is/nil');
var valueCheck = require('../for-each-value-check');
module.exports = function baseForEachEndRight(list, callback, start, end) {
    return baseForEachEnd(list, callback, isNil(start) ? lastIndex(list) : start, isNil(end) ? 0 : end, -1);
};