import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const useChat = () => {
  return useContext(ChatContext);
};

export default useChat;
