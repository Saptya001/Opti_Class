import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="font-bold text-xl">OptiClass Scheduler</h1>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">Dashboard</Link>
        <Link to="/timetable" className="hover:text-gray-200">Timetable</Link>
        <Link to="/admin" className="hover:text-gray-200">Admin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
