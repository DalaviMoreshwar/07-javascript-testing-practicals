import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

// validateStringNotEmpty();
describe("validateStringNotEmpty()", () => {
  it("should throw an error, if an empty string is provided", () => {
    const value = "";

    const validationFn = () => validateStringNotEmpty(value);

    expect(validationFn).toThrow(/Invalid input - must not be empty./);
  });

  it("should throw an error if any other value than a string is provided", () => {
    const valueNum = 123;
    const valueBool = true;
    const valueObj = { foo: "bar" };

    const validationFnNum = () => validateStringNotEmpty(valueNum);
    const validationFnBool = () => validateStringNotEmpty(valueBool);
    const validationFnObj = () => validateStringNotEmpty(valueObj);

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
  });

  it("should not throw an error, if a non-empty string is provided", () => {
    const value = "valid";

    const validationFn = () => validateStringNotEmpty(value);

    expect(validationFn).not.toThrow();
  });
});

describe("validateNumber()", () => {
  it("should throw an error if NaN is provided", () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it("should throw an error with a message that contains a reason (invalid number)", () => {
    const input = NaN;
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow(/Invalid number/);
  });

  it("should throw an error if a non-numeric value is provided", () => {
    const input = "1";
    const validationFn = () => validateNumber(input);
    expect(validationFn).toThrow();
  });

  it("should not throw an error if a numeric value is provided", () => {
    const input = 1;
    const validationFn = () => validateNumber(input);
    expect(validationFn).not.toThrow();
  });
});
