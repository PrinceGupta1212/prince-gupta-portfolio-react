// =========================================================
// CONTACT CONTROLLER — actual logic: message DB mein save
// karo, phir email notification bhejo
// =========================================================
import Message from "../models/Message.js";
import { sendNewMessageNotification } from "../utils/mailer.js";

// POST /api/contact — naya message save karo
export async function createMessage(req, res, next) {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = await Message.create({ name, email, subject, message });

    // Email notification asynchronously bhej rahe hain — isse
    // response turant chala jayega, email thodi der baad background mein jayegi
    sendNewMessageNotification({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: "Your message has been sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    next(error); // errorHandler middleware handle karega
  }
}

// GET /api/contact — saare messages dekhne ke liye (sirf tumhare liye,
// simple secret-key protection ke saath — neeche routes file mein dekho)
export async function getAllMessages(req, res, next) {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }); // sabse naya sabse upar
    res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    next(error);
  }
}
