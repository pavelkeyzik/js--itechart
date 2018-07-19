function memoization(func, defaultValue) {
  let previousValue = defaultValue;
  const cache = [];

  function set(_value) {
    let value = _value;
    if (Number.isNaN(value) || !value) value = defaultValue;

    const lastElement = cache[cache.length - 1];

    if (lastElement && lastElement.value === value) {
      return lastElement;
    }

    cache.push({ value, previousValue });
    previousValue = func(value);
    return lastElement;
  }

  function previous() {
    return cache[cache.length - 1].previousValue;
  }

  return {
    previous,
    set,
  };
}

module.exports = memoization;
