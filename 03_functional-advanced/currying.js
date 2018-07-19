function currying(f) {
  return function x(...a) {
    let result = a[0];

    if (a.length > 1) {
      result = f(...a);
    } else {
      result = a[0];
    }

    function func(...b) {
      if (b.length > 1) {
        result = f(result, ...b);
      } else {
        result = f(result, b[0]);
      }
      return func;
    }

    func.valueOf = function funcValue() {
      return result;
    };

    return func;
  };
}

module.exports = currying;
