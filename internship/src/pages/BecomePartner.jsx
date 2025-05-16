import React from 'react';
import ContactForm from '../components/ContactUs';
import './style.css'

const BecomePartner = () => {
  return (
    <div className="bp-container">
      <section className="bp-hero">
        <div className="bp-container-inner">
          <h1 className="bp-title">Become a Partner</h1>
          <p className="bp-subtitle">Join us in shaping the future of IT professionals.</p>
        </div>
      </section>
      
      <section className="bp-benefits">
        <div className="bp-container-inner">
          <h2 className="bp-section-title">Why Partner With Us?</h2>
          <div className="bp-benefits-grid">
            <div className="bp-benefit-item">
              <h3>Access to Talent</h3>
              <p>Tap into a diverse pool of job-ready, pre-trained interns eager to contribute from day one.</p>
            </div>
            <div className="bp-benefit-item">
              <h3>Corporate Social Responsibility</h3>
              <p>Demonstrate your commitment to youth empowerment, education, and technology advancement.</p>
            </div>
            <div className="bp-benefit-item">
              <h3>Cost-Effective Hiring</h3>
              <p>Evaluate interns in real working conditions before making long-term hiring decisions.</p>
            </div>
            <div className="bp-benefit-item">
              <h3>Brand Visibility</h3>
              <p>Get featured as a partner on our website, newsletters, and official events.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bp-models">
        <div className="bp-container-inner">
          <h2 className="bp-section-title">Partnership Models</h2>
          <div className="bp-models-grid">
            <div className="bp-model-card">
              <h3>Internship Host</h3>
              <p>Host students at your organization and provide real-world project experience that benefits both sides.</p>
            </div>
            <div className="bp-model-card">
              <h3>Training Partner</h3>
              <p>Co-develop skill-based curriculum and run workshops or bootcamps under our joint brand.</p>
            </div>
            <div className="bp-model-card">
              <h3>Sponsorship</h3>
              <p>Fund meritorious students or sponsor infrastructure to enhance digital education reach.</p>
            </div>
            <div className="bp-model-card">
              <h3>Campus Drives</h3>
              <p>Get exclusive early access to top-performing candidates for interviews and placements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bp-contact-form-section">
        <div className="bp-container-inner">
          <h2 className="bp-section-title" >Let’s Collaborate</h2>
          <p className="bp-contact-description" style={{textAlign:'center'}}>Fill out the form below, and our team will reach out to you soon.</p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default BecomePartner;
