'use strict';

twitterClientApp.controller('MainCtrl', function ($scope, twitterService) {

    $scope.tweets =
        twitterService.get({query: 'cat'});

    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Testacular',
        'Test'
    ];
});
