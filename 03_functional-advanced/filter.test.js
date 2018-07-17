const filter = require('./filter');

describe('filter', () => {

  test('filter should work', () => {
 
    const arrayForTest = [1, 2, 3, 4];
    const result = filter(arrayForTest, (element) => element > 2);

    expect(result).toEqual([3, 4]);

  });

});