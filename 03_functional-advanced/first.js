function first(array, cb) {
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      return array[i];
    }
  }
  return null;
}

module.exports = first;
