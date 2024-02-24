jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

import { timerExample, TimerExampleClass } from "./../src/examples/timer";

describe("timer", () => {
  it("testing timer", () => {
    const callback = jest.fn();

    timerExample(100, callback);

    expect(callback).not.toHaveBeenCalledTimes(1);

    jest.runAllTimers();

    expect(callback).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);

    jest.clearAllTimers();
  });

  jest.mock("./../src/examples/timer", () => {
    return {
      stop: jest.fn(),
    };
  });

  it("testing timer up to Date", () => {
    const timerExampleClass = new TimerExampleClass();
    timerExampleClass.start();

    jest.advanceTimersByTime(2000);

    timerExampleClass.stop();

    expect(timerExampleClass.stop()).toBe(2000);
    expect(timerExampleClass.duration).toBe(2000);
  });
});
