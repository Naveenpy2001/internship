import React from 'react';
import '../css/Benefits.css';
import PopularCoursesSlider from '../components/Popular';


const BenefitsPage = () => {
  // Benefits data
  const benefits = [
    {
      icon: '💼',
      title: 'Industry Experience',
      description: 'Gain hands-on experience working on real-world projects with industry tools and technologies'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Mentorship',
      description: 'Learn from experienced professionals with 1:1 guidance and code reviews'
    },
    {
      icon: '📜',
      title: 'Certification',
      description: 'Earn a recognized certificate upon completion to boost your resume'
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Connect with industry professionals and like-minded peers'
    },
    {
      icon: '💰',
      title: 'Stipend Opportunities',
      description: 'Top performers may receive stipends in select programs'
    },
    {
      icon: '🏆',
      title: 'Job Placement',
      description: 'Get priority access to our hiring partners and job opportunities'
    },
    {
      icon: '📱',
      title: 'Flexible Learning',
      description: 'Online + offline options with recorded sessions for flexible scheduling'
    },
    {
      icon: '🛠️',
      title: 'Tool Access',
      description: 'Get free access to premium tools and software during the internship'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "This internship transformed my skills and helped me land my first developer job!",
      author: "Priya K., Python Intern"
    },
    {
      quote: "The hands-on projects gave me the confidence to work on real-world applications.",
      author: "Rahul S., MERN Stack Intern"
    },
    {
      quote: "The mentorship I received was invaluable for my career growth.",
      author: "Ananya M., Data Science Intern"
    }
  ];

  return (
    <div className="benefits-page">
      {/* Hero Section */}
      <section className="benefits-hero">
        <div className="container">
          <h1>Why Our Internship Program?</h1>
          <p className="subtitle">Discover how our internship can kickstart your tech career</p>
        </div>
      </section>
    <PopularCoursesSlider />  
      {/* Main Benefits */}
      <section className="main-benefits">
        <div className="container">
          <h2>Key Benefits of Our Internship</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="career-outcomes">
        <div className="container">
          <h2>Career Outcomes</h2>
          <div className="outcomes-container">
            <div className="outcome-item">
              <div className="stat">85%</div>
              <p>of interns receive job offers or continue to advanced programs</p>
            </div>
            <div className="outcome-item">
              <div className="stat">3.5x</div>
              <p>average salary increase for interns who secure full-time roles</p>
            </div>
            <div className="outcome-item">
              <div className="stat">100+</div>
              <p>hiring partners who recruit from our internship program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Alumni Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="quote">"{testimonial.quote}"</div>
                <div className="author">— {testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="benefits-cta">
        <div className="container">
          <h2>Ready to Launch Your Career?</h2>
          <p>Join our internship program and gain the skills companies are looking for</p>
          <div className="bf-cta-buttons">
            <button className="bf-primary-btn">Browse Programs</button>
            <button className="bf-secondary-btn">Contact Advisor</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenefitsPage;