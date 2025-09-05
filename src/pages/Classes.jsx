import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader";
import Button from "../components/Button";
import useClass from "../hooks/useClass";

const Classes = () => {
  const { classes, loading, error, addClass, deleteClass } = useClass();
  const [newClass, setNewClass] = useState({ name: "", teacher: "" });
  const [adding, setAdding] = useState(false);

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (!newClass.name || !newClass.teacher) return;

    try {
      setAdding(true);
      await addClass(newClass);
      setNewClass({ name: "", teacher: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setAdding(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this class?")) {
      try {
        await deleteClass(id);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (loading) return <Loader />;

  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage Classes</h1>
        <p className="text-gray-600">Add, view, and remove classes.</p>

        {/* Error */}
        {error && (
          <div className="p-2 bg-red-100 text-red-700 rounded">{error}</div>
        )}

        {/* Add Class Form */}
        <form
          onSubmit={handleAddClass}
          className="bg-white shadow p-4 rounded-lg flex gap-4 items-end"
        >
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Class Name
            </label>
            <input
              type="text"
              value={newClass.name}
              onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Teacher
            </label>
            <input
              type="text"
              value={newClass.teacher}
              onChange={(e) =>
                setNewClass({ ...newClass, teacher: e.target.value })
              }
              className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>

          <Button type="submit" disabled={adding}>
            {adding ? "Adding..." : "Add Class"}
          </Button>
        </form>

        {/* Classes List */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <div
              key={cls._id}
              className="bg-white shadow p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {cls.name}
                </h2>
                <p className="text-sm text-gray-600">Teacher: {cls.teacher}</p>
              </div>
              <Button
                variant="danger"
                onClick={() => handleDelete(cls._id)}
                className="ml-4"
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Classes;
