var secondToIterable = require('../../../iterable/of-second'),
    forEachEndRight = require('../../../base/for-each-end-right'),
    valueCheck = require('../../../base/for-each-value-check'),
    iterable = secondToIterable(forEachEndRight);
module.exports = function (a, b) {
    return valueCheck(iterable(a, b));
};