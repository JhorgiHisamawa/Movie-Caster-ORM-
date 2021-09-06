const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import controller
const castController = require("../controllers/castController");

// router paths
router.get("/", castController.getAll); 
router.get("/:id", castController.getOne); 
router.post("/", castController.create);
router.put('/:id', castController.update);
router.delete('/:id', castController.delete);

module.exports = router; // Export router
