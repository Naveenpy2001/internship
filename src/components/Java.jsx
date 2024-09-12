import React, { useState } from 'react';
import './java.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import TSARLogo from "../media/TSAR-IT.png"; 
import JavaLearningPath from "../media/Java-Learning-path.png";
import careerJava from "../media/career-opp-java.png";
import WhyTsarItImage from "../media/why-tsar-it.png";
import JavaCourse from './JavaCourse';
import Footer from '../Footer';
import JavaCompiler from './JavaCompiler';


const Java = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isScheduleFormVisible, setScheduleFormVisible] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleScheduleFormSubmit = (e) => {
    e.preventDefault();
    // Handle schedule form submission logic here
  };

  
  return (
    <div>
      <main className="animation">
        <a href="/" className="pages">
          Home  <MdOutlineKeyboardArrowRight />
        </a> 
        <a href="/internshipPage" className="pages">
          Java
        </a>
        
      </main>

      <hr />

      <section>
        <div className="java animation">
          <div className="container-main animation">
            <h1 className="title-course animation">Learning Java</h1>
            <p className="code"></p>
            <h2 className="h2">Java Course</h2>
            <p className="list animation">
              Java is a versatile, object-oriented, and widely used programming
              language that was developed by Sun Microsystems (now owned by Oracle
              Corporation) in the mid-1990s. It is designed to be
              platform-independent, meaning that Java programs can run on any
              device that has a Java Virtual Machine (JVM) installed, regardless
              of the underlying hardware and operating system. Java Software
              Foundation ensures the language's continuous development,
              contributing to its ongoing significance across diverse domains.
            </p>
          </div>

          <div className="container-bottom animation">
            <div className="col-1 animation">
              <div className="icon">
                <i className="fa-solid user fa-user-graduate"></i>
              </div>
              <div className="text-span">
                <span className="span">Students Enrolled</span>
                <span className="span">50 +</span>
              </div>
            </div>
            <div className="col-1 animation">
              <div className="icon">
                <i className="fa-regular user fa-clock"></i>
              </div>
              <div className="text-span">
                <span className="span">Duration</span>
                <span className="span">3 Months</span>
              </div>
            </div>
          </div>

          <div className="form-pop">
            <div className="center-btn">
              <a href="/Register">
              <button className="enroll-btn-2">
                Enroll Now
              </button>
              </a>
              <button className="quick-btn" onClick={() => setFormVisible(true)}>
                Quick Enquiry
              </button>
            </div>
          </div>
        </div>

        {isFormVisible && (
          <div className="flex-form">
            <div className="form-background">
              <form onSubmit={handleFormSubmit} className="pop-up-form overlay enquiry-banner">
                <span className="cancel" onClick={() => setFormVisible(false)}>✕</span>

                <img src="./media/TSAR-IT.png" alt="c-logo" width="20%" />
                <h1 className="pop-h1">Quick Enquiry</h1>
                <div className="pop-block">
                  <input
                    type="text"
                    placeholder="Name*"
                    className="user-input"
                    required
                    autoComplete="off"
                    name="username"
                  />
                </div>
                <div className="pop-block">
                  <input
                    type="text"
                    placeholder="Email*"
                    className="user-input"
                    required
                    autoComplete="off"
                    name="useremail"
                  />
                </div>
                <div className="pop-block">
                  <input
                    type="text"
                    placeholder="Mobile No.*"
                    className="user-input"
                    required
                    autoComplete="off"
                    name="userphno"
                  />
                </div>
                <div className="pop-block">
                  <select name="options" className="user-input">
                    <option value="">Looking for</option>
                    <option value="self">Self</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="check">
                  <input type="checkbox" name="usercheck" />
                  <span>
                    I hereby agree to the
                    <a href="#" className="terms">Terms and Conditions</a> and
                    <a href="#" className="terms">Privacy Policy</a> of TSAR IT
                  </span>
                </div>
                <div className="pop-btn">
                  <button type="submit" className="form-submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
{/* 
      <section className="reveal section" style={{ margin: '50px 0' }}>
        <center>
          <h1 style={{ color: '#fff' }}>Up Coming Batches</h1>
          <br />
        </center>
        <div className="center-select">
          <div className="select-contain reveal">
            <div>
              <span className="select">Select Your Country</span>
              <select id="select-country" className="select-loc">
                <option value="">Select</option>
              </select>
              <select id="select-town" className="select-loc">
                <option value="">Select</option>
              </select>
            </div>
            <br />
            <center>
              Can't find convenient schedule?&nbsp;&nbsp;
              <button onClick={() => setScheduleFormVisible(true)} className="quick-btn">
                Click Here
              </button>
            </center>
          </div>
        </div>
      </section> */}

      <section className="rate-container reveal">
        <div className="rate-col-1"></div>
        <div className="rate-col-2"></div>
      </section>

      {/* <nav className="sub-nav reveal">
        <a href="#course-descr" className="sub-links">Course Description</a>
        <a href="#course-cirriculum" className="sub-links">Course Curriculum</a>
        <a href="#why-tsar-it" className="sub-links">Why TSAR-IT</a>
        <a href="#" className="sub-links">Mock Test</a>
      </nav> */}

      <section className="sec" id="course-descr">
        <h1 className="desc reveal">Course Description</h1>
        <div className="desc-div">
          <p className="desc-text">
            Java is a popular and versatile programming language known for its
            portability, scalability, and robustness. It is designed to be
            platform-independent, which means that Java code can run on various
            devices and operating systems without modification. This "write once,
            run anywhere" principle makes Java suitable for developing a wide range
            of applications, from desktop software to web applications and mobile
            apps.
          </p>
        </div>
      </section>

   


      <section>
        <div className="rate-container reveal">
          <div className="rate-col-1"></div>
          <div className="rate-col-2"></div>
        </div>
      </section>
      {/* <nav className="sub-nav reveal">
        <a href="#course-descr" className="sub-links">Course Description</a>
        <a href="#course-curriculum" className="sub-links">Course Curriculum</a>
        <a href="#why-tsar-it" className="sub-links">Why TSAR-IT</a>
        <a href="#" className="sub-links">Mock Test</a>
      </nav> */}
      <section className="sec reveal" style={{ paddingBottom: "0px" }} id="course-descr">
      
        <div className="about-course reveal">
          <h3 className="h3">Why Java?</h3>
          <p className="text-desc reveal">
            Java is a popular programming language that is used by many data scientists and programmers...
          </p>
        </div>
      </section>
      <section className="sec reveal" style={{ paddingTop: "5px" }}>
        <h1 className="desc reveal">Learning Path</h1>
        <div>
          <img src={JavaLearningPath} alt="skills-set" className="skills-img" />
        </div>
      </section>
      <section className="sec reveal">
        <h1 className="desc reveal">Career Opportunity</h1>
        <div>
          <img src={careerJava} alt="skills-set" />
        </div>
      </section>
      <section className="sec reveal" id="why-tsar-it">
        <h1 className="desc reveal">Why TSAR-IT</h1>
        <div>
          <img src={WhyTsarItImage} alt="skills-set" />
        </div>
      </section>

      <section className="sec" id="course-cirriculum">
        <h1 className="desc reveal">Course Curriculum</h1>
      <JavaCourse />
      </section>
      <JavaCompiler />


      {isScheduleFormVisible && (
        <div id="scheduleForm" className="flex-form">
          <div className="form-background">
            <form onSubmit={handleScheduleFormSubmit} className="pop-up-form overlay enquiry-banner">
              <span className="cancel" onClick={() => setScheduleFormVisible(false)}>✕</span>

              <img src="./media/TSAR-IT.png" alt="c-logo" width="20%" />
              <h1 className="pop-h1">Schedule a Demo</h1>
              <div className="pop-block">
                <input
                  type="text"
                  placeholder="Name*"
                  className="user-input"
                  required
                  autoComplete="off"
                  name="username"
                />
              </div>
              <div className="pop-block">
                <input
                  type="text"
                  placeholder="Email*"
                  className="user-input"
                  required
                  autoComplete="off"
                  name="useremail"
                />
              </div>
              <div className="pop-block">
                <input
                  type="text"
                  placeholder="Mobile No.*"
                  className="user-input"
                  required
                  autoComplete="off"
                  name="userphno"
                />
              </div>
              <div className="pop-block">
                <input
                  type="text"
                  placeholder="Preferred Date*"
                  className="user-input"
                  required
                  autoComplete="off"
                  name="userdate"
                />
              </div>
              <div className="check">
                <input type="checkbox" name="usercheck" />
                <span>
                  I hereby agree to the
                  <a href="#" className="terms">Terms and Conditions</a> and
                  <a href="#" className="terms">Privacy Policy</a> of TSAR IT
                </span>
              </div>
              <div className="pop-btn">
                <button type="submit" className="form-submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Java;
