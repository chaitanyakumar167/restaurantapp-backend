const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const app = express();

const Sequelize = require("./util/database");

app.use(bodyParser.json({ extended: false }));
app.use(cors());

const ordersRouter = require("./routes/orders");

app.use(ordersRouter);

Sequelize.sync()
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
