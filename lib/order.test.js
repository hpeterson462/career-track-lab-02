const Order = require('./order.js');

describe('order class', () => {
  it('gets name of the order', () => {
    const orderName = new Order('veggie pizza');

    expect(orderName.name).toEqual('veggie pizza');
  });

});