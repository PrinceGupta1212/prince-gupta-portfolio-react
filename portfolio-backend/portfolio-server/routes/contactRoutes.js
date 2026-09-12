// =========================================================
// CONTACT ROUTES — /api/contact ke saare endpoints
// =========================================================
import express from "express";
import { createMessage, getAllMessages } from "../controllers/contactController.js";
import { validateContact } from "../middleware/validateContact.js";

const router = express.Router();

// Naya message submit karna (contact form yahi call karta hai)
router.post("/", validateContact, createMessage);

// Saare messages dekhna — ek simple secret-key check ke saath,
// taaki koi aur random insaan tumhare messages na dekh sake.
// Browser mein: http://localhost:5000/api/contact?key=YOUR_SECRET_KEY
router.get("/", (req, res, next) => {
  if (req.query.key !== process.env.ADMIN_SECRET_KEY) {
    return res.status(401).json({ success: false, message: "Unauthorized — invalid or missing key." });
  }
  next();
}, getAllMessages);

export default router;
