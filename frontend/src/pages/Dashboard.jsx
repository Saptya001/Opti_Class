import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logo from "../assets/logo.png"; // 🔗 make sure you have a logo in assets/

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <img src={Logo} alt="OptiClass Logo" className="w-14 h-14" />
        <h2 className="text-3xl font-bold text-blue-700">
          Welcome to OptiClass Scheduler
        </h2>
      </div>

      <p className="text-gray-600 mb-6">
        An AI-powered Smart Classroom & Timetable Scheduler.  
        Manage your timetables, teachers, classrooms, and resources seamlessly.
      </p>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        <Link to="/timetable">
          <Button variant="primary">📅 View Timetable</Button>
        </Link>
        <Link to="/admin">
          <Button variant="secondary">⚙️ Admin Panel</Button>
        </Link>
      </div>

      {/* Stats / Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Classes Scheduled</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">32</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Teachers</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">12</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700">Pending Requests</h3>
          <p className="text-2xl font-bold text-red-600 mt-2">5</p>
        </div>
      </div>
    </div>
=======
import useRequireAuth from "../hooks/useRequireAuth";
import MainLayout from "../layouts/MainLayout";
import TimetableCard from "../components/TimetableCard";
import Loader from "../components/Loader";

const Dashboard = () => {
  const { user, loading } = useRequireAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader size="lg" />
      </div>
    );
  }

  return (
    <MainLayout>
      <section className="py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome back, {user?.name || "User"} 👋
        </h1>

        {/* Timetable Section */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Today’s Classes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Timetable Cards (replace with real data later) */}
          <TimetableCard
            subject="Mathematics"
            teacher="Mr. John Doe"
            time="10:00 AM - 11:00 AM"
          />
          <TimetableCard
            subject="Physics"
            teacher="Ms. Jane Smith"
            time="11:30 AM - 12:30 PM"
          />
          <TimetableCard
            subject="English"
            teacher="Mr. Alex Brown"
            time="2:00 PM - 3:00 PM"
          />
        </div>
      </section>
    </MainLayout>
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
  );
};

export default Dashboard;
