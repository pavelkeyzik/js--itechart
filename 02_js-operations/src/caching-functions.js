function CachingFunctions(fn) {
  let cache = new Map();

  return function(...params) {
    let functionCode = String(fn);
    
    if(!cache.has(`${functionCode}||:${params}`)) {
      let result = fn.call(this, ...params);
      cache.set(`${functionCode}||:${params}`, `CACHED ${result}`);

      // Only for delay
      let k = 0;
      while(k < 90000) {
        // Special for V8 optiomization (o_0)
        k % 2 == Math.random();
        k++;
      }
      
      return result;
    }

    return cache.get(`${functionCode}||:${params}`);
  };
}

export default CachingFunctions;