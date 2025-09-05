import { useState, useEffect } from "react";
import api from "../utils/api"; // axios instance

const useClass = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all classes
  const fetchClasses = async () => {
    try {
      setLoading(true);
      const res = await api.get("/classes");
      setClasses(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch classes");
    } finally {
      setLoading(false);
    }
  };

  // Add new class
  const addClass = async (newClass) => {
    try {
      const res = await api.post("/classes", newClass);
      setClasses((prev) => [...prev, res.data]);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add class");
      throw err;
    }
  };

  // Update a class
  const updateClass = async (id, updatedData) => {
    try {
      const res = await api.put(`/classes/${id}`, updatedData);
      setClasses((prev) =>
        prev.map((cls) => (cls._id === id ? res.data : cls))
      );
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update class");
      throw err;
    }
  };

  // Delete a class
  const deleteClass = async (id) => {
    try {
      await api.delete(`/classes/${id}`);
      setClasses((prev) => prev.filter((cls) => cls._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete class");
      throw err;
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  return { classes, loading, error, fetchClasses, addClass, updateClass, deleteClass };
};

export default useClass;
