import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [webinarRegistrations, setWebinarRegistrations] = useState([]);
  const [internshipRegistrations, setInternshipRegistrations] = useState([]);
  const [studentsRegistered, setStudentsRegistered] = useState(0);
  const [studentFees, setStudentFees] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const webinarResponse = await axios.get('http://127.0.0.1:8000/api/webinar-registrations/');
        const internshipResponse = await axios.get('http://127.0.0.1:8000/api/internship-registrations/');
        const studentCountResponse = await axios.get('http://127.0.0.1:8000/api/students-registered/');
        const studentFeeResponse = await axios.get('http://127.0.0.1:8000/api/student-fees/');
        
        setWebinarRegistrations(webinarResponse.data);
        setInternshipRegistrations(internshipResponse.data);
        setStudentsRegistered(studentCountResponse.data.total);
        setStudentFees(studentFeeResponse.data);
      } catch (error) {
        console.error('Error fetching registration data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedStartDate(selectedDate);
    
    const currentTime = new Date();
    const selectedTime = new Date(selectedDate);
    
    // Only show times for today or after the selected date
    if (selectedTime > currentTime) {
      const available = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'];
      setAvailableTimes(available);
    } else {
      setAvailableTimes([]);
    }
  };

  return (
    <div className="dsh-dashboard-container">
      <div className="dsh-sidebar">
        <button 
          className={`dsh-tab-button ${activeTab === 'overview' ? 'dsh-active' : ''}`} 
          onClick={() => setActiveTab('overview')}
        >
          Dashboard Overview
        </button>
        <button 
          className={`dsh-tab-button ${activeTab === 'webinar' ? 'dsh-active' : ''}`} 
          onClick={() => setActiveTab('webinar')}
        >
          Webinar Registrations
        </button>
        <button 
          className={`dsh-tab-button ${activeTab === 'internship' ? 'dsh-active' : ''}`} 
          onClick={() => setActiveTab('internship')}
        >
          Internship Registrations
        </button>
        <button 
          className={`dsh-tab-button ${activeTab === 'fees' ? 'dsh-active' : ''}`} 
          onClick={() => setActiveTab('fees')}
        >
          Student Fees
        </button>
      </div>
      <div className="dsh-content">
        {activeTab === 'overview' && (
          <div className="dsh-overview">
            <h2 className="dsh-title">Dashboard Overview</h2>
            <div className="dsh-overview-tabs">
              <button className="dsh-tab-button-small" onClick={() => setActiveTab('webinar')}>
                Go to Webinar Registrations
              </button>
              <button className="dsh-tab-button-small" onClick={() => setActiveTab('fees')}>
                Go to Student Fees
              </button>
            </div>
          </div>
        )}
        {activeTab === 'webinar' && (
          <div className="dsh-webinar-registrations">
            <h2 className="dsh-title">Webinar Registrations</h2>
            <div style={{display:'flex'}}>
            <div className="dsh-date-picker">
              <label>Select Start Date: </label>
              <input 
                type="date" 
                value={selectedStartDate} 
                onChange={handleDateChange} 
                className="dsh-date-input" 
              />
              {availableTimes.length > 0 && (
                <div className="dsh-time-selector">
                  <label>Available Times: </label>
                  <select className="dsh-time-dropdown">
                    {availableTimes.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select> <br />
                  <button className="submitButton">submit</button>
                </div>
              )}
            </div>
            </div>
            <table className="dsh-table">
              <thead>
                <tr>
                  <th className="dsh-table-header">Name</th>
                  <th className="dsh-table-header">Email</th>
                  <th className="dsh-table-header">Date</th>
                </tr>
              </thead>
              <tbody>
                {webinarRegistrations.map((item) => (
                  <tr key={item.id}>
                    <td className="dsh-table-data">{item.name}</td>
                    <td className="dsh-table-data">{item.email}</td>
                    <td className="dsh-table-data">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'internship' && (
          <div className="dsh-internship-registrations">
            <h2 className="dsh-title">Internship Registrations</h2>
            <table className="dsh-table">
              <thead>
                <tr>
                  <th className="dsh-table-header">Name</th>
                  <th className="dsh-table-header">Email</th>
                  <th className="dsh-table-header">Start Date</th>
                </tr>
              </thead>
              <tbody>
                {internshipRegistrations.map((item) => (
                  <tr key={item.id}>
                    <td className="dsh-table-data">{item.name}</td>
                    <td className="dsh-table-data">{item.email}</td>
                    <td className="dsh-table-data">{item.startDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 'fees' && (
          <div className="dsh-student-fees">
            <h2 className="dsh-title">Student Fees</h2>
            <table className="dsh-table">
              <thead>
                <tr>
                  <th className="dsh-table-header">Name</th>
                  <th className="dsh-table-header">Email</th>
                  <th className="dsh-table-header">Selected Course</th>
                  <th className="dsh-table-header">Total Fee</th>
                  <th className="dsh-table-header">Pending Fee</th>
                  <th className="dsh-table-header">Referred HR Name</th>
                </tr>
              </thead>
              <tbody>
                {studentFees.map((item) => (
                  <tr key={item.id}>
                    <td className="dsh-table-data">{item.name}</td>
                    <td className="dsh-table-data">{item.email}</td>
                    <td className="dsh-table-data">{item.selectedCourse}</td>
                    <td className="dsh-table-data">₹{item.totalFee}</td>
                    <td className="dsh-table-data">₹{item.pendingFee}</td>
                    <td className="dsh-table-data">{item.referredHR}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
