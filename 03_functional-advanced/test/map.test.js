const map = require('../src/map');

describe('map', () => {
  test('map work correctly', () => {
    const array = [1, 2, 3, 4];
    const result = map(array, element => element * 2);

    expect(result).toEqual([2, 4, 6, 8]);
  });
});
