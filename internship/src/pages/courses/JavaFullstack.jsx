import React, { useState } from 'react';
import '../../css/Java.css';
import EnrollmentForm from './components/EnrollForm';
import Quiz from './components/Quiz';
import Companies from './components/Companies';
import PopularCoursesSlider from '../../components/Popular';

const JavaFullStackPage = () => {
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
      module: 'Core Java & Advanced Concepts',
      topics: [
        'Java Fundamentals',
        'OOP Principles',
        'Collections Framework',
        'Multithreading',
        'JDBC & Database Connectivity',
        'Design Patterns'
      ],
      duration: '5 weeks'
    },
    {
      module: 'Frontend Development',
      topics: [
        'HTML5 & CSS3',
        'JavaScript ES6+',
        'React.js Fundamentals',
        'State Management',
        'Material UI',
        'Frontend Project'
      ],
      duration: '5 weeks'
    },
    {
      module: 'Backend with Spring Framework',
      topics: [
        'Spring Core',
        'Spring Boot',
        'REST API Development',
        'Spring Security',
        'JPA & Hibernate',
        'Microservices Basics'
      ],
      duration: '5 weeks'
    },
    {
      module: 'Full Stack Integration',
      topics: [
        'Connecting Frontend & Backend',
        'Authentication & Authorization',
        'Deployment Strategies',
        'Performance Optimization',
        'Testing (JUnit, Mockito)',
        'Capstone Project'
      ],
      duration: '5 weeks'
    }
  ];

  // Program outcomes
  const outcomes = [
    'Master Java programming and Spring Framework',
    'Build interactive UIs with React',
    'Develop RESTful APIs with Spring Boot',
    'Implement full stack applications',
    'Deploy production-ready applications'
  ];

  // Technologies covered
  const technologies = [
    { name: 'Java', logo: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
    { name: 'Spring', logo: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
    { name: 'React', logo: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg' },
    { name: 'MySQL', logo: 'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg' },
    { name: 'Maven', logo: 'https://www.vectorlogo.zone/logos/apache_maven/apache_maven-icon.svg' },
    { name: 'Git', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' }
  ];

  // Project examples
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with admin dashboard',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
      stack: ['Java', 'Spring Boot', 'React', 'MySQL']
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      stack: ['Java', 'Spring Security', 'React', 'MongoDB']
    },
    {
      title: 'Employee Management System',
      description: 'HR system with attendance and payroll',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095',
      stack: ['Java', 'Spring Boot', 'Thymeleaf', 'PostgreSQL']
    }
  ];

  return (
    <div className="java-fullstack-page">
      {/* Banner Section
      <div className="banner-section">
        <div className="container">
          <div className="banner-content">
            <span className="banner-tag">Most Popular</span>
            <h2>Java Full Stack Developer Program</h2>
            <p>Become industry-ready with our comprehensive training</p>
          </div>
        </div>
      </div> */}

      

      {/* Hero Section */}
      <div className="course-hero java-full" >
        <div className="container-dev ">
          <h1>Java Full Stack Internship Program</h1>
          <p className="subtitle">Master Java, Spring Boot, and React to build enterprise-grade applications</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setShowEnrollment(true)}>Enroll Now</button>
            <a
              href="/syllabus/java-fullstack.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="secondary-btn">Download Syllabus</button>
            </a>
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
              <p>16-18 Weeks</p>
            </div>
            <div className="highlight-card">
              <div className="icon">💻</div>
              <h3>Projects</h3>
              <p>4+ Full Stack Apps</p>
            </div>
            <div className="highlight-card">
              <div className="icon">📚</div>
              <h3>Technologies</h3>
              <p>10+ Modern Tools</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🎓</div>
              <h3>Certification</h3>
              <p>Full Stack Developer Certificate</p>
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
                Our Java Full Stack internship provides end-to-end training in enterprise application development,
                from building robust backends with Spring to creating dynamic frontends with React.
              </p>
              <ul>
                <li>Core Java and advanced concepts</li>
                <li>Spring Framework and Spring Boot</li>
                <li>React.js for frontend development</li>
                <li>REST API design and implementation</li>
                <li>Database integration (SQL & NoSQL)</li>
                <li>Authentication and authorization</li>
                <li>Deployment and DevOps basics</li>
              </ul>
              <div className="image-gallery">
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166" alt="Java programming" />
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" alt="Web development" />
              </div>
            </div>
            <div className="learn-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Full stack development" />
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
              <p>Practical implementation of concepts</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09" alt="Projects" />
              <h3>Project-Based</h3>
              <p>Build real-world applications</p>
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
          <p className="section-description">Comprehensive learning path covering all aspects of Java Full Stack development</p>
          
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

      <Quiz courseName='javaFullStack' />
      <Companies />
      <PopularCoursesSlider />

      {/* Enrollment Form Modal */}
      {showEnrollment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowEnrollment(false)}>×</button>
            <EnrollmentForm 
              courseName="Java Full Stack Internship Program" 
              batches={upcomingBatches} 
              onClose={() => setShowEnrollment(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default JavaFullStackPage;