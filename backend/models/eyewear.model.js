const mongoose = require('mongoose');

// Mongoose Schema
const eyewearSchema = new mongoose.Schema({

    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    reviewCount: { type: Number, default: 0 },
    avgRating: { type: Number, default: 0 },

}, { versionKey: false })

// Mongoose Model (Database Collection)
const EyewearModel = mongoose.model('eyeware', eyewearSchema)

module.exports = EyewearModel;