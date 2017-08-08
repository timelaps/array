var accessObjectAfter = require('../access-object-after'),
    baseEach = require('@timelaps/object/each/base'),
    iterateIn = require('@timelaps/object/iterate/in'),
    forEachEnd = require('@timelaps/n/for/each/end'),
    secondToIterable = require('../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateIn, forEachEnd, accessObjectAfter));