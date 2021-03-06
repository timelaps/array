var b = require('@timelaps/batterie');
var pushOne = require('.');
b.describe('array/pushOne', function () {
    b.expect(pushOne).toBeFunction();
    b.expect(pushOne).toThrow();
    b.it('pushes elements to a list', function (t) {
        var list = [];
        var element = 1;
        pushOne(list, element);
        t.expect(list).toEqual([element]);
    });
    b.it('can push one element in place', function (t) {
        var list = [];
        pushOne(list, 1, 2, 3);
        t.expect(list).toEqual([1]);
    });
    b.it('no matter the type', function (t) {
        var list = [];
        var elements = [1, 2, 3];
        pushOne(list, elements);
        t.expect(list).toEqual([elements]);
    });
});