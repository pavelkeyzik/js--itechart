function G(...args) {
  return args.reduce((prev, current) => prev + current);
}

function F(func, ...argggs) {
  return function(...args) {
    args = [...args, ...argggs];
    return func(...args);
  }
}

let myFunction = F(G, 1,2);

console.log(myFunction(3, 4));
console.log(myFunction(4, 4));

module.exports = F;