import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // This could be expanded to verify the token with the backend
    const token = localStorage.getItem("token");
    if (token && !user) {
      // You might want to fetch user data here using the token
      // For now, we'll assume a page refresh logs the user out for simplicity.
    }
  }, [user]);

  const login = async (credentials) => {
    try {
      const endpoint = credentials.name ? "/auth/register" : "/auth/login";
      const res = await api.post(endpoint, credentials);
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      setCurrentPage(res.data.user.role === 'admin' ? 'admin' : 'dashboard');
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    setCurrentPage('home');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, currentPage, setCurrentPage }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
