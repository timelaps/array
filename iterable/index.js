module.exports = toIterable;
var matches = require('@timelaps/object/matches/object');
var property = require('@timelaps/object/property');
var isObject = require('@timelaps/is/object');
var isFunction = require('@timelaps/is/function');
var isArray = require('@timelaps/is/array');
var matchesProperty = require('@timelaps/object/matches/property');

function toIterable(iteratee, extent) {
    return isFunction(iteratee) ? iteratee : (isArray(iteratee) ? matchesProperty(iteratee, extent) : (isObject(iteratee) ? matches(iteratee, extent) : property(iteratee, extent)));
}