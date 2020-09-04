class Schedule {
  #schedule = [...Array(1440)].fill(false);

  nextOpenMinute() {
    return this.#schedule.findIndex(minute => minute === false);
  }
}

module.exports =
  Schedule;