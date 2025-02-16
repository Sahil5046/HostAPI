const mongoose = require("mongoose");

const connectDB = async() =>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Connected: ${db.connection.host}`);
    } catch (error) {
        console.log("Couldn't connect to MongoDB", error);
        process.exit(1);
    }
}

module.exports = connectDB;