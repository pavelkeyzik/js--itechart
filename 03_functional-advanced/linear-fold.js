function linearFold(array, cb, initialValue) {
  let previousValue = initialValue || array[0];
  let result = initialValue;
  const startIndex = initialValue ? 0 : 1;

  for(let i = startIndex; i < array.length; i++) {
    result = cb(previousValue, array[i], i, 4);
    cb(previousValue, result, i,2);
    previousValue = result;
  }

  return result;
}

const arrayForTesting = [1, 2, 3, 4, 5];

const result = linearFold(arrayForTesting, (previousValue, currentValue) => previousValue + currentValue, 0);
console.log('RESULT:', result);

module.exports = linearFold;