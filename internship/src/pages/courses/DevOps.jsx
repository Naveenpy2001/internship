import React, { useState } from 'react';
import '../../css/Java.css'; // Reusing the same CSS
import EnrollmentForm from './components/EnrollForm';
import Companies from './components/Companies';
import PopularCoursesSlider from '../../components/Popular';
import Quiz from './components/Quiz';

const DevOpsPage = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  
  // Upcoming batches data
  const upcomingBatches = [
    { date: 'September 1, 2023', duration: '14 weeks', timing: 'Weekdays (Mon-Fri) 7-9 PM IST', seats: '10 seats left' },
    { date: 'October 5, 2023', duration: '16 weeks', timing: 'Weekends (Sat-Sun) 10 AM-2 PM IST', seats: '15 seats left' },
    { date: 'November 10, 2023', duration: '14 weeks', timing: 'Weekdays (Mon-Fri) 6-8 PM IST', seats: 'Open for enrollment' }
  ];

  // Curriculum data
  const curriculum = [
    {
      module: 'Linux & Cloud Fundamentals',
      topics: [
        'Linux Administration',
        'Bash Scripting',
        'AWS/GCP Fundamentals',
        'Networking Basics',
        'IAM & Security'
      ],
      duration: '4 weeks'
    },
    {
      module: 'Infrastructure as Code',
      topics: [
        'Terraform Basics',
        'AWS Resource Provisioning',
        'Ansible Configuration',
        'Packer for AMIs',
        'CloudFormation'
      ],
      duration: '4 weeks'
    },
    {
      module: 'CI/CD Pipelines',
      topics: [
        'Jenkins Setup',
        'GitHub Actions',
        'Docker Fundamentals',
        'Kubernetes Basics',
        'ArgoCD for GitOps'
      ],
      duration: '5 weeks'
    },
    {
      module: 'Monitoring & Advanced Topics',
      topics: [
        'Prometheus & Grafana',
        'ELK Stack',
        'Service Meshes (Istio)',
        'DevSecOps Practices',
        'Capstone Project'
      ],
      duration: '5 weeks'
    }
  ];

  // Program outcomes
  const outcomes = [
    'Master CI/CD pipeline implementation',
    'Deploy and manage containerized applications',
    'Automate infrastructure provisioning',
    'Implement monitoring and logging solutions',
    'Develop DevOps best practices'
  ];

  // Tools covered
  const tools = [
    { name: 'Docker', logo: 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png' },
    { name: 'Kubernetes', logo: 'https://kubernetes.io/images/favicon.png' },
    { name: 'Terraform', logo: 'https://www.terraform.io/assets/images/og-image-8b3e4f7d.png' },
    { name: 'Jenkins', logo: 'https://www.jenkins.io/images/logos/jenkins/jenkins.png' },
    { name: 'AWS', logo: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png' },
    { name: 'Ansible', logo: 'https://www.ansible.com/hubfs/2018_Images/Assets/Ansible-Mark-Large-RGB-Pool.png' }
  ];

  // Project examples
  const projects = [
    {
      title: 'Automated Deployment Pipeline',
      description: 'End-to-end CI/CD pipeline for microservices',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Helm']
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Terraform modules for AWS environment',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
      technologies: ['Terraform', 'AWS', 'Ansible', 'Packer']
    },
    {
      title: 'Monitoring Dashboard',
      description: 'Real-time monitoring with alerts',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09',
      technologies: ['Prometheus', 'Grafana', 'ELK', 'Alertmanager']
    }
  ];

  return (
    <div className="devops-course-page">
      {/* Hero Section */}
      <div className="course-hero devops">
        <div className="container-dev">
          <h1>DevOps Internship Program</h1>
          <p className="subtitle">Master CI/CD, Cloud Infrastructure, and Automation with industry projects</p>
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
              <p>14-16 Weeks</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🛠️</div>
              <h3>Tools</h3>
              <p>10+ DevOps Tools</p>
            </div>
            <div className="highlight-card">
              <div className="icon">📦</div>
              <h3>Projects</h3>
              <p>5+ Real-world Projects</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🎓</div>
              <h3>Certification</h3>
              <p>DevOps Engineer Certificate</p>
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
                Our DevOps internship provides hands-on training in modern software delivery practices,
                infrastructure automation, and cloud-native technologies.
              </p>
              <ul>
                <li>Linux administration and shell scripting</li>
                <li>Cloud computing fundamentals (AWS/GCP)</li>
                <li>Containerization with Docker</li>
                <li>Orchestration with Kubernetes</li>
                <li>CI/CD pipeline implementation</li>
                <li>Infrastructure as Code (Terraform)</li>
                <li>Monitoring and logging solutions</li>
              </ul>
              <div className="image-gallery">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" alt="DevOps tools" />
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" alt="Cloud computing" />
              </div>
            </div>
            <div className="learn-image">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09" alt="DevOps workflow" />
            </div>
          </div>
        </div>
      </section>

      {/* Tools Covered */}
      <section className="tools-section">
        <div className="container">
          <h2>DevOps Tools Covered</h2>
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
              <h3>Hands-on Labs</h3>
              <p>Real-world scenarios with cloud environments</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09" alt="Projects" />
              <h3>Project-Based</h3>
              <p>Build complete DevOps solutions</p>
            </div>
            <div className="method-card">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Mentorship" />
              <h3>Industry Mentors</h3>
              <p>Learn from DevOps practitioners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="curriculum-section">
        <div className="container">
          <h2>Course Curriculum</h2>
          <p className="section-description">Comprehensive learning path covering all DevOps practices</p>
          
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
                    {project.technologies.map((tech, i) => (
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
      <Quiz courseName='devops'/>
      <Companies />
      <PopularCoursesSlider />


      {/* Enrollment Form Modal */}
      {showEnrollment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowEnrollment(false)}>×</button>
            <EnrollmentForm 
              courseName="DevOps Internship Program" 
              batches={upcomingBatches} 
              onClose={() => setShowEnrollment(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DevOpsPage;