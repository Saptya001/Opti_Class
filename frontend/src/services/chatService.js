import api from "./api";

const chatService = {
  sendMessage: async (message) => {
    const { data } = await api.post("/chat/send", { message });
    return data;
  },

  getMessages: async () => {
    const { data } = await api.get("/chat");
    return data;
  },
};

export default chatService;
