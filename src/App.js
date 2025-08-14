import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { scroller } from "react-scroll"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
import About from "./components/About";
import ExperiencesCarousel from "./components/ExperiencesCarousel";
import Home from "./pages/Home";
import ImpactStories from "./components/ImpactStories";
import AllExperiences from "./pages/AllExperiences";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video from "../src/components/Video";

// Scroll to section after navigating
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: -100,
      });

      window.history.replaceState({}, document.title, location.pathname);
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <ScrollToSection /> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <ImpactStories />
                <Gallery />
                <ExperiencesCarousel />
                <ContactForm />
              </>
            }
          />
          <Route path="/all-experiences" element={<AllExperiences />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
