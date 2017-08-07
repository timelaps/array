var baseEach = require('../../../base/each'),
    iterateOwn = require('@timelaps/object/iterate/own'),
    forEachEndRight = require('../../../base/for-each-end-right'),
    accessObjectKeyAfter = require('../../access-object-after'),
    secondToIterable = require('../../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateOwn, forEachEndRight, accessObjectKeyAfter));