// src/utils/logger.js
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const { createLogger, format, transports } = require("winston");

// Create logs directory if not exists
const logDir = path.join(__dirname, "../../logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Winston logger setup
const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.join(logDir, "error.log"), level: "error" }),
    new transports.File({ filename: path.join(logDir, "combined.log") }),
  ],
});

// Morgan HTTP request logging
const httpLogger = morgan("combined", {
  stream: fs.createWriteStream(path.join(logDir, "access.log"), { flags: "a" }),
});

module.exports = { logger, httpLogger };
