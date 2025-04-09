import React, { useState } from 'react';
import '../../../css/Companies.css';

const Companies = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Top tech companies that hire interns
  const companies = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg' },
    { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo.svg' },
    { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' }
  ];

  const faqs = [
    {
      question: "What are the eligibility criteria?",
      answer: "Candidates should be currently enrolled in a Bachelor's/Master's program in Computer Science or related field with basic programming knowledge."
    },
    {
      question: "What is the duration of the internship?",
      answer: "Our internship programs typically run for 12-16 weeks during summer, with flexible options for academic year internships."
    },
    {
      question: "Is this a paid internship?",
      answer: "Yes, all our internship positions are competitively compensated with additional benefits like housing stipends for relocating interns."
    },
    {
      question: "What projects will I work on?",
      answer: "Interns work on real business projects matching their skills - from developing new features to optimizing existing systems."
    },
    {
      question: "Do you offer return offers?",
      answer: "Top-performing interns frequently receive full-time return offers upon graduation."
    }
  ];

  return (
   <>
    <div className="internship-container">
      {/* Company Logos Section */}
      <div className="internship-container">
      <h1>Tech Internship Program</h1>
      
      {/* Company Logos Section */}
      <section className="company-section">
        <h2>Our Partners</h2>
        <div className="company-grid">
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <img 
                src={company.logo} 
                alt={company.name} 
                className="company-logo"
                // onError={(e) => {
                //   e.target.src = `https://via.placeholder.com/150x75?text=${company.name}`;
                // }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="toggle-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>
      
    </div>
   </>
  );
};

export default Companies;
