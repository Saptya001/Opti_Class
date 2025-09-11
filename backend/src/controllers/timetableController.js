// src/controllers/timetableController.js
const db = require("../../config/db");

// =============================
// Get all timetable entries
// =============================
exports.getAllTimetables = (req, res) => {
  db.query("SELECT * FROM timetable", (err, results) => {
    if (err) {
      console.error("❌ Error fetching timetables:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
};

// =============================
// Create a new timetable entry
// =============================
exports.createTimetable = (req, res) => {
  const { teacher_id, student_group, subject, room, day, start_time, end_time } = req.body;

  if (!teacher_id || !student_group || !subject || !room || !day || !start_time || !end_time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `INSERT INTO timetable 
              (teacher_id, student_group, subject, room, day, start_time, end_time) 
              VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [teacher_id, student_group, subject, room, day, start_time, end_time], (err, result) => {
    if (err) {
      console.error("❌ Error creating timetable:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "✅ Timetable entry created", id: result.insertId });
  });
};

// =============================
// Get timetable by ID
// =============================
exports.getTimetableById = (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM timetable WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("❌ Error fetching timetable:", err);
      return res.status(500).json({ message: "Database error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Timetable not found" });
    }
    res.json(results[0]);
  });
};

// =============================
// Update a timetable entry
// =============================
exports.updateTimetable = (req, res) => {
  const { id } = req.params;
  const { teacher_id, student_group, subject, room, day, start_time, end_time } = req.body;

  if (!teacher_id || !student_group || !subject || !room || !day || !start_time || !end_time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql = `UPDATE timetable 
               SET teacher_id = ?, student_group = ?, subject = ?, room = ?, day = ?, start_time = ?, end_time = ?
               WHERE id = ?`;

  db.query(sql, [teacher_id, student_group, subject, room, day, start_time, end_time, id], (err) => {
    if (err) {
      console.error("❌ Error updating timetable:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "✅ Timetable updated successfully" });
  });
};

// =============================
// Delete a timetable entry
// =============================
exports.deleteTimetable = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM timetable WHERE id = ?", [id], (err) => {
    if (err) {
      console.error("❌ Error deleting timetable:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json({ message: "✅ Timetable deleted successfully" });
  });
};
