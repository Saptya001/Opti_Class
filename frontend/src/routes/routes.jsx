import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

// Pages
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TimetableView from "../pages/TimetableView";
import AdminPanel from "../pages/AdminPanel";

// Route guard
import AuthRoute from "./AuthRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected App Pages */}
        <Route element={<AuthRoute><MainLayout /></AuthRoute>}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/timetable" element={<TimetableView />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
