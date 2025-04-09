// src/pages/courses/JavaPage.js
import React,{useState} from "react";
import "../../css/Java.css";
import { RiJavaFill } from "react-icons/ri";
import EnrollmentForm from "./components/EnrollForm";
import Companies from "./components/Companies";
import Quiz from "./components/Quiz";
import PopularCoursesSlider from "../../components/Popular";

const JavaPage = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  // Upcoming batches data
  const upcomingBatches = [
    {
      date: "July 15, 2023",
      duration: "12 weeks",
      timing: "Weekdays (Mon-Fri) 7-9 PM IST",
      seats: "15 seats left",
    },
    {
      date: "August 1, 2023",
      duration: "16 weeks",
      timing: "Weekends (Sat-Sun) 10 AM-1 PM IST",
      seats: "25 seats left",
    },
    {
      date: "September 5, 2023",
      duration: "12 weeks",
      timing: "Weekdays (Mon-Fri) 6-8 PM IST",
      seats: "Open for enrollment",
    },
  ];

  // Curriculum data
  const curriculum = [
    {
      module: "Core Java Fundamentals",
      topics: [
        "Java Syntax and Data Types",
        "Operators and Control Statements",
        "Object-Oriented Programming Concepts",
        "Exception Handling",
        "Collections Framework",
      ],
      duration: "4 weeks",
    },
    {
      module: "Advanced Java",
      topics: [
        "Multithreading and Concurrency",
        "File I/O and Serialization",
        "Networking Basics",
        "JDBC and Database Connectivity",
        "Lambda Expressions",
      ],
      duration: "4 weeks",
    },
    {
      module: "Java Enterprise Edition",
      topics: [
        "Servlets and JSP",
        "Spring Framework Basics",
        "Hibernate ORM",
        "RESTful Web Services",
        "Microservices Architecture",
      ],
      duration: "4 weeks",
    },
  ];

  // Program outcomes
  const outcomes = [
    "Ability to develop robust Java applications",
    "Understanding of OOP principles and design patterns",
    "Experience with real-world Java development tools",
    "Portfolio of 4+ Java projects",
    "Industry-recognized certification",
  ];

  // Facilities provided
  const facilities = [
    {
      icon: "💻",
      title: "Live Interactive Classes",
      description: "Real-time sessions with industry experts",
    },
    {
      icon: "📚",
      title: "Comprehensive Study Material",
      description: "E-books, cheat sheets, and code samples",
    },
    {
      icon: "🧑‍🏫",
      title: "1:1 Mentorship",
      description: "Personalized guidance from Java professionals",
    },
    {
      icon: "🏆",
      title: "Certification",
      description: "Recognized completion certificate",
    },
    {
      icon: "🤝",
      title: "Placement Assistance",
      description: "Resume building and interview preparation",
    },
    {
      icon: "📱",
      title: "Mobile Learning",
      description: "Access content on mobile devices",
    },
  ];

  return (
  
    <div className="java-course-page">
      {/* Hero Section */}
      <div
        className="course-hero-java"
      >
        <div className="container-java" style={{width:'100%'}}>
          <div className="imgLogo">
          </div>
          <div className="info">
          <h1 style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'6px'}}> <RiJavaFill style={{color:'#000'}} /> <b style={{color:'#ED1D35'}}>Java </b> Program</h1>
          <p className="subtitle-java">
            Master Java programming and build enterprise-level applications with
            hands-on training
          </p>
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => setShowEnrollment(true)}>Enroll Now</button>
            <button className="secondary-btn">Download Syllabus</button>
          </div>
          </div>
        </div>
      </div>
      {showEnrollment && (
  <EnrollmentForm 
    courseName="Python Internship Program" 
    batches={upcomingBatches}
    onClose={() => setShowEnrollment(false)}
  />
)}  

      {/* Course Highlights */}
      {/* <section className="highlights-section-java"> */}
      <section className="highlights-section">
        <div className="highliteContainer">
          <div className="highlight-cards">
            <div className="highlight-card">
              <div className="icon">⏱️</div>
              <h3>Duration</h3>
              <p>12-16 Weeks</p>
            </div>
            <div className="highlight-card">
              <div className="icon">📅</div>
              <h3>Format</h3>
              <p>Online + Live Projects</p>
            </div>
            <div className="highlight-card">
              <div className="icon">👨‍💻</div>
              <h3>Projects</h3>
              <p>4+ Real-world Projects</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🎓</div>
              <h3>Certification</h3>
              <p>Industry Recognized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
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

      {/* Facilities Provided */}
      <section className="facilities-section">
        <div className="container">
          <h2>Facilities We Provide</h2>
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

      {/* What You'll Learn */}
      <section className="learn-section">
        <div className="container">
          <h2>What You'll Learn</h2>
          <div className="learn-content">
            <div className="learn-text">
              <p>
                Our Java internship program is designed to take you from Java
                basics to advanced concepts used in enterprise development.
                You'll gain hands-on experience with real-world projects and
                learn industry best practices from experienced Java developers.
              </p>
              <ul>
                <li>Core Java fundamentals and OOP principles</li>
                <li>Advanced concepts like multithreading and collections</li>
                <li>Database connectivity with JDBC</li>
                <li>Building web applications with Servlets/JSP</li>
                <li>Introduction to Spring Framework</li>
                <li>Unit testing with JUnit</li>
                <li>Debugging and performance optimization</li>
              </ul>
            </div>
            <div className="learn-image">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                alt="Java programming"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Teach */}
      <section className="teaching-method">
        <div className="container">
          <h2>Our Teaching Methodology</h2>
          <div className="method-cards">
            <div className="method-card">
              <h3>Interactive Live Sessions</h3>
              <p>
                Real-time classes with coding demonstrations and Q&A sessions
              </p>
            </div>
            <div className="method-card">
              <h3>Project-Based Learning</h3>
              <p>Learn by building real applications from day one</p>
            </div>
            <div className="method-card">
              <h3>Code Reviews</h3>
              <p>Personalized feedback on your code from industry experts</p>
            </div>
            <div className="method-card">
              <h3>Pair Programming</h3>
              <p>Collaborate with peers on coding exercises</p>
            </div>
            <div className="method-card">
              <h3>Weekly Assessments</h3>
              <p>
                Regular quizzes and coding challenges to test your understanding
              </p>
            </div>
            <div className="method-card">
              <h3>Capstone Project</h3>
              <p>Build a complete Java application as your final project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="curriculum-section">
        <div className="container">
          <h2>Course Curriculum</h2>
          <p className="section-description">
            Comprehensive learning path covering all essential Java concepts
          </p>

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
          <h2>Domain Specialization & Electives</h2>
          <div className="domain-cards">
            <div className="domain-card">
              <h3>Web Development Track</h3>
              <ul>
                <li>Advanced Spring Framework</li>
                <li>RESTful API Development</li>
                <li>Microservices Architecture</li>
              </ul>
            </div>
            <div className="domain-card">
              <h3>Enterprise Applications</h3>
              <ul>
                <li>Java EE Fundamentals</li>
                <li>Application Servers</li>
                <li>Security Implementation</li>
              </ul>
            </div>
            <div className="domain-card">
              <h3>Android Development</h3>
              <ul>
                <li>Java for Android</li>
                <li>Mobile App Architecture</li>
                <li>API Integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Flow */}
      <section className="program-flow">
        <div className="container">
          <h2>Program Flow</h2>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-number">1</div>
              <h3>Orientation</h3>
              <p>Introduction to Java ecosystem and tools setup</p>
            </div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <h3>Core Concepts</h3>
              <p>Master Java fundamentals and OOP principles</p>
            </div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <h3>Advanced Topics</h3>
              <p>Learn multithreading, collections, and JDBC</p>
            </div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <h3>Project Phase</h3>
              <p>Build real-world applications with mentor guidance</p>
            </div>
            <div className="flow-step">
              <div className="step-number">5</div>
              <h3>Certification</h3>
              <p>Final assessment and certification</p>
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

      {/* Learning Materials */}
      <section className="materials-section">
        <div className="container">
          <h2>Learning Materials</h2>
          <div className="materials-list">
            <div className="material-item">
              <h3>Interactive Coding Exercises</h3>
              <p>
                Practice Java concepts with our browser-based coding environment
              </p>
            </div>
            <div className="material-item">
              <h3>Video Tutorials</h3>
              <p>100+ hours of recorded lectures for self-paced learning</p>
            </div>
            <div className="material-item">
              <h3>Code Samples</h3>
              <p>Downloadable examples for all major Java concepts</p>
            </div>
            <div className="material-item">
              <h3>Weekly Quizzes</h3>
              <p>Test your knowledge with automated assessments</p>
            </div>
            <div className="material-item">
              <h3>Community Forum</h3>
              <p>Get help from mentors and peers in our exclusive community</p>
            </div>
            <div className="material-item">
              <h3>Final Project Template</h3>
              <p>Starter code and guidelines for your capstone project</p>
            </div>
          </div>
        </div>
      </section>
      <JavaTools />

      {/* Quiz Example */}
     
     <Quiz courseName='Java'/>

     

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Become a Java Developer?</h2>
          <p>
            Join our internship program and gain the skills companies are
            looking for
          </p>
          <button className="cta-btn" onClick={() => setShowEnrollment(true)}>Enroll Now</button>
        </div>
      </section>
      <PopularCoursesSlider />
    </div>
  );
};

export default JavaPage;




export const JavaTools = () => {
  // All tools in a single array
  const tools = [
    {
      name: 'VS Code',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      category: 'IDE'
    },
    {
      name: 'IntelliJ',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
      category: 'IDE'
    },
    {
      name: 'Eclipse',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg',
      category: 'IDE'
    },
    {
      name: 'Spring Boot',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      category: 'Framework'
    },
    {
      name: 'Hibernate',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg',
      category: 'Framework'
    },
    {
      name: 'JUnit',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg',
      category: 'Testing'
    },
    {
      name: 'Maven',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
      category: 'Build Tool'
    },
    {
      name: 'Gradle',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9MPwAg4cLrCOVvAi4U0jEpFZkuQdwQUubg&s',
      category: 'Build Tool'
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      category: 'Version Control'
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      category: 'Version Control'
    }
  ];

  return (
    <div className="java-tools-container">
      <h1 className="java-tools-header">Tools & Technologies Covered</h1>
      <br />
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



