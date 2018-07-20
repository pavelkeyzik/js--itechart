function filter(array, cb) {
  const result = [];

  array.forEach(item => cb(item) && result.push(item));

  return result;
}

module.exports = filter;
