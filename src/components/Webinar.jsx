
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Webinar.css';
import { useNavigate } from 'react-router-dom';

import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import Footer from '../Footer';

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
          const response = await axios.get(`https://internship.tsaritservices.com/findByEmail/${formData.email}`);
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
      const response = await axios.get(`https://internship.tsaritservices.com/findByEmail/${formData.email}`);
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
    try {
      const response = await axios.post('https://internship.tsaritservices.com/create-order-webinar', {
          amount: formData.amount
      });
      console.log('Response from backend:', response.data); 
      if (response.status === 200) {
          const options = {
              key: 'rzp_live_oRtGw5y3RbD9MH',
              amount: formData.amount * 100 ,
              currency: 'INR',
              name: 'TSAR-IT',
              description: 'Test Transaction',
              order_id: response.data.order_id,
              auto_capture: true,
              handler: async function (response) {
                  try {
                      await axios.post('https://internship.tsaritservices.com/verify-payment-webinar', {
                          order_id: response.order_id,
                          payment_id: response.payment_id,
                          signature: response.signature,
                          amount: response.amount
                      });
                      alert('Payment successful!');
                      setPaymentSuccess(true);
                      console.log("payment successfull")
                      // Optionally, navigate to a success page or home page
                  } catch (error) {
                      console.error('Payment verification failed:', error);
                      alert('Payment verification failed.');
                  }
              },
              prefill: {
                  name: formData.firstname,
                  email: formData.email,
                  contact: formData.phone
              },
              theme: {
                  color: '#3399cc'
              }
          };

          const rzp = new window.Razorpay(options);
          rzp.open();
      } else {
          console.error('Unexpected status code from order creation:', response.status);
          alert('Failed to create payment order.');
      }
  } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to initiate payment.');
      
  } finally {
      setIsLoading(false);
  }

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://internship.tsaritservices.com/webinarsave', formData);
      if (response.status === 200) {
        setPaymentStatus('pending');
      }
      console.log("saved successfull");
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('Registration failed.');
    }
  };

  return (
    <>
      <main className="animation" style={{display:'flex',alignItems:'center'}}>
        <a href="/" className="pages">
          Home  
        </a> 
        <MdOutlineKeyboardArrowRight />
        <span className="pages">
          Webinar
        </span>
      </main>
      <div className="webinarrr-banner">
        <img src="https://theculturemastery.com/wp-content/uploads/2018/05/webinar.banner-e1526346630271.jpg" alt="Webinar Banner" />
      </div>
    <div className="webinarrr-container">
     
     <div className="webinarrr-content-highlight">
       <h2>Upcoming Internship Webinar 2k24</h2>
       <br />
       <p>
         Join our comprehensive internship webinar to kickstart your career in the tech industry.
         This webinar will cover a variety of trending topics and provide you with hands-on experience
         and real-world projects. You’ll get guidance from experienced industry professionals and
         explore career paths in fields like software development, data science, AI, and web development.
       </p>
       <h3>Key Topics Covered:</h3>
       <ul className="webinarrr-topics">
         <li>Introduction to Programming Java Fullstack</li>
         <li>Object-Oriented Programming Concepts</li>
         <li>Building Web Applications with React.js and Springboot</li>
         <li>Understanding Databases and SQL</li>
         <li>Hands-on Projects and Case Studies</li>
       </ul>
       <p>
         Don’t miss out on this chance to enhance your skills and knowledge. Register now to secure your spot in the webinar.
       </p>
       <h4>Why Attend:</h4>
       <ul className="webinarrr-benefits">
         <li>Live project experience</li>
         <li>Interaction with industry experts</li>
         <li>Certificate of participation</li>
         <li>Career guidance and mentorship</li>
       </ul>
     </div>

     {/* Registration Form Section (Smaller Form) */}
     <div className="webinarrr-form-small">
       <h2>Register for the Internship Webinar</h2>
       <form onSubmit={handleSubmit}>
         <div className="webinarrr-form-group">
           <label htmlFor="name">Full Name:</label>
           <input
             type="text"
             id="name"
             name="name"
             value={formData.name}
             onChange={handleChange}
             required
             className="webinarrr-input"
           />
         </div>
         <div className="webinarrr-form-group">
           <label htmlFor="email">Email Address:</label>
           <input
             type="email"
             id="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             required
             className="webinarrr-input"
           />
         </div>
         <div className="webinarrr-form-group">
           <label htmlFor="phone">Phone Number:</label>
           <input
             type="text"
             id="phone"
             name="phone"
             value={formData.phone}
             onChange={handleChange}
             required
             className="webinarrr-input"
           />
         </div>
         <div className="webinarrr-form-group">
           <label htmlFor="course">Course:</label>
           <select name="course" value={formData.course} onChange={handleChange} required className="webinarrr-input">
             <option value="">Select a Course</option>
             <option value="python">Python</option>
             <option value="java">Java</option>
             <option value="web-development">Web Development</option>
           </select>
         </div>
         <div className="webinarrr-form-group webinarrr-checkbox-group">
           <label className="webinarrr-checkbox-label">
             <input
               type="checkbox"
               name="agree"
               checked={formData.agree}
               onChange={handleChange}
               required
               className="webinarrr-checkbox"
             />
             <span className="webinarrr-accept-terms">
               I agree to the terms and conditions
             </span>
           </label>
         </div>
         <button type="submit" className="webinarrr-btn">Register</button>
       </form>
     </div>
   </div>
  <Footer />
    </>
  );
  
};

export default Webinar;
