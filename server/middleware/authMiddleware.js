const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
    let token;

    try {
        // Check Authorization Header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1];

            // Verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get User (without password)
            req.user = await User.findById(decoded.id).select("-password");

            return next();
        }

        return res.status(401).json({
            success: false,
            message: "Not authorized. Token missing.",
        });

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token.",
        });

    }
};

module.exports = { protect };