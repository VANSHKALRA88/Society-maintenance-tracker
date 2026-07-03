const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendStatusEmail = async (to, complaintTitle, status) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject: "Complaint Status Updated",
        html: `
            <h2>Society Maintenance Tracker</h2>
            <p>Your complaint <b>${complaintTitle}</b> has been updated.</p>
            <p><b>New Status:</b> ${status}</p>
        `,
    });
};

const sendNoticeEmail = async (to, title, description) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject: "New Society Notice",
        html: `
            <h2>Society Maintenance Tracker</h2>
            <h3>${title}</h3>
            <p>${description}</p>
        `,
    });
};

module.exports = {
    sendStatusEmail,
    sendNoticeEmail,
};