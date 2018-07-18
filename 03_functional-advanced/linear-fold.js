function linearFold(array, cb, initialValue) {
  let previousValue = initialValue || array[0];
  let result = initialValue;
  const startIndex = initialValue ? 0 : 1;

  for(let i = startIndex; i < array.length; i++) {
    result = cb(previousValue, array[i], i, array.slice(0, i + 1));
    previousValue = result;
  }

  return result;
}

module.exports = linearFold;