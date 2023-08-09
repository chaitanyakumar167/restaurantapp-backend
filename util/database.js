const Sequelize = require("sequelize");
const sequelize = new Sequelize("restaurantapp", "root", "Chaithanya@121", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
