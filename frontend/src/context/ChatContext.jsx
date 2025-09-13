import React, { createContext, useState } from "react";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message, sender = "user") => {
    const newMessage = { id: Date.now(), text: message, sender };
    setMessages((prev) => [...prev, newMessage]);

    // 🔗 Later: Call chatService.sendMessage(message) to backend
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
