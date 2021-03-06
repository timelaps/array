var map = require('@timelaps/n/map');
var returnsArray = require('@timelaps/returns/array');
var b = require('@timelaps/batterie');
var gather = require('.');
b.describe('gather', function () {
    b.it('concatenates a list of arrays', b.curry(gather([
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ]), 'toEqual', [1, 2, 3, 1, 2, 3, 1, 2, 3]));
    b.it('can be given a transformer', b.curry(gather([
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ], function (item) {
        return map(item, function (item) {
            return item * 2;
        });
    }), 'toEqual', [2, 4, 6, 2, 4, 6, 2, 4, 6]));
    b.it('can also empty the array in this manner', b.curry(gather([
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ], returnsArray), 'toEqual', []));
    b.it('can also empty the array in this manner', b.curry(gather([
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3]
    ], returnsArray), 'toEqual', []));
    b.it('only goes one layer deep', b.curry(gather([
        [
            [1, 2, 3]
        ],
        [1, 2, 3],
        [
            [1, 2, 3]
        ]
    ]), 'toEqual', [
        [1, 2, 3], 1, 2, 3, [1, 2, 3]
    ]))
});