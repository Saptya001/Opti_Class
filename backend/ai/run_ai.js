// ai/run_ai.js
const { spawn } = require("child_process");

/**
 * Run Python AI script (Genetic Algorithm or Backtracking).
 *
 * @param {string} method - "ga" (genetic algorithm) or "bt" (backtracking)
 * @param {Object} inputData - Teachers, subjects, rooms, days, times, etc.
 * @returns {Promise<Object>} - Generated timetable as JSON
 */
const runAI = (method, inputData) => {
  return new Promise((resolve, reject) => {
    let scriptPath;

    if (method === "ga") {
      scriptPath = "./ai/genetic_algorithm.py";
    } else if (method === "bt") {
      scriptPath = "./ai/backtracking.py";
    } else {
      return reject(new Error("Invalid method. Use 'ga' or 'bt'."));
    }

    // Spawn Python process
    const python = spawn("python3", [scriptPath]);

    let output = "";
    let errorOutput = "";

    // Send input data to Python
    python.stdin.write(JSON.stringify(inputData));
    python.stdin.end();

    // Collect output
    python.stdout.on("data", (data) => {
      output += data.toString();
    });

    // Collect errors
    python.stderr.on("data", (data) => {
      errorOutput += data.toString();
    });

    // On finish
    python.on("close", (code) => {
      if (code !== 0 || errorOutput) {
        return reject(new Error("Python script error: " + errorOutput));
      }

      try {
        const result = JSON.parse(output);
        resolve(result);
      } catch (err) {
        reject(new Error("Invalid JSON from Python script: " + err.message));
      }
    });
  });
};

module.exports = runAI;
