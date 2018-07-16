const F = require('./partial-application');

test('partial', () => {
  let result = F(G, 1, 2);
  
  function G(...args) {
    return args.reduce((prev, current) => prev + current);
  }

  expect(result(3,4)).toEqual(10);
});