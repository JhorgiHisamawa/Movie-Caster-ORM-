const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import controller
const assocController = require("../controllers/assocController");

// router paths
router.get("/", assocController.getAll); 
router.get("/:id", assocController.getOne); 

module.exports = router; // Export router
