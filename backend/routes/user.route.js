// Modules
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Environment Variables
const dotenv = require('dotenv');
dotenv.config();

// Models
const UserModel = require('../models/user.model.js')

// Routes
const userRoute = express.Router();

// User Registered route
userRoute.post('/register', async (req, res) => {

    // request body
    const {
        name,
        email,
        password,
        role
    } = req.body

    try {

        // Validate email
        if (!email.includes('@') && !email.includes('.com')) {
            return res.status(404).json({ message: `Please enter a valid email address, ${email} isn't a valid email address` })
        }

        // Check if user already exists
        const isUser = await UserModel.findOne({ email });

        if (isUser) {
            return res.status(400).send('user already registered')
        } else {

            // Hash the password
            bcrypt.hash(password, 5, async (err, hash) => {

                // if the password doesn't exist in request body, Throws an error
                if (err) {
                    return res.status(400).send('password could not hash')
                }

                // if the password exists in request body, hash it and save the user in database
                if (hash) {

                    // Create a new user with hashed password and save it to database
                    const newUser = new UserModel({
                        name,
                        email,
                        password: hash,
                        role
                    })
                    await newUser.save()

                    return res.status(201).send('user registered')
                }
            })
        }

    } catch (error) {
        res.status(500).json({ error, message: 'something wrong happened' })
    }
})

// User Login route
userRoute.post('/login', async (req, res) => {

    // request body
    const { email, password } = req.body;

    try {

        // Check if user exists in database
        const isUser = await UserModel.findOne({ email });

        // if user exists, throw an error
        if (!isUser) {
            return res.status(404).json({ message: 'User not found' });
        } else {

            // If user exists, compare the hashed password with the password in database
            bcrypt.compare(password, isUser.password, (err, result) => {

                // if passwords don't match, throw an error
                if (err) return res.status(500).json({ message: 'Something went wrong' });

                // if passwords match, generate and send a token to the client
                if (result) {

                    // Generate a JWT token with user ID and secret key for 1 hour
                    const token = jwt.sign({ userId: isUser._id }, process.env.SECRET_KEY, { expiresIn: '1h' });

                    // Set the token in the response body and send success message to the client
                    res.status(200).json({ message:'User login successfully' , token : `Bearer ${token}`});

                } else {
                    // send error message to the client
                    return res.status(400).json({ message: 'Password does not match' });
                }
            })
        }

    } catch (error) {
        res.status(500).json({ message: 'Something wrong happened', error })
    }
})

module.exports = userRoute;