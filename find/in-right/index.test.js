var b = require('@timelaps/batterie');
var findInRight = require('.');
b.describe('findInRight', function () {
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
        t.expect(findInRight).toBeFunction();
    });
    b.it('iterates through lists in reverse', function (t) {
        var list = [];
        findInRight(numbers, function (value) {
            list.push(value);
        });
        t.expect(list).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
    b.it('can be stopped when a truthy value is returned', function (t) {
        var list = [];
        var value = findInRight(numbers, function (value, index) {
            list.push(value);
            return index / 2 === 2;
        });
        t.expect(list).toEqual([9, 8, 7, 6, 5]);
        t.expect(value).toBe(5);
    }, 2);
    b.it('really shines when iterating over objects', function (t) {
        var keys = [];
        var instance = new Class();
        findInRight(instance, function (value, key) {
            keys.push(key);
        });
        t.expect(keys.indexOf('one')).toBeGreaterThan(-1);
        t.expect(keys.indexOf('two')).toBeGreaterThan(-1);
        t.expect(keys.indexOf('five')).toBeGreaterThan(-1);
    }, 3);
    b.it('iterates over prototype keys', function (t) {
        var keys = [];
        var instance = new Class();
        findInRight(instance, function (value, key) {
            keys.push(key);
        });
        t.expect(keys.indexOf('three')).toBeGreaterThan(-1);
        t.expect(keys.indexOf('four')).toBeGreaterThan(-1);
    }, 2);
});