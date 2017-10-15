var b = require('@timelaps/batterie');
var contains = require('./');
b.describe('contains', function () {
    b.expect(contains).toBeFunction();
    b.expect(contains).toReturnFalse();
    b.expect(contains([1], 1)).toBeTrue();
});