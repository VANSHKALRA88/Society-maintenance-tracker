const Complaint = require("../models/complaint");
const Society = require("../models/society");
const Flat = require("../models/flat");
const cloudinary = require("../config/cloudinary");

const createComplaint = async (req, res) => {
    try {

        const {
            title,
            description,
            societyId,
            flatId,
            priority,
            dueDate,
        } = req.body;

        const society = await Society.findById(societyId);

        if (!society) {
            return res.status(404).json({
                success: false,
                message: "Society not found.",
            });
        }

        const flat = await Flat.findById(flatId);

        if (!flat) {
            return res.status(404).json({
                success: false,
                message: "Flat not found.",
            });
        }

        let photoUrl = "";

        if (req.file) {

            const result = await cloudinary.uploader.upload(
                `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
                {
                    folder: "society-complaints",
                }
            );

            photoUrl = result.secure_url;
        }

        const complaint = await Complaint.create({

            title,
            description,

            society: societyId,
            flat: flatId,

            resident: req.user._id,

            priority,
            dueDate,
            photo: photoUrl,

            status: "Pending",

            statusHistory: [
                {
                    status: "Pending",
                    remarks: "Complaint Created",
                    updatedBy: req.user._id,
                },
            ],

        });

        res.status(201).json({

            success: true,
            message: "Complaint created successfully.",
            complaint,

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal Server Error",

        });

    }
};

const getAllComplaints = async (req, res) => {

    try {

        const { societyId } = req.params;

        const complaints = await Complaint.find({
            society: societyId,
        })
        .populate("resident", "fullName email phone")
        .populate("flat", "flatNumber block")
        .sort({
            createdAt: -1,
        });

        const today = new Date();

        for (const complaint of complaints) {

            if (
                complaint.status !== "Resolved" &&
                complaint.dueDate &&
                complaint.dueDate < today
            ) {

                complaint.isOverdue = true;
                await complaint.save();

            }

        }

        res.status(200).json({

            success: true,
            count: complaints.length,
            complaints,

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal Server Error",

        });

    }

};

const updateComplaintStatus = async (req, res) => {

    try {

        const { id } = req.params;
        const { status, remarks } = req.body;

        const complaint = await Complaint.findById(id);

        if (!complaint) {

            return res.status(404).json({

                success: false,
                message: "Complaint not found.",

            });

        }

        complaint.status = status;

        complaint.statusHistory.push({

            status,
            remarks,
            updatedBy: req.user._id,

        });

        await complaint.save();

        res.status(200).json({

            success: true,
            message: "Complaint status updated successfully.",
            complaint,

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal Server Error",

        });

    }

};

const getDashboardReport = async (req, res) => {

    try {

        const { societyId } = req.params;

        const totalComplaints = await Complaint.countDocuments({
            society: societyId,
        });

        const pending = await Complaint.countDocuments({
            society: societyId,
            status: "Pending",
        });

        const inProgress = await Complaint.countDocuments({
            society: societyId,
            status: "In Progress",
        });

        const resolved = await Complaint.countDocuments({
            society: societyId,
            status: "Resolved",
        });

        const overdue = await Complaint.countDocuments({
            society: societyId,
            isOverdue: true,
        });

        const highPriority = await Complaint.countDocuments({
            society: societyId,
            priority: "High",
        });

        res.status(200).json({

            success: true,

            dashboard: {

                totalComplaints,
                pending,
                inProgress,
                resolved,
                overdue,
                highPriority,

            }

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

    createComplaint,
    getAllComplaints,
    updateComplaintStatus,
    getDashboardReport,

};