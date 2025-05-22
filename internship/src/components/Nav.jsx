import React, { useState } from "react";
import "../css/Nav.css";
// import logo from "../assets/intern.png";
import logo from "../assets/intern.png";
import EnrollmentForm from "../pages/courses/components/EnrollForm";

const InternshipNavbar = ({ isLogin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Select Internship");
  
  const [showEnrollment, setShowEnrollment] = useState(false);
  

  const courses = [
    {
      courseName: "Java",
      url: "java",
    },
    {
      courseName: "Python",
      url: "python",
    },
    {
      courseName: "Java Full-Stack",
      url: "java/fullstack",
    },
    
    {
      courseName: "Data Science",
      url: "data-science",
    },
    {
      courseName: "Machine Learning",
      url: "machine-learning",
    },
    {
      courseName: "DevOps",
      url: "dev-ops",
    },
    {
      courseName: "AI",
      url: "artificial-intelligence",
    },
    {
      courseName: "MERN Stack",
      url: "mern",
    },
  ];

  const upcomingBatches = [
    {
      date: "June 2025",
      duration: "16 weeks",
      timing: "Weekdays (Mon-Fri) ",
      seats: "100+ seats left",
    }
  ];


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course.courseName);
    setIsCoursesOpen(false);
  };

  return (
    <nav className="internship-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          {/* <a href="/">TSAR - IT</a> */}
          <img src={logo} alt="internship" width={130} />
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/benefits">Benefits</a>
            </li>

            {/* Courses Dropdown */}
            <li className="courses-dropdown">
              <div className="dropdown-toggle" onClick={toggleCourses}>
                {selectedCourse}{" "}
                <i className={`arrow ${isCoursesOpen ? "up" : "down"}`}></i>
              </div>
              {isCoursesOpen && (
                <ul className="dropdown-menu">
                  {courses.map((course, index) => (
                    <li key={index} onClick={() => handleCourseSelect(course)}>
                      <a href={`/${course.url}`} style={{ color: "#000" }}>
                        {" "}
                        {course.courseName}{" "}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="/webinar">Webinar</a>
            </li>
            <li>
              <a href="/companies">Hackathon</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {showEnrollment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setShowEnrollment(false)}
            >
              ×
            </button>
            <EnrollmentForm
              courseName="Artificial Intelligence Internship Program"
              batches={upcomingBatches}
              onClose={() => setShowEnrollment(false)}
            />
          </div>
        </div>
      )}

        {/* Auth Buttons */}
        <div className="auth-buttons">
          {isLogin ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovLklWEiznIV11V4CM2awJXaJZT6u6q77Qw&s"
                alt=""
                width={30}
                style={{ borderRadius: "50%" }}
              />
              <h4>Welcome User</h4>
            </div>
          ) : (
            <>
              
              <button className="login-btn">Login</button>
              <button className="login-btn">Sign Up</button>
              <button className="signup-btn" onClick={() => setShowEnrollment(true)}>Enroll Now</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default InternshipNavbar;
