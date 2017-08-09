module.exports = results;
var map = require('@timelaps/n/map');
var result = require('@timelaps/fn/result');

function results(array, method, arg) {
    return map(array, resultCaller);

    function resultCaller(item) {
        return result(item, method, arg);
    }
}