var b = require('@timelaps/batterie');
var unique = require('.');
var numbers = [5, 5, 5, 4, 3, 3, 2, 2, 2, 2, 1];
b.describe('unique', function () {
    b.it('filters matching objects', function (t) {
        t.expect(unique(numbers)).toEqual([5, 4, 3, 2, 1]);
    });
    b.it('returns an empty array by default', function (t) {
        t.expect(unique()).toEqual([]);
    });
    b.it('does not work for objects', function (t) {
        t.expect(unique({
            one: 1,
            two: 2,
            three: 1,
            four: 2
        })).toEqual([]);
    });
});