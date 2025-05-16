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
              <button className="primary-btn fade-bottom" onClick={openContact}>Find Internships</button>
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





const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Former Intern, now at TechCorp',
      quote: 'The TSAR-IT internship gave me the practical skills I needed to land my dream job. The hands-on projects were exactly what employers were looking for.',
      image: 'rahul.jpg'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Data Science Intern',
      quote: 'I learned more in 3 months at TSAR-IT than in 3 years of college. The mentorship and real-world projects were invaluable.',
      image: 'priya-t.jpg'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Partner at DataSystems',
      quote: `'We've hired 5 TSAR-IT interns in the last year. Their training program ensures they hit the ground running with practical skills.'`,
      image: 'michael-j.jpg'
    },
    {
      id: 4,
      name: 'Ananya Gupta',
      role: 'Cybersecurity Intern',
      quote: 'The internship challenged me with real security scenarios that prepared me for industry certifications and job interviews.',
      image: 'ananya.jpg'
    }
  ];

  return (
    <div className="testimonials">
      <section className="hero">
        <div className="container">
          <h1>Testimonials</h1>
          <p>Hear from our interns and partners</p>
        </div>
      </section>
      
      <section className="testimonial-cards">
        <div className="container">
          <h2>What Our Interns Say</h2>
          <div className="cards-grid">
            {testimonials.filter(t => t.role.includes('Intern')).map(testimonial => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="partner-testimonials">
        <div className="container">
          <h2>What Our Partners Say</h2>
          <div className="cards-grid">
            {testimonials.filter(t => !t.role.includes('Intern')).map(testimonial => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="share-story">
        <div className="container">
          <h2>Share Your Story</h2>
          <p>
            Are you a TSAR-IT alum or partner? We'd love to hear about your experience!
          </p>
          <button className="btn">Submit Your Testimonial</button>
        </div>
      </section>
    </div>
  );
};

