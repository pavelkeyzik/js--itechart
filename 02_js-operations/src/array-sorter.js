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

ArraySorter.prototype.quickSort = function() {
  let array = this._array.slice();
  _quick(array, 0, array.length - 1);
  return array;
}

function _quick(array, low, high) {
  if(high <= low) return;

  var i = low;
  var j = high + 1;

  do {
    while(array[++i] < array[low]) {
      if(i == high) break;
    }

    while(array[--j] > array[low]) {
      if(j == low) break;
    }

    if(i < j) {
      [array[i], array[j]] = [array[j], array[i]];
    }

  } while(i < j);

  [array[low], array[j]] = [array[j], array[low]];

  _quick(array, low, j - 1);
  _quick(array, j+1, high);
}

export default ArraySorter;