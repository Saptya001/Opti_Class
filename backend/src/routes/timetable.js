// src/routes/timetableRoutes.js
const express = require("express");
const router = express.Router();
const timetableController = require("../controllers/timetableController");
const authMiddleware = require("../middleware/authMiddleware");

// @route   GET /api/timetable
// @desc    Get all timetables
router.get("/", authMiddleware, timetableController.getAllTimetables);

// @route   POST /api/timetable
// @desc    Create a new timetable entry
router.post("/", authMiddleware, timetableController.createTimetable);

// @route   GET /api/timetable/:id
// @desc    Get timetable by ID
router.get("/:id", authMiddleware, timetableController.getTimetableById);

// @route   PUT /api/timetable/:id
// @desc    Update a timetable entry
router.put("/:id", authMiddleware, timetableController.updateTimetable);

// @route   DELETE /api/timetable/:id
// @desc    Delete a timetable entry
router.delete("/:id", authMiddleware, timetableController.deleteTimetable);

module.exports = router;
