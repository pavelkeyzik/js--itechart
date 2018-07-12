function ArraySorter(array) {
  this._array = array;
}

ArraySorter.prototype.bubbleSort = function() {
  let result = this._array.slice();

  for(var i = 0; i < result.length; i++) {
    for(var j = 0; j < result.length; j++) {
      if(result[j] > result[j+1]) {
        [result[j], result[j+1]] = [result[j+1], result[j]]
      }    
    }
  }

  return result;
}

ArraySorter.prototype.insertionSort = function() {
  let array = this._array.slice();

  for(var i = 1; i < array.length; i++) {
    for(var j = i; j > 0; j--) {
      if(array[j] < array[j-1]) {
        [array[j], array[j-1]] = [array[j-1], array[j]];
      }
    }
  }

  return array;
}

export default ArraySorter;