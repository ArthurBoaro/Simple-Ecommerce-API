const express = require("express");
const router = express.Router();

// Create Order Route
const order_controller = require("../controllers/order.controller");

// Post Order
router.post("/create", order_controller.order_create);

// Get All Orders
router.get("/", order_controller.all_orders);

// Get Order by orderNumber
router.get("/:orderNumber", order_controller.order_details);

// Update Order
router.put("/:orderNumber/update", order_controller.order_update);

// Delete Order
router.delete("/:orderNumber/delete", order_controller.order_delete);

module.exports = router;