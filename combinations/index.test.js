var b = require('@timelaps/batterie');
var combinations = require('.');
b.describe('combinations', function () {
    b.expect(combinations).toBeFunction();
    b.expect(combinations).notToThrow();
    b.it('iterates through each combination of items', function (t) {
        var list = [1, 2, 3, 4];
        combinations(list, function (memo, a, i) {
            return function (memo, b, j) {
                t.expect(a).toBe(list[i]);
                t.expect(b).toBe(list[j]);
            };
        });
    }, 12);
});