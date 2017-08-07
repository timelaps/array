var baseEach = require('../../../base/each'),
    iterateIn = require('@timelaps/object/iterate/own'),
    forEachEnd = require('../../../base/for-each-end'),
    accessObjectKeyAfter = require('../../access-object-after'),
    secondToIterable = require('../../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateIn, forEachEnd, accessObjectKeyAfter));