var b = require('@timelaps/batterie');
var concatUnique = require('.');
var two = {
    two: 2
};
b.it('concatUnique', [
    ['concatenates different values', concatUnique([
        [1, 2, 3],
        [1, 2, 3]
    ]), [1, 2, 3]],
    ['does not do a deep diff on objects',
        concatUnique([
            [{
                one: 1
            }, two],
            [{
                one: 1
            }, two]
        ]), [{
            one: 1
        }, two, {
            one: 1
        }]
    ],
]);