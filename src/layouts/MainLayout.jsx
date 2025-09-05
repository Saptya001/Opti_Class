import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-white shadow-lg">
          <Sidebar />
        </aside>

        {/* Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
