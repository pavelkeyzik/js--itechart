const partialApplication = require('./partial-application');
const currying = require('./currying');
const linearFold = require('./linear-fold');
const linearUnfold = require('./linear-unfold');
const map = require('./map');
const filter = require('./filter');
const averageOfEven = require('./average-of-even');
const sumOfRandom = require('./sum-of-random');
const first = require('./first');
const lazyEvaluation = require('./lazy-evaluation');
const memoization = require('./memoization');

console.log('\n-- PROBLEM 1: Partial Application');

function functionForTestPartial(...args) {
  return args.reduce((prev, current) => prev + current);
}

let partedFunction = partialApplication(functionForTestPartial, 1,2);

console.log(`Sum of (1, 2, 3, 4) = ${partedFunction(3, 4)}`);
console.log(`Sum of (1, 2, 4, 4) = ${partedFunction(4, 4)}`);

console.log('\n-- PROBLEM 2: Currying');

const sum = (...args) => args.reduce((prev, current) => prev + current * 2);
const curry = currying(sum);

console.log(`Result 1: ${curry(1)(2)(3)(4).valueOf()}`);
console.log(`Result 2: ${curry(1,2,3,4).valueOf()}`);

console.log('\n-- PROBLEM 3: Linear fold');

const arrayForTestingLinearFold = [1, 2, 3, 4, 5];

const resultWithoutInitial = linearFold(arrayForTestingLinearFold, (previousValue, currentValue) => {
  return previousValue + currentValue;
});

const resultWithInitial = linearFold(arrayForTestingLinearFold, (previousValue, currentValue, index, arr) => {
  console.log(index, arr);
  return previousValue + currentValue;
}, 15);

console.log('RESULT WITHOUT INITIAL:', resultWithoutInitial);
console.log('RESULT WITH INITIAL:', resultWithInitial);

console.log('\n-- PROBLEM 4: Linear unfold');

const resultLinearUnfold = linearUnfold((element) => element < 20 ? element + 1 : false, 10);
console.log('Result:', resultLinearUnfold);

console.log('\n-- PROBLEM 5: Map');

const arrayForTestingMap = [1, 2, 3, 4];
let resultMap = map(arrayForTestingMap, (x) => x + 3);
console.log('RESULT::', arrayForTestingMap, '->', resultMap);

console.log('\n-- PROBLEM 6: Filter');

const arrayForTestingFilter = [1, 2, 3, 4, 5];
const resultFilter = filter(arrayForTestingFilter, (item) => item < 3);

console.log('RESULT::', arrayForTestingFilter, '->', resultFilter);

console.log('\n-- PROBLEM 7: Average of even numbers');

const arrayForAverageOfEven = [1, 23, 2, 6, 12, 0];
const resultAverageOfEven = averageOfEven(arrayForAverageOfEven);

console.log('RESULT::', arrayForAverageOfEven, '->', resultAverageOfEven);

console.log('\n-- PROBLEM 8: Sum of random numbers');

console.log(`RESULT 1:`, sumOfRandom());
console.log(`RESULT 2:`, sumOfRandom());

console.log('\n-- PROBLEM 9: First');

const arrayForFirst = [3, 4, 5, 6, 7];
const resultFirst = first(arrayForFirst, (el) => el > 4 && el < 7);

console.log('RESULT:', resultFirst);

console.log('\n-- PROBLEM 10: Lazy evaluation');

function sum1(a, b) {
  return a + b;
}
function sum2(a, b) {
  return a + b;
}

sum1 = lazyEvaluation(sum1);

console.time('lazy');
console.log(sum1(5 * 10 ** 8, 2 + 3));
console.timeEnd('lazy');
console.time('lazy');
console.log(sum1(5 * 10 ** 8, 2 + 3));
console.timeEnd('lazy');

console.time('non-lazy');
console.log(sum2(15 * 4 ** 13, 1 + 9));
console.timeEnd('non-lazy');
console.time('non-lazy');
console.log(sum2(15 * 4 ** 13, 1 + 9));
console.timeEnd('non-lazy');

console.log('\n-- PROBLEM 11: Memoization');

function router(route) {
  return route;
}

router = memoization(router, '/');

router.set('/home');
console.log('Last route:', router.previous());
router.set('/contacts');
console.log('Last route:', router.previous());
router.set('/about');
console.log('Last route:', router.previous());
router.set('/about/en');
console.log('Last route:', router.previous());
router.set('/about/ru');
console.log('Last route:', router.previous());
router.set('/about/ru');
console.log('Last route:', router.previous());