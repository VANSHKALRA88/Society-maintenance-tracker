const Society = require("../models/society");

// Create Society
const createSociety = async (req, res) => {
    try {

        const {
            societyName,
            address,
            city,
            state,
            pincode,
            totalBlocks,
            totalFlats,
        } = req.body;

        const society = await Society.create({
            societyName,
            address,
            city,
            state,
            pincode,
            totalBlocks,
            totalFlats,
            admin: req.user._id,
        });

        res.status(201).json({
            success: true,
            message: "Society created successfully.",
            society,
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
    createSociety,
};