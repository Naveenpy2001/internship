
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Webinar.css';
import { useNavigate } from 'react-router-dom';

const Webinar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    amount: '',
    agree: false,
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [webinarStartTime, setWebinarStartTime] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const checkRegistrationStatus = async () => {
      if (formData.email) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/check-registration-status/${formData.email}/`);
          if (response.data.registered) {
            if (response.data.payment_status) {
              setPaymentSuccess(true);
              setWebinarStartTime(response.data.webinar_start_time);
              fetchUserDetails();
            } else {
              setPaymentStatus('pending');
            }
          }
        } catch (error) {
          console.error('Error checking registration status:', error);
        }
      }
    };

    checkRegistrationStatus();
  }, [formData.email]);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/get-user-details/${formData.email}/`);
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleRazorpayPayment = async () => {
    const options = {
      key: 'rzp_live_oRtGw5y3RbD9MH', // Replace with your Razorpay Key ID
      amount: formData.amount * 100, // Amount in paise
      currency: 'INR',
      name: 'Webinar Registration',
      description: 'Payment for webinar registration',
      handler: async (response) => {
        try {
          const paymentResponse = await axios.post('http://127.0.0.1:8000/api/payment-success/', {
            email: formData.email,
            amount: formData.amount,
          });
          if (paymentResponse.status === 200) {
            setPaymentSuccess(true);
            setWebinarStartTime(paymentResponse.data.start_date);
            fetchUserDetails();
            setPaymentStatus(null);
          }
        } catch (error) {
          console.error('Payment failed:', error);
          setErrorMessage('Payment confirmation failed.');
        }
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', formData);
      if (response.status === 201) {
        setPaymentStatus('pending');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('Registration failed.');
    }
  };

  return (
    <div className="webinar-container">
      {/* Webinar Banner */}
      <img src="https://www.pngarts.com/files/7/Webinar-PNG-Pic.png" alt="Webinar Banner" className="webinar-banner" />

      {/* Webinar Content Section */}
      <div className="webinar-content">
        <h2>Upcoming Internship Webinar 2k24</h2>
        <p>
          Join our comprehensive internship webinar to kickstart your career in the tech industry.
          This webinar will cover a variety of trending topics and provide you with hands-on experience
          and real-world projects. You’ll get guidance from experienced industry professionals and
          explore career paths in fields like software development, data science, AI, and web development.
        </p>
        <h3>Key Topics Covered:</h3>
        <ul>
          <li>Introduction to Programming (Python/Java)</li>
          <li>Object-Oriented Programming Concepts</li>
          <li>Building Web Applications with React.js and Django</li>
          <li>Introduction to Data Science and Machine Learning</li>
          <li>Understanding Databases and SQL</li>
          <li>DevOps and Cloud Computing (AWS/Azure)</li>
          <li>Hands-on Projects and Case Studies</li>
        </ul>
        <p>
          This is a perfect opportunity to learn, interact with experts, and get started on your career journey.
          Don’t miss out on this chance to enhance your skills and knowledge. Register now to secure your spot in the webinar.
        </p>
        <h4>Why Attend:</h4>
        <ul>
          <li>Live project experience</li>
          <li>Interaction with industry experts</li>
          <li>Certificate of participation</li>
          <li>Career guidance and mentorship</li>
        </ul>
        <p>
          The webinar is open to all students and professionals interested in expanding their tech skills.
          You can register by filling in the form and selecting the amount you wish to contribute. The webinar will start soon,
          and seats are limited, so hurry up!
        </p>
      </div>

      {/* Registration Form Section */}
      <div className="webinar-form">
        <h2>Register for the Internship Webinar</h2>
        {errorMessage && <p className="webinar-error-message">{errorMessage}</p>}
        {!paymentSuccess && !paymentStatus && (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="course">Course:</label>
              <select name="course" value={formData.course} onChange={handleChange} required>
                <option value="">Select a Course</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="web-development">Web Development</option>
              </select>
            </div>
            <div>
              <label className="webinar-checkbox-label">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="webinar-checkbox"
                />
                <span className="webinar-accept-terms">
                  I agree to the terms and conditions
                </span>
              </label>
            </div>
            <button type="submit">Register</button>
          </form>
        )}

        {paymentStatus === 'pending' && (
          <div className="webinar-payment-section">
            <h3>Payment Pending</h3>
            <p>Your registration is complete, but payment is pending. Please complete the payment to finalize your registration.</p>
            <div>
              <label htmlFor="amount">Amount (₹):</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
              <button onClick={handleRazorpayPayment}>Pay Now</button>
            </div>
          </div>
        )}

        {paymentSuccess && (
          // <div className="webinar-success">
          //   <h3>Payment Successful!</h3>
          //   <p>Welcome, {userDetails.name}!</p>
          //   <p>Email: {userDetails.email}</p>
          //   <p>Course: {userDetails.course}</p>
          //   <p>Amount Paid: ₹{userDetails.amount_paid}</p>
          //   <p>Webinar Start Time: {new Date(userDetails.webinar_start_time).toLocaleString()}</p>
          //   <p>Registration Date: {new Date(userDetails.registration_date).toLocaleString()}</p>
          // </div>
          navigate(`/webinar-profile/${formData.email}`)

        )}
      </div>
    </div>
  );
};

export default Webinar;
