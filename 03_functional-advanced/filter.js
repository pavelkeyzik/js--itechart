function filter(array, cb) {
  let result = [];

  array.forEach((item) => cb(item) && result.push(item));
  
  return result;
}

module.exports = filter;