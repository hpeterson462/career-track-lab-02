const Schedule = require("./lib/schedule");

class Driver {
  name;
  currentSchedule = new Schedule();

  constructor(name) {
    this.name = name;
  }
}

module.exports =
  Driver;