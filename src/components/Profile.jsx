// Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

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
    <div className="profile">
      <h2>Profile</h2>
      {profileData ? (
        <div>
          <p><strong>Name:</strong> {profileData.first_name} {profileData.last_name}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Phone:</strong> {profileData.phone}</p>
          <p><strong>Address:</strong> {profileData.address}</p>
          <p><strong>Course:</strong> {profileData.course}</p>
          <p><strong>Date of Birth:</strong> {profileData.date_of_birth}</p>
          <p><strong>Gender:</strong> {profileData.gender}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
