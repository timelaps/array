var secondToIterable = require('../../iterable/of-second');
var valueCheck = require('../../base/for-each-value-check');
var iterable = secondToIterable(require('../../base/for-each-end'));
module.exports = function (a, b) {
    return valueCheck(iterable(a, b));
};