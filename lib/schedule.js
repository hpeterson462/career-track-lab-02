class Schedule {
  #schedule = [...Array(1440)].fill(false);

  nextOpenMinute() {
    return this.#schedule.findIndex(minute => minute === false);
  }
  clear() {
    this.#schedule = [...Array(1440)].fill(false);
  }
}

module.exports =
  Schedule;