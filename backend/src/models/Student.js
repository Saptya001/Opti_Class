// src/models/Student.js
const db = require("../../config/db");

class Student {
  // =============================
  // Get all students
  // =============================
  static getAll(callback) {
    db.query("SELECT * FROM students", callback);
  }

  // =============================
  // Get student by ID
  // =============================
  static getById(id, callback) {
    db.query("SELECT * FROM students WHERE id = ?", [id], callback);
  }

  // =============================
  // Add a new student
  // =============================
  static create(data, callback) {
    const { name, email, course } = data;
    db.query(
      "INSERT INTO students (name, email, course) VALUES (?, ?, ?)",
      [name, email, course],
      callback
    );
  }

  // =============================
  // Update a student
  // =============================
  static update(id, data, callback) {
    const { name, email, course } = data;
    db.query(
      "UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?",
      [name, email, course, id],
      callback
    );
  }

  // =============================
  // Delete a student
  // =============================
  static delete(id, callback) {
    db.query("DELETE FROM students WHERE id = ?", [id], callback);
  }
}

module.exports = Student;
