function lazyEvaluation(func) {
  const cache = new Map();

  return function(...args) {
    const key = `${func.name}||${args}`;
    if(cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);

    cache.set(key, result);
    return result;
  }
}

module.exports = lazyEvaluation;