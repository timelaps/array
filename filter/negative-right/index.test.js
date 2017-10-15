var filterNegative = require('.');
var b = require('@timelaps/batterie');
var reduce = require('@timelaps/n/reduce');
b.describe('filterNegative', function () {
    b.expect(filterNegative).toBeFunction();
});