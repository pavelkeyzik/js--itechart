const map = require('./map');

describe('map', () => {

  test('map work correctly', () => {

    let array = [1, 2, 3, 4];
    let result = map(array, (element) => element * 2);

    expect(result).toEqual([2, 4, 6, 8]);

  });

});