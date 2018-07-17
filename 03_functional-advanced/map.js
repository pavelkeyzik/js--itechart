function map(array, cb) {
  let result = new Array(array.length);

  for(let i = 0; i < array.length; i++) {
    result[i] = cb(array[i]);
  }

  return result;
}

const arrayForTesting = [1,2,3,4];

let result = map(arrayForTesting, (x) => x + 3);
console.log('RESULT::', result);

module.exports = map;