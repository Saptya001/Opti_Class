import api from "./api";

const sosService = {
  triggerSOS: async () => {
    const { data } = await api.post("/sos/trigger");
    return data;
  },

  resetSOS: async () => {
    const { data } = await api.post("/sos/reset");
    return data;
  },
};

export default sosService;
