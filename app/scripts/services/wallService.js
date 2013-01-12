'use strict';

twitterClientApp.factory('wallService', function (twitterService, $rootScope, $timeout) {
    var self = this;
    var scope = undefined;
    var timer;

    self.init = function (_scope) {
        scope = _scope;
        timer = $timeout(onTimeout, scope.config.frequency);
    }

    self.refresh = function () {
        if (!scope.searchTerm) {
            scope.tweets.splice(0);
            return;
        }

        var params = {q: scope.searchTerm, since_id: scope.lastTweetId};
        twitterService.query(params,
            function (tweets) {
                if (tweets.results && tweets.results.length
                    && tweets.results[0].id != scope.lastTweetId) {
                    putNewElements(tweets.results);
                }

                if (tweets.results.length) {
                    scope.lastTweetId = scope.tweets[0].id;
                }

            });
    };

    function putNewElements(newTweets) {
        angular.forEach(newTweets.slice(0).reverse(), function (newTweet) {
            scope.tweets.unshift(newTweet);
        });

        scope.tweets.splice(scope.config.tweets_length);
    };

    // Auto refresh

    self.startRefresh = function () {
        timer = $timeout(onTimeout, scope.config.frequency);
        scope.started = !scope.started;
    };

    self.stopRefresh = function () {
        $timeout.cancel(timer);
        scope.started = !scope.started;
    };

    function onTimeout() {
        scope.counter++;
        self.refresh();
        timer = $timeout(onTimeout, scope.config.frequency);
    }

    // Public APIs
    return {
        init: self.init,
        refresh: self.refresh,
        startRefresh: self.startRefresh,
        stopRefresh: self.stopRefresh
    };
});
