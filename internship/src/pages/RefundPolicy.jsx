import React from 'react';
import './style.css'

const RefundPolicy = () => {
  return (
    <div className="rp-container">
      <div className="rp-header">
        <h1 className="rp-title">Refund Policy</h1>
        <p className="rp-updated">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="rp-content">
        <section className="rp-section">
          <h2 className="rp-section-title">Refund Eligibility</h2>
          <p>
            At TSAR-IT Pvt Ltd, we strive to provide the best services to our customers.
            Refunds are processed under the following circumstances:
          </p>
          <ul className="rp-list">
            <li>Service not delivered as described</li>
            <li>Technical issues from our side that prevent service delivery</li>
            <li>Duplicate payment for the same service</li>
          </ul>
        </section>

        <section className="rp-section">
          <h2 className="rp-section-title">Non-Refundable Services</h2>
          <p>
            The following services are typically non-refundable:
          </p>
          <ul className="rp-list">
            <li>Custom development work after commencement</li>
            <li>Consultation services already rendered</li>
            <li>Digital products that have been downloaded or accessed</li>
          </ul>
        </section>

        <section className="rp-section">
          <h2 className="rp-section-title">Refund Process</h2>
          <ol className="rp-list-numbered">
            <li>Submit a refund request within 14 days of purchase</li>
            <li>Our team will review your request within 5 business days</li>
            <li>If approved, refunds will be processed to the original payment method</li>
            <li>Refunds may take 7–10 business days to reflect in your account</li>
          </ol>
        </section>

        <section className="rp-section">
          <h2 className="rp-section-title">Contact Us</h2>
          <p>
            For any questions regarding our refund policy, please contact our support team:
          </p>
          <p>
            <strong>Email:</strong> tsarit@tsaritservices.com<br />
            <strong>Phone:</strong> +91 94913 01258<br />
            <strong>Business Hours:</strong> Monday–Friday, 9:00 AM to 6:00 PM IST
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
