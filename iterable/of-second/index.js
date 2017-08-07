var iterable = require('..');
module.exports = function ofSecond(fn) {
    return function runner(a, b, c, d, e, f) {
        return fn(a, iterable(b), c, d, e, f);
    };
};