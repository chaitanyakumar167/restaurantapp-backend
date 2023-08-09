const Order = require("../models/order");

exports.postAddOrder = async (req, res, next) => {
  try {
    const amount = req.body.amount;
    const dishName = req.body.dishName;
    const tableNumber = req.body.tableNumber;
    await Order.create({
      amount: amount,
      dishName: dishName,
      tableNumber: tableNumber,
    }).then((result) => res.json(result.id));
  } catch (err) {
    console.log(err);
  }
};

exports.getAllOrders = async (req, res, next) => {
  try {
    await Order.findAll().then((orders) => {
      res.json(orders);
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Order.findByPk(id).then((order) => {
      order.destroy();
    });
  } catch (err) {
    console.log(err);
  }
};
