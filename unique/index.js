var isEqual = require('@timelaps/is/equal'),
    uniqueWith = require('./with');
module.exports = unique;

function unique(list) {
    return uniqueWith(list, isEqual);
}