// import React, { useEffect, useState } from 'react';
// import './course.css'; // Ensure this CSS file contains styles for highlighting and borders.
// import axios from 'axios';

// const Register = () => {
//   const [currentTab, setCurrentTab] = useState(1);
//   const [isRegistered, setIsRegistered] = useState(false); // Track registration success
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     phone: '',
//     date_of_birth_day: '',
//     date_of_birth_month: '',
//     date_of_birth_year: '',
//     gender: '',
//     address: '',
//     city: '',
//     state: '',
//     pincode: '',
//     course: '',
//   });
//   const [isTermsChecked, setIsTermsChecked] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [userExists, setUserExists] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // Track loading state

//   const validateForm = () => {
//     const errors = {};
//     if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone || !formData.course) {
//       errors.general = 'Please fill all required fields in Tab 1.';
//     }
//     if (!formData.date_of_birth_day || !formData.date_of_birth_month || !formData.date_of_birth_year || !formData.gender) {
//       errors.general = 'Please fill all required fields in Tab 2.';
//     }
//     if (!formData.address || !formData.city || !formData.state || !formData.pincode) {
//       errors.general = 'Please fill all required fields in Tab 3.';
//     }
//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async () => {
//     if (!isTermsChecked) {
//       alert('Please accept the Terms and Conditions');
//       return;
//     }

//     if (!validateForm()) return;

//     const date_of_birth = `${formData.date_of_birth_year}-${formData.date_of_birth_month}-${formData.date_of_birth_day}`;
//     setIsLoading(true); // Start loading animation

//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/register_user/', {
//         email: formData.email,
//         first_name: formData.firstname,
//         last_name: formData.lastname,
//         phone: formData.phone,
//         address: formData.address,
//         city: formData.city,
//         state: formData.state,
//         pincode: formData.pincode,
//         course: formData.course,
//         date_of_birth,
//         gender: formData.gender
//       });

//       if (response.status === 201) {
//         setIsRegistered(true); // Set registration success to true
//         setCurrentTab(4); // Navigate to Tab 4 on success
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setUserExists(true);
//       } else {
//         console.error('Error during registration:', error);
//       }
//     } finally {
//       setIsLoading(false); // End loading animation
//     }
//   };

//   const nextTab = () => {
//     setCurrentTab(currentTab + 1);
//   };

//   const prevTab = () => {
//     setCurrentTab(currentTab - 1);
//   };

//   useEffect(() => {
//     if (currentTab === 3) {
//       const form = document.getElementById('razorpay-form');
//       if (form) {
//         const script = document.createElement('script');
//         script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
//         script.setAttribute('data-payment_button_id', 'pl_Oo1ZcFA0kdPqOn');
//         script.async = true;
//         form.appendChild(script);
//       }
//     }
//   }, [currentTab]);

//   return (
//     <div className="div">
//       <div className="register-form-container">
//         <div className="flexCenter flexDir">
//           <p>Fill out the form carefully for registration</p>
//         </div>

//         <div className="step-indicator">
//           <p>Step {currentTab} of {isRegistered ? 4 : 4}</p>
//         </div>

//         {formErrors.general && <p className="error-message">{formErrors.general}</p>}
//         {userExists && <p className="error-message">User already registered. Please log in.</p>}

//         {isLoading && <div className="loading-overlay">Submitting...</div>}

//         {currentTab === 1 && (
//           <div className="form-sec-1 register_payment-section">
//             <h3>Student Information</h3>
//             <div className="flexCenter">
//               <div className="block">
//                 <label htmlFor="firstname">First Name</label>
//                 <input
//                   type="text"
//                   name="firstname"
//                   id="firstname"
//                   value={formData.firstname}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="block">
//                 <label htmlFor="lastname">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastname"
//                   id="lastname"
//                   value={formData.lastname}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flexCenter">
//               <div className="block">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="block">
//                 <label htmlFor="phone">Phone</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   id="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="block">
//               <label htmlFor="course">Select Course</label>
//               <select
//                 name="course"
//                 id="course"
//                 value={formData.course}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select Course</option>
//                 <option value="java_fullstack">Java FullStack</option>
//                 <option value="python">Python</option>
//                 <option value="web_development">Web Development</option>
//               </select>
//             </div>

//             <div className="flexEnd">
//             <button type="button" className="register_payment-button register_next-button" onClick={nextTab}>Next</button>
//             </div>
//           </div>
//         )}

//         {currentTab === 2 && (
//           <div className="register_payment-section">
//             <h3>Date of Birth & Gender</h3>
//             <div className="block">
//               <label htmlFor="date_of_birth">Date Of Birth</label>
//               <div className="date-picker">
//                 <div className="flexCenter">
//                   <select
//                     name="date_of_birth_day"
//                     id="date_of_birth_day"
//                     value={formData.date_of_birth_day}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="" disabled>Select Day</option>
//                     {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
//                       <option key={day} value={day}>{day}</option>
//                     ))}
//                   </select>
//                   <select
//                     name="date_of_birth_month"
//                     id="date_of_birth_month"
//                     value={formData.date_of_birth_month}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="" disabled>Select Month</option>
//                     {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
//                       <option key={month} value={month}>{month}</option>
//                     ))}
//                   </select>
//                   <select
//                     name="date_of_birth_year"
//                     id="date_of_birth_year"
//                     value={formData.date_of_birth_year}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="" disabled>Select Year</option>
//                     {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
//                       <option key={year} value={year}>{year}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="block">
//               <label htmlFor="gender">Gender</label>
//               <select
//                 name="gender"
//                 id="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="" disabled>Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             <div className="flexCenter">
//             <div className="flexStart">
//             <button type="button" className="register_prev-button" onClick={prevTab}>Previous</button>
//             </div>
//             <div className="flexEnd">
//             <button type="button" className="register_payment-button register_next-button" onClick={nextTab}>Next</button>
//             </div>
//             </div>
//           </div>
//         )}

//         {currentTab === 3 && (
//           <div className="register_payment-section">
//             <h3>Address Information</h3>
//             <div className="block">
//               <label htmlFor="address">Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 id="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flexCenter">
//               <div className="block">
//                 <label htmlFor="city">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="block">
//                 <label htmlFor="state">State</label>
//                 <input
//                   type="text"
//                   name="state"
//                   id="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="block">
//               <label htmlFor="pincode">Pincode</label>
//               <input
//                 type="text"
//                 name="pincode"
//                 id="pincode"
//                 value={formData.pincode}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <center>
//               <h2>
//                 Pay 500 /- for Registration
//               </h2>
//             </center>
//             <form id="razorpay-form" className="highlighted-form">
//               {/* Razorpay button will be injected here */}
//             </form>

//           <p className="note"><span style={{color:'red',fontSize:'14px'}}> *</span> Click above button for payment</p>

//             <div className='divTag'>
//               <div className="flexCheckBox">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   checked={isTermsChecked}
//                   onChange={() => setIsTermsChecked(!isTermsChecked)}
//                 />
//                 <label htmlFor="terms">I accept the Terms and Conditions</label>
//               </div>
//             </div>
//               <div className="flexCenter">
//               <div className="flexEnd">
//                 <div className="flexStart">
//                 <button type="button" className="register_prev-button" onClick={prevTab}>Previous</button>
//                 </div>
//               <button
//                 type="button"
//                 className="register_payment-button"
//                 onClick={handleSubmit}
//               >
//                 Registration
//               </button>
//               </div>

            
//               </div>
//           </div>
//         )}

//         {currentTab === 4 && isRegistered && (
//           <div className="register_success-section">
//             <h3>Registration Successful</h3>
//             <p>Thank you for registering! Your details have been successfully submitted.</p>
//             <p><strong>Name:</strong> {formData.firstname} {formData.lastname}</p>
//             <p><strong>Selected Course:</strong> {formData.course}</p>
//             <p><strong>Email:</strong> {formData.email}</p>
//             <div className="flexCenter">
//             <a href="/">
//             <button className='HomeButton'>
//               Explore More 
//             </button>
//             </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import axios from 'axios';
import './course.css'; // Ensure this CSS file contains styles for highlighting and borders.

const Register = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [isRegistered, setIsRegistered] = useState(false); // Track registration success
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
        const response = await axios.post('http://127.0.0.1:8000/api/register_user/', {
            email: formData.email,
            first_name: formData.firstname,
            last_name: formData.lastname,
            phone: formData.phone,
            address: formData.address,
            course: formData.course,
            date_of_birth,
            gender: formData.gender
        });

        if (response.status === 201) {
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
      const response = await axios.post('http://127.0.0.1:8000/api/create_order/', {
          amount: formData.amount
      });

      if (response.status === 200) {
          const options = {
              key: 'rzp_live_oRtGw5y3RbD9MH',
              amount: formData.amount * 100,
              currency: 'INR',
              name: 'TSAR-IT',
              description: 'Test Transaction',
              order_id: response.data.order_id,
              auto_capture: true,
              handler: async function (response) {
                  try {
                      await axios.post('http://127.0.0.1:8000/api/verify_payment/', {
                          order_id: response.razorpay_order_id,
                          payment_id: response.razorpay_payment_id,
                          signature: response.razorpay_signature
                      });
                      alert('Payment successful!');
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
      </div>
    </div>
  );
};

export default Register;
