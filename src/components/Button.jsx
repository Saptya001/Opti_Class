import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2 rounded-lg font-medium transition duration-200",
        "bg-blue-600 text-white hover:bg-blue-700",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
