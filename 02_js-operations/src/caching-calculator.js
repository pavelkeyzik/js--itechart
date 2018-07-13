function CachingCalculator() {

  let cache = new Map();

  return function(firstNumber, secondNumber) {
    let key = `${firstNumber}||${secondNumber}`;
    
    if(!cache.has(key)) {
      let result = firstNumber + secondNumber;
      cache.set(key, result);
      
      // Only for delay
      let x = 0;
      while(x < 70000) {
        x++;
      }

      return result;
    }

    return cache.get(key);
  }
}

export default CachingCalculator;