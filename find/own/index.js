var accessObjectAfter = require('../access-object-after'),
    baseEach = require('../../base/each'),
    iterateOwn = require('@timelaps/object/iterate/own'),
    forEachEnd = require('../../base/for-each-end'),
    secondToIterable = require('../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateOwn, forEachEnd, accessObjectAfter));