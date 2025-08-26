import React, { useState } from 'react';
import '../../css/Java.css'; 
import EnrollmentForm from './components/EnrollForm';
import Quiz from './components/Quiz';
import Companies from './components/Companies';
import PopularCoursesSlider from '../../components/Popular';

const MERNStackPage = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  
  // Upcoming batches data
  const upcomingBatches = [
    {
      date: "September 5, 2025",
      duration: "16 weeks",
      timing: "Weekdays (Mon-Fri) 7-9 PM IST",
      seats: "10 seats left",
    },
    {
      date: "September 25, 2025",
      duration: "18 weeks",
      timing: "Weekends (Sat-Sun) 10 AM-2 PM IST",
      seats: "15 seats left",
    },

  ];

  // Curriculum data
  const curriculum = [
    {
      module: 'Frontend with React',
      topics: [
        'React Fundamentals',
        'JSX & Components',
        'State & Props',
        'Hooks (useState, useEffect)',
        'React Router',
        'Context API'
      ],
      duration: '4 weeks'
    },
    {
      module: 'Backend with Node.js & Express',
      topics: [
        'Node.js Basics',
        'Express Framework',
        'REST API Development',
        'Middleware',
        'Authentication (JWT)',
        'Error Handling'
      ],
      duration: '4 weeks'
    },
    {
      module: 'Database with MongoDB',
      topics: [
        'MongoDB Fundamentals',
        'Mongoose ODM',
        'Data Modeling',
        'CRUD Operations',
        'Aggregation',
        'Indexing'
      ],
      duration: '3 weeks'
    },
    {
      module: 'Full Stack Integration',
      topics: [
        'Connecting Frontend & Backend',
        'API Consumption',
        'State Management',
        'Deployment (Heroku, Netlify)',
        'Performance Optimization',
        'Capstone Project'
      ],
      duration: '5 weeks'
    }
  ];

  // Program outcomes
  const outcomes = [
    'Build complete MERN stack applications',
    'Develop RESTful APIs with Node.js',
    'Create interactive UIs with React',
    'Implement authentication and authorization',
    'Deploy full stack applications'
  ];

  // Technologies covered
  const technologies = [
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
    { name: 'Redux', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png' },
    { name: 'JWT', logo: 'https://jwt.io/img/pic_logo.svg' }
  ];

  // Project examples
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with cart and checkout',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
      stack: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    {
      title: 'Social Media App',
      description: 'Platform for sharing posts and connecting users',
      image: 'https://images.unsplash.com/photo-1611162617213-6d7a2deee8d6',
      stack: ['React', 'Express', 'MongoDB', 'Socket.io']
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      stack: ['React', 'Node.js', 'MongoDB', 'JWT Auth']
    }
  ];

  return (
    <div className="mern-course-page">
      {/* Hero Section */}
      <div className="course-hero mern">
        <div className="container-dev">
          <h1>MERN Stack Internship Program</h1>
          <p className="subtitle">Master full-stack development with MongoDB, Express, React, and Node.js</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setShowEnrollment(true)}>Enroll Now</button>
            <button className="secondary-btn">Download Syllabus</button>
          </div>
        </div>
      </div>

      {/* Course Highlights */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlight-cards">
            <div className="highlight-card">
              <div className="icon">⏱️</div>
              <h3>Duration</h3>
              <p>12-14 Weeks</p>
            </div>
            <div className="highlight-card">
              <div className="icon">💻</div>
              <h3>Projects</h3>
              <p>4+ Full Stack Apps</p>
            </div>
            <div className="highlight-card">
              <div className="icon">📚</div>
              <h3>Technologies</h3>
              <p>6+ Modern Tools</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🎓</div>
              <h3>Certification</h3>
              <p>MERN Developer Certificate</p>
            </div>
          </div>
        </div>
      </section>

      <section className="batches-section">
        <div className="container">
          <h2>Upcoming Batches</h2>
          <div className="batch-table">
            <div className="table-header">
              <div>Start Date</div>
              <div>Duration</div>
              <div>Timing</div>
              <div>Availability</div>
              <div></div>
            </div>
            {upcomingBatches.map((batch, index) => (
              <div className="table-row" key={index}>
                <div>{batch.date}</div>
                <div>{batch.duration}</div>
                <div>{batch.timing}</div>
                <div>{batch.seats}</div>
                <div>
                  <button className="enroll-btn" onClick={() => setShowEnrollment(true)}>Enroll</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="learn-section">
        <div className="container">
          <h2>What You'll Learn</h2>
          <div className="learn-content">
            <div className="learn-text">
              <p>
                Our MERN stack internship provides end-to-end training in modern full-stack development,
                from building interactive UIs with React to creating robust backend services with Node.js.
              </p>
              <ul>
                <li>React fundamentals and advanced concepts</li>
                <li>Building RESTful APIs with Express</li>
                <li>Database design with MongoDB</li>
                <li>State management with Redux</li>
                <li>User authentication and authorization</li>
                <li>Connecting frontend and backend</li>
                <li>Deploying full stack applications</li>
              </ul>
              <div className="image-gallery">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" alt="Web development" />
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Coding" />
              </div>
            </div>
            <div className="learn-image">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09" alt="MERN stack" />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Covered */}
      <section className="technologies-section">
        <div className="container">
          <h2>Technologies Covered</h2>
          <div className="technologies-grid">
            {technologies.map((tech, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-logo">
                  <img src={tech.logo} alt={tech.name} />
                </div>
                <div className="tech-name">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="teaching-method">
        <div className="container">
          <h2>Our Teaching Approach</h2>
          <div className="method-cards">
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Hands-on" />
              <h3>Hands-on Coding</h3>
              <p>Build projects from day one</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09" alt="Projects" />
              <h3>Project-Based</h3>
              <p>Learn by creating real applications</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Mentorship" />
              <h3>Code Reviews</h3>
              <p>Personalized feedback from experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="curriculum-section">
        <div className="container">
          <h2>Course Curriculum</h2>
          <p className="section-description">Comprehensive learning path covering all aspects of MERN stack development</p>
          
          <div className="curriculum-tabs">
            {curriculum.map((module, index) => (
              <div className="module-card" key={index}>
                <div className="module-header">
                  <h3>{module.module}</h3>
                  <span className="duration">{module.duration}</span>
                </div>
                <ul className="topics-list">
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="projects-showcase">
        <div className="container">
          <h2>Project Showcase</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    {project.stack.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="outcomes-section">
        <div className="container">
          <h2>Program Outcomes</h2>
          <div className="outcomes-grid">
            {outcomes.map((outcome, index) => (
              <div className="outcome-card" key={index}>
                <div className="check-icon">✓</div>
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Quiz courseName={'MERN'} />
      <Companies />
      <PopularCoursesSlider />

      {/* Enrollment Form Modal */}
      {showEnrollment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowEnrollment(false)}>×</button>
            <EnrollmentForm 
              courseName="MERN Stack Internship Program" 
              batches={upcomingBatches}
              onClose={() => setShowEnrollment(false)} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MERNStackPage;