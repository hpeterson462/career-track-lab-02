const Order = require('./order.js');

describe('order class', () => {
  //name
  //deliveryMinute
  //COOK_TIME
  //drivingDistanceInMinutes
  //startMinute
  it('gets info of the pizza order', () => {
    const newPizzaOrder = new Order('Awesome Pizza', 60, 30);

    expect(newPizzaOrder).toEqual({
      name: 'Awesome Pizza',
      deliveryMinute: 60,
      startMinute: 10
    });
  });
});