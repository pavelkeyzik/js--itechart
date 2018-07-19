function linearUnfold(cb, init) {
  const sequence = [init];
  let currentValue = init;

  while (cb(currentValue)) {
    currentValue = cb(currentValue);
    sequence.push(currentValue);
  }

  return sequence;
}

module.exports = linearUnfold;
