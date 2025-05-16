import React from 'react';
import './style.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
        <br />
      {/* Breadcrumbs */}
      <div className="breadcrumbs container">
        <a href="/">Home</a>  &gt; Privacy Policy
      </div>
<br />
      {/* Hero Section */}
      <section className="policy-hero" style={{ backgroundImage: `url(${'https://www.nomac.com/media/dbqjklxz/nomac-privacy-policy-banner.jpg?center=0.50111728701236946,0.5&mode=crop&width=1582&height=516&rnd=132143890895130000'})` }}>
        <div className="hero-overlay">
          <div className="container">
            <h1>Privacy Policy</h1>
            <p>How TSAR-IT protects your personal information</p>
          </div>
        </div>
      </section>


      {/* Main Content */}
      <main className="policy-main container">
        <div className="policy-content">
          <div className="last-updated">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>

          <section className="policy-section">
            <h2><span className="section-number">1</span> Information Collection</h2>
            <p>TSAR-IT Pvt Ltd ("we", "us", or "our") operates the internship program and collects information to provide better services to all our participants.</p>
            
            <div className="info-card">
              <h3>What We Collect:</h3>
              <div className="card-grid">
                <div className="card-item">
                  <div className="card-icon">📝</div>
                  <h4>Application Data</h4>
                  <ul>
                    <li>Full name and contact details</li>
                    <li>Educational background</li>
                    <li>Resume/CV and portfolio</li>
                    <li>Cover letter and references</li>
                  </ul>
                </div>
                <div className="card-item">
                  <div className="card-icon">💳</div>
                  <h4>Payment Information</h4>
                  <ul>
                    <li>Billing address (for paid programs)</li>
                    <li>Payment processor details</li>
                    <li>Transaction history</li>
                  </ul>
                </div>
                <div className="card-item">
                  <div className="card-icon">📊</div>
                  <h4>Program Data</h4>
                  <ul>
                    <li>Project submissions</li>
                    <li>Performance evaluations</li>
                    <li>Attendance records</li>
                    <li>Skill assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2><span className="section-number">2</span> Data Usage</h2>
            <p>We use your information exclusively for internship program purposes:</p>
            
            <div className="usage-flow">
              <div className="flow-step">
                <div className="step-number">1</div>
                <h4>Program Administration</h4>
                <p>Managing your participation in the internship program</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="step-number">2</div>
                <h4>Skill Development</h4>
                <p>Personalizing training based on your skill level</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="step-number">3</div>
                <h4>Career Support</h4>
                <p>Providing references and job placement assistance</p>
              </div>
            </div>

            <div className="notice-box">
              <h3>Data Protection Commitment</h3>
              <p>We never sell your personal data. Any sharing with potential employers requires your explicit consent.</p>
            </div>
          </section>

          <section className="policy-section">
            <h2><span className="section-number">3</span> Security Measures</h2>
            <p>TSAR-IT implements enterprise-grade security protocols:</p>
            
            <div className="security-features">
              <div className="security-item">
                <div className="security-icon">🔒</div>
                <div>
                  <h4>Encryption</h4>
                  <p>All data is encrypted in transit (TLS 1.2+) and at rest (AES-256)</p>
                </div>
              </div>
              <div className="security-item">
                <div className="security-icon">🛡️</div>
                <div>
                  <h4>Access Controls</h4>
                  <p>Role-based access with multi-factor authentication</p>
                </div>
              </div>
              <div className="security-item">
                <div className="security-icon">📋</div>
                <div>
                  <h4>Compliance</h4>
                  <p>Regular audits and GDPR/India Data Protection compliance</p>
                </div>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2><span className="section-number">4</span> Internship Specifics</h2>
            <div className="internship-details">
              <div className="detail-card">
                <h3>Project Work</h3>
                <p>You retain IP rights to your original work. We may request permission to showcase exceptional projects in our portfolio.</p>
              </div>
              <div className="detail-card">
                <h3>Performance Data</h3>
                <p>Evaluation metrics are used internally. Sharing with employers requires your authorization through our release form.</p>
              </div>
              <div className="detail-card">
                <h3>Alumni Network</h3>
                <p>After program completion, you may opt-in to our alumni network for career opportunities.</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2><span className="section-number">5</span> Your Rights</h2>
            <div className="rights-grid">
              <div className="right-item">
                <h3>Access</h3>
                <p>Request a copy of your personal data</p>
              </div>
              <div className="right-item">
                <h3>Rectification</h3>
                <p>Update or correct inaccurate information</p>
              </div>
              <div className="right-item">
                <h3>Erasure</h3>
                <p>Request deletion of your data (with limitations)</p>
              </div>
              <div className="right-item">
                <h3>Portability</h3>
                <p>Receive your data in a structured format</p>
              </div>
            </div>
          </section>

          <div className="contact-section">
            <h2>Contact Our Data Protection Officer</h2>
            <div className="contact-card">
              <div className="contact-methods">
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:privacy@tsar-it.com">info@tsaritservices.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+9180XXXXXX">+91 94913 01258</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🏢</span>
                  <p>12-203/745, CHURCH STREET, NAKKABANDA, <br />
Punganur, Madanapalle, Chittoor- 517247, <br />
Andhra Pradesh</p>
                </div>
              </div>
              <div className="contact-hours">
                <h4>Office Hours:</h4>
                <p>Monday-Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Response time: Within 48 business hours</p>
              </div>
            </div>
          </div>
        </div>

     
      </main>


    </div>
  );
};

export default PrivacyPolicy;