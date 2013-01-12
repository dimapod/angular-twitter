'use strict';

twitterClientApp.controller('TwitterCtrl', function ($scope, twitterService, $timeout, wallService) {

    $scope.searchTerm = ":DDDD"
    $scope.started = true;
    $scope.tweets = [];
    $scope.lastTweetId = undefined;
    $scope.counter = 0;
    $scope.config = {tweets_length: 15, frequency: 1000};

    wallService.init($scope);
    wallService.refresh();

    $scope.startRefresh = function () {
        wallService.startRefresh();
    };

    $scope.stopRefresh = function () {
        wallService.stopRefresh();
    };

    $scope.startWall = function () {
        $scope.lastTweetId = undefined;
        $scope.searchTerm = $scope.search;
        wallService.refresh();
    };

});
