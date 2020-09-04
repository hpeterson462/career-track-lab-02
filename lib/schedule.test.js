const Schedule = require('./schedule.js');

describe('schedule class', () => {
  it('returns first open minute in driver schedule', () => {
    const newPizzaSchedule = new Schedule();

    expect(newPizzaSchedule.nextOpenMinute()).toEqual(0);
  });
});