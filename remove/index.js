module.exports = remove;
var indexOf = require('@timelaps/n/index/of');

function remove(array, item) {
    var index = indexOf(array, item),
        has = index !== -1;
    if (has) {
        array.splice(index, 1);
    }
    return has;
}