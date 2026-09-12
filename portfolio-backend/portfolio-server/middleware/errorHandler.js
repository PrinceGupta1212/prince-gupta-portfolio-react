// =========================================================
// ERROR HANDLER — koi bhi route error throw kare,
// ye centrally usko handle karke clean JSON response deta hai
// =========================================================
export function errorHandler(err, req, res, next) {
  console.error("❌ Error:", err.message);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong on the server.",
  });
}
