'use strict';

twitterClientApp.filter('refreshing', function() {
  var DOTS = {
    0: '',
    1: '.',
    2: '..',
    3: '...'
  }

  return function(dollarCount) {
    return DOTS[dollarCount % 4];
  };
});
