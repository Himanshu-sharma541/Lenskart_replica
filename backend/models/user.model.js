const mongoose = require('mongoose');

// Mongoose Schema
const userSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user', enum: ['admin', 'user'] }

}, { versionKey: false })

// Mongoose Model (Database Collection)
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;