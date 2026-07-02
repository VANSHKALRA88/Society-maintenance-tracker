const express = require("express");

const {
    createFlat,
    getAllFlats,
} = require("../controllers/flatController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", protect, createFlat);

router.get("/:societyId", protect, getAllFlats);

module.exports = router;