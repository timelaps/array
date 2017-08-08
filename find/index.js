var accessor = require('./accessor'),
    forEachEnd = require('@timelaps/n/for/each/end'),
    secondToIterable = require('../iterable/of-second');
module.exports = secondToIterable(accessor(forEachEnd));