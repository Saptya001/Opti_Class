// src/routes/studentRoutes.js
const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");

// @route   GET /api/students
// @desc    Get all students
router.get("/", authMiddleware, studentController.getAllStudents);

// @route   POST /api/students
// @desc    Add a new student
router.post("/", authMiddleware, studentController.addStudent);

// @route   GET /api/students/:id
// @desc    Get a single student by ID
router.get("/:id", authMiddleware, studentController.getStudentById);

// @route   PUT /api/students/:id
// @desc    Update a student
router.put("/:id", authMiddleware, studentController.updateStudent);

// @route   DELETE /api/students/:id
// @desc    Delete a student
router.delete("/:id", authMiddleware, studentController.deleteStudent);

module.exports = router;
