var secondToIterable = require('../../iterable/of-second');
var filterMaker = require('../maker');
var reduce = require('@timelaps/n/reduce');
module.exports = secondToIterable(filterMaker(reduce, true));