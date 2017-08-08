var isStrictlyEqual = require('@timelaps/is/strictly-equal');
var forEachEndRight = require('@timelaps/n/for/each/end/right');
var bindWith = require('@timelaps/fn/bind/with');
var isArrayLike = require('@timelaps/is/array-like');
var reduce = require('../../reduce');
module.exports = require('../../iterable/of-second')(function uniqueWith(list, comparator) {
    return reduce(list, function uniqueChecker(memo, a, index, list) {
        if (isStrictlyEqual(forEachEndRight(memo, function (b) {
                return comparator(a, b);
            }), -1)) {
            memo.push(a);
        }
    }, []);
});