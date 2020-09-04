const Order = require('./order.js');

describe('order class', () => {
  //name
  it('gets name of the pizza order', () => {
    const orderName = new Order('veggie pizza');

    expect(orderName.name).toEqual('veggie pizza');
  });
  //deliveryMinute

  //COOK_TIME

  //drivingDistanceInMinutes

  //startMinute

});