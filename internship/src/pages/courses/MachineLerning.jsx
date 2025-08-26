import React, { useState } from 'react';
import '../../css/Java.css';
import EnrollmentForm from './components/EnrollForm';
import Quiz from './components/Quiz';
import Companies from './components/Companies';
import PopularCoursesSlider from '../../components/Popular';

const MachineLearningPage = () => {
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
      module: 'Python for ML',
      topics: [
        'Python Basics for ML',
        'NumPy & Pandas for Data Processing',
        'Data Visualization',
        'Statistical Foundations',
        'Linear Algebra Basics'
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
        'Feature Engineering'
      ],
      duration: '5 weeks'
    },
    {
      module: 'Advanced ML Algorithms',
      topics: [
        'Ensemble Methods (Random Forest, XGBoost)',
        'Support Vector Machines',
        'Dimensionality Reduction',
        'Clustering Algorithms',
        'Hyperparameter Tuning'
      ],
      duration: '5 weeks'
    },
    {
      module: 'Deep Learning & Deployment',
      topics: [
        'Neural Networks Basics',
        'TensorFlow/Keras',
        'CNN for Computer Vision',
        'Model Deployment with Flask',
        'Capstone Project'
      ],
      duration: '6 weeks'
    }
  ];

  // Program outcomes
  const outcomes = [
    'Master fundamental ML algorithms',
    'Build and optimize predictive models',
    'Understand deep learning basics',
    'Deploy ML models as web services',
    'Develop portfolio with 5+ projects'
  ];

  // Tools covered
  const tools = [
    { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'Scikit-learn', logo: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png' },
    { name: 'TensorFlow', logo: 'https://www.tensorflow.org/images/tf_logo_social.png' },
    { name: 'Keras', logo: 'https://keras.io/img/logo.png' },
    { name: 'Pandas', logo: 'https://pandas.pydata.org/static/img/pandas_white.svg' },
    { name: 'NumPy', logo: 'https://numpy.org/images/logo.svg' }
  ];

  // Project examples
  const projects = [
    {
      title: 'House Price Prediction',
      description: 'Regression model to predict real estate prices',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
      techniques: ['Linear Regression', 'Feature Engineering', 'Grid Search']
    },
    {
      title: 'Image Classifier',
      description: 'CNN model to classify images',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
      techniques: ['CNN', 'TensorFlow', 'Image Augmentation']
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Predict which customers will churn',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093',
      techniques: ['Logistic Regression', 'Random Forest', 'SMOTE']
    }
  ];

  return (
    <div className="ml-course-page">
      {/* Hero Section */}
      <div className="course-hero ml">
        <div className="container-dev">
          <h1>Machine Learning Internship Program</h1>
          <p className="subtitle">Master ML algorithms and build intelligent systems with hands-on projects</p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setShowEnrollment(true)}>Enroll Now</button>
            <a
              href="/syllabus/ML.pdf"
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
              <p>14-16 Weeks</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🧠</div>
              <h3>ML Models</h3>
              <p>Build 10+ ML Models</p>
            </div>
            <div className="highlight-card">
              <div className="icon">📊</div>
              <h3>Projects</h3>
              <p>5+ Real-world Projects</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🎓</div>
              <h3>Certification</h3>
              <p>ML Engineer Certificate</p>
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
                Our Machine Learning internship takes you from fundamental concepts to advanced algorithms,
                with hands-on experience building and deploying ML models.
              </p>
              <ul>
                <li>Core machine learning algorithms</li>
                <li>Data preprocessing and feature engineering</li>
                <li>Model evaluation and optimization</li>
                <li>Ensemble methods and neural networks</li>
                <li>Working with TensorFlow and Keras</li>
                <li>Model deployment techniques</li>
                <li>Real-world ML project lifecycle</li>
              </ul>
              <div className="image-gallery">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="ML algorithms" />
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09" alt="Data analysis" />
              </div>
            </div>
            <div className="learn-image">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" alt="Neural networks" />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Covered */}
      <section className="tools-section">
        <div className="container">
          <h2>ML Tools & Frameworks</h2>
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
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="Hands-on" />
              <h3>Hands-on Coding</h3>
              <p>Implement algorithms from scratch</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09" alt="Projects" />
              <h3>Project-Based</h3>
              <p>Learn by building real ML applications</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Mentorship" />
              <h3>Expert Mentorship</h3>
              <p>Guidance from ML engineers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="curriculum-section">
        <div className="container">
          <h2>Course Curriculum</h2>
          <p className="section-description">Comprehensive learning path from ML basics to advanced topics</p>
          
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
                  <div className="techniques">
                    {project.techniques.map((tech, i) => (
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

      <Quiz courseName={'ML'}/>
      <Companies />
      <PopularCoursesSlider />

      {/* Enrollment Form Modal */}
      {showEnrollment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowEnrollment(false)}>×</button>
            <EnrollmentForm 
              courseName="Machine Learning Internship Program" 
              batches={upcomingBatches} 
              onClose={() => setShowEnrollment(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MachineLearningPage;