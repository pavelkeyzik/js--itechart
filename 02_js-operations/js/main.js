(function () {
  'use strict';

  function ArrayProcessingTool() {

    /**
     * The function for counting sum of numbers
     * @param {Array} array Array of Numbers 
     */
    function _sumOfNumbers(array) {
      if (array.length === 0) return 0;
      return array.reduce((p, c) => p + c);
    }

    /**
     * Function for find subarray with max sum of elements O(n2)
     * @param {Array} array Array of Numbers 
     */
    function subSum(array) {
      var maxSum = 0;

      for (var i = 0; i < array.length; i++) {
        for (var k = i; k < array.length; k++) {
          maxSum = Math.max(maxSum, _sumOfNumbers(array.slice(i, k + 1)));
        }
      }

      return maxSum;
    }

    /**
     * Function for find subarray with max sum of elements O(n)
     * @param {Array} array Array of Numbers 
     */
    function subSumFast(array) {
      var maxSoFar = 0;
      var maxEndingHere = 0;

      for(var i = 0; i < array.length; i++) {
        maxEndingHere = Math.max(maxEndingHere + array[i], 0);
        maxSoFar = Math.max(maxEndingHere, maxSoFar);
      }

      return maxSoFar;
    }

    /**
     * Function for search median number in arrray
     * @param {Array} array Array of Numbers 
     */
    function searchMedianNumber(array) {
      var result = 0;
      var arrayMiddle = array.length / 2;
      array = array.sort((firstNumber,secondNumber) => firstNumber - secondNumber);

      if(array.length % 2 === 0) {
        result = (array[arrayMiddle-1] + array[arrayMiddle]) / 2;
      } else {
        result = array[Math.floor(array.length / 2)];
      }

      return result;
    }

    /**
     * Function for search MIN value in array of numbers
     * @param {Array} array Array of Numbers 
     */
    function searchMinNumber(array) {
      return Math.min(...array);
    }

    /**
     * Function for search MAX value in array of numbers
     * @param {Array} array Array of Numbers 
     */
    function searchMaxNumber(array) {
      return Math.max(...array);
    }

    /**
     * Function for search the maximum length of the increasing sequence
     * @param {Array} array Array of Numbers
     */
    function searchMaxLengthOfIncreasingSequence(array) {
      var startIndex = 0;
      var res = [];
      
      if(array.length === 2) {
        return array[0] < array[1] ? array : [];
      }

      for(var i = 1; i < array.length; i++) {
        if(array[i] > array[i-1]) {
          if(i - startIndex > res.length - 1 && i === array.length - 1) {
            res = array.slice(startIndex, i + 1);
          }
        } else {
          if(i - startIndex > res.length) {
            res = array.slice(startIndex, i);
          }
          startIndex = i;
        }
      }

      return res;
    }

    return {
      subSum,
      subSumFast,
      searchMedianNumber,
      searchMinNumber,
      searchMaxNumber,
      searchMaxLengthOfIncreasingSequence,
    }
  }

  var arrayHandler = new ArrayProcessingTool();

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

})();