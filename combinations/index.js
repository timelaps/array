module.exports = combinations;
var fromTo = require('@timelaps/n/from/to');

function combinations(list, fn, memo) {
    var j, f, i = 0,
        length = list && list.length - 1;
    return fromTo(function (index, memo) {
        var bound = fn(memo, list[index], index, list);
        return fromTo(function (idx, memo) {
            return bound(memo, list[idx], idx, list);
        }, memo, index + 1, length, 1);
    }, memo, 0, length, 1);
}