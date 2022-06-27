function returnTwo() {
  let number = 2;
  return +number;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

module.exports = {
  //   returnTwo: function () {
  //     let number = 2;
  //     return +number;
  //   },
  greeting: function (name) {
    return `Hello, ${name}`;
  },
  add: function (num1, num2) {
    return num1 + num2;
  },
  returnTwo,
  multiply,
  divide,
  subtract,
};
