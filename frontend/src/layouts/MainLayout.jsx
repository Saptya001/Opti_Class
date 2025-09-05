import React from "react";
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
