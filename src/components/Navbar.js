import React, { useState } from "react";
import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section) => {
    setIsMobileMenuOpen(false); // Close mobile menu on selection
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
    } else {
      scroller.scrollTo(section, { smooth: true, duration: 500, offset: -100 });
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Mobile Menu Icon on the Left */}
        <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <img src="/assets/Navbar/close.png"/> : <img src="/assets/Navbar/hamburger.png"/>}
        </div>
        
        {/* Logo on the Right */}
        <div className="logo-container" onClick={() => handleNavigation("home")} style={{ cursor: "pointer"}}>
          <img src="/assets/Navbar/uandi_logo.png" className="logo-img" alt="U&I Logo" />
          <div className="logo">x</div>
          <img id="BelakuLogo" className="logo-img-belaku" src="/assets/Navbar/Belaku Logo.png" alt="Belaku Logo" />
        </div>

        {/* Desktop Navigation */}
        <ul className={`desktop-nav ${isMobileMenuOpen ? "mobile-nav-active" : ""}`}>
          <li onClick={() => handleNavigation("home")} className="scroll-link">Home</li>
          <li onClick={() => handleNavigation("about")} className="scroll-link">About</li>
          <li onClick={() => handleNavigation("impact-section")} className="scroll-link">Impact Stories</li>
          <li onClick={() => handleNavigation("gallery-container")} className="scroll-link">Gallery</li>
          
    

          {/* Dropdown Menu for Links */}
          <li
            className="dropdown scroll-link"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Links
            {isDropdownOpen && (
              <ul className="dropdown-menu" id="nav-dropdown">
                <li><a href="https://uandi.org.in/volunteer" target="_blank" rel="noopener noreferrer">Sign Up</a></li>
                <li><a href="https://build.uandi.org.in/" target="_blank" rel="noopener noreferrer">Build: Student Logs</a></li>
                <li><a href="https://trainingandresources2024.softr.app/teacher-resources" target="_blank" rel="noopener noreferrer">Teaching Resources</a></li>
              </ul>
            )}
          </li>
          <li onClick={() => handleNavigation("experiences")} className="scroll-link">Experiences</li>
          <li onClick={() => handleNavigation("contact")} className="scroll-link">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
