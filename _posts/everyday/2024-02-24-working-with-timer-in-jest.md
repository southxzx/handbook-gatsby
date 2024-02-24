---
title: Working with Timer in Jest
tags: ["unit-test", "jest"]
date: 2024/02/24
slug: 2024-02-24-working-with-timer-in-jest
---

Since `setTimeout(), setInterval(), clearTimeout(), clearInterval()` are not ideal for testing environment because they are depended on real time to elapse. But Jest comes with some handy methods to do that.

## 1. Fake timers

By calling `jest.useFakeTimers()`, Jest will replace the original implementation of the above functions.

```javascript
// timer.ts

const timerExample = (timeout: number, callback: (T?: any) => void) => {
  setTimeout(() => {
    callback();
  }, timeout);
};
```

```javascript
// timer.test.ts

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

import { timerExample } from "./../src/examples/timer";

describe("timer", () => {
  it("testing timer", () => {
    timerExample(100, () => {});
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);
  });
});
```

We can stimulate the timing by using:

- `jest.runAllTimers()`: will fast-forward until all timers have been executed.
- `jest.advanceTimersByTime(msToRun)`: all timers are advanced by msToRun milliseconds.
  - required to use `jest.useFakeTimers();`
  - all "[macro-tasks](https://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask-within-an-event-loop-context)" that have been queued via `setTimeout()` or `setInterval()`, and would be executed during this time frame, will be executed.

```javascript
// timer.test.ts

describe("timer", () => {
  it("testing timer", () => {
    const callback = jest.fn();

    timerExample(100, callback);

    expect(callback).not.toHaveBeenCalledTimes(1);

    jest.runAllTimers();

    expect(callback).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);
  });
});
```

## 2. Spy on the global Date

Sometimes, we might need to use:

```js
jest.spyOn(global.Date, "now").mockReturnValueOnce(Date.now() + 1000);
```

to make the time relate to Date.

```javascript

it("should calculate duration correctly", async () => {
  videoRecording.start();
  jest.spyOn(global.Date, "now").mockReturnValueOnce(Date.now() + 2000);
  videoRecording.stop();
  expect(videoRecording.duration).toBe(2000); // Duration should be 2 seconds
  videoRecording.reset();
});
```

**Refs:**

https://jestjs.io/docs/timer-mocks
