// src/services/timetableService.js
const { spawn } = require("child_process");

/**
 * Generate timetable using AI (Python script).
 * This function calls a Python script that applies a Genetic Algorithm
 * or Backtracking to generate an optimized timetable.
 *
 * @param {Object} inputData - Teachers, students, subjects, rooms, constraints
 * @returns {Promise<Object>} - AI-generated timetable
 */
const generateTimetable = (inputData) => {
  return new Promise((resolve, reject) => {
    try {
      // Call Python script
      const python = spawn("python3", ["./ai/genetic_algorithm.py"]);

      let dataBuffer = "";
      let errorBuffer = "";

      // Send input data to Python
      python.stdin.write(JSON.stringify(inputData));
      python.stdin.end();

      // Collect output
      python.stdout.on("data", (data) => {
        dataBuffer += data.toString();
      });

      // Collect errors
      python.stderr.on("data", (data) => {
        errorBuffer += data.toString();
      });

      // When process ends
      python.on("close", (code) => {
        if (code !== 0 || errorBuffer) {
          return reject(new Error("Python script failed: " + errorBuffer));
        }
        try {
          const result = JSON.parse(dataBuffer);
          resolve(result);
        } catch (parseErr) {
          reject(new Error("Invalid JSON from Python script: " + parseErr.message));
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  generateTimetable,
};
