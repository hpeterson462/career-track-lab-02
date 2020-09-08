const Schedule = require('./schedule.js');
const Order = require('./order.js');

describe('schedule class', () => {
  const newPizzaSchedule = new Schedule();

  it('returns first open minute in driver schedule', () => {

    expect(newPizzaSchedule.nextOpenMinute()).toEqual(0);
  });
  it('clears schedule', () => {
    newPizzaSchedule.clear();

    expect(newPizzaSchedule.nextOpenMinute()).toEqual(0);
  });
  it('add order to schedule', () => {
    const newPizzaOrder = new Order('Awesome Pizza', 60, 30);
    newPizzaSchedule.addOrder(newPizzaOrder);

    expect(newPizzaSchedule.nextOpenMinute()).toEqual(0);
  });
});