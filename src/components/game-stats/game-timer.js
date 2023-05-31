/* eslint linebreak-style: ["error", "windows"] */

export default class Timer {
  constructor() {
    this.timerId = null;
    this.internalTimerCtr = 0;
    this.timerNode = document.getElementById('timer-node');
  }

  get time() {
    return this.internalTimerCtr.toString().padStart(3, 0);
  }

  setToDefault() {
    this.stop();
    this.timerId = null;
    this.internalTimerCtr = 0;
    this.renderTimer();
  }

  start() {
    this.timerId = setInterval(() => {
      this.internalTimerCtr += 1;
      this.renderTimer();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }

  renderTimer() {
    this.timerNode.textContent = this.time;
  }
}
