function currying(f) {
  return function x(...a) {
    let result = a[0];
    
    if(a.length > 1) {
      result = f(...a);
    } else {
      result = a[0];
    }
    
    function func(...b) {
      if(b.length > 1) {
        result = f(result, ...b);
      } else {
        result = f(result, b[0]);
      }
      return func;
    }

    func.valueOf = function() {
      return result;
    }

    return func;
  }
}

const sum = (...args) => args.reduce((prev, current) => prev + current * 2);
const curry = currying(sum);

console.log(curry(1)(2)(3)(4).valueOf());
console.log(curry(1,2,3,4).valueOf());

module.exports = currying;