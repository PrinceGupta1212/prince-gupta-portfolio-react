// =========================================================
// SERVER.js — Express app ka entry point
// =========================================================
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config(); // .env file se saari variables load karo

const app = express();

// ---- Middleware ----
app.use(cors({ origin: process.env.CLIENT_URL || "*" })); // sirf frontend se requests allow karo
app.use(express.json()); // JSON body parse karne ke liye

// ---- Routes ----
app.get("/", (req, res) => {
  res.send("Portfolio backend is running ✅");
});
app.use("/api/contact", contactRoutes);

// ---- Error handler (hamesha sabse last mein) ----
app.use(errorHandler);

// ---- Database connect karke server start karo ----
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
