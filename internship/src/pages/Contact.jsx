// pages/ContactPage.jsx
import React from 'react';

import ContactForm from '../components/ContactUs';
import './style.css'

const ContactPage = () => {
  return (
    <div className="page-container">
      <div className="breadcrumbs container">
        <a href="/">Home</a>  &gt; Contact Us
      </div>
      <br />
      <center>
        <div>
        <h1>Contact Us</h1>
        <p>Have questions about our internship programs? Reach out to us!</p>
        </div>
      </center>
      <ContactForm />
    </div>
  );
};

export default ContactPage;