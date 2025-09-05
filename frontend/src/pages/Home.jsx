import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-blue-600">Opti Class</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Smarter scheduling, simpler learning. Manage your classes, track
          timetables, and stay organized effortlessly.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/dashboard">
            <Button variant="primary">Go to Dashboard</Button>
          </Link>
          <Link to="/classes">
            <Button variant="secondary">View Classes</Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-12">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Easy Timetable
          </h3>
          <p className="text-gray-600">
            Create and manage class timetables in just a few clicks.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Class Management
          </h3>
          <p className="text-gray-600">
            Add, edit, and track classes with ease using a modern interface.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Stay Synced
          </h3>
          <p className="text-gray-600">
            Keep students and teachers on the same page with real-time updates.
          </p>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
