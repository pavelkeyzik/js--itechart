function StringCalculator(firstNumber, secondNumber, operator) {

  firstNumber = +firstNumber;
  secondNumber = +secondNumber;

  let result;

  switch(operator) {
  case '+':
    result = firstNumber + secondNumber;
    break;
  case '-':
    result = firstNumber - secondNumber;
    break;
  case '*':
    result = firstNumber * secondNumber;
    break;
  case '/':
    result = firstNumber / secondNumber;
    break;
  }

  return +result.toFixed(5);
}

export default StringCalculator;