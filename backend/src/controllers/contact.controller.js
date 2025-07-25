// src/controllers/contact.controller.js
import { Contact } from '../models/contact.model.js';
import { validationResult } from 'express-validator';
import { sendEmail, emailVerificationMailgenContent } from '../utils/mail.js';

const submitContactForm = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, phone, message } = req.body;

    // Create contact submission
    const contactData = {
      name,
      email,
      phone,
      message,
      user: req.userId || null, // Link to authenticated user if available
    };
    const contact = await Contact.create(contactData);

    // Send email notification to admin
    const mailgenContent = {
      body: {
        name: 'Admin',
        intro: 'A new contact form submission has been received.',
        table: {
          data: [
            { key: 'Name', value: name },
            { key: 'Email', value: email },
            { key: 'Phone', value: phone || 'Not provided' },
            { key: 'Message', value: message },
          ],
        },
        outro: 'Please respond to this inquiry promptly.',
      },
    };

    await sendEmail({
      email: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      mailgenContent,
    });

    // Optionally send confirmation email to user
    const userMailgenContent = {
      body: {
        name,
        intro: 'Thank you for contacting Zoro Services & Solutions!',
        outro: 'We have received your message and will get back to you soon.',
      },
    };

    await sendEmail({
      email,
      subject: 'Thank You for Your Submission',
      mailgenContent: userMailgenContent,
    });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: contact,
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export { submitContactForm };