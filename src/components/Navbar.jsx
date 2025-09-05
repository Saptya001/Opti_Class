import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Button from "./Button";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Opti Class
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>
        {user && (
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
            Dashboard
          </Link>
        )}
        {user?.role === "admin" && (
          <Link to="/admin" className="text-gray-700 hover:text-blue-600">
            Admin
          </Link>
        )}
      </div>

      {/* Auth Buttons */}
      <div>
        {user ? (
          <Button onClick={logout} className="bg-red-500 hover:bg-red-600">
            Logout
          </Button>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
