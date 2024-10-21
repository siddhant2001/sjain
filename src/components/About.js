import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <img src="profile.jpg" alt="Siddhant Jain" className="profile-photo" />
        <h1>Siddhant Jain</h1>
        <p>Software Engineer</p>
        <p>Welcome to my personal website!</p>
      </div>
    </section>
  );
};

export default About;
