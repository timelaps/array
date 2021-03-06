var results = require('.');
var b = require('@timelaps/batterie');
Class.prototype = {
    id: 1,
    method: function () {
        return this.valueOf();
    },
    valueOf: function () {
        return 'here';
    }
};
var classes = [new Class(2), new Class(3), new Class()];
b.describe('results', function () {
    b.it('accesses properties', [
        ['such as numbers or strings', results(classes, 'id'), [2, 3, 1]],
        ['and will call functions', results(classes, 'method'), ['here', 'here', 'here']]
    ]);
});

function Class(num) {
    this.id = num || this.id;
}