const Parlor = require('./parlor.js');
const Driver = require('../driver.js');
const Order = require('./order.js');

describe('class parlor', () => {
  it('adds drivers to orders', () => {
    const newParlor = new Parlor;
    const driver = new Driver('Dave');
    const order = new Order('Awesome Pizza', 60, 30);

    newParlor.addDriver(driver);
    newParlor.addOrder(order);

    console.log(newParlor);
  });
});