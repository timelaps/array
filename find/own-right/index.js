var accessObjectAfter = require('../access-object-after'),
    baseEach = require('../../base/each'),
    iterateOwn = require('@timelaps/object/iterate/own'),
    forEachEndRight = require('../../base/for-each-end-right'),
    secondToIterable = require('../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateOwn, forEachEndRight, accessObjectAfter));