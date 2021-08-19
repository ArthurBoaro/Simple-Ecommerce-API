const express = require("express");
const router = express.Router();

// Create Product Route
const product_controller = require("../controllers/product.controller");

// Post Product
router.post("/create", product_controller.product_create);

// Get All Products
router.get("/", product_controller.all_products);

// Get Product by productNumber
router.get("/:productNumber", product_controller.product_details);

// Update Product
router.put("/:productNumber/update", product_controller.product_update);

// Delete Product
router.delete("/:productNumber/delete", product_controller.product_delete);

module.exports = router;