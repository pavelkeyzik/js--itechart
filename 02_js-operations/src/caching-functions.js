function CachingFunctions(fn) {
  let cache = new Map();

  return function(...params) {
    const template = `${String(fn)}||:${params}`;

    if (!cache.has(template)) {
      let result = fn.call(this, ...params);
      cache.set(template, `CACHED ${result}`);

      // Only for delay
      let k = 0;
      while (k < 90000) {
        // Special for V8 optiomization (o_0)
        k % 2 == Math.random();
        k++;
      }

      return result;
    }

    return cache.get(template);
  };
}

export default CachingFunctions;
