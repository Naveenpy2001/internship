import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import './profilePage.css'
import Footer from '../Footer';

const Profile = () => {
  const [user, setProfileData] = useState(null);


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/profile/');
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, []);



  return (
    <>
    <main className="animation" style={{display:'flex',alignItems:'center'}}>
        <a href="/" className="pages">
          Home  
        </a> 
        <MdOutlineKeyboardArrowRight />
        <span className="pages">
          Profile
        </span>
      </main>
    <div className="profile-container">
      <h2 className="profile-title">Welcome, Name !</h2>
      <div className="profile-details">
        <p className="profile-info"><strong>Email:</strong> </p>
        <p className="profile-info"><strong>Phone:</strong> </p>
        <p className="profile-info"><strong>Date of Birth:</strong> </p>
        <p className="profile-info"><strong>Gender:</strong> </p>
        <p className="profile-info"><strong>Address:</strong> </p>
        <p className="profile-info"><strong>Course Enrolled:</strong> </p>
        <p className="profile-info"><strong>Amount Paid:</strong> ₹</p>
      </div>
      <button className="profile-button-home" >Go Home</button>
      <div className="profile-footer">
        <p className="profile-note">Note: Please ensure that your profile details are accurate. Contact support if any changes are required.</p>
        <p className="profile-terms">By continuing, you agree to our <a href="/terms" className="profile-link">Terms of Service</a> and <a href="/privacy" className="profile-link">Privacy Policy</a>.</p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Profile;
