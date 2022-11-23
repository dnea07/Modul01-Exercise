const {
  fahrenheit,
  evenOdd,
  primeNumber,
  sumNum,
  faktorial,
  fibonacci,
} = require("./Day02-Exercise-DevinaNathania");

test("Test fahrenheit function", () => {
  expect(fahrenheit(25)).toBe(77);
});

test("Test even odd function", () => {
  expect(evenOdd(2)).toBe("even");
});

test("Test prime number function", () => {
  expect(primeNumber(5)).toBe("prima");
});

test("Test sum of numbers function", () => {
  expect(sumNum(3)).toBe(6);
});

test("Test faktorial function", () => {
  expect(faktorial(3)).toBe(6);
});

test("Test fibonacci function", () => {
  expect(fibonacci(3)).toBe("0, 1, 1");
});
