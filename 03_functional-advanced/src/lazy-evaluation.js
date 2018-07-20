function lazyEvaluationHighOrder(func) {
  const cache = new Map();

  return function lazyEvaluatuionReturn(...args) {
    const key = `${func.name}||${args}`;
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);

    cache.set(key, result);
    return result;
  };
}

function lazyEvaluation(...functions) {
  const funcs = [];
  functions.forEach(func => funcs.push(lazyEvaluationHighOrder(func)));

  return funcs;
}

module.exports = lazyEvaluation;
