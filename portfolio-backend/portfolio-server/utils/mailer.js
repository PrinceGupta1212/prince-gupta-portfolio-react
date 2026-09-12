import nodemailer from "nodemailer";

export async function sendNewMessageNotification({ name, email, subject, message }) {
  // Transporter ab function ke andar banta hai — isliye jab tak
  // ye function call hoga, tab tak dotenv.config() already chal
  // chuka hoga aur env variables load ho chuke honge
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.NOTIFY_EMAIL,
    replyTo: email,
    subject: `New Portfolio Message: ${subject}`,
    html: `
      <div style="font-family: sans-serif; line-height:1.6;">
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap; background:#f5f5f5; padding:14px; border-radius:8px;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📧 Notification email sent");
  } catch (error) {
    console.error("⚠️  Email notification failed (message is still saved in DB):", error.message);
  }
}