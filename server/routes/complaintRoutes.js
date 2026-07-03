const express = require("express");

const {
    createComplaint,
    getAllComplaints,
    updateComplaintStatus,
    getDashboardReport,
} = require("../controllers/complaintController");

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post(
    "/create",
    protect,
    upload.single("photo"),
    createComplaint
);

router.get("/dashboard/:societyId", protect, getDashboardReport);

router.get("/:societyId", protect, getAllComplaints);

router.patch("/:id/status", protect, updateComplaintStatus);

module.exports = router;