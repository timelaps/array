var reduce = require('@timelaps/n/reduce');
var indexOf = require('@timelaps/n/index/of');
module.exports = function concatUnique(list) {
    return reduce(list, function (memo, argument) {
        return reduce(argument, function (memo, item) {
            if (indexOf(memo, item) === -1) {
                memo.push(item);
            }
            return memo;
        }, memo);
    }, []);
};