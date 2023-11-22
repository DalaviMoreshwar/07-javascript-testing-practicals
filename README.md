# ⛲ JavaScript Testing

## AAA Pattern

The AAA pattern is a common pattern used in JavaScript testing. It stands for Arrange
Act Assert, and it's the foundation of most unit tests you will write. In this
pattern:

- **Arrange**: Set up the necessary variables and dependencies for your test.

  > ✨ Define the testing environment & values

- **Act**: Perform the action you want to test.

  > ✨ Run the actual code / function that should be tested

- **Assert**: Check the expected result of the action.
  > ✨ Evaluate the produced value / result and compare it to be expected value / result

Before:

```javascript
import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  const result = add([1, 3, 4]);
  expect(result).toBe(8);
});
```

After:

```javascript
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
```
