module.exports = nthIs;
var isStrictlyEqual = require('@timelaps/is/strictly-equal');
var nth = require('../nth');

function nthIs(array, final, index) {
    return nth(array, index || 0) === final;
}