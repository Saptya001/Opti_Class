import React, { createContext, useState, useContext, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// AuthProvider to wrap your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores logged-in user
  const [loading, setLoading] = useState(true); // Loading while checking auth state

  // Check stored user on app load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
