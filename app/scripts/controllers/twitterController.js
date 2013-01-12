'use strict';

twitterClientApp.controller('TwitterCtrl', function ($scope, twitterService, $timeout) {

    $scope.searchTerm = ":DDDD"
    $scope.started = true;
    $scope.tweets = [];
    $scope.lastTweetId = undefined;
    $scope.tweets_length = 15;

    function refresh() {
        if (!$scope.searchTerm) {
            $scope.tweets.splice(0);
            return;
        }

        twitterService.query({q: $scope.searchTerm, since_id: $scope.lastTweetId},
            function (tweets) {
                if (tweets.results && tweets.results.length
                    && tweets.results[0].id != $scope.lastTweetId) {
                    putNewElements(tweets.results);
                }

                if (tweets.results.length) {
                    $scope.lastTweetId = $scope.tweets[0].id;
                }

            });
    };

    function putNewElements(newTweets) {
        angular.forEach(newTweets.slice(0).reverse(), function (newTweet) {
            $scope.tweets.unshift(newTweet);
        });

        $scope.tweets.splice($scope.tweets_length);
    }

    refresh();
    timer = $timeout(onTimeout, 1000);

    // Timer --------------------------------------------------------------

    var timer;

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
        refresh();
    };

    $scope.counter = 0;
    function onTimeout() {
        $scope.counter++;
        refresh();
        timer = $timeout(onTimeout, 1000);
    }

});
