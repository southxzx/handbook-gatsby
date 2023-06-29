---
title: Stubs/Spies/Mocks in Jest
tags: ["testing", "jest", "unit-test"]
date: 2023/06/18
slug: 2023-06-18-stubs-spies-mocks-in-jest
---

Both are test doubles that stand-ins for when developers don't want to use the real thing during test.

## 1. Stubs/Spies/Mocks

A stub is a type of test double that replaces a specific function or method with a simplified implementation. In Jest they are instantiated with `jest.fn()` and used with `expect(stub).<assertionName>`

```Javascript
const myFunction = jest.fn().mockReturnValue(42);
```

Spy focuses on observing the behavior of a function rather than replacing it. In Jest you can use `jest.spyOn()`. The function wrap the existing object/function method and allow you to observes it's behavior.

```Javascript
const mockEventListenerOnMessage = jest
  .spyOn(window, "addEventListener")
  .mockImplementationOnce((event, handler) => {})
```

Spy can test the behavior and state that happen internally.

We can use `.mockImplementation()` or `mockReturnValue/mockResolvedValue` to replace a function’s implementation.

```Javascript
const myFunction = jest.fn();

myFunction.mockImplementation(() => {
  return 'Custom implementation';
});
```

We also can mock a module like this example:

```Javascript
// Create a mock implementation for a module
jest.mock('./myModule');

// Import the mocked module
const myModule = require('./myModule');

// Provide a mock implementation that returns data
myModule.getData.mockReturnValue({ name: 'Jane', age: 25 });

// Call the function from the mocked module
const result = myModule.getData();

// Verify the returned data
expect(result).toEqual({ name: 'Jane', age: 25 });
```

## 2. Behavior vs State testing

### Behavior:

Function testing (black-box) -> Focus on verifying the behavior of your code. You ensure that your code behaves correctly and consistently based on its inputs and expected outcomes.

### State:

Unit testing (white-box) -> Focus on testing the internal state or implementation details of your code. (Like a counter app that should increase the counter value when count function was called)

Mainly the distinction between them comes from the testing approach rather than specific Jest functions.

Refs:

[https://codewithhugo.com/jest-fn-spyon-stub-mock/](https://codewithhugo.com/jest-fn-spyon-stub-mock/)
