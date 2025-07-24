const express = require("express");
const path = require("path");

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Serve file statis (HTML, CSS, JS) dari folder 'views'
app.use(express.static(path.join(__dirname, "views")));

// Routing manual
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Contoh route lain
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// Route untuk login tanpa password (email link)
app.post("/auth/email-link", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email wajib diisi." });
  }

  // Di sini seharusnya kirim email link login via Firebase (belum diimplementasi)
  // Untuk demo, kirim pesan sukses
  res.json({ message: `Link login dikirim ke ${email} (simulasi).` });
});

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});