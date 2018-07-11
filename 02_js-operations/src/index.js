import arrayHandler from './array-processing.js';

var subSumSlowResultBlock = document.getElementById('sub-sum-slow');
var subSumFastResultBlock = document.getElementById('sub-sum-fast');
var numbersMinMaxBlock = document.getElementById('numbers-min-max');
var selectionTaskBlock = document.getElementById('selection-task');

var timerStartSlow = performance.now();
subSumSlowResultBlock.innerHTML = `
<ul>
  <li>arrayHandler.subSum([-1, 2, 3]) = ${arrayHandler.subSum([-1, 2, 3])}</li>
  <li>arrayHandler.subSum([2, -1, 2, 3, -9]) = ${arrayHandler.subSum([2, -1, 2, 3, -9])}</li>
  <li>arrayHandler.subSum([-1, 2, 3, -9, 11]) = ${arrayHandler.subSum([-1, 2, 3, -9, 11])}</li>
  <li>arrayHandler.subSum([-2, -1, 1, 2]) = ${arrayHandler.subSum([-2, -1, 1, 2])}</li>
  <li>arrayHandler.subSum([100, -9, 2, -3, 5]) = ${arrayHandler.subSum([100, -9, 2, -3, 5])}</li>
  <li>arrayHandler.subSum([1, 2, 3]) = ${arrayHandler.subSum([1, 2, 3])}</li>
  <li>arrayHandler.subSum([-1, -2, -3]) = ${arrayHandler.subSum([-1, -2, -3])}</li>
</ul>
<b>Работы выполнена за ${performance.now() - timerStartSlow}ms</b>
`;

var timerStartFast = performance.now();
subSumFastResultBlock.innerHTML = `
<ul>
  <li>arrayHandler.subSumFast([-1, 2, 3]) = ${arrayHandler.subSumFast([-1, 2, 3])}</li>
  <li>arrayHandler.subSumFast([2, -1, 2, 3, -9]) = ${arrayHandler.subSumFast([2, -1, 2, 3, -9])}</li>
  <li>arrayHandler.subSumFast([-1, 2, 3, -9, 11]) = ${arrayHandler.subSumFast([-1, 2, 3, -9, 11])}</li>
  <li>arrayHandler.subSumFast([-2, -1, 1, 2]) = ${arrayHandler.subSumFast([-2, -1, 1, 2])}</li>
  <li>arrayHandler.subSumFast([100, -9, 2, -3, 5]) = ${arrayHandler.subSumFast([100, -9, 2, -3, 5])}</li>
  <li>arrayHandler.subSumFast([1, 2, 3]) = ${arrayHandler.subSumFast([1, 2, 3])}</li>
  <li>arrayHandler.subSumFast([-1, -2, -3]) = ${arrayHandler.subSumFast([-1, -2, -3])}</li>
</ul>
<b>Работы выполнена за ${performance.now() - timerStartFast}ms</b>
`;

var forSearchMedianEven = [23, 76, 34, 115, 6, 58, 88, 39, 17, 25, 7, 54, 49, 52];
var forSearchMedianOdd = [123, 78, 11, 95, 34, 67, 101, 356, 44, 73, 47];
var forSearchMinMax = [67, 101, 356];

numbersMinMaxBlock.innerHTML = `
  <ul>
    <li>Минимальное из чисел <b>[${forSearchMinMax.toString()}]</b>: ${arrayHandler.searchMinNumber(forSearchMinMax)}</li>
    <li>Максимальное из чисел <b>[${forSearchMinMax.toString()}]</b>: ${arrayHandler.searchMaxNumber(forSearchMinMax)}</li>
    <li>Медиана чисел <b>[${forSearchMedianEven.toString()}]</b>: ${arrayHandler.searchMedianNumber(forSearchMedianEven)}</li>
    <li>Медиана чисел <b>[${forSearchMedianOdd.toString()}]</b>: ${arrayHandler.searchMedianNumber(forSearchMedianOdd)}</li>
  </ul>
`;

var forSearchSequence = [1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1];

selectionTaskBlock.innerHTML = `
  <ul>
    <li>Sequence of <b>[${forSearchSequence}]</b>: ${arrayHandler.searchMaxLengthOfIncreasingSequence(forSearchSequence)}</li>
  </ul>
`;
