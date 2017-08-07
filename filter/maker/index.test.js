var filterMaker = require('.');
var b = require('@timelaps/batterie');
var reduce = require('../../reduce');
b.describe('filterMaker', function () {
    b.expect(filterMaker).toBeFunction();
});