function memoization(func, initialValue) {
  let previousValue = initialValue;
  let cache = [];

  function set(value) {
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