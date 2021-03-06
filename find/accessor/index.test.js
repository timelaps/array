var b = require('@timelaps/batterie');
var accessor = require('.');
b.describe('accessor', function () {
    b.it('is a function', function (t) {
        t.expect(accessor).toBeFunction();
    });
    b.it('creates a curry which subsequently accesses the original object', function (t) {
        var accessing = accessor(function (list, iterator) {
            return 0;
        });
        t.expect(accessing([1], noop)).toBe(1);
    });
    b.it('works the same way with object keys', function (t) {
        var accessing = accessor(function (list, iterator) {
            return 'key';
        });
        t.expect(accessing({
            key: 'value'
        }, noop)).toBe('value');
    });
    b.it('always returns undefined when given null', function (t) {
        var accessing = accessor(function () {
            return null;
        });
        t.expect(accessing([1], noop)).toBeUndefined();
        t.expect(accessing({
            'null': true
        }, noop)).toBeUndefined();
    }, 2);
    b.it('always returns undefined when given undefined', function (t) {
        var accessing = accessor(function () {
            return undefined;
        });
        t.expect(accessing([1], noop)).toBeUndefined();
        t.expect(accessing({
            'undefined': true
        }, noop)).toBeUndefined();
    }, 2);
    b.it('returns undefined when given -1 with an array', function (t) {
        var accessing = accessor(function () {
            return undefined;
        });
        t.expect(accessing([1], noop)).toBeUndefined();
    });
    b.it('returns the value when accessing an object', function (t) {
        var accessing = accessor(function () {
            return -1;
        });
        t.expect(accessing({
            '-1': true
        }, noop)).toBeTrue();
    });

    function noop() {}
});