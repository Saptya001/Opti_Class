// src/controllers/teacherController.js
const db = require("../../config/db");

// =============================
// Get all teachers
// =============================
exports.getAllTeachers = (req, res) => {
  db.query("SELECT * FROM teachers", (err, results) => {
    if (err) {
      console.error("❌ Error fetching teachers:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
};

// =============================
// Add a new teacher
// =============================
exports.addTeacher = (req, res) => {
  const { name, email, subject } = req.body;

  if (!name || !email || !subject) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO teachers (name, email, subject) VALUES (?, ?, ?)";
  db.query(sql, [name, email, subject], (err, result) => {
    if (err) {
      console.error("❌ Error adding teacher:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "✅ Teacher added successfully", id: result.insertId });
  });
};

// =============================
// Get a single teacher by ID
// =============================
exports.getTeacherById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM teachers WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("❌ Error fetching teacher:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    res.json(results[0]);
  });
};

// =============================
// Update a teacher
// =============================
exports.updateTeacher = (req, res) => {
  const { id } = req.params;
  const { name, email, subject } = req.body;

  if (!name || !email || !subject) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "UPDATE teachers SET name = ?, email = ?, subject = ? WHERE id = ?";
  db.query(sql, [name, email, subject, id], (err) => {
    if (err) {
      console.error("❌ Error updating teacher:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "✅ Teacher updated successfully" });
  });
};

// =============================
// Delete a teacher
// =============================
exports.deleteTeacher = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM teachers WHERE id = ?", [id], (err) => {
    if (err) {
      console.error("❌ Error deleting teacher:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "✅ Teacher deleted successfully" });
  });
};
