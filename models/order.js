const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Order = sequelize.define("orders", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  dishName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tableNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Order;
