'use strict';

twitterClientApp.directive('animate', function () {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
            setTimeout(function () {
                element.addClass('show');
            }, 0);

            //$window.getComputedStyle(element).class
            //element.addClass('show');
        }
    };

});
