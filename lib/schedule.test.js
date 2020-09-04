const Schedule = require('./schedule.js');

describe('schedule class', () => {
  const newPizzaSchedule = new Schedule();

  it('returns first open minute in driver schedule', () => {

    expect(newPizzaSchedule.nextOpenMinute()).toEqual(0);
  });
  it('clears schedule', () => {
    newPizzaSchedule.clear();

    expect(newPizzaSchedule.nextOpenMinute()).toEqual(0);
  });
});