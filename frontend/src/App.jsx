import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Menu from './components/Menu';
import About from './components/About';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Team from './components/Team';
import Qualities from './components/Qualities';
import AuthContext from './AuthContext';
import Login from './Pages/Login';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Success from './Pages/Success/Success';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setCurrentPage(userData.role === 'admin' ? 'admin' : 'dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (!isLoggedIn) {
      if (currentPage === 'login') {
        return <Login onLogin={handleLogin} />;
      }
      return <Home onNavigate={handleNavigate} />;
    }

    if (user?.role === 'admin') {
      if (currentPage === 'admin') {
        return <AdminDashboard user={user} onLogout={handleLogout} onNavigate={handleNavigate} />;
      }
      return <Home onNavigate={handleNavigate} />;
    }

    if (currentPage === 'dashboard') {
      return <Dashboard user={user} onLogout={handleLogout} onNavigate={handleNavigate} />;
    }
    if (currentPage === 'success') {
      return <Success />;
    }

    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, setUser }}>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} user={user} onLogout={handleLogout} onNavigate={handleNavigate} setActiveSection={setCurrentPage} />
        {renderPage()}
        {!isLoggedIn && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <Menu id="menu" />
            <About />
            <Team />
            <Qualities />
            <Reservation user={user} onLogout={handleLogout} onNavigate={handleNavigate} onViewAdmin={() => {}} />
          </>
        )}
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
