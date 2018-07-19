const averageOfEven = require('./average-of-even');

describe('average of even', () => {
  test('should work', () => {
    const result = averageOfEven([1, 23, 2, 6, 12, 0]);

    expect(result).toBe(5);
  });
});
