module.exports = zip;
var reduce = require('../reduce');
var forEach = require('../for/each');

function zip(lists) {
    return reduce(lists, function zipReducer(memo, list, listCount) {
        return forEach(list, function zipIterator(item, index) {
            var destination;
            // there is most certainly a more
            // efficient way to do this
            if (!(destination = memo[index])) {
                destination = memo[index] = [];
            }
            destination[listCount] = item;
        });
    }, []);
}