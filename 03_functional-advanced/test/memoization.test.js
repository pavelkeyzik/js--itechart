const memoization = require('../src/memoization');

describe('memoization', () => {
  test('should return previous value', () => {
    function routerFunction(route) {
      return route;
    }

    const router = memoization(routerFunction, '/');

    router.set('/home');
    router.set('/contacts');

    expect(router.previous()).toEqual('/home');
  });
});
