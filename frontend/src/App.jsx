import React from "react";
import AppRoutes from "./routes/routes";

import AuthProvider from "./context/AuthContext";
import SOSProvider from "./context/SOSContext";
import ChatProvider from "./context/ChatContext";

function App() {
  return (
    <AuthProvider>
      <SOSProvider>
        <ChatProvider>
          <AppRoutes />
        </ChatProvider>
      </SOSProvider>
    </AuthProvider>
  );
}

export default App;
