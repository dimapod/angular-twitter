'use strict';

describe('Service: wallService', function () {

  // load the service's module
  beforeEach(module('twitterClientApp'));

  // instantiate service
  var wallService;
  beforeEach(inject(function(_wallService_) {
    wallService = _wallService_;
  }));

  it('should do something', function () {
    expect(!!wallService).toBe(true);
  });

});
