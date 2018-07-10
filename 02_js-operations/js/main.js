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

    return {
      subSum,
      subSumFast
    }
  }

  var arrayHandler = new ArrayProcessingTool();

  var subSumSlowResultBlock = document.getElementById('sub-sum-slow');
  var subSumFastResultBlock = document.getElementById('sub-sum-fast');

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

})();