var baseEach = require('@timelaps/object/each/base'),
    iterateIn = require('@timelaps/object/iterate/own'),
    forEachEnd = require('@timelaps/n/for/each/end'),
    accessObjectKeyAfter = require('../../access-object-after'),
    secondToIterable = require('../../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateIn, forEachEnd, accessObjectKeyAfter));