import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import "../styles/Footer.css"; // Import CSS file
import contact from "../data/contact.json";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Column 1: Logo & Social Media */}
        <div className="footer-column">
          <a href="https://uandi.org.in" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Navbar/uandi_logo.png" alt="U&I Trust Logo" className="footer-logo" />
          </a>
          <div className="footer-social">
            <a href="https://www.facebook.com/uandi.org.in/" target="_blank" rel="noopener noreferrer"><Facebook className="social-icon" /></a>
            <a href="https://www.instagram.com/uandi.org.in/" target="_blank" rel="noopener noreferrer"><Instagram className="social-icon" /></a>
            <a href="https://www.linkedin.com/company/u&i-charity/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><Linkedin className="social-icon" /></a>
            <a href="https://www.youtube.com/channel/UCLiSn1bQSF7O2VGPIHD5E6A/featured" target="_blank" rel="noopener noreferrer"><Youtube className="social-icon" /></a>
          </div>
          <p className="footer-description">
            U&I Trust is dedicated to transforming lives through education, empowerment, and volunteer-driven impact.
          </p>
        </div>

        {/* Column 2: What We Do */}
        <div className="footer-column">
          <h6 className="footer-title">WHAT WE DO</h6>
          <ul className="footer-links">
            <li><a href="https://uandi.org.in/volunteer" target="_blank"><p className="subtitle">Volunteering</p></a></li>
            <li><a href="https://uandi.my.canva.site/fellowship-2024" target="_blank">Fellowship</a></li>
            <li><a href="https://www.canva.com/design/DAE55FVu9w4/j4ErARvafRu4eoj-zMxChw/view?website#2:apply-now" target="_blank"><p className="subtitle">Internship</p></a></li>
            <li><a href="https://uandi.org.in/hiring" target="_blank"><p className="subtitle">Work</p></a></li>
            <li><a href="https://uandi.org.in/csr" target="_blank"><p className="subtitle">CSR Partnership</p></a></li>
            <li><a href="https://uandi.org.in/donatenow" target="_blank"><p className="subtitle">Donate</p></a></li>
          </ul>
        </div>

        {/* Column 3: Where We Are */}
        <div className="footer-column">
          <h6 className="footer-title">WHERE WE ARE</h6>
          <p className="footer-text subtitle">13/14, Skyline City Apts, Land Mark, 80Ft,</p>
          <p className="footer-text subtitle">Nagarabhavi Main Rd, 2nd Block, Nagarbhavi 1st Stage,</p>
          <p className="footer-text subtitle">Chandra Layout, Bengaluru- 560072</p>
        </div>

        {/* Column 4: Get in Touch */}
        <div className="footer-column">
          <h6 className="footer-title">GET IN TOUCH</h6>
          <p className="footer-text subtitle">{contact["Leader Contact Number"]}</p>
          <p className="footer-text subtitle">{contact["Leader or Center Email"]}</p>
        </div>

      </div>
    </footer>
  );
}
