// =========================================================
// MESSAGE MODEL — contact form ke saare submissions
// isi schema ke hisaab se MongoDB mein save honge
// =========================================================
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    isRead: {
      type: Boolean,
      default: false, // future mein "read/unread" track karne ke liye useful
    },
  },
  {
    timestamps: true, // createdAt aur updatedAt automatically add ho jayenge
  }
);

export default mongoose.model("Message", messageSchema);
