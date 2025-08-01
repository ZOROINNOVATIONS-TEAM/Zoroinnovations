import nodemailer from 'nodemailer';
import Mailgen from 'mailgen';

export const emailVerificationMailgenContent = (username, verificationUrl) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: { name: 'Your App', link: process.env.CLIENT_URL || 'http://localhost:3000' },
  });
  return mailGenerator.generate({
    body: {
      name: username,
      intro: 'Please verify your email address.',
      action: {
        instructions: 'Click the button below to verify your email:',
        button: { color: '#22BC66', text: 'Verify Email', link: verificationUrl },
      },
    },
  });
};

export const forgotPasswordMailgenContent = (username, resetUrl) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: { name: 'Your App', link: process.env.CLIENT_URL || 'http://localhost:3000' },
  });
  return mailGenerator.generate({
    body: {
      name: username,
      intro: 'You requested a password reset.',
      action: {
        instructions: 'Click the button below to reset your password:',
        button: { color: '#DC4D2F', text: 'Reset Password', link: resetUrl },
      },
    },
  });
};

export const sendEmail = async ({ email, subject, mailgenContent }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Your App" <${process.env.SMTP_USER}>`,
    to: email,
    subject,
    html: mailgenContent,
  };

  await transporter.sendMail(mailOptions);
};