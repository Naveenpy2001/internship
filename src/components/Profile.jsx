import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user/${userId}/`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <h1>Profile Page</h1>
      {userData ? (
        <div>
          <p><strong>Name:</strong> {userData.first_name} {userData.last_name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone}</p>
          <p><strong>Address:</strong> {userData.address}, {userData.city}, {userData.state}, {userData.pincode}</p>
          <p><strong>Date of Birth:</strong> {userData.date_of_birth}</p>
          <p><strong>Gender:</strong> {userData.gender}</p>
          <p><strong>Course:</strong> {userData.course}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
