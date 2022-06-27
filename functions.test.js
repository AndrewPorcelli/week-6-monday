require('./functions');

const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide,
} = require('./functions');

// Tests
test('returnTwo should return 2', () => {
  expect(returnTwo()).toEqual(2);
});

describe('testing out greeting', () => {
  test('greeting should return Hello, James', () => {
    let firstName = 'James';
    expect(greeting(firstName)).toEqual('Hello, James');
  });

  test('greeting should return Hello, Jill', () => {
    let firstName = 'Jill';
    expect(greeting(firstName)).toEqual('Hello, Jill');
  });
});

describe('testing add function', () => {
  test('add should equal 3', () => {
    let num1 = 1;
    let num2 = 2;
    expect(add(num1, num2)).toEqual(3);
  });

  test('add should equal 14', () => {
    let num1 = 5;
    let num2 = 9;
    expect(add(num1, num2)).toEqual(14);
  });
});

describe('', () => {
  test('', () => {
    expect(multiply(2, 3)).toEqual(6);
  });

  test('', () => {
    expect(divide(100, 25)).toEqual(4);
  });

  test('', () => {
    expect(subtract(49, 34)).toEqual(15);
  });
});
