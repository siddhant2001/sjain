import React, { useEffect } from 'react';
import './Experience.css';

// Import all experiences
import traceable from './experiences/traceable';
import dgraph from './experiences/dgraph';
import motorq from './experiences/motorq';
import lotusdew from './experiences/lotusdew';
import zinkhin from './experiences/zinkhin';
import dreamvu from './experiences/dreamvu';
import arcturus from './experiences/arcturus';

import AOS from 'aos';
import 'aos/dist/aos.css';

const currentExperiences = [traceable, dgraph, motorq, lotusdew];
const olderExperiences = [zinkhin, dreamvu, arcturus];

const Experience = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  

  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {currentExperiences.map((exp, index) => (
          <div key={index} className="timeline-item" data-aos="fade-up">
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="period">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}

        <div className="older-experiences">
          {/* <h3>Older Experiences</h3> */}
          {olderExperiences.map((exp, index) => (
            <div key={index} className="timeline-item older" data-aos="fade-up">
              <div className="timeline-content">
                <h4>{exp.title}</h4>
                <p>{exp.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Experience;
