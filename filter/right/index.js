var secondToIterable = require('../../iterable/of-second');
var filterMaker = require('../maker');
var reduce = require('../../reduce/right');
module.exports = secondToIterable(filterMaker(reduce));