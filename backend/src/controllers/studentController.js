// src/controllers/studentController.js
const db = require("../../config/db");

// =============================
// Get all students
// =============================
exports.getAllStudents = (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) {
      console.error("❌ Error fetching students:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
};

// =============================
// Add a new student
// =============================
exports.addStudent = (req, res) => {
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "INSERT INTO students (name, email, course) VALUES (?, ?, ?)";
  db.query(sql, [name, email, course], (err, result) => {
    if (err) {
      console.error("❌ Error adding student:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "✅ Student added successfully", id: result.insertId });
  });
};

// =============================
// Get a single student by ID
// =============================
exports.getStudentById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM students WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("❌ Error fetching student:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(results[0]);
  });
};

// =============================
// Update a student
// =============================
exports.updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = "UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?";
  db.query(sql, [name, email, course, id], (err) => {
    if (err) {
      console.error("❌ Error updating student:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "✅ Student updated successfully" });
  });
};

// =============================
// Delete a student
// =============================
exports.deleteStudent = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM students WHERE id = ?", [id], (err) => {
    if (err) {
      console.error("❌ Error deleting student:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "✅ Student deleted successfully" });
  });
};
