require("dotenv").config();
const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const admin = require("./firebase");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "views")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/firebase-config", (req, res) => {
  res.json({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  });
});

app.post("/auth/google", async (req, res) => {
  const { idToken, email } = req.body;
  if (!idToken || !email) {
    return res.status(400).json({ error: "idToken dan email wajib diisi." });
  }

  try {
    // Verifikasi idToken dengan Firebase Admin SDK
    const decoded = await admin.auth().verifyIdToken(idToken);
    const uid = decoded.uid;

    // Simpan ke Firestore
    const userRef = admin.firestore().collection("esmon_hack").doc("users").collection("list").doc(uid);
    await userRef.set(
      {
        uid,
        email,
        lastLogin: new Date(),
      },
      { merge: true }
    );

    // Buat JWT untuk frontend
    const token = jwt.sign({ email, uid }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: "Token tidak valid atau gagal simpan user." });
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token diperlukan" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Token tidak valid" });
    req.user = user;
    next();
  });
}

app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: `Selamat datang, ${req.user.email}! Anda sudah login.` });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});