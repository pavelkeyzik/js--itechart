const linear = require('./linear-fold');

describe('linear-fold', () => {

  test('sum of elements', () => {

    const array = [1,2,3,4];
    const result = linear(array, (prev, cur) => prev + cur);

    expect(result).toBe(10);

  });

  test('sum of elements with inital value', () => {

    const array = [1,2,3,4];
    const result = linear(array, (prev, cur) => prev + cur, 5);

    expect(result).toBe(15);

  });

  test('multiplication of elements', () => {

    const array = [1,2,3,4];
    const result = linear(array, (prev, cur) => prev * cur);

    expect(result).toBe(24);

  });

});