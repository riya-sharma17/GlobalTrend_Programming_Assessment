// Write a function that takes a string input representing a simple arithmetic expression (only addition and subtraction) and returns the result.

function evaluateExpression(expression) {
  return eval(expression);
}
console.log(evaluateExpression("3 + 5 - 2"));