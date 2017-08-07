var compact = require('.');
var b = require('@timelaps/batterie');
var numbers = [5, 1, null, 59, 0, -1, 4, 94, 10013];
var result = [5, 1, 59, 0, -1, 4, 94, 10013];
b.describe('auto filters the unnecessary spaces in an array', function () {
    b.it('filters', [
        ['null', compact(numbers), result],
        ['undefined', compact([undefined].concat(numbers)), result]
    ]);
});