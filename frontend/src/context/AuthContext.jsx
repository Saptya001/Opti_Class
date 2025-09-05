import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser, logoutUser } from "../api"; // example API functions

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("opticlass_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials);
      setUser(response.user);
      localStorage.setItem("opticlass_user", JSON.stringify(response.user));
      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout error:", error);
    }
    setUser(null);
    localStorage.removeItem("opticlass_user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};
