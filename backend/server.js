// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

// Load environment variables from .env
dotenv.config();

// Import DB connection
const db = require("./config/db");

// Import routes
const authRoutes = require("./src/routes/authRoutes");
const teacherRoutes = require("./src/routes/teacherRoutes");
const studentRoutes = require("./src/routes/studentRoutes");
const timetableRoutes = require("./src/routes/timetableRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/timetable", timetableRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("OptiClass Backend is Running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
