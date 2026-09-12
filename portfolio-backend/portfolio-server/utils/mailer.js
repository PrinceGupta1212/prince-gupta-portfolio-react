// =========================================================
// MAILER — Resend API use karta hai (Gmail SMTP Render pe
// block ho jaata hai, isliye Resend use kar rahe hain)
// =========================================================
import { Resend } from "resend";

export async function sendNewMessageNotification({ name, email, subject, message }) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // Resend ka default verified sender
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
    });
    console.log("📧 Notification email sent");
  } catch (error) {
    console.error("⚠️  Email notification failed (message is still saved in DB):", error.message);
  }
}