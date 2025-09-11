import axios from "axios";

<<<<<<< HEAD
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true,
});

// Add token to every request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
=======
const API = axios.create({
  baseURL: "http://localhost:5000/api", // 🔹 Change this to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Auth APIs
export const loginUser = async (credentials) => {
  try {
    const { data } = await API.post("/auth/login", credentials);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};

export const registerUser = async (userInfo) => {
  try {
    const { data } = await API.post("/auth/register", userInfo);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
    };
  }
};

// 🔹 Classes APIs
export const getClasses = async () => {
  try {
    const { data } = await API.get("/classes");
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Failed to fetch classes",
    };
  }
};

export const createClass = async (newClass) => {
  try {
    const { data } = await API.post("/classes", newClass);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Failed to create class",
    };
  }
};

export const updateClass = async (id, updatedClass) => {
  try {
    const { data } = await API.put(`/classes/${id}`, updatedClass);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Failed to update class",
    };
  }
};

export const deleteClass = async (id) => {
  try {
    const { data } = await API.delete(`/classes/${id}`);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Failed to delete class",
    };
  }
};

// 🔹 Timetable APIs
export const getTimetable = async () => {
  try {
    const { data } = await API.get("/timetable");
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Failed to fetch timetable",
    };
  }
};

export const addTimetableEntry = async (entry) => {
  try {
    const { data } = await API.post("/timetable", entry);
    return { success: true, data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Failed to add timetable entry",
    };
  }
};

export default API;
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
