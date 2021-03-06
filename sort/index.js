var isNan = require('@timelaps/is/nan');
var bindTo = require('@timelaps/fn/bind/to');
var defaultSort = require('@timelaps/is/greater-than');
var isTrue = require('@timelaps/is/true');
var isFalse = require('@timelaps/is/false');
module.exports = function sort(obj, fn_, reversed) {
    var fn = bindTo(fn_ || defaultSort, obj);
    // normalize sort function handling for safari
    return obj.slice(0).sort(function comparatorNormalization(a, b) {
        var result = fn(a, b);
        if (isNan(result)) {
            result = Infinity;
        }
        if (isTrue(result)) {
            result = 1;
        }
        if (isFalse(result)) {
            result = -1;
        }
        return reversed ? result * -1 : result;
    });
};