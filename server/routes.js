const express = require("express");
const router = express.Router();
const admin = require("./firebase");

router.post("/auth/email-link", async (req, res) => {
  const { email } = req.body;

  try {
    let user;
    try {
      user = await admin.auth().getUserByEmail(email);
    } catch {
      user = await admin.auth().createUser({ email });
    }

    return res.json({ message: "Email diterima, akun diproses." });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;