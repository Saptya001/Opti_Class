// config/db.js
const mysql = require("mysql2");

// Create connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "opticalsscheduler",
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: " + err.message);
    process.exit(1);
  }
  console.log("✅ Connected to MySQL Database");
});

module.exports = db;
