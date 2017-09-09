var b = require('@timelaps/batterie');
var add = require('.');
b.describe('add', function () {
    b.expect(add).toBeFunction();
    b.it('pushes items to a given array', function (t) {
        var array = [1, 2, 3];
        add(array, 4);
        t.expect(array).toEqual([1, 2, 3, 4]);
    });
    b.it('does not add duplicates', function (t) {
        var array = [1, 2, 3];
        add(array, 3);
        t.expect(array).toEqual([1, 2, 3]);
    });
});