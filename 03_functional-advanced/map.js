function map(array, cb) {
  let result = new Array(array.length);

  for(let i = 0; i < array.length; i++) {
    result[i] = cb(array[i]);
  }

  return result;
}

module.exports = map;