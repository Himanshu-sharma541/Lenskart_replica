// Modules
const express = require('express');

const eyewearRouter = express.Router();

// Models
const EyewearModel = require('../models/eyewear.model.js');

// Middlewares
const authorize = require('../middlewares/authorize.middleware.js');
const authentication = require('../middlewares/authenticate.middleware.js');

// Product creation route
eyewearRouter.post('/create', authentication, async (req, res) => {

    try {

        // Create a new product
        const eyewear = new EyewearModel(req.body);

        // Save the product to the database
        await eyewear.save();

        // Return success response
        res.status(201).json({ message: "Product created successfully" });

    } catch (error) {

        // Return error response
        return res.status(500).json({ message: "Something Wrong happened", message: error.message });
    }
})

// Get all products route
eyewearRouter.get('/', async (req, res) => {

    // Get query parameters from the request
    const { q, rating, id ,sortBy, page, limit } = req.query;

    try {

        // Custom search filters
        let filter = {};

        if (q) {
            // Custom search by title
            filter.title = new RegExp(q, 'i');
        }

        if (rating) {
            // Custom search by rating
            filter.rating = rating;
        }
        
        if (id) {
            // Custom search by rating
            filter._id = id;
        }

        // Get the eyewears from the database based on the filter and sorting
        const eyewears = await EyewearModel.find(filter)
            .sort(sortBy ? { [sortBy]: 1 } : {})
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        // Return "Not Found" error response
        if (eyewears.length == 0) {
            return res.status(404).json({ message: "No eyewear found" })
        }

        // Return success response with the eyewears and the total number of items found
        res.status(200).json({ eyewears, numberOfItems: eyewears.length })

    } catch (error) {
        return res.status(500).json({ message: "Something wrong happened", message: error.message })
    }
})

// Product update route
eyewearRouter.post('/update/:id', authentication, authorize(['admin']), async (req, res) => {

    // Get the updated product data from the request body
    const { title, price, category, reviewCount, avgRating } = req.body;

    // Create a new product object with the updated data
    let filter = {};

    // select the updated product data from the request body
    if (title) filter.title = title;
    if (price) filter.price = price;
    if (category) filter.category = category;
    if (reviewCount) filter.reviewCount = reviewCount;
    if (avgRating) filter.avgRating = avgRating;

    const productID = req.params.id;

    try {

        // Find the Product and update it
        await EyewearModel.findByIdAndUpdate(productID, filter)

        // Return success response
        return res.status(200).json({ messgae: 'Product updated succesfully' })

    } catch (error) {
        // Return error message
        return res.status(500).json({ message: "Something wrong happened", message: error.message })
    }
})

// Product delete route
eyewearRouter.post('/delete/:id', authentication, authorize(['admin']), async (req, res) => {

    const productID = req.params.id;

    try {

        // Find the Product and delete it
        await EyewearModel.findByIdAndDelete(req.params.id)

        // Return success response
        return res.status(200).json({ messgae: 'Product deleted succesfully' })

    } catch (error) {
        // Return error message
        return res.status(500).json({ message: "Something wrong happened", message: error.message })
    }
})

module.exports = eyewearRouter