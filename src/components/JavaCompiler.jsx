import React from 'react';
import './JavaCompiler.css';

const JavaCompiler = () => {
  return (
    <div className="java-compiler-container">
      <h2>Java Online Compiler</h2>
      <p>Type your Java code and run it below:</p>

      {/* Embedded Java Compiler from OneCompiler */}
      <div className="java-compiler-embed">
        <iframe
          src="https://onecompiler.com/embed/java?lite=true"
          width="100%"
          height="500"
          frameBorder="0"
          title="Java Online Compiler"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default JavaCompiler;

