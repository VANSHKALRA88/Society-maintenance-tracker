const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const societyRoutes = require("./routes/societyRoutes");
const flatRoutes = require("./routes/flatRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const noticeRoutes = require("./routes/noticeRoutes");

const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use("/api/society", societyRoutes);
app.use("/api/flats", flatRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/notices", noticeRoutes);
app.get("/api/profile", protect, (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
});


// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Society Maintenance Tracker API is running..."
    });
});

module.exports = app;