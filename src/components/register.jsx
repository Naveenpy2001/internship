// import React, { useState } from 'react';
// import './course.css';

// import TSARIT from '../media/TSAR-IT.png'

// const Register = () => {
//   const [formData, setFormData] = useState({

//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log(formData);
//   };

//   const handleRazorpayPayment = () => {
//     // Initialize Razorpay payment here
//     var options = {
//       key: "YOUR_RAZORPAY_KEY", // Enter the Key ID generated from the Dashboard
//       amount: "50000", // Amount is in the smallest currency unit
//       currency: "INR",
//       name: "TSAR-IT",
//       description: "Registration Fee",
//       handler: function (response) {
//         alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
//       },
//       prefill: {
//         name: formData.firstname,
//         email: formData.stdemail,
//         contact: formData.phone
//       }
//     };
//     var paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div className="div">
//       <div className="register-form-container">
//         <form method="post" onSubmit={handleSubmit} encType="multipart/form-data" className='registerForm'>
//           <div className="flexCenter flexDir">
//           <div className="headerImg">
//             <img src={TSARIT} alt="TSAR-IT" style={{ width: '20%' }} />
//           </div>
//           <p className="whitText">Fill out the form carefully for registration</p>
//           </div>
//           <div className="form-sec-1">
// <div className="flexCenter">
// <div className="block">
//               <label htmlFor="firstname">First Name</label>
//               <input
//                 type="text"
//                 name="firstname"
//                 id="firstname"
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="block">
//               <label htmlFor="lastname">Last Name</label>
//               <input
//                 type="text"
//                 name="lastname"
//                 id="lastname"
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
// </div>
// <div className="flexCenter">
// <div className="block">
//               <label htmlFor="firstname">Passowrd : </label>
//               <input
//                 type="text"
//                 name="firstname"
//                 id="firstname"

//                 required
//               />
//             </div>
//             <div className="block">
//               <label htmlFor="lastname">Confirm Password : </label>
//               <input
//                 type="text"
//                 name="lastname"
//                 id="lastname"

//                 required
//               />
//             </div>
// </div>
//             <div className="block">
//               <label htmlFor="date">Date Of Birth :</label>
//               <input
//                 type="date"
//                 name="date"
//                 id="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//               />
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
//               </select>
//             </div>
//           </div>
//           <div className="form-sec-2">
//             <div className="block-address">
//               <label htmlFor="address">Full Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 id="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Street Address"
//                 required
//               />
//             </div>
//           <div className="flexCenter">
//           <div className="block address-city">
//               <div className="block-flex-addr">
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   value={formData.city}
//                   onChange={handleChange}
//                   placeholder="City"
//                   required
//                 />
//               </div>

//             </div>
//             <div className="block address">
//               <input
//                 type="text"
//                 name="state"
//                 id="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 placeholder="State / Province"
//                 required
//               />
//             </div>
//           </div>
//           </div>
//           <div className="block-email">
//             <div className="block">
//               <label htmlFor="stdemail">Student Email</label>
//               <input
//                 type="email"
//                 name="stdemail"
//                 id="stdemail"
//                 value={formData.stdemail}
//                 onChange={handleChange}
//                 placeholder="example@example.com"
//                 required
//               />
//             </div>
//             <div className="block">
//               <label htmlFor="phone">Phone No.</label>
//               <input
//                 type="text"
//                 name="phone"
//                 id="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="block course" style={{ width: '100%' }}>
//             <label htmlFor="course">Courses</label>
//             <select
//               name="course"
//               id="course"
//               value={formData.course}
//               onChange={handleChange}
//               required
//             >
//               {/* Replace this with your dynamic course options */}
//               <option value="" disabled>Select Course</option>
//               <option value="python">Python</option>
//               <option value="java">Java</option>
//               {/* Add more courses as needed */}
//             </select>
//           </div>
//           <div className="block" style={{ width: '100%' }}>
//             <label htmlFor="hr_name">Referred By (HR Name)</label>
//             <input
//               type="text"
//               name="hr_name"
//               id="hr_name"
//               value={formData.hr_name}
//               onChange={handleChange}
//             />
//           </div>
//           <label htmlFor="msg" className="label-textar">Additional Comments</label>
//           <textarea
//             name="msg"
//             id="msg"
//             cols="40"
//             rows="4"
//             value={formData.msg}
//             onChange={handleChange}
//           ></textarea>
//           <div className="block" style={{ width: '100%' }}>
//             <div className="qr-scanner">
//               <div className="qr-img">
//                 <h2>Registration Fee: ₹500/-</h2>
//                 <p style={{ fontSize: '13px', fontWeight: '400', textAlign: 'center' }}>
//                   Amount Is Not Refundable.*
//                 </p>
//               </div>
//               <button type="button" className="submit" onClick={handleRazorpayPayment}>Submit</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

//
// import React, { useState } from 'react';
// import './course.css';
// import TSARIT from '../media/TSAR-IT.png';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
//
// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     date: '',
//     gender: '',
//     address: '',
//     city: '',
//     state: '',
//     stdemail: '',
//     phone: '',
//     course: '',
//     hr_name: '',
//     msg: '',
//     password: '',
//     confirm_password: ''
//   });
//   const [paymentId, setPaymentId] = useState('');
//   const navigate = useNavigate();
//
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
//
//   const handleSubmit = async () => {
//     if (formData.password !== formData.confirm_password) {
//       alert('Passwords do not match!');
//       return;
//     }
//
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/register/', {
//         ...formData,
//         payment_id: paymentId
//       });
//       if (response.status === 200) {
//         alert('success. then redirect to profile page')
//         navigate('/Profile'); // Redirect to profile page
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };
//
//   const handleRazorpayPayment = () => {
//     if (!window.Razorpay) {
//       console.error('Razorpay SDK not loaded');
//       return;
//     }
//
//     var options = {
//       key: "rzp_live_oRtGw5y3RbD9MH", // Enter the Key ID generated from the Dashboard
//       amount: "100", // Amount is in the smallest currency unit (e.g., paise)
//       currency: "INR",
//       name: "TSAR-IT",
//       description: "Registration Fee",
//       handler: function (response) {
//         setPaymentId(response.razorpay_payment_id);
//         handleSubmit(); // Call handleSubmit to register the user after payment
//         alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
//       },
//       prefill: {
//         name: formData.firstname,
//         email: formData.stdemail,
//         contact: formData.phone
//       }
//     };
//
//     var paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };
//
//   return (
//     <div className="div">
//       <div className="register-form-container">
//         <form method="post" encType="multipart/form-data" className='registerForm'>
//           <div className="flexCenter flexDir">
//             <div className="headerImg">
//               <img src={TSARIT} alt="TSAR-IT" style={{ width: '20%' }} />
//             </div>
//             <p className="whitText">Fill out the form carefully for registration</p>
//           </div>
//           <div className="form-sec-1">
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
//                 <label htmlFor="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="block">
//                 <label htmlFor="confirm_password">Confirm Password</label>
//                 <input
//                   type="password"
//                   name="confirm_password"
//                   id="confirm_password"
//                   value={formData.confirm_password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="block">
//               <label htmlFor="date">Date Of Birth:</label>
//               <input
//                 type="date"
//                 name="date"
//                 id="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//               />
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
//               </select>
//             </div>
//           </div>
//           <div className="form-sec-2">
//             <div className="block-address">
//               <label htmlFor="address">Full Address</label>
//               <input
//                 type="text"
//                 name="address"
//                 id="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Street Address"
//                 required
//               />
//             </div>
//             <div className="flexCenter">
//               <div className="block address-city">
//                 <div className="block-flex-addr">
//                   <input
//                     type="text"
//                     name="city"
//                     id="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     placeholder="City"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="block address">
//                 <input
//                   type="text"
//                   name="state"
//                   id="state"
//                   value={formData.state}
//                   onChange={handleChange}
//                   placeholder="State / Province"
//                   required
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="block-email">
//             <div className="block">
//               <label htmlFor="stdemail">Student Email</label>
//               <input
//                 type="email"
//                 name="stdemail"
//                 id="stdemail"
//                 value={formData.stdemail}
//                 onChange={handleChange}
//                 placeholder="example@example.com"
//                 required
//               />
//             </div>
//             <div className="block">
//               <label htmlFor="phone">Phone No.</label>
//               <input
//                 type="text"
//                 name="phone"
//                 id="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="block course" style={{ width: '100%' }}>
//             <label htmlFor="course">Courses</label>
//             <select
//               name="course"
//               id="course"
//               value={formData.course}
//               onChange={handleChange}
//               required
//             >
//               <option value="" disabled>Select Course</option>
//               <option value="python">Python</option>
//               <option value="java">Java</option>
//               {/* Add more courses as needed */}
//             </select>
//           </div>
//           <div className="block" style={{ width: '100%' }}>
//             <div className="qr-scanner">
//               <div className="qr-img">
//                 <h2>Registration Fee: ₹500/-</h2>
//                 <p style={{ fontSize: '13px', fontWeight: '400', textAlign: 'center' }}>
//                   Amount Is Not Refundable.*
//                 </p>
//               </div>
//               <button type="button" className="submit" onClick={handleRazorpayPayment}>Pay to Register</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
//
// export default Register;
//


import React, { useState } from 'react';
import './course.css';
import TSARIT from '../media/TSAR-IT.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [currentTab, setCurrentTab] = useState(1); // For navigating between tabs
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    date: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    stdemail: '',
    phone: '',
    course: '',
    hr_name: '',
    msg: '',
    password: '',
    confirm_password: ''
  });
  const [paymentId, setPaymentId] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (formData.password !== formData.confirm_password) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register/', {
        ...formData,
        payment_id: paymentId
      });
      if (response.status === 200) {
        alert('Success. Redirecting to profile page.');
        navigate('/Profile'); // Redirect to profile page
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleRazorpayPayment = () => {
    if (!window.Razorpay) {
      console.error('Razorpay SDK not loaded');
      return;
    }

    var options = {
      key: "rzp_live_oRtGw5y3RbD9MH", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in paise, so 50000 equals ₹500
      currency: "INR",
      name: "TSAR-IT",
      description: "Registration Fee",
      handler: function (response) {
        setPaymentId(response.razorpay_payment_id);
        handleSubmit(); // Call handleSubmit to register the user after payment
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: formData.firstname,
        email: formData.stdemail,
        contact: formData.phone
      }
    };

    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const nextTab = () => {
    setCurrentTab(currentTab + 1);
  };

  const prevTab = () => {
    setCurrentTab(currentTab - 1);
  };

  return (
    <div className="div">
      <div className="register-form-container">
        <div className="flexCenter flexDir">
          <div className="headerImg">
            <img src={TSARIT} alt="TSAR-IT" style={{ width: '20%' }} />
          </div>
          <p className="whitText">Fill out the form carefully for registration</p>
        </div>

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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="block">
                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="block">
              <label htmlFor="date">Date Of Birth</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
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
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button type="button" className="submit" onClick={nextTab}>Next</button>
          </div>
        )}

        {currentTab === 2 && (
          <div className="form-sec-2">
            <h3>Address Information</h3>
            <div className="block-address">
              <label htmlFor="address">Full Address</label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address"
                required
              />
            </div>
            <div className="flexCenter">
              <div className="block address-city">
                <div className="block-flex-addr">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                  />
                </div>
              </div>
              <div className="block address">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State / Province"
                  required
                />
              </div>
            </div>
            <button type="button" className="submit" onClick={prevTab}>Previous</button>
            <button type="button" className="submit" onClick={nextTab}>Next</button>
          </div>
        )}

        {currentTab === 3 && (
          <div className="form-sec-3">
            <h3>Course Information</h3>
            <div className="block course" style={{ width: '100%' }}>
              <label htmlFor="course">Courses</label>
              <select
                name="course"
                id="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Course</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </select>
            </div>
            <button type="button" className="submit" onClick={prevTab}>Previous</button>
            <button type="button" className="submit" onClick={nextTab}>Next</button>
          </div>
        )}

        {currentTab === 4 && (
          <div className="form-sec-4">
            <h3>Payment</h3>
            <div className="qr-scanner">
              <div className="qr-img">
                <h2>Registration Fee: ₹500/-</h2>
                <p style={{ fontSize: '13px', fontWeight: '400', textAlign: 'center' }}>
                  Amount Is Not Refundable.*
                </p>
              </div>
              <button type="button" className="submit" onClick={handleRazorpayPayment}>Pay to Register</button>
            </div>
            <button type="button" className="submit" onClick={prevTab}>Previous</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
