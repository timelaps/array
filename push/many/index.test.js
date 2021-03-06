var b = require('@timelaps/batterie');
var pushMany = require('.');
b.describe('array/pushMany', function () {
    b.expect(pushMany).toBeFunction();
    b.expect(pushMany).toThrow();
    b.it('pushes elements to a list', function (t) {
        var list = [];
        var element = 1;
        pushMany(list, element);
        t.expect(list).toEqual([element]);
    });
    b.it('can push many in place', function (t) {
        var list = [];
        var elements = [1, 2, 3];
        pushMany(list, elements);
        t.expect(list).toEqual(elements);
    });
    b.it('can push an array, but it must be wrapped', function (t) {
        var list = [];
        var elements = [1, 2, 3];
        pushMany(list, [elements]);
        t.expect(list).toEqual([elements]);
    });
    b.it('simply adds to the end', function (t) {
        var list = [1, 2, 3];
        var elements = [4, 5, 6];
        pushMany(list, elements);
        t.expect(list).toEqual([1, 2, 3, 4, 5, 6]);
    });
});