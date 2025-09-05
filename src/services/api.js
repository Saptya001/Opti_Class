import axios from "axios";

// 🔹 Create axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Change to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Add auth token if available
api.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem("user");
    if (user) {
      const token = JSON.parse(user).token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
