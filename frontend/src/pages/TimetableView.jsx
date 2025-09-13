import React from "react";
import Loader from "../components/Loader";

const TimetableView = () => {
  // 🔗 Later: Fetch from backend API
  const timetable = [
    { day: "Monday", slots: ["Math", "Science", "English"] },
    { day: "Tuesday", slots: ["History", "Math", "Computer"] },
    { day: "Wednesday", slots: ["Physics", "Chemistry", "Biology"] },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Your Timetable</h2>

      {!timetable ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 p-3">Day</th>
                <th className="border border-gray-300 p-3">9:00 - 10:00</th>
                <th className="border border-gray-300 p-3">10:00 - 11:00</th>
                <th className="border border-gray-300 p-3">11:00 - 12:00</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((row, index) => (
                <tr key={index} className="text-center hover:bg-gray-50">
                  <td className="border border-gray-300 p-3 font-semibold">
                    {row.day}
                  </td>
                  {row.slots.map((subject, i) => (
                    <td key={i} className="border border-gray-300 p-3">
                      {subject}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TimetableView;
