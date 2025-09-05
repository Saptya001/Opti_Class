import React, { createContext, useState, useEffect } from "react";
import authService from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const loggedUser = await authService.login(email, password);
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
      return loggedUser;
    } catch (error) {
      throw error;
    }
  };

  // Register function
  const register = async (data) => {
    try {
      const newUser = await authService.register(data);
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      return newUser;
    } catch (error) {
      throw error;
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
