'use strict';

twitterClientApp.factory('twitterService', function ($resource) {

    return $resource('http://search.twitter.com/search.json',
        {
            callback: 'JSON_CALLBACK', q: 'from:dpoeptica'
        },
        {
            query: {method: 'JSONP'}
        });

});
