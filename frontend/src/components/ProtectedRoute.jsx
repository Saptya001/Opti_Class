import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * ProtectedRoute ensures only authenticated users can access certain pages.
 * If not authenticated, the user is redirected to /login.
 *
 * Usage:
 * <ProtectedRoute>
 *    <Dashboard />
 * </ProtectedRoute>
 */

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" replace />;
  }

  // Render the protected page if user is authenticated
  return children;
};

export default ProtectedRoute;
