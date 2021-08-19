const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const product = require("./routes/product.routes");
const client = require("./routes/client.routes");
const order = require("./routes/order.routes");
const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();

// Connect to MongoDB
require("dotenv").config();

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@linkToYourMongoDB`,
    { useNewUrlParser: true, useUnifiedTopology: true  }, () => {
        console.log('MongoDB Connected')
    }
);

// Inicialize Cors
app.use(cors());

// Setup Json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Products Route
app.use("/products", product);

// Use Clients Route
app.use("/clients", client);

// Use Orders Route
app.use("/orders", order);

// Setup Server to listen
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});