const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Email configuration using TechXak credentials
const emailConfig = {
    host: 'smtp.hostinger.com', // Hostinger SMTP server
    port: 587, // Standard SMTP port
    secure: false, // TLS
    auth: {
        user: process.env.TECHXAK_EMAIL || 'hello@techxak.com',
        pass: process.env.TECHXAK_EMAIL_PASSWORD || 'Bitirani@123'
    },
    tls: {
        rejectUnauthorized: false
    }
};

const transporter = nodemailer.createTransport(emailConfig);

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please provide all required fields (name, email, message).' });
    }

    const mailOptions = {
        from: `"${name}" <${process.env.TECHXAK_EMAIL}>`, // Sender address (authenticated)
        to: process.env.RECIPIENT_EMAIL || 'sachet0985@gmail.com', // Recipient address
        replyTo: email, // User's email for replies
        subject: `Contact Form: ${subject || 'New Inquiry'}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
