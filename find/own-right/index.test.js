var b = require('@timelaps/batterie');
var findOwnRight = require('.');
b.describe('findOwnRight', function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    Class.prototype = {
        one: 5,
        two: 10,
        three: 15,
        four: 20
    };

    function Class() {
        this.one = 1;
        this.two = 2;
        this.five = 'fiver';
    }
    b.it('is a function', function (t) {
        t.expect(findOwnRight).toBeFunction();
    });
    b.it('iterates through lists in reverse', function (t) {
        var list = [];
        findOwnRight(numbers, function (value) {
            list.push(value);
        });
        t.expect(list).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
    b.it('can be stopped by returning a truthy value', function (t) {
        var list = [];
        var value = findOwnRight(numbers, function (number) {
            list.push(number);
            return number === 5;
        });
        t.expect(value).toEqual(5);
        t.expect(list).toEqual([9, 8, 7, 6, 5]);
    }, 2);
    b.it('works with objects', function (t) {
        var keys = [];
        var value = findOwnRight(new Class(), function (number, key) {
            keys.push(key);
        });
        t.expect(value).toBeUndefined();
        t.expect(keys.indexOf('one')).toBeGreaterThan(-1);
        t.expect(keys.indexOf('two')).toBeGreaterThan(-1);
        t.expect(keys.indexOf('three')).toBe(-1);
        t.expect(keys.indexOf('four')).toBe(-1);
        t.expect(keys.indexOf('five')).toBeGreaterThan(-1);
    }, 6);
    b.it('can also stop early when iterating over an object', function (t) {
        var keys = [];
        var value = findOwnRight(new Class(), function (value, key) {
            keys.push(key);
            return value === 2;
        });
        t.expect(keys.length).notToBeGreaterThan(3);
        t.expect(value).toBe(2);
    }, 2);
});