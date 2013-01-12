'use strict';

twitterClientApp.factory('wallService', function (twitterService) {

    var meaningOfLife = 42;

    // Public API here
    return {
        someMethod: function () {
            return meaningOfLife;
        }
    };
});
