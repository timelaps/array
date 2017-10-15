var reduceFrom = require('@timelaps/n/reduce/from');
var isArrayLike = require('@timelaps/is/array-like');
var indicesGenerator = require('@timelaps/fn/generator/indices/right');
module.exports = reduceFrom(isArrayLike, indicesGenerator);