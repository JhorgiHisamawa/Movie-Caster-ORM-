const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Import Routes
const movieRouter = require("./src/routers/movieRouter.js");
const castRouter = require("./src/routers/castRouter.js");

// dotenv
const dotenv = require('dotenv').config({ path: path.join(__dirname, '.env.production')});

if (dotenv.error) {
  // Something went wrong
  console.error(dotenv.error);
} else {
  // Log parsed values
  console.log(dotenv.parsed);
}

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({ message : "Welcome to my moviecaster API"});
});

// Implement Routes
app.use("/movie", movieRouter);
app.use("/cast", castRouter);

// listen for requests
let port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});