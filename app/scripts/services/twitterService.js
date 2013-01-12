'use strict';

twitterClientApp.factory('twitterService', function ($resource) {

    return $resource('http://search.twitter.com/search.json', {callback: 'JSON_CALLBACK'}, {
        get: {method: 'JSONP', params: {q: 'query'}, isArray: false}
    });

});
