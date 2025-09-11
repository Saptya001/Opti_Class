// 📌 dateHelper.js
// Utility functions for handling dates & times in Opti Class

// Format a date as "Monday, Sep 5, 2025"
export const formatFullDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Format a date as "Sep 5, 2025"
export const formatShortDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Format a time as "10:30 AM"
export const formatTime = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Get today's date string
export const getToday = () => {
  return new Date().toISOString().split("T")[0];
};

// Check if a given date is today
export const isToday = (date) => {
  const today = new Date();
  const check = new Date(date);
  return (
    today.getFullYear() === check.getFullYear() &&
    today.getMonth() === check.getMonth() &&
    today.getDate() === check.getDate()
  );
};

// Add days to a given date
export const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

// Compare two times (returns -1, 0, 1)
export const compareTimes = (timeA, timeB) => {
  const t1 = new Date(`1970-01-01T${timeA}:00`);
  const t2 = new Date(`1970-01-01T${timeB}:00`);
  return t1 < t2 ? -1 : t1 > t2 ? 1 : 0;
};
