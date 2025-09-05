import React from "react";
import MainLayout from "../layouts/MainLayout";
import TimetableCard from "../components/TimetableCard";
import Loader from "../components/Loader";

const Dashboard = () => {
  const [loading, setLoading] = React.useState(false);

  // Example data (replace with API/Context later)
  const timetables = [
    {
      id: 1,
      subject: "Physics",
      teacher: "Dr. Brown",
      time: "9:00 AM - 10:00 AM",
    },
    {
      id: 2,
      subject: "Chemistry",
      teacher: "Ms. Clark",
      time: "10:15 AM - 11:15 AM",
    },
    {
      id: 3,
      subject: "English",
      teacher: "Mr. Davis",
      time: "11:30 AM - 12:30 PM",
    },
  ];

  if (loading) return <Loader />;

  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Quick overview of your classes.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {timetables.map((t) => (
            <TimetableCard
              key={t.id}
              subject={t.subject}
              teacher={t.teacher}
              time={t.time}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
