// src/models/Subject.js
const db = require("../../config/db");

class Subject {
  // =============================
  // Get all subjects
  // =============================
  static getAll(callback) {
    db.query("SELECT * FROM subjects", callback);
  }

  // =============================
  // Get subject by ID
  // =============================
  static getById(id, callback) {
    db.query("SELECT * FROM subjects WHERE id = ?", [id], callback);
  }

  // =============================
  // Add a new subject
  // =============================
  static create(data, callback) {
    const { name, code } = data;
    db.query(
      "INSERT INTO subjects (name, code) VALUES (?, ?)",
      [name, code],
      callback
    );
  }

  // =============================
  // Update a subject
  // =============================
  static update(id, data, callback) {
    const { name, code } = data;
    db.query(
      "UPDATE subjects SET name = ?, code = ? WHERE id = ?",
      [name, code, id],
      callback
    );
  }

  // =============================
  // Delete a subject
  // =============================
  static delete(id, callback) {
    db.query("DELETE FROM subjects WHERE id = ?", [id], callback);
  }
}

module.exports = Subject;
