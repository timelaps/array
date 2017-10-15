var filter = require('@timelaps/n/filter');
var returnsArray = require('@timelaps/returns/array');
var passed = require('./passed');
module.exports = function (reducer, negative) {
    return filter(returnsArray, reducer, passed, negative);
};