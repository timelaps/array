var filterCommon = require('.');
var b = require('@timelaps/batterie');
var reduce = require('@timelaps/n/reduce');
b.describe('filterCommon', function () {
    b.expect(filterCommon).toBeFunction();
    b.it('creates a curry environment for any object to be filtered', function (t) {
        var filtered = filterCommon(function () {
            return [];
        }, function (memo, item) {
            memo.push(item);
        })([1, 2, 3, 4], function (item) {
            return item % 2;
        }, false, reduce);
        t.expect(filtered).toEqual([1, 3]);
        filteredNegative = filterCommon(function () {
            return [];
        }, function (memo, item) {
            memo.push(item);
        })([1, 2, 3, 4], function (item) {
            return item % 2;
        }, true, reduce);
        t.expect(filteredNegative).toEqual([2, 4]);
    }, 2);
});