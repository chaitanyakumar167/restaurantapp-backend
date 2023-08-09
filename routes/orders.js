const express = require("express");
const ordersController = require("../controllers/orders");

const router = express.Router();

router.post("/add", ordersController.postAddOrder);

router.get("/all-orders", ordersController.getAllOrders);

router.delete("/delete/:id", ordersController.deleteOrder);

module.exports = router;
