var accessObjectAfter = require('../access-object-after'),
    baseEach = require('@timelaps/object/each/base'),
    iterateOwn = require('@timelaps/object/iterate/own'),
    forEachEndRight = require('@timelaps/n/for/each/end/right'),
    secondToIterable = require('../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateOwn, forEachEndRight, accessObjectAfter));