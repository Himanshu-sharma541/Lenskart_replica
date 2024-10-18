// Modules
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Environment Variables
dotenv.config();

const config_url = process.env.CONFIG_URL;
const connection = mongoose.connect(config_url)

module.exports = connection;