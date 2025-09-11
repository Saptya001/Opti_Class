// src/middleware/errorHandler.js

// Custom error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err.stack || err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong on the server",
  });
};

module.exports = errorHandler;
