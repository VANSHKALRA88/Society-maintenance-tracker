const express = require("express");

const {
    createNotice,
    getAllNotices,
    deleteNotice,
} = require("../controllers/noticeController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//Create Notice
router.post("/create", protect, createNotice);

//Get All Notices
router.get("/:societyId", protect, getAllNotices);

//Delete Notice
router.delete("/:id", protect, deleteNotice);

module.exports = router;