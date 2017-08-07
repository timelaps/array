var isArrayLike = require('@timelaps/is/array-like');
var isObject = require('@timelaps/is/object');
var toIterable = require('../../iterable');
module.exports = function negatableFilter(array, object, string) {
    return function negatableFilterReducer(reduction, negation) {
        return function negatableFilterIterator(thing, iteratee) {
            return (isArrayLike(thing) ? array : (isObject(thing) ? object : string))(thing, toIterable(iteratee), negation, reduction);
        };
    };
};