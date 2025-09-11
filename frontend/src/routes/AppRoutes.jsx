import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import useClass from "../hooks/useClass";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

const Classes = () => {
  const { classes, loading, error, addClass, editClass, removeClass } = useClass();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newClass, setNewClass] = useState({ name: "", teacher: "", schedule: "" });

  const handleChange = (e) => {
    setNewClass({ ...newClass, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    const result = await addClass(newClass);
    if (result.success) {
      setIsModalOpen(false);
      setNewClass({ name: "", teacher: "", schedule: "" });
    } else {
      alert(result.message);
    }
  };

  return (
    <MainLayout>
      <section className="py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Classes</h1>
          <Button onClick={() => setIsModalOpen(true)}>Add Class</Button>
        </div>

        {loading && (
          <div className="flex justify-center py-8">
            <Loader size="lg" />
          </div>
        )}

        {error && <p className="text-red-500">{error}</p>}

        {!loading && classes.length === 0 && (
          <p className="text-gray-600">No classes available. Add one to get started.</p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div
              key={cls.id}
              className="p-4 bg-white shadow rounded-xl border flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-blue-600">{cls.name}</h2>
                <p className="text-sm text-gray-600">Teacher: {cls.teacher}</p>
                <p className="text-sm text-gray-600">Schedule: {cls.schedule}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <Button
                  variant="secondary"
                  className="text-sm"
                  onClick={() => editClass(cls.id, { ...cls, name: cls.name + " (Updated)" })}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="text-sm"
                  onClick={() => removeClass(cls.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add Class Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Class">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={newClass.name}
            onChange={handleChange}
            placeholder="Class Name"
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="text"
            name="teacher"
            value={newClass.teacher}
            onChange={handleChange}
            placeholder="Teacher Name"
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="text"
            name="schedule"
            value={newClass.schedule}
            onChange={handleChange}
            placeholder="Schedule (e.g. Mon 10AM)"
            className="w-full border rounded-lg px-3 py-2"
          />
          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAdd}>Add</Button>
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
};

export default Classes;
