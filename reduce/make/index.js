var reduction = require('../reduction');
module.exports = function makeReduce(dir_) {
    return function reducer(obj, iteratee, memo) {
        return reduction(obj, iteratee, memo, dir_, arguments.length < 3);
    };
};