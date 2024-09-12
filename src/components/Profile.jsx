import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/profile/');
        setUserData(response.data);
      } catch (error) {
        setError('Error fetching user data');
      }
    };

    fetchUserData();
  }, []);

  if (error) return <div>{error}</div>;

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile Page</h1>
      <p><strong>Name:</strong> {userData.firstname} {userData.lastname}</p>
      <p><strong>Email:</strong> {userData.stdemail}</p>
      <p><strong>Course:</strong> {userData.course}</p>
      <p><strong>Date of Registration:</strong> {new Date(userData.date_registered).toLocaleDateString()}</p>
      <h2>Payment Details</h2>
      <p><strong>Payment ID:</strong> {userData.payment_id}</p>
      {/* Add more payment details as needed */}
    </div>
  );
};

export default Profile;
