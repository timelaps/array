var matchesBinary = require('@timelaps/n/matches/binary');
module.exports = function commonFilter(memo, passed) {
    return function filter(thing, bound, negated, reduction) {
        var matcher = matchesBinary(!negated);
        return reduction(thing, function (memo, item, index, list) {
            if (matcher(bound(item, index, list))) {
                passed(memo, item, index);
            }
            return memo;
        }, memo());
    };
};