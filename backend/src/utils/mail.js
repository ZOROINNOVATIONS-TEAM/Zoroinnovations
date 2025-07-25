// src/utils/mail.js
import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Zoro Services & Solutions',
    link: process.env.CLIENT_URL,
  },
});

const sendEmail = async ({ email, subject, mailgenContent }) => {
  try {
    const emailBody = mailGenerator.generate(mailgenContent);
    const emailText = mailGenerator.generatePlaintext(mailgenContent);

    const mail = {
      from: process.env.EMAIL_FROM || 'no-reply@zoro-services.com',
      to: email,
      subject,
      html: emailBody,
      text: emailText,
    };

    await transporter.sendMail(mail);
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

const emailVerificationMailgenContent = (username, verificationLink) => {
  return {
    body: {
      name: username,
      intro: 'Please verify your email address to complete your registration.',
      action: {
        instructions: 'Click the button below to verify your email:',
        button: {
          color: '#22BC66',
          text: 'Verify Email',
          link: verificationLink,
        },
      },
      outro: 'If you did not request this, please ignore this email.',
    },
  };
};

const forgotPasswordMailgenContent = (username, resetLink) => {
  return {
    body: {
      name: username,
      intro: 'You have requested to reset your password.',
      action: {
        instructions: 'Click the button below to reset your password:',
        button: {
          color: '#DC4D2F',
          text: 'Reset Password',
          link: resetLink,
        },
      },
      outro: 'If you did not request a password reset, please ignore this email.',
    },
  };
};

export { sendEmail, emailVerificationMailgenContent, forgotPasswordMailgenContent };