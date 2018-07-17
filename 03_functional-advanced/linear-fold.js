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

const arrayForTesting = [1, 2, 3, 4, 5];

const resultWithoutInitial = linearFold(arrayForTesting, (previousValue, currentValue) => {
  return previousValue + currentValue;
});

const resultWithInitial = linearFold(arrayForTesting, (previousValue, currentValue, index, arr) => {
  console.log(index, arr);
  return previousValue + currentValue;
}, 15);

console.log('RESULT WITHOUT INITIAL:', resultWithoutInitial);
console.log('RESULT WITH INITIAL:', resultWithInitial);

module.exports = linearFold;