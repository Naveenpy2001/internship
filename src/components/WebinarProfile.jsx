// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './WebinarProfile.css'; // Assuming you have styling for profile

// const WebinarProfile = () => {
//   const { email } = useParams(); // Get the email from the route params
//   const [userDetails, setUserDetails] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); // Add error state

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get(`https://internship.tsaritservices.com/findByEmail/${email}`);
//         setUserDetails(response.data);
//         setLoading(false);
//         console.log(response.data)
//       } catch (error) {
//         setError('Error fetching user details.');
//         setLoading(false);
//         console.error('Error fetching user details:', error);
//       }
//     };

//     if (email) { // Ensure the email is available before calling the API
//       fetchUserDetails();
//     }
//   }, [email]);

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   // if (error) {
//   //   return <p>{error}</p>;
//   // }

//   return (
//     <>
//       <div className="webinarprofile-container">
//       <h2 className="webinarprofile-heading">Webinar Profile</h2>
//       <div className="webinarprofile-details">
//         <h3 className="webinarprofile-name">Welcome, {userDetails.name}!</h3>
//         <p className="webinarprofile-text"><strong className="webinarprofile-strong">Email:</strong> {userDetails.email}</p>
//         <p className="webinarprofile-text"><strong className="webinarprofile-strong">Course:</strong> {userDetails.course}</p>
//         <p className="webinarprofile-text"><strong className="webinarprofile-strong">Amount Paid:</strong> ₹{userDetails.amount}</p>
//         <p className="webinarprofile-text"><strong className="webinarprofile-strong">Webinar Start Time:</strong> {new Date(userDetails.webinar_start_time).toLocaleString()}</p>
//         <p className="webinarprofile-text"><strong className="webinarprofile-strong">Registration Date:</strong> {new Date(userDetails.registration_date).toLocaleString()}</p>
  
//         {/* Download Certificate */}
//         {userDetails.certificate_url ? (
//           <div className="webinarprofile-certificate">
//             <a href={`http://127.0.0.1:8000/api/generate-certificate/${email}/`} className="webinarprofile-certificate-link" download>
//               <button className="webinarprofile-btn-primary">Download Certificate</button>
//             </a>
//           </div>
//         ) : (
//           <p className="webinarprofile-certificate-message">Certificate not available yet.</p>
//         )}
//       </div>

//     </div>
//       <center>
//         <button className="webinarprofile-btn-primary">
//           expolore courses
//         </button>
//       </center>
//     </>
//   );
  
// };

// export default WebinarProfile;


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
        const response = await axios.get(`https://internship.tsaritservices.com/findByEmail/${email}`);
        setUserDetails(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        setError('Error fetching user details.');
        setLoading(false);
        console.error('Error fetching user details:', error);
      }
    };

    if (email) { // Ensure the email is available before calling the API
      fetchUserDetails();
    }
  }, [email]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  return (
    <>
    <div className="webinarprofile-container">
      <h2 className="webinarprofile-heading">Webinar Profile</h2>

      <div className="webinarprofile-details">
        <h3 className="webinarprofile-name">Welcome, {userDetails.name}!</h3>
        <p className="webinarprofile-text">
          <strong className="webinarprofile-strong">Email:</strong> {userDetails.email}
        </p>
        <p className="webinarprofile-text">
          <strong className="webinarprofile-strong">Course:</strong> {userDetails.course}
        </p>
        <p className="webinarprofile-text">
          <strong className="webinarprofile-strong">Amount Paid:</strong> ₹{userDetails.amount}
        </p>
        <p className="webinarprofile-text">
          <strong className="webinarprofile-strong">Webinar Start Time:</strong> {new Date(userDetails.webinar_start_time).toLocaleString()}
        </p>
        <p className="webinarprofile-text">
          <strong className="webinarprofile-strong">Registration Date:</strong> {new Date(userDetails.registration_date).toLocaleString()}
        </p>

        {/* Download Certificate */}
        {userDetails.certificate_url ? (
          <div className="webinarprofile-certificate">
            <a href={`http://127.0.0.1:8000/api/generate-certificate/${email}/`} className="webinarprofile-certificate-link" download>
              <button className="webinarprofile-btn-primary">Download Certificate</button>
            </a>
          </div>
        ) : (
          <p className="webinarprofile-certificate-message">Certificate not available yet.</p>
        )}
      </div>
        
    </div>
    <center>
          <a href="/">
          <button className='exploreeee'>Explore More</button>
          </a>
        </center>
      <div className="webinarprofile-info pad">
        <h3 className="webinarprofile-subheading">About the Webinar</h3>
        <p className="webinarprofile-text black">This webinar is focused on the key strategies to improve your technical skills, hosted by top industry experts. You will gain insights into the latest technologies, tools, and methodologies to excel in your field.</p>

        <h4 className="webinarprofile-subheading">Key Topics Covered:</h4>
        <ul className="webinarprofile-list">
          <li>Understanding the latest Java-Fullstack</li>
          <li>Effective coding practices</li>
          <li>Building scalable web applications</li>
          <li>Career advice from industry professionals</li>
        </ul>

        <h4 className="webinarprofile-subheading">Speaker:</h4>
        <p className="webinarprofile-text black">John Doe, Senior Software Engineer at TechCorp, with 15+ years of experience in full-stack development and cloud computing.</p>


      </div>
    </>
  );
};

export default WebinarProfile;
