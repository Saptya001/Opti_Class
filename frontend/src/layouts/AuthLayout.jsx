import React from "react";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <Outlet /> {/* renders Login or Register page */}
=======

const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Opti Class
        </h1>

        {/* Auth Page Content */}
        {children}
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
      </div>
    </div>
  );
};

export default AuthLayout;
