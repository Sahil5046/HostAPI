const connectDB = require("./db/connect.js")
const Product = require("./models/product.model.js")
const ProductJson = require("./product.json")
require('dotenv').config()
const mongoose = require('mongoose')

const start = async() =>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        await Product.deleteMany(); // delete all previous products from the database and store new product in the database
        const response = await Product.create(ProductJson);
        console.log("Database connection successful: ", response)
    } catch (error) {
        console.log("Error starting database connection to database", error)
    }
}
start()