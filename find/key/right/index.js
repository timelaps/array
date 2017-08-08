var secondToIterable = require('../../../iterable/of-second'),
    forEachEndRight = require('@timelaps/n/for/each/end/right'),
    valueCheck = require('@timelaps/n/for/value-check'),
    iterable = secondToIterable(forEachEndRight);
module.exports = function (a, b) {
    return valueCheck(iterable(a, b));
};