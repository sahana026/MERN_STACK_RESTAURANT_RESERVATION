import { useState } from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import Menu from "../../components/Menu";
import About from "../../components/About";
import Footer from "../../components/Footer";

const Home = ({ user, onLogout, onNavigate }) => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div>
      <Navbar user={user} onLogout={onLogout} onNavigate={onNavigate} setActiveSection={setActiveSection} />
      
      {activeSection === "home" && <HeroSection onNavigate={onNavigate} />}
      {activeSection === "menu" && <Menu />}
      {activeSection === "about" && <About />}
      
      <Footer />
    </div>
  );
};

export default Home;
