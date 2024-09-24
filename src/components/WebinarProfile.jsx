import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './WebinarProfile.css'; // Assuming you have styling for profile

const WebinarProfile = () => {
  const { email } = useParams(); // Get the email from the route params
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/get-user-details/${email}/`);
        setUserDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user details.');
        setLoading(false);
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, [email]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <div className="webinar-profile">
      <h2>Webinar Profile</h2>
      <div className="profile-details">
        <h3>Welcome, {userDetails.name}!</h3>
        <p><strong>Email:</strong> {userDetails.email}</p>
        <p><strong>Course:</strong> {userDetails.course}</p>
        <p><strong>Amount Paid:</strong> ₹{userDetails.amount_paid}</p>
        <p><strong>Webinar Start Time:</strong> {new Date(userDetails.webinar_start_time).toLocaleString()}</p>
        <p><strong>Registration Date:</strong> {new Date(userDetails.registration_date).toLocaleString()}</p>

        {/* Download Certificate */}
        {userDetails.certificate_url ? (
          <div className="certificate-download">
            <a href={`http://127.0.0.1:8000/api/generate-certificate/${email}/`} download>
          <button className='btn-primary'>Download Certificate</button>
        </a>
          </div>
        ) : (
          <p>Certificate not available yet.</p>
        )}
      </div>
    </div>
  );
};

export default WebinarProfile;
