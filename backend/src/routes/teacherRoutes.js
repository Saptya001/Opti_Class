// src/routes/teacherRoutes.js
const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");
const authMiddleware = require("../middleware/authMiddleware");

// @route   GET /api/teachers
// @desc    Get all teachers
router.get("/", authMiddleware, teacherController.getAllTeachers);

// @route   POST /api/teachers
// @desc    Add a new teacher
router.post("/", authMiddleware, teacherController.addTeacher);

// @route   GET /api/teachers/:id
// @desc    Get a single teacher by ID
router.get("/:id", authMiddleware, teacherController.getTeacherById);

// @route   PUT /api/teachers/:id
// @desc    Update a teacher
router.put("/:id", authMiddleware, teacherController.updateTeacher);

// @route   DELETE /api/teachers/:id
// @desc    Delete a teacher
router.delete("/:id", authMiddleware, teacherController.deleteTeacher);

module.exports = router;
