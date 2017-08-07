var accessObjectAfter = require('../access-object-after'),
    baseEach = require('../../base/each'),
    iterateIn = require('@timelaps/object/iterate/in'),
    forEachEndRight = require('../../base/for-each-end-right'),
    secondToIterable = require('../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateIn, forEachEndRight, accessObjectAfter));