// pages/ContactPage.jsx
import React from 'react';

import ContactForm from '../components/ContactUs';

const ContactPage = () => {
  return (
    <div className="page-container">
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