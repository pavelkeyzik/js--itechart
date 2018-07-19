const linearUnfold = require('./linear-unfold');
const linearFold = require('./linear-fold');

function sumOfRandom() {
  let index = 0;
  const randomElements = linearUnfold(() => {
    if (index < 10) {
      index++;
      return Math.floor(Math.random() * 10);
    }
    return 0;
  }, Math.floor(Math.random() * 10));

  const sumOfElements = linearFold(randomElements, (prev, cur) => prev + cur);

  return sumOfElements;
}

module.exports = sumOfRandom;
