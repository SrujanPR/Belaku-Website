import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../styles/About.css";
import aboutData from "../data/about.json";

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section className="about" ref={ref}>
      <div className="about-wrapper">
        {/* LEFT COLUMN */}
        <div className="about-left">
          <img 
            src="\assets\about.jpeg"  // <-- path to your image
            alt="Belaku Learning Center"
            className="about-image"/>
          <div className="stats-container">
            <div className="stat">
              <h3>{inView && <CountUp start={0} end={aboutData["Number of Volunteers"]} duration={2} />}+</h3>
              <p>Volunteers teaching</p>
            </div>
            <div className="stat">
              <h3>{inView && <CountUp start={0} end={aboutData["Number of Students"]} duration={2} />}+</h3>
              <p>Children taught</p>
            </div>
            <div className="stat">
              <h3>{inView && <CountUp start={0} end={aboutData["Number of Hours Taught"]} duration={2} />}+</h3>
              <p>Hours spent learning</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="about-right">
          <h4 className="about-heading">What’s {aboutData["Center Name"]}?</h4>
          <p className="about-text subtitle">
            {aboutData["About U&I"]}
            <br /><br />
            {aboutData["About the center"]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
