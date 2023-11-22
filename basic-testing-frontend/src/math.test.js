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
