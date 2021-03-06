var b = require('@timelaps/batterie');
var push = require('.');
b.describe('push', function () {
    b.it('adds things to arrays', function (t) {
        var list = [];
        push(list, [1, 2, 3]);
        t.expect(list).toEqual([1, 2, 3]);
    });
    b.it('will wrap non array like objects', function (t) {
        var list = [];
        push(list, 1);
        t.expect(list).toEqual([1]);
    });
    b.it('will honor array like objects', function (t) {
        var list = [];
        push(list, {
            '0': 1,
            '1': 2,
            length: 2
        });
        t.expect(list).toEqual([1, 2]);
    });
    b.it('will not honor subsequent arguments', function (t) {
        var list = [];
        push(list, 1, 2);
        t.expect(list).toEqual([1]);
    });
});