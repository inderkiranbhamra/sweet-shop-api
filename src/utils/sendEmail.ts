import nodemailer from 'nodemailer';

const sendEmail = async (options: { email: string; subject: string; message: string }) => {
  // 1. Create a transporter (Use your actual email credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'SendGrid', 'Mailgun', etc.
    auth: {
      user: process.env.MAIL_USER, // e.g., yourname@gmail.com
      pass: process.env.MAIL_PASS  // App Password (not your normal password)
    }
  });

  // 2. Define email options
  const mailOptions = {
    from: `"SweetShop Support" <${process.env.MAIL_USER}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html: options.message // You can use HTML here for a nicer look
  };

  // 3. Send email
  await transporter.sendMail(mailOptions);
};

export default sendEmail;