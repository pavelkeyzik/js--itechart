const filter = require('./filter');
const linearFold = require('./linear-fold');

function averageOfEven(array) {
  const filteredArray = filter(array, item => item % 2 === 0);
  const sumOfElements = linearFold(filteredArray, (prev, cur) => prev + cur);

  return sumOfElements / filteredArray.length;
}

module.exports = averageOfEven;
