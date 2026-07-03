const mongoose = require("mongoose");
const Flat = require("../models/flat");
const Society = require("../models/society");

const createFlat = async (req, res) => {
    try {

        const {
            flatNumber,
            block,
            floor,
            societyId,
        } = req.body;

        console.log("Collection Name:", Society.collection.name);

        const societies = await Society.find().lean();

        console.log("Total Societies:", societies.length);
        console.log(JSON.stringify(societies, null, 2));

        const cleanId = societyId.trim();

        const society = await Society.findById(
            new mongoose.Types.ObjectId(cleanId)
        );

        if (!society) {
            return res.status(404).json({
                success: false,
                message: "Society not found.",
            });
        }

        const existingFlat = await Flat.findOne({
            flatNumber,
            block,
            society: cleanId,
        });

        if (existingFlat) {
            return res.status(400).json({
                success: false,
                message: "Flat already exists.",
            });
        }

        const flat = await Flat.create({
            flatNumber,
            block,
            floor,
            society: cleanId,
        });

        res.status(201).json({
            success: true,
            message: "Flat created successfully.",
            flat,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });

    }
};

const getAllFlats = async (req, res) => {
    try {

        const { societyId } = req.params;

        const flats = await Flat.find({
            society: societyId,
        })
        .populate("owner", "fullName email phone")
        .sort({
            block: 1,
            flatNumber: 1,
        });

        res.status(200).json({
            success: true,
            count: flats.length,
            flats,
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
    createFlat,
    getAllFlats,
};