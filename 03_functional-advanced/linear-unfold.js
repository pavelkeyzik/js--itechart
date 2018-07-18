function linearUnfold(cb, init) {
  let sequence = [init];
  let currentValue = init;
  
  while(currentValue = cb(currentValue)) {  
    sequence.push(currentValue);
  }

  return sequence;
}

const result = linearUnfold((element) => element < 20 ? element + 1 : false, 10);

console.log(result);

module.exports = linearUnfold;