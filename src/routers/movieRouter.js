const express = require("express"); // Import express
const router = express.Router(); // Make a router

// Import controller
const movieController = require("../controllers/movieController");


//test 
router.get("/get/:id", movieController.getMovieActor)


// router paths
// router.get("/", movieController.getAll); 
// router.get("/:id", movieController.getOne); 
// router.post("/", movieController.create);
// router.put('/:id', movieController.update);
// router.delete('/:id', movieController.delete);

module.exports = router; // Export router
