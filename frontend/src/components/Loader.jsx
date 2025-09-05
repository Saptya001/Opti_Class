import React from "react";

const Loader = ({ size = 8, color = "blue-600" }) => {
  return (
    <div className="flex justify-center items-center py-6">
      <div
        className={`animate-spin rounded-full h-${size} w-${size} border-t-2 border-b-2 border-${color}`}
      ></div>
    </div>
  );
};

export default Loader;
