import React, { useState } from 'react';
import '../css/Webinar.css';

const WebinarPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showSpeakerForm, setShowSpeakerForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  
  // Form states
  const [registrationData, setRegistrationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    webinarId: ''
  });
  
  const [speakerData, setSpeakerData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    topic: '',
    bio: ''
  });

  // Webinar data
  const upcomingWebinars = [
    {
      id: 1,
      title: "How to Crack Technical Interviews",
      date: "August 15, 2023",
      time: "6:00 PM - 7:30 PM IST",
      speaker: "Rahul Sharma (Senior Engineer, Google)",
      description: "Learn proven strategies to ace your technical interviews with tips from industry experts",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      id: 2,
      title: "Building Your First Full Stack Project",
      date: "August 22, 2023",
      time: "5:00 PM - 6:30 PM IST",
      speaker: "Priya Patel (Lead Developer, Amazon)",
      description: "Step-by-step guide to creating an impressive portfolio project using MERN stack",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
    }
  ];

  const pastWebinars = [
    {
      id: 3,
      title: "Getting Started with Data Science",
      date: "July 25, 2023",
      speaker: "Dr. Ananya Gupta (Data Scientist, Microsoft)",
      recording: "https://youtube.com/embed/example1",
      resources: ["Slides PDF", "Code Samples"]
    },
    {
      id: 4,
      title: "DevOps Best Practices for Beginners",
      date: "July 18, 2023",
      speaker: "Arjun Mehta (DevOps Engineer, Netflix)",
      recording: "https://youtube.com/embed/example2",
      resources: ["Slides PDF", "Cheat Sheet"]
    }
  ];

  const handleRegisterClick = (webinarId) => {
    setSelectedWebinar(webinarId);
    setRegistrationData(prev => ({...prev, webinarId}));
    setShowRegistrationForm(true);
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prev => ({...prev, [name]: value}));
  };

  const handleSpeakerChange = (e) => {
    const { name, value } = e.target;
    setSpeakerData(prev => ({...prev, [name]: value}));
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log("Registration data:", registrationData);
    alert(`Thank you for registering! Details will be sent to ${registrationData.email}`);
    setShowRegistrationForm(false);
    setRegistrationData({
      fullName: '',
      email: '',
      phone: '',
      webinarId: ''
    });
  };

  const handleSpeakerSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log("Speaker application:", speakerData);
    alert(`Thank you for your interest, ${speakerData.name}! We'll contact you soon.`);
    setShowSpeakerForm(false);
    setSpeakerData({
      name: '',
      email: '',
      phone: '',
      company: '',
      position: '',
      topic: '',
      bio: ''
    });
  };

  return (
    <div className="webinar-page">
      {/* Hero Section */}
      <section className="webinar-hero">
        <div className="container">
          <h1>Internship Webinars</h1>
          <p className="subtitle">Learn from industry experts and get your questions answered live</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="webinar-tabs">
        <div className="container">
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming Webinars
            </button>
            <button 
              className={`tab-button ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Past Webinar Recordings
            </button>
          </div>
        </div>
      </section>

      {/* Webinar Content */}
      <section className="webinar-content">
        <div className="container">
          {activeTab === 'upcoming' ? (
            <div className="upcoming-webinars">
              <h2>Upcoming Webinars</h2>
              <div className="webinar-cards">
                {upcomingWebinars.map(webinar => (
                  <div className="webinar-card" key={webinar.id}>
                    <div className="webinar-image" style={{ backgroundImage: `url(${webinar.image})` }}></div>
                    <div className="webinar-details">
                      <h3>{webinar.title}</h3>
                      <div className="meta">
                        <span className="date">{webinar.date}</span>
                        <span className="time">{webinar.time}</span>
                      </div>
                      <p className="speaker">Speaker: {webinar.speaker}</p>
                      <p className="description">{webinar.description}</p>
                      <button 
                        className="register-btn"
                        onClick={() => handleRegisterClick(webinar.id)}
                      >
                        Register for Free
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="past-webinars">
              <h2>Past Webinar Recordings</h2>
              <div className="recording-cards">
                {pastWebinars.map(webinar => (
                  <div className="recording-card" key={webinar.id}>
                    <div className="video-container">
                      <iframe 
                        src={webinar.recording}
                        title={webinar.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="recording-details">
                      <h3>{webinar.title}</h3>
                      <p className="date">{webinar.date}</p>
                      <p className="speaker">Speaker: {webinar.speaker}</p>
                      <div className="resources">
                        <h4>Resources:</h4>
                        <ul>
                          {webinar.resources.map((resource, index) => (
                            <li key={index}>
                              <a href="#download">{resource}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="webinar-cta">
        <div className="container">
          <h2>Want to Host a Webinar With Us?</h2>
          <p>Are you an industry expert interested in sharing your knowledge with our interns?</p>
          <button 
            className="cta-button"
            onClick={() => setShowSpeakerForm(true)}
          >
            Become a Speaker
          </button>
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistrationForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={() => setShowRegistrationForm(false)}
            >
              &times;
            </button>
            <h2>Register for Webinar</h2>
            <p className="webinar-title">
              {upcomingWebinars.find(w => w.id === selectedWebinar)?.title}
            </p>
            <form onSubmit={handleRegistrationSubmit}>
              <div className="form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  value={registrationData.fullName}
                  onChange={handleRegistrationChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={registrationData.email}
                  onChange={handleRegistrationChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={registrationData.phone}
                  onChange={handleRegistrationChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Complete Registration
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Speaker Application Modal */}
      {showSpeakerForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={() => setShowSpeakerForm(false)}
            >
              &times;
            </button>
            <h2>Become a Speaker</h2>
            <p>Fill out this form to apply as a webinar speaker</p>
            <form onSubmit={handleSpeakerSubmit}>
              <div className="form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={speakerData.name}
                  onChange={handleSpeakerChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={speakerData.email}
                  onChange={handleSpeakerChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={speakerData.phone}
                  onChange={handleSpeakerChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Company/Organization</label>
                <input
                  type="text"
                  name="company"
                  value={speakerData.company}
                  onChange={handleSpeakerChange}
                />
              </div>
              <div className="form-group">
                <label>Position/Role*</label>
                <input
                  type="text"
                  name="position"
                  value={speakerData.position}
                  onChange={handleSpeakerChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Proposed Topic*</label>
                <input
                  type="text"
                  name="topic"
                  value={speakerData.topic}
                  onChange={handleSpeakerChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Short Bio*</label>
                <textarea
                  name="bio"
                  value={speakerData.bio}
                  onChange={handleSpeakerChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebinarPage;