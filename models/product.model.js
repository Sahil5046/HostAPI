const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9
    },
    company: {
        type: String,
        enum: {
            values: ['Apple', 'Google', 'Microsoft', "dell", "mi"],
            message: '{VALUE} must be a valid company name'
        }
    }
}, { timestamps: true })


module.exports = mongoose.model('Product', productSchema)