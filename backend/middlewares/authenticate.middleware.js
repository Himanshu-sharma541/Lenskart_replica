// Modules
const jwt = require('jsonwebtoken');

// Authentication Middleware 
const authentication = (req, res, next) => {

    const authHeaders = req.headers;

    if (!authHeaders.authorization) return res.status(404).json(
        { message: 'token not found or something went wrong' }
    )

    try {

        // Token of client 
        const token = authHeaders.authorization.split(" ")[1];

        // Verifying the token  using secret key  and checking the validity of token
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {

            // If error in token verification then send error message to client
            if (err) return res.status(401).json({ message: "Error Occour, Token not found or can't be decoded" })

            if (decoded) {

                // Storing role and User ID in request body
                const role = decoded.role;
                req.user = decoded._id
                req.role = role;

                // Moving to next middleware or route
                next()
            }
        })

    } catch (error) {
        // If error in token verification then send error message to client  (Server Error)
        return res.status(500).json({ message: 'something wrong happened', error })
    }

}

module.exports = authentication