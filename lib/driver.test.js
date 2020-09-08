const Schedule = require('./schedule.js');
const Driver = require('./driver.js');

describe('driver class', () => {
  it('returns info on delivery driver', () => {
    const newDeliveryDriver = new Driver('Dave');

    expect(newDeliveryDriver).toEqual('Dave')
  });

});
