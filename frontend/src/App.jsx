import { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Menu from './components/Menu';
import About from './components/About';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Team from './components/Team';
import Qualities from './components/Qualities';
import { AuthContext, AuthProvider } from './AuthContext';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import Success from './Pages/Success/Success';

function AppContent() {
  const { user, currentPage, setCurrentPage } = useContext(AuthContext);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (!user) {
      if (currentPage === 'login') {
        return <Login />;
      }
      // For home page, render nothing here (content below will render)
      return null;
    }

    if (user.role === 'admin' && currentPage === 'admin') {
      return <AdminDashboard onNavigate={handleNavigate} />;
    }

    if (currentPage === 'dashboard') {
      return <Dashboard onNavigate={handleNavigate} />;
    }
    if (currentPage === 'success') {
      return <Success />;
    }

    return null;
  };

  return (
    <div className="App">
      <Navbar onNavigate={handleNavigate} setActiveSection={setCurrentPage} />
      {renderPage()}
      {!user && (
        <>
          {['home', 'menu', 'about', 'team', 'qualities', 'reservation'].includes(currentPage) && (
            <>
              <HeroSection onNavigate={handleNavigate} />
              <Menu id="menu" />
              <About />
              <Team />
              <Qualities />
              <Reservation onNavigate={handleNavigate} onViewAdmin={() => {}} />
            </>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
