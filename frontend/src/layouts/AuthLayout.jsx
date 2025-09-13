import React from "react";

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
      </div>
    </div>
  );
};

export default AuthLayout;