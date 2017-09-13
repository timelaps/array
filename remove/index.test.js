var b = require('@timelaps/batterie');
var removeMany = require('.');
b.describe('removeMany', function () {
    b.expect(removeMany).toBeFunction();
    b.it('mutates the array', function (t) {
        var array = [1, 2, 3, 4];
        var copy = array.slice(0);
        var result = removeMany(array);
        t.expect(result).toEqual(copy);
        t.expect(array).toBeEmptyArray();
    }, 2);
    b.it('mutates based on an optional fn', function (t) {
        var array = [1, 2, 3, 4];
        var result = removeMany(array, function (item) {
            return item >= 3;
        });
        t.expect(result).toEqual([3, 4]);
        t.expect(array).toEqual([1, 2]);
    }, 2);
});