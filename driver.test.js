const Driver = require('./driver.js');

describe('driver class', () => {
  it('returns info about delivery drive', () => {
    const deliveryDriver = new Driver('Dave');

    expect(deliveryDriver).toEqual(deliveryDriver);
  });
});