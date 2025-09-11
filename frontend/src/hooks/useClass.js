import { useState, useEffect } from "react";
import { getClasses, createClass, updateClass, deleteClass } from "../api";

const useClass = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch classes on mount
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        setLoading(true);
        const response = await getClasses();
        setClasses(response);
      } catch (err) {
        setError(err.message || "Failed to fetch classes");
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  // Add new class
  const addClass = async (classData) => {
    try {
      const newClass = await createClass(classData);
      setClasses((prev) => [...prev, newClass]);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  // Update class
  const editClass = async (id, updates) => {
    try {
      const updated = await updateClass(id, updates);
      setClasses((prev) =>
        prev.map((cls) => (cls.id === id ? updated : cls))
      );
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  // Delete class
  const removeClass = async (id) => {
    try {
      await deleteClass(id);
      setClasses((prev) => prev.filter((cls) => cls.id !== id));
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
  };

  return { classes, loading, error, addClass, editClass, removeClass };
};

export default useClass;
