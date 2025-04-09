import React from "react";
import "../css/About.css";

// TSAR data for IT internship
const tsarFeatures = [
  {
    icon: "🎯",
    title: "Training",
    description:
      "Hands-on training with industry experts and modern tech stacks",
  },
  {
    icon: "🛠️",
    title: "Skills",
    description: "Develop in-demand skills through real-world projects",
  },
  {
    icon: "🏅",
    title: "Accreditation",
    description: "Earn recognized certificates upon completion",
  },
  {
    icon: "🌟",
    title: "Recognition",
    description: "Get featured in our talent showcase for recruiters",
  },
];

const AboutInternship = () => {
  return (
    <section className="about-internship-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>About Our IT Internship Courses</h2>
          <p className="subtitle">
            Transform your career with our comprehensive training and real-world
            experience
          </p>
        </div>
      <br /> <br />
        <div className="about-content">
          <div className="about-text">
            <h3>Why Choose Our Internship?</h3>
            <p>
              Our IT internship program is designed to bridge the gap between
              academic knowledge and industry requirements. You'll work on live
              projects using technologies like React, Node.js, Python, AI/ML,
              and Cloud Computing.
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-value">4.9</div>
                <div className="stat-label">
                  <div className="stars">★★★★★</div>
                  <span>Average Rating</span>
                </div>
              </div>

              <div className="stat-item">
                <div className="stat-value">5K+</div>
                <div className="stat-label">Students Trained</div>
              </div>

              <div className="stat-item">
                <div className="stat-value">85%</div>
                <div className="stat-label">Placement Rate</div>
              </div>
            </div>

          </div>
        </div>
        <div className="tsar-features">
          <h4>Our TSAR Advantage</h4>
          <div className="features-grid">
            {tsarFeatures.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="technologies-section">
          <h4>Technologies You'll Work With</h4>
          <div className="tech-badges">
            <span className="tech-badge">HTML5</span>
            <span className="tech-badge">CSS3</span>
            <span className="tech-badge">JavaScirpt</span>
            <span className="tech-badge">TypeScirpt</span>
            <span className="tech-badge">React.js</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Java</span>
            <span className="tech-badge">Spring Boot</span>
            <span className="tech-badge">Express JS</span>
            <span className="tech-badge">Django</span>
            <span className="tech-badge">Django REST Framework</span>
            <span className="tech-badge">Python</span>
            <span className="tech-badge">AWS</span>
            <span className="tech-badge">Docker</span>
            <span className="tech-badge">TensorFlow</span>
            <span className="tech-badge">MongoDB</span>
            <span className="tech-badge">Git/GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInternship;
