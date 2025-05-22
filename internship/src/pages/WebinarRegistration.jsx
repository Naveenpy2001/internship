import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../css/WebinarStyle.css';

const WebinarRegistration = () => {
    const { id } = useParams();
    const [webinar, setWebinar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [registration, setRegistration] = useState(null);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        const fetchWebinar = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/webinars/1/`);
                console.log('data : ',response.data);
                
                setWebinar(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching webinar:', error);
                setError('Failed to load webinar details');
                setLoading(false);
            }
        };

        fetchWebinar();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/registrations/', {
                ...formData,
                webinar: 1
            });
            
            setRegistration(response.data);
            setSuccess(true);
        } catch (error) {
            console.error('Registration error:', error);
            setError(error.response?.data?.detail || 'Registration failed. Please try again.');
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

    if (loading) {
        return <div className="wb-loading">Loading webinar details...</div>;
    }

    if (!webinar) {
        return <div className="wb-error">{error || 'Webinar not found'}</div>;
    }

    if (success && registration) {
        return (
            <div className="wb-registration-success">
                <h2>Registration Successful!</h2>
                <div className="wb-success-content">
                    <p>Thank you, {registration.name}, for registering for:</p>
                    <h3>{webinar.title}</h3>
                    <p><strong>Date & Time:</strong> {formatDate(webinar.scheduled_time)}</p>
                    <p><strong>Duration:</strong> {webinar.duration} minutes</p>
                    <p><strong>Platform:</strong> {webinar.platform === 'google_meet' ? 'Google Meet' : 'Zoom'}</p>
                    
                    <div className="wb-code-container">
                        <p>Your registration code:</p>
                        <div className="wb-code">{registration.registration_code}</div>
                        <p>Please save this code for your records.</p>
                    </div>
                    
                    <p>A confirmation email has been sent to {registration.email}</p>
                    
                    <a href={webinar.meeting_link} className="wb-button wb-primary">
                        Join Webinar
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="wb-registration-container">
            <div className="wb-registration-header">
                <h1>Register for Webinar</h1>
                <h2>{webinar.title}</h2>
                <div className="wb-webinar-details">
                    <p><strong>Presenter:</strong> {webinar.presenter}</p>
                    <p><strong>Date & Time:</strong> {formatDate(webinar.scheduled_time)}</p>
                    <p><strong>Duration:</strong> {webinar.duration} minutes</p>
                    <p><strong>Platform:</strong> {webinar.platform === 'google_meet' ? 'Google Meet' : 'Zoom'}</p>
                </div>
            </div>
            
            {error && <div className="wb-error">{error}</div>}
            
            <form onSubmit={handleSubmit} className="wb-registration-form">
                <div className="wb-form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="wb-form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button type="submit" className="wb-button wb-primary wb-submit">
                    Register Now
                </button>
            </form>
        </div>
    );
};

export default WebinarRegistration;