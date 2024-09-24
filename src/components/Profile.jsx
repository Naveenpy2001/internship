// Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="profile-container">
      <h2 className="profile-title">Welcome, {user.firstname} {user.lastname}!</h2>
      <div className="profile-details">
        <p className="profile-info"><strong>Email:</strong> {user.email}</p>
        <p className="profile-info"><strong>Phone:</strong> {user.phone}</p>
        <p className="profile-info"><strong>Date of Birth:</strong> {user.date_of_birth}</p>
        <p className="profile-info"><strong>Gender:</strong> {user.gender}</p>
        <p className="profile-info"><strong>Address:</strong> {user.address}</p>
        <p className="profile-info"><strong>Course Enrolled:</strong> {user.course}</p>
        <p className="profile-info"><strong>Amount Paid:</strong> ₹{user.amount}</p>
      </div>
    </div>
  );
};

export default Profile;
