import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/WebinarStyle.css';
import api from '../service/api';

const WebinarManagement = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });
    const [loginError, setLoginError] = useState('');
    
    // Existing state variables
    const [webinars, setWebinars] = useState([]);
    const [registrations, setRegistrations] = useState([]);
    const [regLoading, setRegLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('webinars');
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        presenter: '',
        platform: 'google_meet',
        meeting_link: '',
        scheduled_time: '',
        duration: 60,
        max_participants: '',
        is_active: true,
        web_image: null,
    });
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // Check if credentials exist in localStorage
        const savedEmail = localStorage.getItem('adminEmail');
        const savedPassword = localStorage.getItem('adminPassword');
        
        if (savedEmail && savedPassword) {
            // Auto-login with saved credentials
            handleLogin({
                email: savedEmail,
                password: savedPassword
            }, true);
        } else {
            setLoading(false);
        }
    }, []);

    const handleLogin = (credentials, autoLogin = false) => {
        const { email, password } = credentials;
        
        // Default credentials
        const DEFAULT_EMAIL = "tsaritservices@gmail.com";
        const DEFAULT_PASSWORD = "Tsarit@12345";

        if (email === DEFAULT_EMAIL && password === DEFAULT_PASSWORD) {
            // Store credentials in localStorage
            if (!autoLogin) {
                localStorage.setItem('adminEmail', email);
                localStorage.setItem('adminPassword', password);
            }
            
            setLoading(true);
            setTimeout(() => {
                setLoggedIn(true);
                setLoading(false);
                fetchWebinars();
            }, 300);
        } else {
            setLoginError('Invalid email or password');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminEmail');
        localStorage.removeItem('adminPassword');
        setLoggedIn(false);
    };

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setLoginError('');
        handleLogin(loginForm);
    };

    // Rest of your existing functions (fetchWebinars, fetchRegistrations, etc.)
    const fetchWebinars = async () => {
        try {
            const response = await api.get('/api/webinars/');
            setWebinars(Array.isArray(response.data) ? response.data : []);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching webinars:', error);
            setLoading(false);
        }
    };

    const fetchRegistrations = async () => {
        setRegLoading(true);
        try {
            const response = await axios.get('/api/registrations/');
            setRegistrations(Array.isArray(response.data) ? response.data : []);
            setRegLoading(false);
        } catch (error) {
            console.error('Error fetching registrations:', error);
            setRegLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const data = new FormData();
        for (const key in formData) {
            if (formData[key] !== null) {
                data.append(key, formData[key]);
            }
        }

        try {
            if (editingId) {
                await axios.put(`/api/webinars/${editingId}/`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } else {
                await axios.post(`/api/webinars/`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }
            fetchWebinars();
            resetForm();
        } catch (error) {
            console.error('Error saving webinar:', error);
            setError(error.response?.data || 'Error saving webinar');
        }
    };

    const handleEdit = (webinar) => {
        setFormData({
            title: webinar.title,
            description: webinar.description,
            presenter: webinar.presenter,
            platform: webinar.platform,
            meeting_link: webinar.meeting_link,
            scheduled_time: webinar.scheduled_time,
            duration: webinar.duration,
            max_participants: webinar.max_participants,
            is_active: webinar.is_active,
            web_image: webinar.web_image,
        });
        setEditingId(webinar.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this webinar?')) {
            try {
                await axios.delete(`/api/webinars/${id}/`);
                fetchWebinars();
            } catch (error) {
                console.error('Error deleting webinar:', error);
                setError('Error deleting webinar');
            }
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            presenter: '',
            platform: 'google_meet',
            meeting_link: '',
            scheduled_time: '',
            duration: 60,
            max_participants: '',
            is_active: true,
            web_image: null,
        });
        setEditingId(null);
    };

    const formatDate = (dateString) => {
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const formatRegistrationDate = (dateString) => {
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading) {
        return (
            <div className="login-container">
                <div className="loading-spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    if (!loggedIn) {
        return (
            <div className="login-container">
                <div className="login-box">
                    <h2>Admin Login</h2>
                    <form onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                value={loginForm.email}
                                onChange={handleLoginChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={loginForm.password}
                                onChange={handleLoginChange}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {loginError && <div className="error-message">{loginError}</div>}
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <div className="default-credentials">
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="wb-container">
            <div className="admin-header">
                <h1 className="wb-title">Webinar Management</h1>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
            
            <div className="wb-tabs">
                <button 
                    className={`wb-tab-button ${activeTab === 'webinars' ? 'active' : ''}`}
                    onClick={() => setActiveTab('webinars')}
                >
                    Webinars
                </button>
                <button 
                    className={`wb-tab-button ${activeTab === 'registrations' ? 'active' : ''}`}
                    onClick={() => {
                        setActiveTab('registrations');
                        fetchRegistrations();
                    }}
                >
                    Registrations ({registrations.length})
                </button>
                <a href="/admin/speaker"><button className='wb-tab-button'>speakers</button></a>
            </div>
            
            {activeTab === 'webinars' ? (
                <>
                    <div className="wb-form-container">
                        <h2>{editingId ? 'Edit Webinar' : 'Create New Webinar'}</h2>
                        {error && <div className="wb-error">{JSON.stringify(error)}</div>}
                        
                        <form onSubmit={handleSubmit} className="wb-form" encType="multipart/form-data">
                            <div className="wb-form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="wb-form-group">
                                <label>Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className="wb-form-row">
                                <div className="wb-form-group">
                                    <label>Presenter</label>
                                    <input
                                        type="text"
                                        name="presenter"
                                        value={formData.presenter}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="wb-form-group">
                                    <label>Platform</label>
                                    <select
                                        name="platform"
                                        value={formData.platform}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="google_meet">Google Meet</option>
                                        <option value="zoom">Zoom</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="wb-form-row">
                                <div className="wb-form-group">
                                    <label>Meeting Link</label>
                                    <input
                                        type="url"
                                        name="meeting_link"
                                        value={formData.meeting_link}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className="wb-form-group">
                                    <label>Scheduled Time</label>
                                    <input
                                        type="datetime-local"
                                        name="scheduled_time"
                                        value={formData.scheduled_time}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            
                            <div className="wb-form-row">
                                <div className="wb-form-group">
                                    <label>Duration (minutes)</label>
                                    <input
                                        type="number"
                                        name="duration"
                                        value={formData.duration}
                                        onChange={handleChange}
                                        min="1"
                                        required
                                    />
                                </div>
                                
                                <div className="wb-form-group">
                                    <label>Max Participants (optional)</label>
                                    <input
                                        type="number"
                                        name="max_participants"
                                        value={formData.max_participants}
                                        onChange={handleChange}
                                        min="1"
                                    />
                                </div>
                            </div>
                            
                            <div className="wb-form-group wb-checkbox">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="is_active"
                                        checked={formData.is_active}
                                        onChange={handleChange}
                                    />
                                    Active
                                </label>
                            </div>
                            <div className="wb-form-group">
                                <label>Image</label>
                                <input
                                    type="file"
                                    name="web_image"
                                    accept="image/*"
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className="wb-form-actions">
                                <button type="submit" className="wb-button wb-primary">
                                    {editingId ? 'Update' : 'Create'}
                                </button>
                                {editingId && (
                                    <button 
                                        type="button" 
                                        className="wb-button wb-secondary"
                                        onClick={resetForm}
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                    
                    <div className="wb-list-container">
                        <h2>Upcoming Webinars</h2>
                        {loading ? (
                            <div className="wb-loading">Loading webinars...</div>
                        ) : webinars.length === 0 ? (
                            <div className="wb-empty">No webinars found</div>
                        ) : (
                            <table className="wb-table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Presenter</th>
                                        <th>Date & Time</th>
                                        <th>Platform</th>
                                        <th>Registrations</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {webinars.map(webinar => (
                                        <tr key={webinar.id}>
                                            <td>{webinar.title}</td>
                                            <td>{webinar.presenter}</td>
                                            <td>{formatDate(webinar.scheduled_time)}</td>
                                            <td>{webinar.platform === 'google_meet' ? 'Google Meet' : 'Zoom'}</td>
                                            <td>
                                                {webinar.registration_count}
                                                {webinar.max_participants ? ` / ${webinar.max_participants}` : ''}
                                            </td>
                                            <td>
                                                <span className={`wb-status ${webinar.is_active ? 'active' : 'inactive'}`}>
                                                    {webinar.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                            </td>
                                            <td>
                                                <button 
                                                    className="wb-button wb-edit"
                                                    onClick={() => handleEdit(webinar)}
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    className="wb-button wb-delete"
                                                    onClick={() => handleDelete(webinar.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </>
            ) : (
                <div className="wb-list-container">
                    <h2>Registered Students ({registrations.length})</h2>
                    {regLoading ? (
                        <div className="wb-loading">Loading registrations...</div>
                    ) : registrations.length === 0 ? (
                        <div className="wb-empty">No registrations found</div>
                    ) : (
                        <table className="wb-table">
                            <thead>
                                <tr>
                                    <th>Webinar Title</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Registration Code</th>
                                    <th>Registered At</th>
                                    <th>Attended</th>
                                </tr>
                            </thead>
                            <tbody>
                                {registrations.map(registration => (
                                    <tr key={registration.id}>
                                        <td>{registration.webinar_details.title}</td>
                                        <td>{registration.name}</td>
                                        <td>{registration.email}</td>
                                        <td>{registration.registration_code}</td>
                                        <td>{formatRegistrationDate(registration.registered_at)}</td>
                                        <td>
                                            <span className={`wb-status ${registration.attended ? 'active' : 'inactive'}`}>
                                                {registration.attended ? 'Yes' : 'No'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
};

export default WebinarManagement;