var filterNegatable = require('.');
var b = require('@timelaps/batterie');
var reduce = require('@timelaps/n/reduce');
b.describe('filterNegatable', function () {
    b.expect(filterNegatable).toBeFunction();
});