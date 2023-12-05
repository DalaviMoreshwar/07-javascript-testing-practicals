import { it, expect, describe } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber()", () => {
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
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number value is provided", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);
    expect(cleanedNumbers[0]).toBeTypeOf("number");
  });

  it("should return an error if an array with at least one empty string is provided", () => {
    const numberValues = ["1", ""];
    const cleanFn = () => cleanNumbers(numberValues);
    expect(cleanFn).toThrow();
  });
});
