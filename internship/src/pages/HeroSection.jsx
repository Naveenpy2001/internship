import React, { useState, useEffect } from "react";
import "../css/HeroSection.css";
import ContactForm from "../components/ContactUs";
import AboutInternship from "./AboutUs";
import CoursesComponent from "../components/CoursesComponent";
import Companies from "./courses/components/Companies";

const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);



  const openVideo = () => {
    setIsVideoOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when video is open
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const openContact = () => {
    setIsContactOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeContact = () => {
    setIsContactOpen(false);
    document.body.style.overflow = "auto";
  };



  
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="fade-left">Launch Your Career with Top Internships</h1>
            <p className="hero-subtitle fade-right">
              Gain real-world experience with industry leaders and kickstart
              your professional journey
            </p>
            <div className="hero-stats">
              <div className="stat-item fade-top">
                <span className="stat-number"> 10,000+</span>
                <span className="stat-label">Internships</span>
              </div>
              <div className="stat-item fade-bottom">
                <span className="stat-number">2,500+</span>
                <span className="stat-label">Companies</span>
              </div>
              <div className="stat-item fade-top">
                <span className="stat-number">85%</span>
                <span className="stat-label">Conversion to Jobs</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="primary-btn fade-bottom">Find Internships</button>
              <button className="secondary-btn fade-bottom" onClick={openVideo}>
                <span className="play-icon fade-top">▶</span> Watch Video
              </button>
            </div>
          </div>
          <div className="hero-image fade-right">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="Students working together" className="fade-righ"
            />
            <div className="image-overlay"></div>
          </div>
        </div>

        {/* Video Popup Modal */}
        {isVideoOpen && (
          <div className="video-modal">
            <div className="video-modal-content">
              <button className="close-btn" onClick={closeVideo}>
                ×
              </button>
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/cBcd0glbiL0?si=A9vkUzTRubERIFHL"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {/* Get in Touch Section */}
        <div className="get-in-touch" data-aos="fade-up" >
          <div className="get-in-touch-container">
            <h2 data-aos="fade-up">Ready to start your internship journey?</h2>
            <p data-aos="fade-up" >
              Connect with our advisors to find the perfect opportunity for you
            </p>
            <button className="contact-btn" onClick={openContact}>
              Get in Touch
            </button>
          </div>
        </div>
        {isContactOpen && (
          <div className="contact-modal-overlay">
            <ContactForm isPopup={true} onClose={closeContact} />
          </div>
        )}
      </section>
      <AboutInternship />
      <CoursesComponent
        isContactOpen={isContactOpen}
        setIsContactOpen={setIsContactOpen}
      />
      <Companies />
    </>
  );
};

export default HeroSection;
