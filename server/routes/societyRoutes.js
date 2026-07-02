const express = require("express");

const { createSociety } = require("../controllers/societyController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", protect, createSociety);

module.exports = router;