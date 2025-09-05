import React, { useState } from "react";
import Button from "../components/Button";

const AdminPanel = () => {
  const [teachers, setTeachers] = useState([]);
  const [teacherName, setTeacherName] = useState("");

  const handleAddTeacher = () => {
    if (teacherName.trim() === "") return;
    setTeachers([
      ...teachers,
      { id: teachers.length + 1, name: teacherName },
    ]);
    setTeacherName("");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Enter teacher name"
          className="flex-grow p-2 border rounded"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
        />
        <Button variant="primary" onClick={handleAddTeacher}>
          Add
        </Button>
      </div>

      <ul className="space-y-2">
        {teachers.length === 0 ? (
          <li className="text-gray-500">No teachers added yet.</li>
        ) : (
          teachers.map((teacher) => (
            <li
              key={teacher.id}
              className="border p-3 rounded bg-white shadow-sm"
            >
              {teacher.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AdminPanel;
