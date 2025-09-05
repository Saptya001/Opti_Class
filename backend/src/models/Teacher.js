// src/models/Teacher.js
const db = require("../../config/db");

class Teacher {
  // =============================
  // Get all teachers
  // =============================
  static getAll(callback) {
    db.query("SELECT * FROM teachers", callback);
  }

  // =============================
  // Get teacher by ID
  // =============================
  static getById(id, callback) {
    db.query("SELECT * FROM teachers WHERE id = ?", [id], callback);
  }

  // =============================
  // Add a new teacher
  // =============================
  static create(data, callback) {
    const { name, email, subject } = data;
    db.query(
      "INSERT INTO teachers (name, email, subject) VALUES (?, ?, ?)",
      [name, email, subject],
      callback
    );
  }

  // =============================
  // Update a teacher
  // =============================
  static update(id, data, callback) {
    const { name, email, subject } = data;
    db.query(
      "UPDATE teachers SET name = ?, email = ?, subject = ? WHERE id = ?",
      [name, email, subject, id],
      callback
    );
  }

  // =============================
  // Delete a teacher
  // =============================
  static delete(id, callback) {
    db.query("DELETE FROM teachers WHERE id = ?", [id], callback);
  }
}

module.exports = Teacher;
