// src/models/Timetable.js
const db = require("../../config/db");

class Timetable {
  // =============================
  // Get all timetable entries
  // =============================
  static getAll(callback) {
    db.query("SELECT * FROM timetable", callback);
  }

  // =============================
  // Get timetable entry by ID
  // =============================
  static getById(id, callback) {
    db.query("SELECT * FROM timetable WHERE id = ?", [id], callback);
  }

  // =============================
  // Add a new timetable entry
  // =============================
  static create(data, callback) {
    const { teacher_id, student_group, subject, room, day, start_time, end_time } = data;
    db.query(
      `INSERT INTO timetable 
       (teacher_id, student_group, subject, room, day, start_time, end_time) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [teacher_id, student_group, subject, room, day, start_time, end_time],
      callback
    );
  }

  // =============================
  // Update a timetable entry
  // =============================
  static update(id, data, callback) {
    const { teacher_id, student_group, subject, room, day, start_time, end_time } = data;
    db.query(
      `UPDATE timetable 
       SET teacher_id = ?, student_group = ?, subject = ?, room = ?, day = ?, start_time = ?, end_time = ? 
       WHERE id = ?`,
      [teacher_id, student_group, subject, room, day, start_time, end_time, id],
      callback
    );
  }

  // =============================
  // Delete a timetable entry
  // =============================
  static delete(id, callback) {
    db.query("DELETE FROM timetable WHERE id = ?", [id], callback);
  }
}

module.exports = Timetable;
