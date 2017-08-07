var b = require('@timelaps/batterie');
var flattenDeep = require('.');
b.it('flattenDeep', [
    ['will flatten an array, deeply', flattenDeep([
        [
            [{}]
        ],
        [
            [{}]
        ],
        [
            [{}]
        ]
    ]), [{}, {}, {}]],
    ['will go until there is nowhere left to go', flattenDeep([4, [5, {
            one: 1,
            two: 2
        }, 9],
        [10]
    ]), [4, 5, {
        one: 1,
        two: 2
    }, 9, 10]]
]);