var isEmptyArray = require('@timelaps/is/empty-array');
var isString = require('@timelaps/is/string');
var property = require('@timelaps/object/property');
var isKey = require('@timelaps/is/key');
var cached = require('@timelaps/returns/base-type');
module.exports = function mapMaker(iterator, iterable, returnBaseType_) {
    var returnBaseType = returnBaseType_ || cached;
    return function curriedMap(objs, iteratee) {
        var collection = returnBaseType(objs),
            iterates = isKey(iteratee) ? property(iteratee) : iteratee;
        if (objs) {
            iterator(objs, iterable(collection, iterates, collection.length === 0));
        }
        return collection;
    };
};