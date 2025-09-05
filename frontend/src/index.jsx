import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { TimetableProvider } from "./context/TimetableContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <TimetableProvider>
        <AppRoutes />
      </TimetableProvider>
    </AuthProvider>
  </React.StrictMode>
);
