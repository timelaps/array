module.exports = push;
var pushMany = require('./many');
var toArray = require('@timelaps/to/array');

function push(array, list) {
    return pushMany(array, toArray(list));
}