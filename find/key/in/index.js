var baseEach = require('../../../base/each'),
    iterateIn = require('@timelaps/object/iterate/in'),
    forEachEnd = require('../../../base/for-each-end'),
    accessObjectKeyAfter = require('../../access-object-key-after'),
    secondToIterable = require('../../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateIn, forEachEnd, accessObjectKeyAfter));