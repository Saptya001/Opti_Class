import api from "./api";

const authService = {
  login: async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    if (data?.token) {
      localStorage.setItem("token", data.token);
    }
    return data.user;
  },

  register: async (form) => {
    const { data } = await api.post("/auth/register", form);
    if (data?.token) {
      localStorage.setItem("token", data.token);
    }
    return data.user;
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },
};

export default authService;
