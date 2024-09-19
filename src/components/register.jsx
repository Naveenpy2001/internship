
import React, { useState } from 'react';
import axios from 'axios';
import './course.css'; // Ensure this CSS file contains styles for highlighting and borders.

const Register = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [isRegistered, setIsRegistered] = useState(false); // Track registration success
  const [paymentSuccess, setPaymentSuccess] = useState(false); 
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    date_of_birth_day: '',
    date_of_birth_month: '',
    date_of_birth_year: '',
    gender: '',
    address: '',
    course: '',
    amount: '',
  });
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isTermsChecked) {
        alert('Please accept the Terms and Conditions');
        return;
    }

    const date_of_birth = `${formData.date_of_birth_year}-${formData.date_of_birth_month}-${formData.date_of_birth_day}`;
    setIsLoading(true);

    try {
        const response = await axios.post('http://localhost:8080/save', {
            email: formData.email,
            firstname: formData.firstname,
            lastname: formData.lastname,
            phone: formData.phone,
            address: formData.address,
            course: formData.course,
            date_of_birth,
            gender: formData.gender
        });

        if (response.status === 200) {
            setIsRegistered(true);
            setCurrentTab(2);
        } else {
            console.log('Unexpected status code:', response.status);
        }
    } catch (error) {
        if (error.response && error.response.status === 400) {
            setUserExists(true);
            console.log('User already exists, please log in.');
            alert('User already exists. Please log in.');
        } else {
            console.error('Error during registration:', error);
            alert('An error occurred during registration.');
        }
    } finally {
        setIsLoading(false);
    }
};


const initiatePayment = async () => {
  if (!isTermsChecked) {
      alert('Please accept the Terms and Conditions');
      return;
  }

  if (!formData.amount) {
      alert('Please enter an amount.');
      return;
  }

  setIsLoading(true);

  try {
      const response = await axios.post('http://localhost:8080/create-order', {
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
                      await axios.post('http://localhost:8080/verify-payment', {
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
};


  return (
    <div className="div">
      <div className="register-form-container">
        <div className="flexCenter flexDir">
          <p>Fill out the form carefully for registration</p>
        </div>

        <div className="step-indicator">
          <p>Step {currentTab} of {isRegistered ? 2 : 1}</p>
        </div>

        {userExists && <p className="error-message">User already registered. Please log in.</p>}
        {isLoading && <div className="loading-overlay">Submitting...</div>}

        {currentTab === 1 && (
          <div className="form-sec-1">
            <h3>Student Information</h3>
            <div className="flexCenter">
              <div className="block">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="block">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flexCenter">
              <div className="block">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="block">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Date of Birth Section */}
            <div className="flexCenter">
              <div className="block">
                <label htmlFor="date_of_birth_day">Date of Birth</label>
                <select
                  name="date_of_birth_day"
                  id="date_of_birth_day"
                  value={formData.date_of_birth_day}
                  onChange={handleChange}
                  required
                >
                  <option value="">Day</option>
                  {[...Array(31)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select
                  name="date_of_birth_month"
                  id="date_of_birth_month"
                  value={formData.date_of_birth_month}
                  onChange={handleChange}
                  required
                >
                  <option value="">Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select
                  name="date_of_birth_year"
                  id="date_of_birth_year"
                  value={formData.date_of_birth_year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Year</option>
                  {[...Array(100)].map((_, i) => (
                    <option key={i} value={2023 - i}>{2023 - i}</option>
                  ))}
                </select>
              </div>
              <div className="block">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="block">
              <label htmlFor="course">Select Course</label>
              <select
                name="course"
                id="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Course</option>
                <option value="java_fullstack">Java FullStack</option>
                <option value="python">Python</option>
                <option value="web_development">Web Development</option>
              </select>
            </div>
            <div className="block">
              <label htmlFor="address">Full Address</label>
              <textarea
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="terms-section">
              <input
                type="checkbox"
                id="terms"
                checked={isTermsChecked}
                onChange={(e) => setIsTermsChecked(e.target.checked)}
              />
              <label htmlFor="terms">I accept the Terms and Conditions</label>
            </div>
            <button type="submit" className="register-btn" onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        )}

{currentTab === 2 && (
            <div className="form-sec-2">
              <h3>Payment Information</h3>
              <div className="block">
                <label htmlFor="amount">Enter Payment Amount</label>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>
              <button className="pay-btn" onClick={initiatePayment} disabled={isLoading}>
                {isLoading ? 'Processing...' : 'Pay Now'}
              </button>
            </div>
          )}
        
     

      {paymentSuccess && (
        <div className="payment-success">
          <h3>Payment Successful!</h3>
          <p>Thank you, {formData.firstname} {formData.lastname}!</p>
          <p>Email: {formData.email}</p>
          <p>Amount Paid: ₹{formData.amount}</p>
          {/* Add any additional information you want to show */}
        </div>
      )}
      </div>
    </div>
  );
};

export default Register;
