
// middleware to check user authorization
const authorize = (permittedRole) => {

    return (req, res, next) => {

        // User role
        const user_role = req.role

        // Check if user has required role to access the resource
        if (permittedRole.includes(user_role)) {
            // Moving to the next route
            next()
        } else {
            // Unauthorized user, return unauthorized status code and message
            res.status(401).json({ messgae: "unauthorized user, login again" })
        }

    }
}

module.exports = authorize