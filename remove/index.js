module.exports = removeMany;
var whilst = require('@timelaps/fn/whilst');
var removeAt = require('./at');
var returnsTrue = require('@timelaps/returns/true');

function removeMany(array, mutableFilter_) {
    var mutableFilter = mutableFilter_ || returnsTrue;
    return whilst(filter, remover, []);

    function remover(memo, counter) {
        var idx = counter - memo.length;
        var value = array[idx];
        if (mutableFilter(value, counter, idx)) {

            removeAt(array, idx);
            memo.push(value);
        }
        return memo;
    }

    function filter(memo, counter) {
        return array.length - 1 >= counter - memo.length;
    }
}