'use strict';

twitterClientApp.controller('TwitterCtrl', function ($scope, twitterService, $timeout, wallService) {

    $scope.searchTerm = ":DDDD"
    $scope.started = true;
    $scope.tweets = [];
    $scope.lastTweetId = undefined;
    $scope.tweets_length = 15;
    $scope.counter = 0;



    wallService.init($scope);
    wallService.refresh();


    // Timer --------------------------------------------------------------

    var timer;
    timer = $timeout(onTimeout, 1000);

    $scope.startRefresh = function () {
        timer = $timeout(onTimeout, 1000);
        $scope.started = !$scope.started;
    };

    $scope.stopRefresh = function () {
        $timeout.cancel(timer);
        $scope.started = !$scope.started;
    };

    $scope.startWall = function () {
        $scope.lastTweetId = undefined;
        $scope.searchTerm = $scope.search;
        wallService.refresh();
    };

    $scope.counter = 0;
    function onTimeout() {
        $scope.counter++;
        wallService.refresh();
        timer = $timeout(onTimeout, 1000);
    }

});
