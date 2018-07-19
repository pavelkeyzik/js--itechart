const memoization = require('./memoization');

describe('memoization', () => {

  test('should return previous value', () => {
    
    function router(route) {
      return route;
    }

    router = memoization(router, '/');

    router.set('/home');
    router.set('/contacts');
    expect(router.previous()).toEqual('/home');

  });

});