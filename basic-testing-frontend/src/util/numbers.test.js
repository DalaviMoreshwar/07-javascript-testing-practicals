import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform a string number to a number type", () => {
  const value = "1";

  const resultFn = transformToNumber(value);

  expect(resultFn).toBeTypeOf("number");
});

it("should yeild NaN for a non-transformable values", () => {
  const value = "invalid";
  const value2 = {};

  const resultFn = transformToNumber(value);
  const resultFn2 = transformToNumber(value2);

  expect(resultFn).toBeNaN();
  expect(resultFn2).toBeNaN();
});
