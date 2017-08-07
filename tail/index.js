module.exports = tail;
var slice = require('../slice');
var isUndefined = require('@timelaps/is/undefined');

function tail(array, _n) {
    return slice(array, isUndefined(_n) ? 1 : _n);
}