var accessor = require('./accessor'),
    forEachEnd = require('../base/for-each-end'),
    secondToIterable = require('../iterable/of-second');
module.exports = secondToIterable(accessor(forEachEnd));