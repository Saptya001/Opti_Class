import React from "react";
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
  );
};

export default Dashboard;
