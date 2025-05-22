import React, { useState, useEffect } from 'react';
import '../css/Webinar.css';
import api from '../service/api';

const WebinarPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  
  // Webinar data states
  const [upcomingWebinars, setUpcomingWebinars] = useState([]);
  const [pastWebinars, setPastWebinars] = useState([]);
  
  // Form states
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    webinar: ''
  });

  const fetchWebinars = async () => {
      try {
        setLoading(true);
        const upcomingResponse = await api.get('http://127.0.0.1:8000/api/webinars/');
        const pastResponse = await api.get('/api/webinars/?status=completed');
        
        setUpcomingWebinars(Array.isArray(upcomingResponse.data) ? upcomingResponse.data : []);
        setPastWebinars(Array.isArray(pastResponse.data) ? pastResponse.data : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching webinars:', err);
        setError('Failed to load webinars. Please try again later.');
        setLoading(false);
      }
    };

  // Fetch webinars from backend
  useEffect(() => {
    

    fetchWebinars();
  }, []);

  const handleRegisterClick = (webinar) => {
    setSelectedWebinar(webinar);
    setRegistrationData(prev => ({
      ...prev,
      webinar: webinar.id
    }));
    setShowRegistrationForm(true);
    setRegistrationSuccess(false);
    setError('');
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prev => ({...prev, [name]: value}));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing page
    
    setLoading(true);
    setError('');
    
    try {
      const response = await api.post('http://127.0.0.1:8000/api/registrations/', registrationData);

      fetchWebinars();

      // Show success message
      setRegistrationSuccess(true);
      
      // Reset form
      setRegistrationData({
        name: '',
        email: '',
        webinar: '',
        phone: '',
        heare_about_us: '',
      });
      
      // Refresh webinars to update registration count
      const updatedResponse = await api.get('/api/webinars/?status=upcoming');
      setUpcomingWebinars(Array.isArray(updatedResponse.data) ? updatedResponse.data : []);
      
      // Hide form after 6 seconds
      setTimeout(() => {
        setShowRegistrationForm(false);
        setRegistrationSuccess(false);
      }, 6000);
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.detail || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit',
      timeZoneName: 'short'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };


  const [showSpeakerForm, setShowSpeakerForm] = useState(false);
  const [speakerData, setSpeakerData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    topic: '',
    bio: '',
    linkedin: '',
  });

  const handleSpeakerChange = (e) => {
    const { name, value } = e.target;
    setSpeakerData(prev => ({...prev, [name]: value}));
  };

  const handleSpeakerSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await api.post('http://127.0.0.1:8000/api/speakers/', speakerData);
      alert('Thank you for your application! We will review your information and contact you soon.');
      setShowSpeakerForm(false);
      setSpeakerData({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        topic: '',
        bio: '',
        linkedin: '',
        twitter: ''
      });
    } catch (err) {
      console.error('Speaker submission error:', err);
      setError(err.response?.data || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="webinar-page">
      {/* Hero Section */}
      <section className="webinar-hero">
  <div className="webinar-overlay"></div>
  <div className="webinar-container">
    <div className="webinar-content">
      <h1>Internship Webinars</h1>
      <p className="webinar-subtitle">Learn directly from industry leaders and accelerate your career</p>
      
      <div className="webinar-stats">
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Industry Experts</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10K+</span>
          <span className="stat-label">Participants</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Free Access</span>
        </div>
      </div>
    </div>
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
          {error && <div className="error-message">{error}</div>}
          
          {loading ? (
            <div className="loading-spinner">Loading webinars...</div>
          ) : activeTab === 'upcoming' ? (
            <div className="upcoming-webinars">
              <h2>Upcoming Webinars</h2>
              {upcomingWebinars.length === 0 ? (
                <p className="no-webinars">No upcoming webinars scheduled. Check back later!</p>
              ) : (
                <div className="webinar-cards">
                  {upcomingWebinars.map(webinar => (
                    <div className="webinar-card" key={webinar.id}>
                      <div className="webinar-image">
                        {webinar.web_image === null ? (
                          <img src="/google-meet-icon.png" alt="Google Meet" />
                        ) : (
                          <img src={webinar.web_image} alt="Zoom" />
                        )}
                      </div>
                      <div className="webinar-details">
                        <h3>{webinar.title}</h3>
                        <div className="meta">
                          <span className="date">{formatDate(webinar.scheduled_time)}</span>
                          <span className="duration">{webinar.duration} minutes</span>
                        </div>
                        <p className="speaker">Presenter: {webinar.presenter}</p>
                        <p className="description">{webinar.description}</p>
                        <div className="registration-info">
                          <span>
                            Registrations: {webinar.registration_count}
                            {webinar.max_participants ? ` / ${webinar.max_participants}` : ''}
                          </span>
                        </div>
                        <button 
                          className="register-btn"
                          onClick={() => handleRegisterClick(webinar)}
                          disabled={webinar.max_participants && webinar.registration_count >= webinar.max_participants}
                        >
                          {webinar.max_participants && webinar.registration_count >= webinar.max_participants 
                            ? 'Fully Booked' 
                            : 'Register Now'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="past-webinars">
              <h2>Past Webinar Recordings</h2>
              {pastWebinars.length === 0 ? (
                <p className="no-webinars">No past webinar recordings available yet.</p>
              ) : (
                <div className="recording-cards">
                  {pastWebinars.map(webinar => (
                    <div className="recording-card" key={webinar.id}>
                      <div className="video-container">
                        <div className="recording-placeholder">
                          <iframe 
                            width="100%" 
                            height="100%" 
                            src={webinar.recording_url || "about:blank"}
                            title={webinar.title}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                      <div className="recording-details">
                        <h3>{webinar.title}</h3>
                        <p className="date">{formatDate(webinar.scheduled_time)}</p>
                        <p className="speaker">Presenter: {webinar.presenter}</p>
                        <div className="resources">
                          <h4>Description:</h4>
                          <p>{webinar.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Registration Modal */}
      {showRegistrationForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={() => {
                setShowRegistrationForm(false);
                setRegistrationSuccess(false);
              }}
              disabled={loading}
            >
              &times;
            </button>
            
            {registrationSuccess ? (
              <div className="registration-success">
                <h2>Registration Successful!</h2>
                <div className="success-icon">✓</div>
                <p>A confirmation has been sent to {registrationData.email}</p>
                <p>The webinar details will be emailed to you shortly.</p>
                <p className="closing-notice">This window will close automatically...</p>
              </div>
            ) : (
              <>
                <h2>Register for Webinar</h2>
                <p className="webinar-title">
                  {selectedWebinar?.title}
                </p>
                
                <form onSubmit={handleRegistrationSubmit}>
                  <div className="form-group">
                    <label>Full Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={registrationData.name}
                      onChange={handleRegistrationChange}
                      required
                      disabled={loading}
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
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone*</label>
                    <input
                      type="text"
                      name="phone"
                      value={registrationData.phone}
                      onChange={handleRegistrationChange}
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label>Where you heared about us</label>
                    <input
                      type="text"
                      name="heare_about_us"
                      value={registrationData.heare_about_us}
                      onChange={handleRegistrationChange}
                      required
                      disabled={loading}
                    />
                  </div>
                  {error && <div className="form-error">{error}</div>}
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Complete Registration'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

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
       {showSpeakerForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-btn"
              onClick={() => !loading && setShowSpeakerForm(false)}
              disabled={loading}
            >
              &times;
            </button>
            <h2>Become a Speaker</h2>
            <p>Share your expertise with our community</p>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSpeakerSubmit}>
              <div className="form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={speakerData.name}
                  onChange={handleSpeakerChange}
                  required
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              
              <div className="form-group">
                <label>Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  value={speakerData.phone}
                  onChange={handleSpeakerChange}
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="form-group">
                <label>Company/Organization</label>
                <input
                  type="text"
                  name="company"
                  value={speakerData.company}
                  onChange={handleSpeakerChange}
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              
              <div className="form-group">
                <label>Bio*</label>
                <textarea
                  name="bio"
                  value={speakerData.bio}
                  onChange={handleSpeakerChange}
                  rows="4"
                  required
                  disabled={loading}
                ></textarea>
              </div>
              
              <div className="form-group">
                <label>LinkedIn Profile (optional)</label>
                <input
                  type="url"
                  name="linkedin"
                  value={speakerData.linkedin}
                  onChange={handleSpeakerChange}
                  disabled={loading}
                />
              </div>
              
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
        )}
    </div>
  );
};

export default WebinarPage;