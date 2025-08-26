import React, { useState } from "react";
import "../../css/Java.css"; // Reusing the same CSS
import EnrollmentForm from "./components/EnrollForm";
import Quiz from "./components/Quiz";
import Companies from "./components/Companies";
import PopularCoursesSlider from "../../components/Popular";

const AIPage = () => {
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
      module: "AI Foundations",
      topics: [
        "Introduction to Artificial Intelligence",
        "Python for AI",
        "Mathematical Foundations",
        "Search Algorithms",
        "Problem Solving Techniques",
      ],
      duration: "4 weeks",
    },
    {
      module: "Machine Learning Core",
      topics: [
        "Supervised Learning Algorithms",
        "Unsupervised Learning",
        "Neural Networks Basics",
        "Model Evaluation",
        "Feature Engineering",
      ],
      duration: "5 weeks",
    },
    {
      module: "Deep Learning",
      topics: [
        "Deep Neural Networks",
        "Convolutional Neural Networks",
        "Recurrent Neural Networks",
        "Transfer Learning",
        "Hyperparameter Optimization",
      ],
      duration: "5 weeks",
    },
    {
      module: "Advanced AI Topics",
      topics: [
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "AI Ethics",
        "Capstone Project",
      ],
      duration: "6 weeks",
    },
  ];

  // Program outcomes
  const outcomes = [
    "Understand fundamental AI concepts",
    "Build and train neural networks",
    "Develop NLP and Computer Vision applications",
    "Implement reinforcement learning solutions",
    "Create portfolio with 5+ AI projects",
  ];

  // AI Domains covered
  const domains = [
    {
      name: "Natural Language Processing",
      description: "Build chatbots, translators, and text analyzers",
      icon: "💬",
    },
    {
      name: "Computer Vision",
      description: "Create image recognition systems",
      icon: "👁️",
    },
    {
      name: "Reinforcement Learning",
      description: "Develop AI that learns from interaction",
      icon: "🎮",
    },
    {
      name: "Generative AI",
      description: "Create art and content with AI",
      icon: "🎨",
    },
  ];

  // Tools covered
  const tools = [
    {
      name: "TensorFlow",
      logo: "https://www.tensorflow.org/images/tf_logo_social.png",
    },
    {
      name: "PyTorch",
      logo: "https://pytorch.org/assets/images/pytorch-logo.png",
    },
    {
      name: "OpenCV",
      logo: "https://opencv.org/wp-content/uploads/2020/07/OpenCV_logo_black.png",
    },
    { name: "NLTK", logo: "https://www.nltk.org/_static/nltk_logo.png" },
    {
      name: "Hugging Face",
      logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    },
    { name: "Keras", logo: "https://keras.io/img/logo.png" },
  ];

  // Project examples
  const projects = [
    {
      title: "Chatbot Assistant",
      description: "AI-powered conversational agent",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
      techniques: ["NLP", "Transformers", "Dialogflow"],
    },
    {
      title: "Object Detection System",
      description: "Real-time object recognition",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      techniques: ["YOLO", "OpenCV", "TensorFlow"],
    },
    {
      title: "AI Art Generator",
      description: "Create art from text prompts",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
      techniques: ["Stable Diffusion", "GANs", "CLIP"],
    },
  ];

  return (
    <div className="ai-course-page">
      {/* Hero Section */}
      <div className="course-hero ml">
        <div className="container-dev">
          <h1>Artificial Intelligence Internship Program</h1>
          <p className="subtitle">
            Master AI technologies and build intelligent systems with hands-on
            projects
          </p>
          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => setShowEnrollment(true)}
            >
              Enroll Now
            </button>
            <a
              href="/syllabus/ai.pdf"
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
              <div className="icon">🧠</div>
              <h3>AI Models</h3>
              <p>Build 10+ AI Models</p>
            </div>
            <div className="highlight-card">
              <div className="icon">📊</div>
              <h3>Projects</h3>
              <p>5+ Real-world Projects</p>
            </div>
            <div className="highlight-card">
              <div className="icon">🎓</div>
              <h3>Certification</h3>
              <p>AI Engineer Certificate</p>
            </div>
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
                Our AI internship provides comprehensive training in artificial
                intelligence, from fundamental concepts to cutting-edge
                technologies like deep learning and generative AI.
              </p>
              <ul>
                <li>Core AI concepts and algorithms</li>
                <li>Machine learning and deep learning</li>
                <li>Natural language processing (NLP)</li>
                <li>Computer vision techniques</li>
                <li>Reinforcement learning fundamentals</li>
                <li>Ethical AI development</li>
                <li>Deploying AI solutions</li>
              </ul>
              <div className="image-gallery">
                <img
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
                  alt="AI technology"
                />
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                  alt="Machine learning"
                />
              </div>
            </div>
            <div className="learn-image">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09"
                alt="AI applications"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Domains */}
      <section className="domains-section">
        <div className="container">
          <h2>AI Domains Covered</h2>
          <div className="domains-grid">
            {domains.map((domain, index) => (
              <div className="domain-card" key={index}>
                <div className="domain-icon">{domain.icon}</div>
                <h3>{domain.name}</h3>
                <p>{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Covered */}
      <section className="tools-section">
        <div className="container">
          <h2>AI Tools & Frameworks</h2>
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
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Hands-on"
              />
              <h3>Hands-on Labs</h3>
              <p>Practical implementation of AI concepts</p>
            </div>
            <div className="method-card">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09"
                alt="Projects"
              />
              <h3>Project-Based</h3>
              <p>Build real AI applications</p>
            </div>
            <div className="method-card">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Research"
              />
              <h3>Research-Oriented</h3>
              <p>Explore cutting-edge AI papers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="curriculum-section">
        <div className="container">
          <h2>Course Curriculum</h2>
          <p className="section-description">
            Comprehensive learning path from AI basics to advanced applications
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

      {/* Project Showcase */}
      <section className="projects-showcase">
        <div className="container">
          <h2>AI Project Showcase</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
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

      <Quiz courseName={"AI"} />
      <Companies />
      <PopularCoursesSlider />

      {/* Enrollment Form Modal */}
      {showEnrollment && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setShowEnrollment(false)}
            >
              ×
            </button>
            <EnrollmentForm
              courseName="Artificial Intelligence Internship Program"
              batches={upcomingBatches}
              onClose={() => setShowEnrollment(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AIPage;
