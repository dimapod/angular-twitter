'use strict';

twitterClientApp.controller('TwitterCtrl', function ($scope, twitterService, $timeout) {

    $scope.searchTerm = "from:dpoeptica"
    $scope.started = false;
    $scope.tweets = [];
    $scope.lastTweetId = undefined;

    function refresh() {
        //$scope.tweets = twitterService.query({q: 'from:dpoeptica', since_id:"290092724089139200"},
        //$scope.tweets =


        twitterService.query({q: $scope.searchTerm, since_id:$scope.lastTweetId},
            function(tweets) {
                console.log(tweets.results.length)

                if (tweets.results && tweets.results.length && tweets.results[0].id != $scope.lastTweetId) {
                    putNewElements(tweets.results);
                }

                if (tweets.results.length) {
                    console.log(tweets.results[0].id);
                    $scope.lastTweetId = $scope.tweets[0].id;
                }

            });
    };

    function putNewElements(newTweets) {

        angular.forEach(newTweets.reverse(), function(newTweet) {
            $scope.tweets.unshift(newTweet);
        });

        $scope.tweets.splice(15);
    }

    $scope.$watch('searchTerm', search, true);
    function search() {
        console.log("Watch: ", $scope.searchTerm)
    }

    refresh.apply(this);

    $scope.add = function() {
        $scope.tweets.results.unshift({text:"New", from_user_name:"Me"});
    };

    $scope.refresh = refresh;

    // Timer --------------------------------------------------------------

    var mytimeout;
    $scope.startWall = function() {

        if ($scope.started) {
            // stop
            $timeout.cancel(mytimeout);
        } else {
            // start
            $scope.lastTweetId = undefined;
            $scope.searchTerm = $scope.search;
            mytimeout = $timeout(onTimeout,1000);
        }

        $scope.started = !$scope.started;
    };

    $scope.counter = 0;
    function onTimeout(){
        $scope.counter++;
        refresh();
        mytimeout = $timeout(onTimeout,1000);
    }

});
