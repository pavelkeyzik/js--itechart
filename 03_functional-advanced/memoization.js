function memoization(func, defaultValue) {
  let previousValue = defaultValue;
  let cache = [];

  function set(value) {
    if(Number.isNaN(value) || !value) value = defaultValue;

    let lastElement = cache[cache.length - 1];

    if(lastElement && lastElement.value === value) {
      return lastElement;
    }

    cache.push({value, previousValue});
    previousValue = func(value);
  }

  function previous() {
    return cache[cache.length - 1].previousValue;
  }

  return {
    previous,
    set
  }
}

module.exports = memoization;