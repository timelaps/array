var clamp = require('@timelaps/number/clamp');
var whilst = require('@timelaps/fn/whilst');
module.exports = function chunk(array, size) {
    var length, nu = [];
    if (!array || !(length = array.length)) {
        return nu;
    }
    whilst(chunkFilter, chunker, 0);
    return nu;

    function chunkFilter(count) {
        return length > count;
    }

    function chunker(count) {
        var upperLimit = clamp(count + size, 0, length);
        nu.push(array.slice(count, upperLimit));
        return upperLimit;
    }
};