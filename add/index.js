module.exports = add;
var indexOf = require('./index/of');

function add(array, item) {
    var missing = indexOf(array, item) === -1;
    if (missing) {
        array.push(item);
    }
    return missing;
}