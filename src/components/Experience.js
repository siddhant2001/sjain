import React from 'react';
import './Experience.css';

// Import all experiences
import traceable from './experiences/traceable';
import dgraph from './experiences/dgraph';
import motorq from './experiences/motorq';
import lotusdew from './experiences/lotusdew';
import zinkhin from './experiences/zinkhin';
import dreamvu from './experiences/dreamvu';
import arcturus from './experiences/arcturus';

const currentExperiences = [traceable, dgraph, motorq, lotusdew];
const olderExperiences = [zinkhin, dreamvu, arcturus];

const Experience = () => {
    return (
        <section className="experience">
          <h2>Experience</h2>
          <div className="experience-list">
            {currentExperiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.period}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
          
          <h3 className="older-experiences-header">Older Experiences</h3>
          <div className="older-experience-list">
            {olderExperiences.map((exp, index) => (
              <div key={index} className="older-experience-item">
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
              </div>
            ))}
          </div>
        </section>
      );
    
};

export default Experience;
