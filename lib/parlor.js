class Parlor {
  orders = [];
  drivers = [];

  #calculateSchedule() {
    this.orders.forEach(order => {
      this.drivers.forEach(driver => {
        driver.currentSchedule = nextOpenMinute ? driver.currentSchedule.addOrder : null;
      })
    })
  };

  addDriver(name) {
    this.drivers.push(name);
    this.#calculateSchedule();
  }

  addOrder(order) {
    this.orders.push(order);
    this.#calculateSchedule();
  }

  printSchedule() {
    this.drivers.forEach(driver => {
      driver.currentSchedule.print();
    })
  }

}

module.exports =
  Parlor;