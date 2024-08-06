const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const products_routes = require("./routes/products.routes.js");
const connectDB = require("./db/connect.js")
require("dotenv").config();

// Middleware to parse JSON requests
app.use(express.json());


app.get('/', (req, res) => {
    res.send("hi");
})


app.use("/api/products", products_routes)

const start = async (req, res) => {
    try {
        app.listen(port, async() => {
            console.log(`Server is running on port ${port}`);
            await connectDB();
        })
    } catch (error) {
        console.log(error);
    }
};

start();