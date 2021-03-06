module.exports = sortBy;
var isFunction = require('@timelaps/is/function');
var isGreaterThan = require('@timelaps/is/greater-than');
var sort = require('../');
var get = require('@timelaps/n/get');
// arg1 is usually a string or number
function sortBy(list, arg1_, handler_, reversed) {
    var arg1 = arg1_,
        handler = handler_ || get;
    if (isFunction(arg1)) {
        handler = arg1;
        arg1 = null;
    }
    return sort(list, function sortByDistillary(a, b) {
        return isGreaterThan(handler(a, arg1), handler(b, arg1));
    }, reversed);
}