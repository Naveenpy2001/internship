import React, { useState } from 'react';
import '../../css/python.css'; // Reusing the same CSS as Java page
import EnrollmentForm from './components/EnrollForm';
import PopularCoursesSlider from '../../components/Popular';
import Quiz from './components/Quiz';
import Companies from './components/Companies';


const PythonPage = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  
  // Upcoming batches data
  const upcomingBatches = [
    { date: 'July 20, 2023', duration: '10 weeks', timing: 'Weekdays (Mon-Fri) 6-8 PM IST', seats: '12 seats left' },
    { date: 'August 5, 2023', duration: '14 weeks', timing: 'Weekends (Sat-Sun) 10 AM-2 PM IST', seats: '20 seats left' },
    { date: 'September 10, 2023', duration: '12 weeks', timing: 'Weekdays (Mon-Fri) 7-9 PM IST', seats: 'Open for enrollment' }
  ];

  // Curriculum data
  const curriculum = [
    {
      module: 'Python Fundamentals',
      topics: [
        'Python Syntax and Basics',
        'Data Structures in Python',
        'Functions and Modules',
        'File Handling',
        'Exception Handling'
      ],
      duration: '3 weeks'
    },
    {
      module: 'Advanced Python',
      topics: [
        'Object-Oriented Programming',
        'Decorators and Generators',
        'Multithreading',
        'Regular Expressions',
        'Working with APIs'
      ],
      duration: '4 weeks'
    },
    {
      module: 'Data Science Track',
      topics: [
        'NumPy and Pandas',
        'Data Visualization with Matplotlib/Seaborn',
        'Introduction to Machine Learning',
        'Data Cleaning Techniques',
        'Basic Statistical Analysis'
      ],
      duration: '5 weeks'
    },
    {
      module: 'Web Development Track',
      topics: [
        'Django Framework',
        'Flask Framework',
        'REST APIs with Python',
        'Database Integration',
        'Deployment'
      ],
      duration: '4 weeks'
    }
  ];

  // Program outcomes
  const outcomes = [
    'Master Python programming from basics to advanced',
    'Build real-world applications and projects',
    'Understand data science fundamentals',
    'Develop web applications using Django/Flask',
    'Gain industry-recognized certification'
  ];

  // Facilities provided
  const facilities = [
    { icon: '📊', title: 'Data Science Projects', description: 'Work on real datasets and ML models' },
    { icon: '🌐', title: 'Web Development', description: 'Build full-stack web applications' },
    { icon: '🧠', title: 'AI/ML Basics', description: 'Introduction to machine learning concepts' },
    { icon: '📝', title: 'Code Reviews', description: 'Personalized feedback on your projects' },
    { icon: '👨‍🏫', title: 'Expert Mentors', description: 'Learn from industry professionals' },
    { icon: '🤖', title: 'Automation Skills', description: 'Learn scripting and automation' }
  ];

  return (
    <div className="python-course-page">
      {/* Hero Section */}
      <div className="course-hero python">
        <div className="container-dev">
          <h1>Python Internship Program</h1>
          <p className="subtitle">Master Python programming and dive into Data Science & Web Development</p>
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
              <p>10-14 Weeks</p>
            </div>
            <div className="highlight-card">
              <div className="icon">📊</div>
              <h3>Projects</h3>
              <p>5+ Real-world Projects</p>
            </div>
            <div className="highlight-card">
              <div className="icon">👨‍💻</div>
              <h3>Format</h3>
              <p>Online + Hands-on Labs</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🎓</div>
              <h3>Certification</h3>
              <p>Python Developer Certificate</p>
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
                Our Python internship provides comprehensive training in one of the world's most popular programming languages. 
                You'll start with Python fundamentals and progress to specialized tracks in Data Science and Web Development.
              </p>
              <ul>
                <li>Core Python programming concepts</li>
                <li>Data structures and algorithms in Python</li>
                <li>Object-oriented programming principles</li>
                <li>Working with databases and APIs</li>
                <li>Data analysis with Pandas and NumPy</li>
                <li>Web development with Django/Flask</li>
                <li>Basic machine learning concepts</li>
              </ul>
              <div className="image-gallery">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="Python code" />
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Web development" />
              </div>
            </div>
            <div className="learn-image">
              <img src="https://images.unsplash.com/photo-1547658719-da2b51169166" alt="Python programming" />
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="teaching-method">
        <div className="container">
          <h2>Our Teaching Approach</h2>
          <div className="method-cards">
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12" alt="Interactive Sessions" />
              <h3>Interactive Coding Sessions</h3>
              <p>Live coding demonstrations with Q&A opportunities</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Project Based" />
              <h3>Project-Based Curriculum</h3>
              <p>Learn by building real applications from day one</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Peer Learning" />
              <h3>Peer Learning</h3>
              <p>Collaborate with fellow interns on projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="curriculum-section">
        <div className="container">
          <h2>Course Curriculum</h2>
          <p className="section-description">Comprehensive learning path covering Python fundamentals to advanced topics</p>
          
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

      {/* Domain Specialization */}
      <section className="domain-section">
        <div className="container">
          <h2>Specialization Tracks</h2>
          <div className="domain-cards">
            <div className="domain-card">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Data Science" />
              <h3>Data Science</h3>
              <ul>
                <li>Data analysis with Pandas</li>
                <li>Data visualization</li>
                <li>Machine learning basics</li>
                <li>Statistical analysis</li>
              </ul>
            </div>
            <div className="domain-card">
              <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5" alt="Web Development" />
              <h3>Web Development</h3>
              <ul>
                <li>Django framework</li>
                <li>Flask framework</li>
                <li>REST API development</li>
                <li>Database integration</li>
              </ul>
            </div>
            <div className="domain-card">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" alt="Automation" />
              <h3>Automation</h3>
              <ul>
                <li>Scripting</li>
                <li>Web scraping</li>
                <li>Task automation</li>
                <li>Bot development</li>
              </ul>
            </div>
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

      {/* Facilities Section */}
      <section className="facilities-section">
        <div className="container">
          <h2>What We Provide</h2>
          <div className="facilities-grid">
            {facilities.map((facility, index) => (
              <div className="facility-card" key={index}>
                <div className="facility-icon">{facility.icon}</div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PythonTools />
      <Quiz courseName='Python' />
      <Companies />

      {/* Enrollment Form Modal */}
      {showEnrollment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowEnrollment(false)}>×</button>
            <EnrollmentForm 
              courseName="Python Internship Program" 
              batches={upcomingBatches} 
              onClose={() => setShowEnrollment(false)}
            />
          </div>
        </div>
      )}
      <PopularCoursesSlider />
    </div>
  );
};

export default PythonPage;






export const PythonTools = () => {
  const tools = [
    // IDEs
    { 
      name: 'PyCharm', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg',
      category: 'IDE',
      description: 'Professional Python IDE by JetBrains' 
    },
    { 
      name: 'VS Code', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      category: 'Code Editor',
      description: 'Lightweight editor with Python extensions' 
    },

    // Frameworks
    { 
      name: 'Django', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      category: 'Web Framework',
      description: 'Batteries-included framework' 
    },
    { 
      name: 'Flask', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
      category: 'Microframework',
      description: 'Lightweight web framework' 
    },
    { 
      name: 'FastAPI', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      category: 'API Framework',
      description: 'Modern API framework' 
    },

    // Data Science
    { 
      name: 'Pandas', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      category: 'Data Analysis',
      description: 'Data manipulation library' 
    },
    { 
      name: 'NumPy', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
      category: 'Scientific Computing',
      description: 'Numerical computing library' 
    },
    { 
      name: 'Matplotlib', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
      category: 'Data Visualization',
      description: 'Plotting library' 
    },


    { 
      name: 'Git', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      category: 'Version Control',
      description: 'Distributed version control' 
    },
    { 
      name: 'PyTest', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg',
      category: 'Testing',
      description: 'Testing framework' 
    }
  ];

  return (
    <div className="java-tools-container">
    <h1 className="java-tools-header">Tools & Technologies Covered</h1>
    <br /> <br />
    <div className="tools-grid">
      {tools.map((tool, index) => (
        <div key={index} className="tool-card">
          <img 
            src={tool.logo} 
            alt={tool.name} 
            className="tool-logo"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/60?text=Tool';
            }}
          />
          <span className="tool-name">{tool.name}</span>
          <span className="tool-category">{tool.category}</span>
        </div>
      ))}
    </div>
  </div>
  );
};

