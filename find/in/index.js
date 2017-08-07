var accessObjectAfter = require('../access-object-after'),
    baseEach = require('../../base/each'),
    iterateIn = require('@timelaps/object/iterate/in'),
    forEachEnd = require('../../base/for-each-end'),
    secondToIterable = require('../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateIn, forEachEnd, accessObjectAfter));