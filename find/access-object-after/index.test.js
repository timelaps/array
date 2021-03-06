var accessObjectAfter = require('.');
var b = require('@timelaps/batterie');
b.describe('accessObjectAfter', function () {
    b.expect(accessObjectAfter).toBeFunction();
    b.it('access an object based on information that should be known after an iteration', function (t) {
        t.expect(accessObjectAfter(0, {
            a: 1
        }, ['a'])).toBe(1);
    });
    b.it('it even works on arrays', function (t) {
        t.expect(accessObjectAfter(1, [5, 3, 2], [5, 3, 2], true)).toBe(3);
    });
});