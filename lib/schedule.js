class Schedule {
  #schedule = [...Array(1440)].fill(false);

  nextOpenMinute() {
    return this.#schedule.findIndex(minute => minute === false);
  }

  clear() {
    this.#schedule = [...Array(1440)].fill(false);
  }

  addOrder(order) {
    for (let i = order.startMinute; i <= order.deliveryMinute; i++) {
      this.#schedule[i] = true;
    }
  }
}

module.exports =
  Schedule;