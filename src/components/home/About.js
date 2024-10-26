// About.js

import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);

  // Handle scroll for parallax effect
  const handleScroll = () => {
    const currentScrollY = window.pageYOffset;
    setOffsetY(currentScrollY);

    // Calculate opacity based on scroll position
    const opacityValue = Math.max(1 - currentScrollY / 700, 0); // Adjust divisor to control fade speed
    setTextOpacity(opacityValue);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="about">
      <div className="dot-grid"></div> {/* Added the dot grid background */}
      <div className="about-content" style={{ opacity: textOpacity }}>
        <div className="profile-photo-container">
          <img
            src="profile.jpg"
            alt="Siddhant Jain"
            className="profile-photo"
            style={{
              transform: `translateY(${offsetY * 0.1}px) scale(1.4)`,
              transition: 'transform 0.6s ease',
            }}
          />
        </div>
        <h1>
          <span className="name">Siddhant Jain</span>
        </h1>
        <p className="title">Software Engineer</p>
        <p className="summary">
          I like to build things for the web. I'm a software engineer based in Namma Bengaluru, India. Currently working at <a href='https://traceable.ai'>Traceable</a>. BTech + MS in Computer Science from IIIT Hyderabad. Published author of 2 papers.
        </p>
        <div className="social-links">
          <a
            href="https://github.com/siddhant2001"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/siddhant-jain-2001/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:siddhant.jain120@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
