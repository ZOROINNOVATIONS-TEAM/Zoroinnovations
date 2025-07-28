import Mailgen from "mailgen";
import nodemailer from "nodemailer";

/**
 * @param {{email: string; subject: string; mailgenContent: Mailgen.Content; }} options
 */
const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Zoro Innovations",
      link: process.env.CLIENT_URL || "http://localhost:3000",
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHtml = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mail = {
    from: "no-reply@zoro-services.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
    console.log(`Email sent to ${options.email}`);
  } catch (error) {
    console.error(
      "Email service failed. Ensure EMAIL_HOST, EMAIL_PORT, EMAIL_USERNAME, and EMAIL_PASSWORD are set in .env",
      error
    );
    throw error; // Re-throw to handle in calling function
  }
};

const emailVerificationMailgenContent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to Zoro! We're very excited to have you on board.",
      action: {
        instructions: "To verify your email, please click the following button:",
        button: {
          color: "#22BC66",
          text: "Verify your email",
          link: verificationUrl,
        },
      },
      outro: "Need help? Reply to this email, we'd love to assist.",
    },
  };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
  return {
    body: {
      name: username,
      intro: "We received a request to reset your password.",
      action: {
        instructions: "To reset your password, click the following button:",
        button: {
          color: "#22BC66",
          text: "Reset password",
          link: passwordResetUrl,
        },
      },
      outro: "Need help? Reply to this email, we'd love to assist.",
    },
  };
};

export {
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
  sendEmail,
};