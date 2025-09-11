import React from "react";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow p-6">
        <Outlet /> {/* renders child routes like Dashboard, Timetable, Admin */}
=======
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 pt-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        {children}
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
