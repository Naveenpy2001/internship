import React from "react";
import '../css/Internship.css';
import { FaStar, FaClock, FaUsers } from 'react-icons/fa'; // Make sure to install react-icons if not already

import Java from '../media/java-horizontal.svg';
import Python from '../media/python-horizontal.svg';
import Brain from '../media/brain.jpeg'
import Footer from "../Footer";

import { IoSearch } from "react-icons/io5";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// Courses Component
const CourseItem = ({ href, title, imgSrc, ratingCount, learnersCount, duration }) => (
  <a href={href} className="file-link">
    <div className="box-course reveal">
      <img src={imgSrc} alt="c-img" className="course-img" />
      <h1 className="title">{title}</h1>
      <div className="rating">
        {/* <span className="star"><FaStar className="fa-star" /></span>
        <span className="rating-count">{ratingCount} •</span>
        <span className="members">{learnersCount} + learners</span>• beginner */}
        <h4>TSAR-IT PVT LTD</h4>
      </div>
      <div className="bottom-col">
        <div className="hours">
          <FaClock /><span className="hours-time">{duration}</span>
        </div>
      </div>
      <div className="top-learn">
        <div className="div-top">
          <p><FaUsers /> {learnersCount} + learners</p>
        </div>
      </div>
    </div>
  </a>
);




const Courses = () => (
  <section className="sec flex-sec reveal" id="course">
    <center><h1 className="main-header">Our Courses</h1></center>
    <div className="course-container">
      <CourseItem
        href="/Java"
        title="Java Full-Stack"
        imgSrc={Java}
        // ratingCount="4.9"
        learnersCount="50"
        duration="3 Months"
      />
      <CourseItem
        href="/python"
        title="Python"
        imgSrc={Python}
        // ratingCount="4.9"
        learnersCount="50"
        duration="3 Months"
      />
      <CourseItem
        href="/Java"
        title="Java"
        imgSrc={Java}
        // ratingCount="4.9"
        learnersCount="50"
        duration="3 Months"
      />
    </div>
  </section>
);

const InternshipPage = () => {
  const showForm = (id) => {
    document.getElementById(id).style.display = "block";
  };

  const closeForm = (id) => {
    document.getElementById(id).style.display = "none";
  };

  return (
    <div>
      <header></header>

      <main className="animation">
        <a href="https://www.tsaritservices.com" className="pages">
          Home  <MdOutlineKeyboardArrowRight />
        </a> 
        <a href="/internshipPage" className="pages">
          Internship
        </a>
      </main>

      <section className="sec-1 animation">
        <div className="banner-container">
          <div className="nav-links">
            <div className="courses">
              <nav className="navbar" style={{ margin: "0 10px" }}>
                <ul className="navbar-menu">
                  <li className="has-children">
                    <a href="#!" aria-haspopup="true">
                      <i className="fa-solid fa-bars"></i> &nbsp; All courses
                    </a>
                    <ul aria-label="submenu">
                      <li className="has-children">
                        <a href="#!" aria-haspopup="true">
                          Java
                        </a>
                      </li>
                      <li className="has-children">
                        <a href="#!" aria-haspopup="true">
                          Python
                        </a>
                      </li>
                      <li className="has-children">
                        <a href="#!" aria-haspopup="true">
                          Full Stack Java Developer
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="courses">
              <a href="#!" className="blog">
                <h4>Blog</h4>
              </a>
            </div>
          </div>
          <div className="input-searching">
            <div className="input-box-1">
              <form action="" className="courseSearchForm">
                <input
                  type="search"
                  name=""
                  id=""
                  className="user-input"
                  placeholder="Search"
                />
                <button className="search-btn">
                <IoSearch />
                </button>
              </form>
            </div>
            <div className="links">
              <a href="/Java" className="links-1 animation">
                Java |
              </a>
              <a href="/Python" className="links-1 animation">
              Python |
              </a>
             
            </div>
          </div>
        </div>
      </section>

      <nav className="sub-nav animation">
        <div className="logo-c">
          <img
            src="./media/TSAR-IT.png"
            alt=""
            style={{ width: "20%", marginLeft: "35px" }}
          />
        </div>
        <div className="sub-nav-items">
          <a href="#course" className="s-links animation">
            Courses
          </a>
          <a href="/Webinar" className="s-links animation">
            Webinar
          </a>
          <a href="/Register" className="s-links animation">
            Registration
          </a>
          <a href="/Login" className="s-links animation">
            Student Login
          </a>
          <a href="/CorporateLogin" className="s-links animation">
            Corporate Hiring Login
          </a>
          <span
            className="s-links animation"
            onClick={() => showForm("formContainer")}
          >
            Get in Touch
          </span>
        </div>
      </nav>

      <section className="sec animation">
        <div className="container-columns">
          <div className="text-column animation">
            <div className="text">
              <h1 className="heade animation" style={{ marginTop: "10px" }}>
                Leaders In Training
              </h1>
              <p className="p-text reveal">
                TSAR IT is a global leader in delivering a diverse range of
                management and technical training across more than 40 countries.
                As a trusted training delivery partner, we have collaborated
                with over 400 corporate clients and numerous
                universities/educational institutions worldwide. With a track
                record of training over 150,000 professionals across various
                courses, TSAR IT is committed to empowering individuals and
                organizations to excel. Our approach is centered around
                practical knowledge and theoretical concepts, ensuring that our
                courses deliver tangible skills and insights. Renowned for our
                industry reputation, TSAR IT offers unparalleled value in
                training services. Our team of creative minds goes beyond mere
                instruction to establish solutions tailored to your specific
                learning needs. At TSAR IT, our mission extends beyond training;
                we are dedicated to building careers and shaping future leaders.
                Join us on a transformative journey where learning is not just a
                process but a catalyst for personal and professional growth.
              </p>
            </div>
            <div className="round-columns reveal">
              <div className="round reveal">
                <div className="circle one">
                  <h1 className="circle-title">25+</h1>
                  <span className="span-title">Courses</span>
                </div>
              </div>
              <div className="round reveal">
                <div className="circle two">
                  <h1 className="circle-title">T</h1>
                  <span className="span-title">Partner of</span>
                </div>
                <div className="circle four">
                  <h1 className="circle-title">T</h1>
                  <span className="span-title">Partner of</span>
                </div>
              </div>
              <div className="round reveal">
                <div className="circle three">
                  <h1 className="circle-title">400+</h1>
                  <span className="span-title">Our Partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec reveal">
        <div className="container-2">
          <div className="video-column reveal">
            <img src={Brain} alt="" height="90%" width="90%" />
          </div>
          <div className="text-container reveal">
            <h1 className="header reveal">We Build Careers !!</h1>
            <p className="p-text reveal">
              As a new-age training institute and with a global footprint, we at
              TSAR IT understand the constantly changing nature of the business
              and emerging needs across the globe. Keeping industry skill
              requirements in mind, we offer a wide gamut of technical and
              management courses as well as courses in emerging technologies.
              The curriculum of each course has been meticulously designed to
              match the contemporary needs of the industry. We offer different
              levels of courses from beginner to advanced, ensuring that we meet
              the talent requirements of both students and working
              professionals. Our courses aim to prepare students for future
              advancements in technology, strategic thinking and planning,
              ensuring that they are future-ready and build a lucrative career
              ahead.
            </p>
          </div>
        </div>
      </section>

      <Courses />
      <Footer />

      <div className="get-in-form">
        <div id="formContainer" className="form-container">
          <form method="post" action="/enquiry_view" className="myform">
            {/* CSRF token will be dynamically handled by your backend */}
            <div className="logo-img-c">
              <img src="/media/TSAR-IT.png" alt="" className="c-logo-1" />
              <h1>Enquiry</h1>
            </div>
            <div className="block">
              <input
                type="text"
                name="name"
                id="name"
                className="input-field"
                placeholder="Name*"
                autoComplete="off"
                required
              />
            </div>
            <div className="block">
              <input
                type="email"
                name="email"
                id="email"
                className="input-field"
                placeholder="Email*"
                autoComplete="off"
                required
              />
            </div>
            <div className="block">
              <input
                type="text"
                name="phone_number"
                id="phone_number"
                className="input-field"
                placeholder="Phone Number*"
                autoComplete="off"
                required
              />
            </div>
            <div className="block-select">
              <select name="course" id="course" className="select" required>
                <option value="" disabled selected>
                  Course
                </option>
                {/* Add course options dynamically here */}
              </select>
            </div>
            <div className="block-select">
              <select name="country" id="country" className="select" required>
                <option value="" disabled selected>
                  Country
                </option>
                <option value="tirupathi">Tirupathi</option>
                <option value="tirumala">Tirumala</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="guntur">Guntur</option>
                <option value="vijayawada">Vijayawada</option>
              </select>
            </div>
            <div className="block">
              <textarea
                name="enquiry"
                id="enquiry"
                rows="3"
                className="textarea"
                placeholder="Enter your enquiry*"
                required
              ></textarea>
            </div>
            <div className="submit-button-c">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
          <span className="close" onClick={() => closeForm("formContainer")}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
