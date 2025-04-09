import React, { useState } from 'react';
import '../css/ContactForm.css';

const ContactForm = ({ isPopup = false, onClose = () => {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    interest: 'internship',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        number: '',
        interest: 'internship',
        message: ''
      });
    } catch (err) {
      setError('Failed to submit form. Please try again later.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={`success-message ${isPopup ? 'popup' : ''}`}>
        <h3>Thank You!</h3>
        <p>Your message has been sent successfully. We'll get back to you soon.</p>
        {isPopup && (
          <button 
            className="success-close-btn" 
            onClick={() => {
              setSubmitSuccess(false);
              onClose();
            }}
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`contact-form-container ${isPopup ? 'popup' : ''}`}>
      {isPopup && (
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      )}
      
      <h2>{isPopup ? 'Get in Touch' : 'Contact Us'}</h2>
      <p>Fill out the form below and our team will contact you shortly</p>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name<i style={{color:'red'}}>*</i></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email<i style={{color:'red'}}>*</i></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="interest">I'm interested in<i style={{color:'red'}}>*</i></label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
          >
            <option value="internship">Internship Program</option>
            <option value="job">Job Opportunities</option>
            <option value="partnership">Partnership</option>
            <option value="other">Other Inquiry</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message*</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;