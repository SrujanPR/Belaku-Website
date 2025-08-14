import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/AllExperiences.css";
import experiencesData from "../data/experiences.json";

const AllExperiences = () => {
  const [heading, setHeading] = useState("Ready to read more? Scroll through these amazing volunteer stories!");
  const navigate = useNavigate();
  const [selectedExperience, setSelectedExperience] = useState(null);
  const modalRef = useRef(null);
  const [shuffledExperiences, setShuffledExperiences] = useState([]);

  useEffect(() => {
    // Function to shuffle array using Fisher-Yates Algorithm
    const shuffleArray = (array) => {
      let shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledExperiences(shuffleArray(experiencesData));
  }, []);

  useEffect(() => {
    const updateHeading = () => {
      if (window.innerWidth <= 600) {
        setHeading("Journeys of Giving & Growth!");
      } else {
        setHeading("Ready to read more? Scroll through these amazing volunteer stories!");
      }
    };

    updateHeading();
    window.addEventListener("resize", updateHeading);

    return () => window.removeEventListener("resize", updateHeading);
  }, []);

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedExperience(null);
      }
    };

    if (selectedExperience) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedExperience]);

  // Function to truncate text
  const truncateText = (text, charLimit) => {
    return text.length > charLimit ? text.substring(0, charLimit) + "..." : text;
  };

  return (
    <section className="all-experiences-section all-experiences">
      <div className="headingAndCards">
        <div className="all-experience-header">
          <h4 className="all-experience-heading">{heading}</h4>
        </div>

        <div className="all-experience-grid">
          {shuffledExperiences.map((exp, index) => (
            <div
              key={index}
              className="all-experience-card"
              onClick={() => setSelectedExperience(exp)}
            >
              <img src={exp.image} alt={exp.name} className="volunteer-image-full" />
              <div className="all-experience-content">
                <div className="all-experience-header-row">
                  <h6>
                    {exp.name}, {exp.age}
                  </h6>
                  <p className="year">{exp.year}</p>
                </div>
                <p className="all-experience-text subtitle">
                  "{truncateText(exp.experience, 150)}"
                </p>
                <span className="read-more">Read More</span>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <a className="back-button" onClick={() => navigate(-1)}>
          <p className="subtitle">Back</p>
        </a>
      </div>

      {selectedExperience && (
        <>
          <div className="gallery-modal-overlay" onClick={() => setSelectedExperience(null)}></div>
          <div className="expanded-experience-modal" ref={modalRef}>
            <button className="close-btn" onClick={() => setSelectedExperience(null)}>
              <h6>×</h6>
            </button>
            <img src={selectedExperience.image} alt={selectedExperience.name} className="expanded-image" />
            <div className="expanded-content">
              <h6>
                {selectedExperience.name}, {selectedExperience.age}
              </h6>
              <p className="year">{selectedExperience.year}</p>
              <p className="subtitle">{selectedExperience.experience}</p>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AllExperiences;
