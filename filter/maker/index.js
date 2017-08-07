var returnsEmptyString = require('@timelaps/returns/empty-string');
var returnsObject = require('@timelaps/returns/object');
var returnsArray = require('@timelaps/returns/array');
var filterCommon = require('../common');
var negatableFilter = require('../negatable');
var pushOne = require('../../push/one');
var filterCommonArray = filterCommon(returnsArray, pushOne);
var filterCommonObject = filterCommon(returnsObject, function (object, value, key) {
    return (object[key] = value);
});
var filterCommonString = filterCommon(returnsEmptyString, function stringConcat(a, b) {
    return a + b;
});
module.exports = negatableFilter(filterCommonArray, filterCommonObject, filterCommonString);