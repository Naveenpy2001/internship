import React, { useState } from 'react';
import './JavaCourse.css';

const JavaCourse = () => {
  // Set Module 1 as the default active module
  const [activeModule, setActiveModule] = useState(0);

  const toggleModule = (moduleIndex) => {
    setActiveModule(moduleIndex);
  };

  const modules = [
    {
      title: "Module 1: Introduction to Java",
      content: (
        <>
          <ul>
            <li>Introduction to Programming</li>
            <li>Basic Java Syntax</li>
            <li>Control Structures</li>
          </ul>
          <p>
            This module introduces the basics of Java programming, including syntax, control structures, and writing your first Java program.
            Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
          </p>
          <div className="java-example">
            <code>
              <span className="keyword">public</span> <span className="keyword">class</span> <span className="class-name">HelloWorld</span> {'{'} <br />
              &nbsp;&nbsp;<span className="keyword">public</span> <span className="keyword">static void</span> <span className="method-name">main</span>(String[] args) {'{'} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="string">"Hello, World!"</span>);<br />
              &nbsp;&nbsp;{'}'} <br />
              {'}'}
            </code>
          </div>
        </>
      )
    },
    {
      title: "Module 2: Object-Oriented Programming (OOP) Concepts",
      content: (
        <>
          <ul>
            <li>Introduction to OOP</li>
            <li>Encapsulation</li>
            <li>Inheritance</li>
            <li>Polymorphism</li>
            <li>Abstraction</li>
          </ul>
          <p>
            Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which are instances of classes.
            OOP concepts are crucial for Java programming, enabling code reuse and scalability.
          </p>
          <div className="java-example">
            <code>
              <span className="keyword">class</span> <span className="class-name">Animal</span> {'{'}<br />
              &nbsp;&nbsp;<span className="keyword">void</span> <span className="method-name">makeSound</span>() {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="string">"Animal sound"</span>);<br />
              &nbsp;&nbsp;{'}'}<br />
              {'}'}<br />
              <span className="keyword">class</span> <span className="class-name">Dog</span> <span className="keyword">extends</span> <span className="class-name">Animal</span> {'{'}<br />
              &nbsp;&nbsp;<span className="keyword">void</span> <span className="method-name">makeSound</span>() {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span className="string">"Bark"</span>);<br />
              &nbsp;&nbsp;{'}'}<br />
              {'}'}
            </code>
          </div>
        </>
      )
    },
    {
      title: "Module 3: Advanced Java Concepts",
      content: (
        <>
          <ul>
            <li>Exception Handling</li>
            <li>Collections Framework</li>
            <li>File Handling</li>
            <li>Multithreading</li>
          </ul>
          <p>
            This module covers advanced Java topics, including handling exceptions to ensure the robustness of your programs,
            using the Collections Framework to manage groups of objects, and exploring multithreading for concurrent programming.
          </p>
          <div className="java-example">
            <code>
              <span className="keyword">try</span> {'{'}<br />
              &nbsp;&nbsp;int data = 50 / 0;<br />
              {'}'} <span className="keyword">catch</span> (ArithmeticException e) {'{'}<br />
              &nbsp;&nbsp;System.out.println(e);<br />
              {'}'}
            </code>
          </div>
        </>
      )
    },
    {
      title: "Module 4: Java APIs and Libraries",
      content: (
        <>
          <ul>
            <li>Java I/O Streams</li>
            <li>Networking in Java</li>
            <li>Java Database Connectivity (JDBC)</li>
          </ul>
          <p>
            Java provides a rich set of APIs and libraries that make it easier to perform I/O operations, network communications, and database interactions.
            This module provides an overview of these APIs and how to use them effectively.
          </p>
          <div className="java-example">
            <code>
              FileInputStream in = <span className="keyword">new</span> FileInputStream(<span className="string">"input.txt"</span>);<br />
              FileOutputStream out = <span className="keyword">new</span> FileOutputStream(<span className="string">"output.txt"</span>);<br />
              int c;<br />
              <span className="keyword">while</span> ((c = in.read()) != -1) {'{'}<br />
              &nbsp;&nbsp;out.write(c);<br />
              {'}'}<br />
              in.close();<br />
              out.close();
            </code>
          </div>
        </>
      )
    },
    {
      title: "Module 5: Java Web Development",
      content: (
        <>
          <ul>
            <li>Introduction to Web Development</li>
            <li>Servlets and JSP</li>
            <li>Java Web Frameworks</li>
          </ul>
          <p>
            Web development with Java involves building dynamic web applications using technologies such as Servlets, JSP, and various Java web frameworks.
            This module covers the basics of Java-based web development.
          </p>
          <div className="java-example">
            <code>
              <span className="keyword">public</span> <span className="keyword">class</span> <span className="class-name">MyServlet</span> <span className="keyword">extends</span> HttpServlet {'{'}<br />
              &nbsp;&nbsp;<span className="keyword">protected void</span> <span className="method-name">doGet</span>(HttpServletRequest request, HttpServletResponse response) {'{'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;response.setContentType(<span className="string">"text/html"</span>);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;PrintWriter out = response.getWriter();<br />
              &nbsp;&nbsp;&nbsp;&nbsp;out.println(<span className="string">"Hello, World!"</span>);<br />
              &nbsp;&nbsp;{'}'}<br />
              {'}'}
            </code>
          </div>
        </>
      )
    },
  ];

  return (
    <div className="java-course-container">
      <div className="java-topic-list">
        {modules.map((module, index) => (
          <div
            key={index}
            className={`java-topic-item ${index === activeModule ? 'java-topic-active' : ''}`}
            onClick={() => toggleModule(index)}
          >
            {module.title}
          </div>
        ))}
      </div>
      <div className="java-topic-explanation">
        {modules[activeModule] && (
          <>
            <div className="java-module-title">
              {modules[activeModule].title}
            </div>
            <div className="java-module-content">
              {modules[activeModule].content}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JavaCourse;
