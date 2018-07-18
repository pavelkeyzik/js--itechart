function linearUnfold(cb, init) {
  let sequence = [init];
  let currentValue = init;
  
  while(currentValue = cb(currentValue)) {  
    sequence.push(currentValue);
  }

  return sequence;
}

module.exports = linearUnfold;