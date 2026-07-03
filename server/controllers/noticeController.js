const Notice = require("../models/notice");
const Society = require("../models/society");
const { sendNoticeEmail } = require("../services/emailService");

const createNotice = async (req, res) => {

    try {

        const {
            title,
            description,
            societyId,
            isImportant,
        } = req.body;

        // Check Society

        const society = await Society.findById(societyId);

        if (!society) {

            return res.status(404).json({

                success: false,
                message: "Society not found.",

            });

        }

        const notice = await Notice.create({

            title,
            description,

            society: societyId,

            createdBy: req.user._id,

            isImportant,

        });

        const User = require("../models/user");

const residents = await User.find({
    society: societyId,
    role: "resident",
}).select("email");

for (const resident of residents) {
    if (resident.email) {
        await sendNoticeEmail(
            resident.email,
            notice.title,
            notice.description
        );
    }
}

        res.status(201).json({

            success: true,
            message: "Notice created successfully.",
            notice,

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal Server Error",

        });

    }

};

const getAllNotices = async (req, res) => {

    try {

        const { societyId } = req.params;

        const notices = await Notice.find({

            society: societyId,

        })

        .populate("createdBy", "fullName email")

        .sort({

            createdAt: -1,

        });

        res.status(200).json({

            success: true,
            count: notices.length,
            notices,

        });

    } catch (error) {

        console.error(error);

        res.status(500).json({

            success: false,
            message: "Internal Server Error",

        });

    }

};

const deleteNotice = async (req, res) => {

    try {

        const { id } = req.params;

        const notice = await Notice.findById(id);

        if (!notice) {

            return res.status(404).json({

                success: false,
                message: "Notice not found.",

            });

        }

        await notice.deleteOne();

        res.status(200).json({

            success: true,
            message: "Notice deleted successfully.",

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

    createNotice,
    getAllNotices,
    deleteNotice,

};