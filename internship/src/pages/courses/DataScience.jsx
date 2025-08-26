import React, { useState } from 'react';
import '../../css/Java.css'; // Reusing the same CSS
import EnrollmentForm from './components/EnrollForm';
import PopularCoursesSlider from '../../components/Popular';
import Companies from './components/Companies';
import Quiz from './components/Quiz';

const DataSciencePage = () => {
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
      module: 'Python for Data Science',
      topics: [
        'Python Basics for Data Analysis',
        'NumPy for Numerical Computing',
        'Pandas for Data Manipulation',
        'Data Visualization Basics',
        'Working with Jupyter Notebooks'
      ],
      duration: '4 weeks'
    },
    {
      module: 'Data Analysis & Visualization',
      topics: [
        'Exploratory Data Analysis (EDA)',
        'Matplotlib & Seaborn',
        'Plotly for Interactive Visuals',
        'Data Cleaning Techniques',
        'Feature Engineering'
      ],
      duration: '4 weeks'
    },
    {
      module: 'Machine Learning Fundamentals',
      topics: [
        'Supervised vs Unsupervised Learning',
        'Regression Algorithms',
        'Classification Algorithms',
        'Model Evaluation Metrics',
        'Scikit-learn Library'
      ],
      duration: '5 weeks'
    },
    {
      module: 'Advanced Topics',
      topics: [
        'Natural Language Processing (NLP)',
        'Neural Networks Basics',
        'Time Series Analysis',
        'Model Deployment',
        'Capstone Project'
      ],
      duration: '5 weeks'
    }
  ];

  // Program outcomes
  const outcomes = [
    'Master Python for data analysis and visualization',
    'Build predictive models using machine learning',
    'Work with real-world datasets',
    'Develop end-to-end data science projects',
    'Gain industry-recognized certification'
  ];

  // Facilities provided
  const facilities = [
    { icon: '📈', title: 'Real Datasets', description: 'Work with datasets from various industries' },
    { icon: '🧠', title: 'ML Projects', description: 'Hands-on machine learning projects' },
    { icon: '📊', title: 'Visualization Tools', description: 'Master visualization libraries' },
    { icon: '👨‍🏫', title: 'Expert Mentors', description: 'Learn from data science professionals' },
    { icon: '💻', title: 'Cloud Labs', description: 'Access to cloud computing resources' },
    { icon: '📝', title: 'Portfolio Building', description: 'Develop a strong project portfolio' }
  ];

  // Tools covered
  const tools = [
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'Pandas', logo: 'https://pandas.pydata.org/static/img/pandas_white.svg' },
    { name: 'NumPy', logo: 'https://numpy.org/images/logo.svg' },
    { name: 'Matplotlib', logo: 'https://matplotlib.org/stable/_static/logo2_compressed.svg' },
    { name: 'Scikit-learn', logo: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png' },
    { name: 'TensorFlow', logo: 'https://www.tensorflow.org/images/tf_logo_social.png' }
  ];

  return (
    <div className="data-science-page">
      {/* Hero Section */}
      <div className="course-hero data-science">
        <div className="container-dev">
          <h1>Data Science Internship Program</h1>
          <p className="subtitle">Master data analysis, visualization, and machine learning with hands-on projects</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setShowEnrollment(true)}>Enroll Now</button>
            <a
              href="/syllabus/datascience.pdf"
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
              <p>12-16 Weeks</p>
            </div>
            <div className="highlight-card">
              <div className="icon">📊</div>
              <h3>Projects</h3>
              <p>6+ Real-world Projects</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🧠</div>
              <h3>ML Models</h3>
              <p>Build 5+ ML Models</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🎓</div>
              <h3>Certification</h3>
              <p>Data Science Certificate</p>
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
                Our Data Science internship provides comprehensive training in one of the most in-demand fields today.
                You'll start with Python for data analysis and progress to building machine learning models.
              </p>
              <ul>
                <li>Python programming for data science</li>
                <li>Data cleaning and preprocessing</li>
                <li>Exploratory data analysis (EDA)</li>
                <li>Data visualization techniques</li>
                <li>Machine learning algorithms</li>
                <li>Model evaluation and deployment</li>
                <li>Working with real-world datasets</li>
              </ul>
              <div className="image-gallery">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Data analysis" />
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Machine learning" />
              </div>
            </div>
            <div className="learn-image">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" alt="Data visualization" />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Covered */}
      <section className="tools-section">
        <div className="container">
          <h2>Tools & Technologies Covered</h2>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div className="tool-card" key={index}>
                <div className="tool-logo">
                  <img src={tool.logo} alt={tool.name} />
                </div>
                <div className="tool-name">{tool.name}</div>
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
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Case Studies" />
              <h3>Case Study Based</h3>
              <p>Learn through real-world business cases and datasets</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09" alt="Hands-on" />
              <h3>Hands-on Labs</h3>
              <p>Practical exercises with real datasets</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Mentorship" />
              <h3>1:1 Mentorship</h3>
              <p>Personal guidance from industry experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="curriculum-section">
        <div className="container">
          <h2>Course Curriculum</h2>
          <p className="section-description">Comprehensive learning path from data analysis to machine learning</p>
          
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

      {/* Project Examples */}
      <section className="projects-section">
        <div className="container">
          <h2>Project Examples</h2>
          <div className="project-cards">
            <div className="project-card">
              <h3>Customer Segmentation</h3>
              <p>Cluster analysis for marketing optimization</p>
              <div className="tech-used">
                <span>K-Means</span>
                <span>PCA</span>
                <span>RFM Analysis</span>
              </div>
            </div>
            <div className="project-card">
              <h3>House Price Prediction</h3>
              <p>Regression model for real estate pricing</p>
              <div className="tech-used">
                <span>Linear Regression</span>
                <span>Feature Engineering</span>
                <span>Grid Search</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Sentiment Analysis</h3>
              <p>NLP model for product reviews</p>
              <div className="tech-used">
                <span>NLTK</span>
                <span>TF-IDF</span>
                <span>Naive Bayes</span>
              </div>
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
      <Quiz courseName={'Data Science'} />
      <Companies />

      {/* Enrollment Form Modal */}
      {showEnrollment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowEnrollment(false)}>×</button>
            <EnrollmentForm 
              courseName="Data Science Internship Program" 
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

export default DataSciencePage;