import React, { useState } from "react";
import './python.css'

import TSARLogo from "../media/TSAR-IT.png"; // Example of importing media assets
import PythonImage from "../media/python-2.png";
import PythonWhyImage from "../media/python-why.png";
import WhyTsarItImage from "../media/why-tsar-it.png";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Python = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isScheduleFormVisible, setScheduleFormVisible] = useState(false);
  const [isEnrollVisible, setEnrollVisible] = useState(false);

  const showForm = () => setFormVisible(true);
  const closeForm = () => setFormVisible(false);

  const showScheduleForm = () => setScheduleFormVisible(true);
  const closeScheduleForm = () => setScheduleFormVisible(false);

  const enrollShow = () => setEnrollVisible(true);
  const closeEnroll = () => setEnrollVisible(false);

  return (
    <div>
      <main className="animation">
        <a href="/" className="pages">Home <MdOutlineKeyboardArrowRight /> </a>
        <a href="/internshipPage" className="pages">Internship</a>
        <i className="fa-solid fa-angle-right"></i> Python
      </main>
      <hr />
      <section>
        <div className="banner animation">
          <div className="container-main animation">
            <h1 className="title-course animation">Learning Python</h1>
            <p className="code"></p>
            <h2 className="h2">Python Course</h2>
            <p className="list animation">
              Python remains a widely used and versatile programming language...
            </p>
          </div>
          <div className="container-bottom animation">
            <div className="col-1 animation">
              <div className="icon">
                <i className="fa-solid fa-user-graduate"></i>
              </div>
              <div className="text-span">
                <span className="span">Students Enrolled</span>
                <span className="span">50 +</span>
              </div>
            </div>

            <div className="col-1 animation">
              <div className="icon">
                <i className="fa-regular fa-clock"></i>
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
              <button className="enroll-btn-2" onClick={enrollShow}>Enroll Now</button>
              </a>
              <button className="quick-btn" onClick={showForm}>Quick Enquiry</button>
            </div>
          </div>
        </div>
        {isFormVisible && (
          <div className="flex-form" id="pop-form">
            <div className="form-background">
              <form action="#" className="pop-up-form overlay enquiry-banner">
                <span className="cancel" onClick={closeForm}>✕</span>
                <img src={TSARLogo} alt="TSAR IT logo" width="20%" />
                <h1 className="pop-h1">Quick Enquiry</h1>
                <div className="pop-block">
                  <input type="text" placeholder="Name*" className="user-input" required autoComplete="off" />
                </div>
                <div className="pop-block">
                  <input type="text" placeholder="Email*" className="user-input" required autoComplete="off" />
                </div>
                <div className="pop-block">
                  <input type="text" placeholder="Mobile No.*" className="user-input" required autoComplete="off" />
                </div>
                <div className="pop-block">
                  <select name="options" id="options" className="user-input">
                    <option value="">Looking for</option>
                    <option value="">Self</option>
                    <option value="">Others</option>
                  </select>
                </div>
                <div className="check">
                  <input type="checkbox" name="usercheck" id="usercheck" />
                  <span>I hereby agree to the <a href="#" className="terms">Terms and Conditions</a> and <a href="#" className="terms">Privacy Policy</a> of TSAR IT</span>
                </div>
                <div className="pop-btn">
                  <button className="form-submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
      <section style={{ margin: "50px 0" }} className="reveal section">
        <center>
          <h1 style={{ color: "#fff" }}>Up Coming Batches</h1>
          <br />
        </center>
        {/* <div className="center-select">
          <div className="select-contain reveal">
            <div>
              <span className="select">Select Your Country</span>
              <select name="" id="select-country" className="select-loc">
                <option value="" id="option">Select</option>
              </select>
              <select name="" id="select-town" className="select-loc">
                <option value="">Select</option>
              </select>
            </div>
            <br />
            <center>
              Can't find convenient schedule?&nbsp;&nbsp;
              <button onClick={showScheduleForm} className="quick-btn">Click Here</button>
            </center>
          </div>
        </div> */}
      </section>
      <section>
        <div className="rate-container reveal">
          <div className="rate-col-1"></div>
          <div className="rate-col-2"></div>
        </div>
      </section>
      <nav className="sub-nav reveal">
        <a href="#course-descr" className="sub-links">Course Description</a>
        <a href="#course-curriculum" className="sub-links">Course Curriculum</a>
        <a href="#why-tsar-it" className="sub-links">Why TSAR-IT</a>
        <a href="#" className="sub-links">Mock Test</a>
      </nav>
      <section className="sec reveal" style={{ paddingBottom: "0px" }} id="course-descr">
        <div className="about-course reveal">
          <h1 className="desc">Course Description</h1>
          <h3 className="h3">What Is Python?</h3>
          <p className="text-desc">
            Python has become one of the most widely used programming languages...
          </p>
        </div>
        <div className="about-course reveal">
          <h3 className="h3">Why Python?</h3>
          <p className="text-desc reveal">
            Python is a popular programming language that is used by many data scientists and programmers...
          </p>
        </div>
      </section>
      <section className="sec reveal" style={{ paddingTop: "5px" }}>
        <h1 className="desc reveal">Learning Path</h1>
        <div>
          <img src={PythonImage} alt="skills-set" className="skills-img" />
        </div>
      </section>
      <section className="sec reveal">
        <h1 className="desc reveal">Career Opportunity</h1>
        <div>
          <img src={PythonWhyImage} alt="skills-set" />
        </div>
      </section>
      <section className="sec reveal" id="why-tsar-it">
        <h1 className="desc reveal">Why TSAR-IT</h1>
        <div>
          <img src={WhyTsarItImage} alt="skills-set" />
        </div>
      </section>
      <div className="schedule-form" id="scheduleForm" style={{ display: isScheduleFormVisible ? "block" : "none" }}>
        <form action="#" className="pop-up-form overlay schedule-banner">
          <span className="cancel" onClick={closeScheduleForm}>✕</span>
          <img src={TSARLogo} alt="TSAR IT logo" width="20%" />
          <h1 className="pop-h1" style={{ fontSize: "20px" }}>Let Us Know Your Convenient Schedule</h1>
          <div className="pop-block">
            <input type="text" placeholder="Name*" className="user-input" required autoComplete="off" />
          </div>
          <div className="pop-block">
            <input type="text" placeholder="Email*" className="user-input" required autoComplete="off" />
          </div>
          <div className="pop-block">
            <input type="text" placeholder="Mobile No.*" className="user-input" required autoComplete="off" />
          </div>
          <div className="check">
            <input type="checkbox" name="usercheck" id="usercheck" />
            <span>I hereby agree to the <a href="#" className="terms">Terms and Conditions</a> and <a href="#" className="terms">Privacy Policy</a> of TSAR IT</span>
          </div>
          <div className="pop-btn">
            <button className="form-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Python;
