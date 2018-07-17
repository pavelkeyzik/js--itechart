const curry = require('./currying');

describe('curry', () => {

  test('should curry the given function', () => {

    const add = curry((a, b) => a * b);
    expect(add(1)(3).valueOf()).toBe(add(1, 3).valueOf());

  });

  it('should not persist arguments between calls', () => {
    const add = curry((a, b) => a + b);
    const add10 = add(10);
    const add1 = add(1);
    expect(add10(10).valueOf()).toBe(20);
    expect(add10(10).valueOf()).toBe(30);
    expect(add1(1).valueOf()).toBe(2);
  })
});
