'use strict';

describe('Directive: animate', function() {
  beforeEach(module('twitterClientApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<animate></animate>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the animate directive');
  }));
});
