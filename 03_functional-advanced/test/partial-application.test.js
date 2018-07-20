const F = require('../src/partial-application');

test('partial', () => {
  function G(...args) {
    return args.reduce((prev, current) => prev + current);
  }

  const result = F(G, 1, 2);

  expect(result(3, 4)).toEqual(10);
});
