import React, { useState, useRef, useEffect } from "react";
import "../../../css/Enroll.css";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";

const EnrollmentForm = ({ courseName, batches, onClose }) => {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    batch: "",
    course: courseName,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside modal but not on close button
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !closeBtnRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In real app, you would use:
      const response = await axios.post("http://127.0.0.1:8000/api/enroll/", formData);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        experience: "",
        batch: "",
        course: courseName,
      });
    } catch (error) {
      alert("Error submitting form. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Available courses for selection
  const availableCourses = [
    "select",
    "Python Internship Program",
    "Java Internship Program",
    "Java Full-Stack",
    "Data Science",
    "Machine Learning",
    "AWS",
    "AI",
    "MERN Stack",
  ];

  return (
    <div className="modal-overlay">
      {/* Close Button - Fixed position outside modal */}
      <button
        ref={closeBtnRef}
        className="close-btn-enroll"
        onClick={onClose}
        aria-label="Close enrollment form"
        tabIndex="0"
      >
        <IoCloseSharp />
      </button>

      {/* Modal Content */}
      <div className="modal-content" ref={modalRef}>
        {submitSuccess ? (
          <div className="success-message">
            <div className="success-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.86"
                  stroke="#27ae60"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 4L12 14.01L9 11.01"
                  stroke="#27ae60"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Enrollment Submitted!</h3>
            <p>
              Thank you for your interest in {formData.course || courseName}.
            </p>
            <p>
              Our team will contact you within 24 hours with confirmation
              details.
            </p>
            <button
              className="success-close-btn"
              onClick={onClose}
              aria-label="Close success message"
            >
              Return to Course
            </button>
          </div>
        ) : (
          <div className="enrollment-form">
            <h2>Enroll Your Internship Course</h2>
            <p className="form-subtitle">
              Complete this form to secure your spot
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 123-456-7890"
                />
              </div>

              <div className="form-group">
                <label htmlFor="course">Select Course*</label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  {availableCourses.map((course, index) => (
                    <option key={index} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="education">Highest Education</label>
                <select
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                >
                  <option value="">Select your education level</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="experience">Programming Experience</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 year)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="batch">Select Batch*</label>
                <select
                  id="batch"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select preferred batch timing</option>
                  {batches.map((batch, index) => (
                    <option key={index} value={`${batch.date}-${batch.timing}`}>
                      {batch.date} - {batch.timing} ({batch.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-footer">
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Processing...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
                <p className="form-note">
                  By submitting, you agree to our{" "}
                  <a href="/privacy">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrollmentForm;
