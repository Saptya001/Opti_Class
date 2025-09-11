import React from "react";

<<<<<<< HEAD
const Loader = ({ size = 8, color = "blue-600" }) => {
  return (
    <div className="flex justify-center items-center py-6">
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-${color}`}
=======
const Loader = ({ size = "md" }) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`border-4 border-blue-500 border-t-transparent rounded-full animate-spin ${sizes[size]}`}
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
      ></div>
    </div>
  );
};

export default Loader;
