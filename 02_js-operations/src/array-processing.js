const ArrayProcessingTool = {

  /**
   * The function for counting sum of numbers
   * @param {Array} array Array of Numbers 
   */
  _sumOfNumbers (array) {
    if (array.length === 0) return 0;
    return array.reduce((p, c) => p + c);
  },

  /**
   * Function for find subarray with max sum of elements O(n2)
   * @param {Array} array Array of Numbers 
   */
  subSum(array) {
    let maxSum = 0;

    for (let i = 0; i < array.length; i++) {
      for (let k = i; k < array.length; k++) {
        maxSum = Math.max(maxSum, this._sumOfNumbers(array.slice(i, k + 1)));
      }
    }

    return maxSum;
  },

  /**
   * Function for find subarray with max sum of elements O(n)
   * @param {Array} array Array of Numbers 
   */
  subSumFast(array) {
    let maxSoFar = 0;
    let maxEndingHere = 0;

    for(let i = 0; i < array.length; i++) {
      maxEndingHere = Math.max(maxEndingHere + array[i], 0);
      maxSoFar = Math.max(maxEndingHere, maxSoFar);
    }

    return maxSoFar;
  },

  /**
   * Function for search median number in arrray
   * @param {Array} array Array of Numbers 
   */
  searchMedianNumber(array) {
    let result = 0;
    const arrayMiddle = array.length / 2;
    array = array.sort((firstNumber,secondNumber) => firstNumber - secondNumber);

    if(array.length % 2 === 0) {
      result = (array[arrayMiddle-1] + array[arrayMiddle]) / 2;
    } else {
      result = array[Math.floor(array.length / 2)];
    }

    return result;
  },

  /**
   * Function for search MIN value in array of numbers
   * @param {Array} array Array of Numbers 
   */
  searchMinNumber(array) {
    return Math.min(...array);
  },

  /**
   * Function for search MAX value in array of numbers
   * @param {Array} array Array of Numbers 
   */
  searchMaxNumber(array) {
    return Math.max(...array);
  },

  /**
   * Function for search the maximum length of the increasing sequence
   * @param {Array} array Array of Numbers
   */
  searchMaxLengthOfIncreasingSequence(array) {
    let startIndex = 0;
    let res = [];
    
    if(array.length === 2) {
      return array[0] < array[1] ? array : [];
    }

    for(let i = 1; i < array.length; i++) {
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
}

export default ArrayProcessingTool;