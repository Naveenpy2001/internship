import React, { useState } from "react";
import "../../../css/Quiz.css";

const Quiz = ({ courseName }) => {
  // Course-specific questions
  const courseQuizzes = {
    java: [
      {
        question: "Which of these is NOT a Java keyword?",
        options: ["interface", "extends", "implements", "inherits"],
        correctAnswer: "inherits",
      },
      {
        question: "What is the default value of a boolean variable in Java?",
        options: ["true", "false", "null", "0"],
        correctAnswer: "false",
      },
      {
        question:
          "Which collection implements FIFO (First-In-First-Out) in Java?",
        options: ["ArrayList", "LinkedList", "Stack", "PriorityQueue"],
        correctAnswer: "PriorityQueue",
      },
      {
        question: "What does JVM stand for?",
        options: [
          "Java Virtual Machine",
          "Java Verified Method",
          "Java Variable Memory",
          "Just Virtual Machine",
        ],
        correctAnswer: "Java Virtual Machine",
      },
    ],
    python: [
      {
        question: "How do you create an empty dictionary in Python?",
        options: ["{}", "dict()", "[]", "Both A and B"],
        correctAnswer: "Both A and B",
      },
      {
        question: "What is the output of 'hello'[1:] in Python?",
        options: ["h", "e", "ello", "hello"],
        correctAnswer: "ello",
      },
      {
        question: "Which decorator is used for class methods in Python?",
        options: ["@staticmethod", "@classmethod", "@method", "@function"],
        correctAnswer: "@classmethod",
      },
      {
        question: "What does PEP 8 refer to in Python?",
        options: [
          "Python Enhancement Proposal for style guide",
          "Python Exception Protocol",
          "Python Extension Package",
          "Python Evaluation Process",
        ],
        correctAnswer: "Python Enhancement Proposal for style guide",
      },
    ],
    mern: [
      {
        question: "Which database does MERN stack typically use?",
        options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
        correctAnswer: "MongoDB",
      },
      {
        question: "What does the 'E' stand for in MERN?",
        options: ["Elastic", "Express", "EJS", "Entity"],
        correctAnswer: "Express",
      },
      {
        question: "Which hook is used for side effects in React?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: "useEffect",
      },
      {
        question: "How do you create a model in Mongoose?",
        options: [
          "mongoose.schema()",
          "mongoose.model()",
          "mongoose.createModel()",
          "mongoose.define()",
        ],
        correctAnswer: "mongoose.model()",
      },
    ],
    javaFullStack: [
      {
        question:
          "Which framework is commonly used for Java backend development?",
        options: ["Django", "Spring", "Flask", "Express"],
        correctAnswer: "Spring",
      },
      {
        question: "What is Thymeleaf primarily used for?",
        options: [
          "Database access",
          "Frontend templating",
          "Authentication",
          "API routing",
        ],
        correctAnswer: "Frontend templating",
      },
      {
        question: "Which ORM is commonly used with Java?",
        options: ["Sequelize", "Hibernate", "Mongoose", "ActiveRecord"],
        correctAnswer: "Hibernate",
      },
      {
        question: "What does JPA stand for?",
        options: [
          "Java Persistence API",
          "Java Programming Architecture",
          "JavaScript Page Application",
          "Java Performance Analysis",
        ],
        correctAnswer: "Java Persistence API",
      },
    ],
    devops: [
      {
        question: "Which tool is primarily used for container orchestration?",
        options: ["Docker", "Kubernetes", "Jenkins", "Ansible"],
        correctAnswer: "Kubernetes",
      },
      {
        question: "What is the main purpose of CI/CD pipelines?",
        options: [
          "To automate software testing and deployment",
          "To manage cloud infrastructure",
          "To monitor application performance",
          "To store application code",
        ],
        correctAnswer: "To automate software testing and deployment",
      },
      {
        question: "Which of these is an infrastructure-as-code tool?",
        options: ["Terraform", "Nagios", "Grafana", "Prometheus"],
        correctAnswer: "Terraform",
      },
      {
        question: "What does 'IaC' stand for in DevOps?",
        options: [
          "Infrastructure as Code",
          "Integration and Configuration",
          "Internet as Cloud",
          "Instance as Container",
        ],
        correctAnswer: "Infrastructure as Code",
      },
    ],
    dataScience: [
      {
        question:
          "Which library is fundamental for data manipulation in Python?",
        options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
        correctAnswer: "Pandas",
      },
      {
        question: "What is the primary purpose of Jupyter Notebooks?",
        options: [
          "Interactive data analysis and visualization",
          "Web application development",
          "Database management",
          "System administration",
        ],
        correctAnswer: "Interactive data analysis and visualization",
      },
      {
        question:
          "Which statistical concept measures relationships between variables?",
        options: ["Mean", "Correlation", "Variance", "Standard Deviation"],
        correctAnswer: "Correlation",
      },
      {
        question: "What does ETL stand for in data science?",
        options: [
          "Extract, Transform, Load",
          "Evaluate, Test, Learn",
          "Explore, Train, Label",
          "Engine, Template, Language",
        ],
        correctAnswer: "Extract, Transform, Load",
      },
    ],
    ai: [
      {
        question: "What is the Turing Test used for?",
        options: [
          "Measuring computer performance",
          "Evaluating machine intelligence",
          "Testing network security",
          "Validating data integrity",
        ],
        correctAnswer: "Evaluating machine intelligence",
      },
      {
        question: "Which algorithm is commonly used for pathfinding in AI?",
        options: ["A*", "K-means", "SVM", "Random Forest"],
        correctAnswer: "A*",
      },
      {
        question: "What type of AI system is Siri or Alexa?",
        options: [
          "Computer Vision",
          "Natural Language Processing",
          "Robotics",
          "Predictive Analytics",
        ],
        correctAnswer: "Natural Language Processing",
      },
      {
        question: "Which of these is NOT a type of machine learning?",
        options: [
          "Supervised learning",
          "Unsupervised learning",
          "Reinforcement learning",
          "Compiler learning",
        ],
        correctAnswer: "Compiler learning",
      },
    ],
    ml: [
      {
        question: "What is the purpose of a validation set in ML?",
        options: [
          "To train the model",
          "To tune hyperparameters",
          "To test the final model",
          "To store training data",
        ],
        correctAnswer: "To tune hyperparameters",
      },
      {
        question:
          "Which algorithm is used for both classification and regression?",
        options: ["KNN", "K-means", "PCA", "Apriori"],
        correctAnswer: "KNN",
      },
      {
        question: "What does 'overfitting' mean in machine learning?",
        options: [
          "Model performs well on training data but poorly on unseen data",
          "Model performs poorly on all data",
          "Model is too simple",
          "Training process takes too long",
        ],
        correctAnswer:
          "Model performs well on training data but poorly on unseen data",
      },
      {
        question: "Which technique helps prevent overfitting?",
        options: [
          "Adding more features",
          "Using a simpler model",
          "Training longer",
          "Increasing learning rate",
        ],
        correctAnswer: "Using a simpler model",
      },
    ],
  };

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Get questions for the selected course
  const quizQuestions =
    courseQuizzes[courseName.toLowerCase()] || courseQuizzes.java;
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Handle option selection
  const handleOptionSelect = (option) => {
    if (!showResult) {
      setSelectedOption(option);
    }
  };

  // Check the selected answer
  const checkAnswer = () => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    if (isCorrect) {
      setQuizScore(quizScore + 1);
    }

    setShowResult(true);
  };

  // Move to next question or complete quiz
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  // Handle enrollment
  const handleEnroll = () => {
    setIsEnrolled(true);
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2 className="quiz-course-title">{courseName} Quiz</h2>
        {!quizCompleted && !isEnrolled && (
          <p className="quiz-progress">
            Question {currentQuestionIndex + 1}/{quizQuestions.length}
          </p>
        )}
      </div>

      {!isEnrolled ? (
        <>
          {!quizCompleted ? (
            <>
              <div className="quiz-question">
                <h3 className="quiz-question-text">
                  {currentQuestion.question}
                </h3>
              </div>

              <div className="quiz-options">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    className={`quiz-option ${
                      selectedOption === option ? "quiz-option-selected" : ""
                    } ${
                      showResult
                        ? option === currentQuestion.correctAnswer
                          ? "quiz-option-correct"
                          : "quiz-option-disabled"
                        : ""
                    }`}
                    onClick={() => handleOptionSelect(option)}
                    disabled={showResult}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {selectedOption && !showResult && (
                <button className="quiz-submit" onClick={checkAnswer}>
                  Submit Answer
                </button>
              )}

              {showResult && (
                <div className="quiz-result">
                  {selectedOption === currentQuestion.correctAnswer ? (
                    <p className="quiz-result-correct">Correct! 🎉</p>
                  ) : (
                    <>
                      <p className="quiz-result-incorrect">Not correct 😕</p>
                      <p className="quiz-result-answer">
                        The right answer is:{" "}
                        <strong>{currentQuestion.correctAnswer}</strong>
                      </p>
                    </>
                  )}
                  <button className="quiz-next" onClick={handleNextQuestion}>
                    {currentQuestionIndex < quizQuestions.length - 1
                      ? "Next Question"
                      : "Finish Quiz"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="quiz-enroll">
              <h3 className="quiz-enroll-title">Quiz Completed!</h3>
              <p className="quiz-enroll-score">
                Your score: {quizScore}/{quizQuestions.length}
              </p>
              <p className="quiz-enroll-text">
                Enroll in our {courseName} internship for more challenges!
              </p>
              <button className="quiz-enroll-button" onClick={handleEnroll}>
                Enroll in {courseName} Internship
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="quiz-waiting">
          <h3 className="quiz-waiting-title">Enrollment Confirmed!</h3>
          <p className="quiz-waiting-text">
            Thank you for enrolling in our {courseName} internship.
          </p>
          <p className="quiz-waiting-text">
            We'll notify you when new quizzes are available.
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
