var reduce = require('../../reduce');
var indexOf = require('../../index/of');
module.exports = function concatUnique(list) {
    return reduce(list, function (memo, argument) {
        return reduce(argument, function (memo, item) {
            if (indexOf(memo, item) === -1) {
                memo.push(item);
            }
        }, memo);
    }, []);
};