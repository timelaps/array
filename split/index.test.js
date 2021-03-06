var b = require('@timelaps/batterie');
var split = require('.');
b.describe('split', function () {
    b.it('separates strings characters', [
        ['an empty string is passed if there is no 2rd argument', split('abcdefg'), ['a', 'b', 'c', 'd', 'e', 'f', 'g']],
        ['or by any delimiter that is passed', split('abcdefg', 'd'), ['abc', 'efg']]
    ]);
});