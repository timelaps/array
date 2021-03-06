var b = require('@timelaps/batterie');
var flattenDepth = require('.');
b.describe('flattenDepth', function () {
    var deep = [1, [2, [3, [4, [5]]]]];
    b.expect(flattenDepth).toBeFunction();
    b.it('flattens to a depth of 1 by default', function (t) {
        t.expect(flattenDepth(deep)).toEqual([1, 2, [3, [4, [5]]]]);
    });
    b.it('flattens to a specified depth', function (t) {
        t.expect(flattenDepth(deep, 3)).toEqual([1, 2, 3, 4, [5]]);
    });
});