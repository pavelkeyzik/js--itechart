function filter(array, cb) {
  let result = [];

  array.forEach((item) => cb(item) && result.push(item));
  
  return result;
}

const array = [1, 2, 3, 4, 5];
const result = filter(array, (item) => item < 3);

console.log('RESULT::', result);

module.exports = filter;