import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        {/* Branding */}
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Opti Class. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm">
            Home
          </Link>
          <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 text-sm">
            Dashboard
          </Link>
          <Link to="/admin" className="text-gray-600 hover:text-blue-600 text-sm">
            Admin
          </Link>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
