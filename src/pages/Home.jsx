import React from "react";
import MainLayout from "../layouts/MainLayout";
import TimetableCard from "../components/TimetableCard";
import Loader from "../components/Loader";

const Home = () => {
  // Example loading state
  const [loading, setLoading] = React.useState(false);

  // Example timetables (replace with API data later)
  const timetables = [
    {
      id: 1,
      subject: "Mathematics",
      teacher: "Mr. Smith",
      time: "9:00 AM - 10:00 AM",
    },
    {
      id: 2,
      subject: "Science",
      teacher: "Ms. Johnson",
      time: "10:15 AM - 11:15 AM",
    },
    {
      id: 3,
      subject: "History",
      teacher: "Mr. Lee",
      time: "11:30 AM - 12:30 PM",
    },
  ];

  if (loading) return <Loader />;

  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to Opti Class</h1>
        <p className="text-gray-600">
          Here’s your timetable for today:
        </p>

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

export default Home;
