const express = require("express");
const app = express();

app.use(express.json());

// Import all routes
const products = require("./routes/product");
const producers = require("./routes/producer");


app.use("/api/v1", products);
app.use("/api/v1", producers);



module.exports = app;
