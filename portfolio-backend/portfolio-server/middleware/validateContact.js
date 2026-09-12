// =========================================================
// VALIDATE CONTACT — form submit hone se pehle basic
// server-side validation (frontend validation ke alawa,
// kyunki backend ko kabhi bhi seedha bhi call kiya ja sakta hai)
// =========================================================
export function validateContact(req, res, next) {
  const { name, email, subject, message } = req.body;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: "Name is required." });
  }
  if (!email || !emailPattern.test(email.trim())) {
    return res.status(400).json({ success: false, message: "A valid email is required." });
  }
  if (!subject || !subject.trim()) {
    return res.status(400).json({ success: false, message: "Subject is required." });
  }
  if (!message || !message.trim()) {
    return res.status(400).json({ success: false, message: "Message is required." });
  }

  next(); // sab sahi hai, controller tak jaane do
}
