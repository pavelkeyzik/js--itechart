function partialApplication(func, ...argggs) {
  return function(...args) {
    args = [...args, ...argggs];
    return func(...args);
  }
}

module.exports = partialApplication;