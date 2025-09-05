import api from "./api";

const userService = {
  getProfile: async () => {
    const { data } = await api.get("/users/me");
    return data;
  },

  getAllUsers: async () => {
    const { data } = await api.get("/users");
    return data;
  },
};

export default userService;
