import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/WebinarStyle.css';
import api from '../service/api';

const WebinarManagement = () => {
    const [webinars, setWebinars] = useState([]);
    const [registrations, setRegistrations] = useState([]);
    const [loading, setLoading] = useState(true);
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
        fetchWebinars();
    }, []);

    const fetchWebinars = async () => {
        try {
            const response = await api.get('http://127.0.0.1:8000/api/webinars/');
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
            const response = await axios.get('http://127.0.0.1:8000/api/registrations/');
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
                await axios.put(`http://127.0.0.1:8000/api/webinars/${editingId}/`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } else {
                await axios.post(`http://127.0.0.1:8000/api/webinars/`, data, {
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
                await axios.delete(`http://127.0.0.1:8000/api/webinars/${id}/`);
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

    return (
        <div className="wb-container">
            <h1 className="wb-title">Webinar Management</h1>
            
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