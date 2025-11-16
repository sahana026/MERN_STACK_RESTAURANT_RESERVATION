import { useState, useEffect } from "react";
import Login from "./Pages/Login";
import Reservation from "./components/Reservation";
import AdminDashboard from "./components/AdminDashboard";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home/Home";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  const handleLogin = (userData, token) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setCurrentPage("home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setCurrentPage("home");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      {currentPage === "home" && (
        <Home 
          user={user} 
          onLogout={handleLogout}
          onNavigate={setCurrentPage}
        />
      )}
      {currentPage === "reservation" && (
        <Reservation 
          user={user} 
          onLogout={handleLogout}
          onViewAdmin={() => setCurrentPage("admin")}
          onNavigate={setCurrentPage}
        />
      )}
      {currentPage === "admin" && (
        <AdminDashboard 
          user={user} 
          onLogout={handleLogout}
          onNavigate={setCurrentPage}
        />
      )}
      {currentPage === "dashboard" && (
        <Dashboard 
          user={user} 
          onLogout={handleLogout}
          onNavigate={setCurrentPage}
        />
      )}
    </div>
  );
}

export default App;
