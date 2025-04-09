import React, { useState, useEffect, useRef } from 'react';
import '../css/Popular.css';
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

// Import your course images
// import javaImage from './images/java-course.jpg';
// import dataScienceImage from './images/data-science-course.jpg';
// import mernImage from './images/mern-course.jpg';
// import devopsImage from './images/devops-course.jpg';
// import aiImage from './images/ai-course.jpg';

const PopularCoursesSlider = () => {
  const courses = [
    {
      id: 1,
      title: 'Java Full Stack',
      description: 'Master Java, Spring Boot, and React',
      image: "https://miro.medium.com/v2/resize:fit:1400/1*GNFNf_V7rj_C2YUCeZNzsw.jpeg",
      category: 'Development'
    },
    {
      id: 2,
      title: 'Python',
      description: 'Python Coding',
      image: "https://hiit.ng/wp-content/uploads/2022/04/python.jpg",
      category: 'Coding'
    },
    {
      id: 3,
      title: 'Data Science',
      description: 'Python, ML, and Data Analysis',
      image: "https://www.quantzig.com/wp-content/webp-express/webp-images/uploads/2024/06/data-sc-1024x349.jpg.webp",
      category: 'Data'
    },
    {
      id: 4,
      title: 'MERN Stack',
      description: 'MongoDB, Express, React, Node.js',
      image: "https://www.logicraysacademy.com/images/MERN.jpg",
      category: 'Web Development'
    },
    {
      id: 5,
      title: 'DevOps',
      description: 'Docker, Kubernetes, CI/CD',
      image: "https://camo.githubusercontent.com/3f1ab45694c35c660d7a993fa1757519acabfed008f0d65ef940b5dced421b84/68747470733a2f2f7777772e636c6f756434632e636f6d2f6d792f73697465732f6d792f66696c65732f323032332d30312f6465766f70732d6672616d65776f726b2d6f6e2d676f6f676c652d636c6f75642d626c6f672d62616e6e65722e6a7067",
      category: 'Operations'
    },
    {
      id: 6,
      title: 'AI/ML',
      description: 'Neural Networks and Deep Learning',
      image: "https://cdn.pixabay.com/photo/2023/08/15/14/05/banner-8192025_1280.png",
      category: 'Artificial Intelligence'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto slide effect
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, 4000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, currentIndex]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => 
      prev === 0 ? courses.length - 1 : prev - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev === courses.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="cs-slider-container">
      <h2 className="cs-slider-title">Our Popular Courses</h2>
      <p className="cs-slider-subtitle">Join thousands of students learning in-demand skills</p>
      
      <div className="cs-slider-wrapper">
        <button 
          className="cs-slider-btn cs-prev-btn"
          onClick={goToPrev}
          aria-label="Previous course"
        ><IoMdArrowDropleft size={30} className='iconSlide-l'/> 

        </button>
        
        <div 
          className="cs-slider-track"
          ref={sliderRef}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 600ms cubic-bezier(0.645, 0.045, 0.355, 1)'
          }}
        >
          {courses.map((course) => (
            <div 
              key={course.id}
              className="cs-slide"
              style={{ backgroundImage: `url(${course.image || 'img'})` }}
            >
              <div className="cs-slide-overlay"></div>
              <div className="cs-slide-content">
                <span className="cs-slide-category">{course.category}</span>
                <h3 className="cs-slide-title">{course.title}</h3>
                <p className="cs-slide-desc">{course.description}</p>
                <button className="cs-slide-btn">Explore Course</button>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="cs-slider-btn cs-next-btn"
          onClick={goToNext}
          aria-label="Next course"
        ><IoMdArrowDropright size={30} className='iconSlide-r'/>
        </button>
      </div>
      
      <div className="cs-slider-dots">
        {courses.map((_, index) => (
          <button
            key={index}
            className={`cs-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCoursesSlider;