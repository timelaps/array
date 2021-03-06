var b = require('@timelaps/batterie');
var reduceRight = require('.');
var numbers = [1, 2, 3, 4];
b.describe('reduceRight', function () {
    b.it('is a function', b.curry(reduceRight, 'toBeFunction'));
    b.it('iterates over arrays', b.curry(reduceRight(numbers, function (memo, number) {
        return number + memo;
    }, 0), 'toBe', 10));
    b.it('does not change the memo if nothing is returned', function (t) {
        t.expect(reduceRight(numbers, function () {}, 5)).toBeUndefined();
    });
    b.it('iterates from the left', function (t) {
        var list = [];
        var result = reduceRight(numbers, function (memo, number) {
            list.push(number);
            return number + memo;
        }, 0);
        t.expect(list).toEqual(numbers.slice(0).reverse());
    });
});