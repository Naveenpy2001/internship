import './style.css'
const TermsOfService = () => {
  return (
    <div className="ts-policy-container">
        <div className="breadcrumbs container">
        <a href="/">Home</a>  &gt; Terms of Service
      </div>
      <div className="ts-policy-header">
        <h1 className="ts-title">Terms of Service</h1>
        <p className="ts-update-date">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
      
      <div className="ts-policy-content">
        <section className="ts-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using any services provided by TSAR-IT Pvt Ltd ("Company"), 
            you agree to be bound by these Terms of Service. If you do not agree, please 
            do not use our services.
          </p>
        </section>

        <section className="ts-section">
          <h2>2. Services Provided</h2>
          <p>
            TSAR-IT Pvt Ltd offers IT consulting, software development, digital transformation, 
            cloud solutions, and technology training services. Our scope of services is outlined 
            on our website and subject to individual agreements with clients.
          </p>
        </section>

        <section className="ts-section">
          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="ts-list">
            <li>Provide accurate and up-to-date information during registration</li>
            <li>Maintain the confidentiality of your login credentials</li>
            <li>Not use our services for any unlawful or harmful purposes</li>
            <li>Respect intellectual property and avoid infringement</li>
            <li>Immediately notify us of any unauthorized use of your account</li>
          </ul>
        </section>

        <section className="ts-section">
          <h2>4. Intellectual Property</h2>
          <p>
            All content, trademarks, data, and software provided through our platform, 
            including logos, graphics, and documentation, are the exclusive property of 
            TSAR-IT Pvt Ltd or its licensors. Unauthorized use or reproduction is strictly prohibited.
          </p>
        </section>

        <section className="ts-section">
          <h2>5. Limitation of Liability</h2>
          <p>
            Under no circumstances shall TSAR-IT Pvt Ltd be liable for any indirect, incidental, 
            special, or consequential damages including, but not limited to, loss of revenue, 
            data, or business opportunities, even if advised of such possibility.
          </p>
        </section>

        <section className="ts-section">
          <h2>6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate access to our services at any time 
            without prior notice if you violate these terms or engage in behavior that could 
            harm our systems or reputation.
          </p>
        </section>

        <section className="ts-section">
          <h2>7. Changes to Terms</h2>
          <p>
            TSAR-IT Pvt Ltd may update or revise these Terms of Service periodically. We encourage 
            users to review this page regularly. Continued use of services after updates means 
            you accept the revised terms.
          </p>
        </section>

        <section className="ts-section">
          <h2>8. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes arising from the 
            use of our services shall be resolved in the courts located at our registered 
            office jurisdiction.
          </p>
        </section>

        <section className="ts-section">
          <h2>9. Disclaimer</h2>
          <p>
            Our services are provided "as is" without warranties of any kind. TSAR-IT Pvt Ltd 
            makes no guarantees regarding the accuracy, reliability, or availability of services.
          </p>
        </section>

        <section className="ts-section">
          <h2>10. Contact Information</h2>
          <p>For any questions or legal concerns, contact us at:</p>
          <p>
            TSAR-IT Pvt Ltd<br />
            12-203/745, CHURCH STREET, NAKKABANDA, <br />
Punganur, Madanapalle, Chittoor- 517247, <br />
Andhra Pradesh<br />
            Email: info@tsaritservices.com<br />
            Phone: +91 94913 01258
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
