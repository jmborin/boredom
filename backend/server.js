const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
    const { email, subject, message } = req.body;

    // 🔑 Gmail SMTP setup
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "johnnyborin21@gmail.com",
            pass: "hgbc wqoz wssn tpvw" // Use an "App Password" if 2FA is enabled
        }
    });

    const mailOptions = {
        from: "johnnyborin21@gmail.com",
        to: email, // Recipient's email
        subject: subject || "No Subject",
        text: message || "No message provided."
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email Sent!" });
        console.log("success");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

app.listen(2000, () => console.log("Server running on port 2000"));
