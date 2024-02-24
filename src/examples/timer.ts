const timerExample = (timeout: number, callback: (T?: any) => void) => {
  setTimeout(() => {
    callback();
  }, timeout);
};

class TimerExampleClass {
  startTime: number = 0;
  private _duration: number = 0;

  public start = () => {
    this.startTime = Date.now();
  };

  public stop = (): number => {
    this._duration = Date.now() - this.startTime;
    return Date.now() - this.startTime;
  };

  get duration(): number {
    return this._duration;
  }
}

export { timerExample, TimerExampleClass };
