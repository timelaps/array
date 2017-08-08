var secondToIterable = require('../../iterable/of-second');
var valueCheck = require('@timelaps/n/for/value-check');
var iterable = secondToIterable(require('@timelaps/n/for/each/end'));
module.exports = function (a, b) {
    return valueCheck(iterable(a, b));
};