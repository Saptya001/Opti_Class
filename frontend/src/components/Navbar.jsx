import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="font-bold text-xl">OptiClass Scheduler</h1>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">Dashboard</Link>
        <Link to="/timetable" className="hover:text-gray-200">Timetable</Link>
        <Link to="/admin" className="hover:text-gray-200">Admin</Link>
=======
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            Opti Class
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/classes"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Classes
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Register
            </Link>
          </div>
        </div>
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
      </div>
    </nav>
  );
};

export default Navbar;
