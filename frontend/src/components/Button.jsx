import React from "react";
<<<<<<< HEAD

const Button = ({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  className = "" 
}) => {
  const baseStyles = "px-4 py-2 rounded font-medium transition duration-200 focus:outline-none";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
=======
import clsx from "clsx";

const Button = ({ children, type = "button", onClick, disabled, variant = "primary", className }) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
  };

  return (
    <button
      type={type}
      onClick={onClick}
<<<<<<< HEAD
      className={`${baseStyles} ${variants[variant]} ${className}`}
=======
      disabled={disabled}
      className={clsx(
        baseStyles,
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
    >
      {children}
    </button>
  );
};

export default Button;
