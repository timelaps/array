var baseEach = require('@timelaps/object/each/base'),
    iterateIn = require('@timelaps/object/iterate/in'),
    findKeyRight = require('../../key/right'),
    accessObjectKeyAfter = require('../../access-object-key-after'),
    secondToIterable = require('../../../iterable/of-second');
module.exports = secondToIterable(baseEach(iterateIn, findKeyRight, accessObjectKeyAfter));