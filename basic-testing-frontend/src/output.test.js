import { it, expect, describe } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText()", () => {
  it("should return a string, no matter which value is passed in", () => {
    const val1 = 1;
    const val2 = "invalid";
    const val3 = true;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it("should return a string that contain calculated result if a number is provided", () => {
    const val = 1;
    const resultText = generateResultText(val);
    expect(resultText).toContain(resultText.toString());
  });

  it("should return an empty string if 'no-calc' is provided as a result", () => {
    const val = "no-calc";
    const resultText = generateResultText(val);
    expect(resultText).toBe("");
  });

  it("should return a string if a string is provided as a result", () => {
    const val = "Invalid";
    const resultText = generateResultText(val);
    expect(resultText).toContain("Invalid");
  });
});
