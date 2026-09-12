// =========================================================
// DATABASE CONNECTION — MongoDB Atlas se connect karta hai
// =========================================================
import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Atlas connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // connection fail hone pe server hi band kar do
  }
}
