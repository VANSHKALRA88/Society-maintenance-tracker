const User = require("../models/User");
const generateToken = require("../utils/generateToken");



// Register User

const registerUser = async (req, res) => {

    try {

        const {
            fullName,
            email,
            password,
            phone,
            flatNumber,
            role,
        } = req.body;

        // Check required fields
        if (
            !fullName ||
            !email ||
            !password ||
            !phone ||
            !flatNumber
        ) {

            return res.status(400).json({
                success: false,
                message: "Please fill all required fields.",
            });

        }

        // Check existing user
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                success: false,
                message: "User already exists.",
            });

        }

        // Create user
        const user = await User.create({

            fullName,
            email,
            password,
            phone,
            flatNumber,
            role,

        });

        res.status(201).json({

            success: true,
            message: "User registered successfully.",

            token: generateToken(user._id),

            user: {

                id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role,

            },

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal Server Error",

        });

    }

};



// Login User

const loginUser = async (req, res) => {

    try {

        const {

            email,
            password,

        } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({

                success: false,
                message: "Invalid email or password",

            });

        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {

            return res.status(400).json({

                success: false,
                message: "Invalid email or password",

            });

        }

        res.status(200).json({

            success: true,

            token: generateToken(user._id),

            user: {

                id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role,

            },

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal Server Error",

        });

    }

};

module.exports = {

    registerUser,
    loginUser,

};