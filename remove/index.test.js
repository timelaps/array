var b = require('@timelaps/batterie');
var remove = require('.');
b.describe('remove', function () {
    b.expect(remove).toBeFunction();
    b.it('removes items from an array', function (t) {
        var array = [1];
        remove(array, 1);
        t.expect(array).toEqual([]);
    });
    b.it('only removes the first item it encounters', function (t) {
        var array = [1, 1];
        remove(array, 1);
        t.expect(array).toEqual([1]);
    });
    b.it('returns true when it succeeds', function (t) {
        t.expect(remove([1], 1)).toBeTrue();
    });
    b.it('returns false when it failse', function (t) {
        t.expect(remove([2, 4, 5, 2], 1)).toBeFalse();
    });
});