import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// Protect routes that need login
const AuthRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="text-center p-6">Loading...</p>;
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default AuthRoute;
