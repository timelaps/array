var accessObjectAfter = require('../access-object-after'),
    baseEach = require('@timelaps/object/each/base'),
    iterateOwn = require('@timelaps/object/iterate/own'),
    forEachEnd = require('@timelaps/n/for/each/end'),
    secondToIterable = require('../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateOwn, forEachEnd, accessObjectAfter));