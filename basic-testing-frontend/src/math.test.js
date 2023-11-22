import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange
  const numbers = [1, 3, 4];

  // Act
  const result = add(numbers);

  // Assert
  const expectedResult = numbers.reduce(
    (prevVal, currentVal) => prevVal + currentVal,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yeild NaN if at least one invalid number is provided", () => {
  const numbers = ["invalid", 1];

  const result = add(numbers);

  expect(result).toBeNaN();
});

it("should yeild a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["1", "2"];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevVal, currentVal) => +prevVal + +currentVal,
    0
  );
  expect(result).toBe(expectedResult);
});

it("should yeild 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error if no values are passed into the function", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});
