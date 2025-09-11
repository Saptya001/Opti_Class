<<<<<<< HEAD
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
=======
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
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
    }
    setLoading(false);
  }, []);

  // Login function
<<<<<<< HEAD
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
=======
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
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
      {children}
    </AuthContext.Provider>
  );
};

<<<<<<< HEAD
export default AuthProvider;
=======
// Hook to use AuthContext
export const useAuthContext = () => {
  return useContext(AuthContext);
};
>>>>>>> 35c0da0c0c05489e648a6be93f0ea24cd4468b8d
