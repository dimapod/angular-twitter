'use strict';

var twitterClientApp = angular.module('twitterClientApp', ['ngResource'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/wall.html',
                controller: 'TwitterCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
