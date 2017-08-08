var accessObjectAfter = require('../access-object-after'),
    baseEach = require('@timelaps/object/each/base'),
    iterateIn = require('@timelaps/object/iterate/in'),
    forEachEndRight = require('@timelaps/n/for/each/end/right'),
    secondToIterable = require('../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateIn, forEachEndRight, accessObjectAfter));