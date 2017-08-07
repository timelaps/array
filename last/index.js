module.exports = last;
var lastIndex = require('../index/last');
var nth = require('../nth');

function last(array) {
    return nth(array, lastIndex(array));
}