var filterNegative = require('.');
var b = require('@timelaps/batterie');
var reduce = require('../../reduce');
b.describe('filterNegative', function () {
    b.expect(filterNegative).toBeFunction();
});