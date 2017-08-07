var isObject = require('@timelaps/is/object');
var objectKeyGenerator = require('@timelaps/object/keys/generator');
var isArrayLike = require('@timelaps/is/array-like');
var arrayKeyGenerator = require('@timelaps/fn/generator');
var noop = require('@timelaps/fn/noop');
module.exports = function keyGenerator(object, dir, cap, incrementor) {
    return isArrayLike(object) ? arrayKeyGenerator(object, dir, cap, incrementor) : (isObject(object) ? objectKeyGenerator(object, dir, cap, incrementor) : noop);
};