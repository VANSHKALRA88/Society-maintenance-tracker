const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
    },

    society: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Society",
        required: true,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    isImportant: {
        type: Boolean,
        default: false,
    },

},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Notice", noticeSchema);