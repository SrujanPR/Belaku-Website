import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactForm.css";
import contact from "../data/contact.json";

const ContactForm = () => {

  const [heading, setHeading] = useState("Got a question? Fill out this quick form, and we'll get back to you!");

  useEffect(() => {
    const updateHeading = () => {
      if (window.innerWidth <= 600) {
        setHeading("Have Questions? Let’s Talk!");
      } else {
        setHeading("Got a question? Fill out this quick form, and we'll get back to you!");
      }
    };

    // Run on mount
    updateHeading();

    // Listen for window resize
    window.addEventListener("resize", updateHeading);

    return () => window.removeEventListener("resize", updateHeading);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    message: "",
    volunteerInterest: false,
  });
  const [status, setStatus] = useState("");

  // Check if all required fields are filled
  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.contact.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setStatus("Please fill all required fields.");
      hideStatusAfterDelay();
      return;
    }

    const serviceId = contact["EmailJS Service ID"];
    const templateId = contact["EmailJS Template ID"];
    const publicKey = contact["EmailJS Public Key"];

    const emailParams = {
      centerName: contact["Center Name"],
      toEmail: contact["Leader or Center Email"],
      name: formData.fullName,
      email: formData.email,
      contact: formData.contact,
      message: formData.message,
      interest: formData.volunteerInterest ? "YESS! :)" : "Not this time :(",
    };

    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          contact: "",
          message: "",
          volunteerInterest: false,
        });
      })
      .catch(() => {
        setStatus("Failed to send message.");
      });

    hideStatusAfterDelay();
  };

  const hideStatusAfterDelay = () => {
    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <h4 className="contact-heading">{heading}</h4>
      <div className="FormandPicArt">
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="fullName" className="Formlabel">
            <p className="subtitle">Full Name<span className="mandatory-field">*</span></p>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Your Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="Formlabel">
          <p className="subtitle">Email Address<span className="mandatory-field">*</span></p>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="contact" className="Formlabel">
          <p className="subtitle">Contact Number<span className="mandatory-field">*</span></p>
          </label>
          <input
            type="text"
            name="contact"
            placeholder="Your Phone Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <label htmlFor="message" className="Formlabel">
          <p className="subtitle">Message<span className="mandatory-field">*</span></p>
          </label>
          <textarea
            name="message"
            placeholder="Type in any queries"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <div className="form-check checkbox-container">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              checked={formData.volunteerInterest}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                volunteerInterest: e.target.checked
              }))}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
            <p className="subtitle">Show your interest to Volunteer!</p>
            </label>
          </div>


          <button
            type="submit"
            disabled={!isFormValid} // Disable if form is incomplete
            style={{
              backgroundColor: isFormValid ? "#ffda1b" : "#FFFFFF",
              color: isFormValid ? "#000" : "#000",
              cursor: isFormValid ? "pointer" : "not-allowed",
            }}
          >
            <p className="subtitle">Submit</p>
          </button>
        </form>
        <img src="/assets/ContactForm/art.png" width={"400px"} alt="Contact Illustration" />
      </div>
      {status && <p className="status-message subtitle">{status}</p>}
    </section>
  );
};

export default ContactForm;
