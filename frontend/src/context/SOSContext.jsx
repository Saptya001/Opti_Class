import React, { createContext, useState } from "react";

export const SOSContext = createContext();

const SOSProvider = ({ children }) => {
  const [sosActive, setSosActive] = useState(false);

  const triggerSOS = () => {
    setSosActive(true);
    console.log("🚨 SOS Triggered!");
    // 🔗 Later: Call sosService.triggerSOS() to notify backend
  };

  const resetSOS = () => {
    setSosActive(false);
  };

  return (
    <SOSContext.Provider value={{ sosActive, triggerSOS, resetSOS }}>
      {children}
    </SOSContext.Provider>
  );
};

export default SOSProvider;
