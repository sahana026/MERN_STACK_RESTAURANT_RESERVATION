import { useState } from "react";
import HeroSection from "../../components/HeroSection";
import Menu from "../../components/Menu";
import About from "../../components/About";
import Footer from "../../components/Footer";

const Home = ({ user, onLogout, onNavigate, setActiveSection }) => {
  return (
    <div>
      {/* Navbar is rendered in App.jsx, not here */}
      
      {/* Content sections - controlled by activeSection from App.jsx */}
      <HeroSection onNavigate={onNavigate} />
      <Menu />
      <About />
      
      <Footer />
    </div>
  );
};

export default Home;
