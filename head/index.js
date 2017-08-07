module.exports = dropRight;
var slice = require('../slice');
var isUndefined = require('@timelaps/is/undefined');

function dropRight(array, n_) {
    return slice(array, 0, isUndefined(n_) ? array.length - 1 : n_);
}