import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

// Contexts
import { AuthProvider } from "./context/AuthContext";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Auth Routes */}
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />

          {/* Protected / Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/admin" element={<AdminPanel />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
