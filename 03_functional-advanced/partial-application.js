function partialApplication(func, ...argggs) {
  return function partialApplicationReturn(...args) {
    const params = [...args, ...argggs];
    return func(...params);
  };
}

module.exports = partialApplication;
