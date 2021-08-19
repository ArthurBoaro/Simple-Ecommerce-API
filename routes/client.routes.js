const express = require("express");
const router = express.Router();

// Create Client Route
const client_controller = require("../controllers/client.controller");

// Post Client
router.post("/create", client_controller.client_create);

// Get All Clients
router.get("/", client_controller.all_clients);

// Get Product by CPF
router.get("/:CPF", client_controller.client_details);

// Update Client
router.put("/:CPF/update", client_controller.client_update);

// Delete Client
router.delete("/:CPF/delete", client_controller.client_delete);

module.exports = router;