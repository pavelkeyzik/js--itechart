const first = require('./first');

describe('testing first function', () => {

  test('should return first element that satisfies given condition', () => {
    const array = [1, 2, 3, 4, 5];
    const result = first(array, (element) => element > 2 && element < 4);

    expect(result).toBe(3);
  });

});