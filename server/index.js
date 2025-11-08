const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mgmp_db",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Successfully connected to MySQL database.");
});

const JWT_SECRET = "kunci_rahasia_super_aman_milik_anda";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res
      .status(403)
      .json({ message: "Token diperlukan untuk autentikasi." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token tidak valid." });
  }
};

app.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password)
    return res.status(400).json({ message: "Semua kolom wajib diisi." });
  db.query(
    "SELECT email FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err)
        return res.status(500).json({ message: "Database error.", error: err });
      if (results.length > 0)
        return res.status(400).json({ message: "Email sudah terdaftar." });
      const hashedPassword = await bcrypt.hash(password, 10);
      db.query(
        "INSERT INTO users SET ?",
        { full_name: fullName, email: email, password: hashedPassword },
        (err, result) => {
          if (err)
            return res
              .status(500)
              .json({ message: "Gagal mendaftarkan pengguna.", error: err });
          res
            .status(201)
            .json({ message: "Registrasi berhasil! Silakan login." });
        }
      );
    }
  );
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Email dan kata sandi wajib diisi." });
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, results) => {
      if (err)
        return res.status(500).json({ message: "Database error.", error: err });
      if (results.length === 0)
        return res
          .status(401)
          .json({ message: "Email atau kata sandi salah." });
      const user = results[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res
          .status(401)
          .json({ message: "Email atau kata sandi salah." });
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ message: "Login berhasil!", token });
    }
  );
});

app.get("/profile", verifyToken, (req, res) => {
  const userId = req.user.id;
  db.query(
    "SELECT id, full_name, email FROM users WHERE id = ?",
    [userId],
    (err, results) => {
      if (err)
        return res.status(500).json({ message: "Database error.", error: err });
      if (results.length === 0)
        return res.status(404).json({ message: "Pengguna tidak ditemukan." });

      const user = results[0];
      const initials = user.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

      res.json({
        name: user.full_name,
        email: user.email,
        avatar: `https://placehold.co/128x128/e2e8f0/334155?text=${initials}`,
      });
    }
  );
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
