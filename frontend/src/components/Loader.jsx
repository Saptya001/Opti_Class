import React from "react";

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
      ></div>
    </div>
  );
};

export default Loader;
