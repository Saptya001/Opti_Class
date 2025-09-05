import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-3 mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} OptiClass Scheduler — All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
