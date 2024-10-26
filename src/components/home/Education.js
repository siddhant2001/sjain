// Education.js

import React, { useEffect } from 'react';
import './Education.css';
import educationData from './educationData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Education = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item" data-aos="fade-up">
            <h3 className="degree">{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="dates">{edu.dates}</p>
            {edu.courses && edu.courses.length > 0 && (
              <div className="courses">
                <h4>Relevant Courses:</h4>
                <ul>
                  {edu.courses.map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
            {edu.ta_list && edu.ta_list.length > 0 && (
              <div className="ta-list">
                <h4>Teaching Assistant for:</h4>
                <ul>
                  {edu.ta_list.map((ta_course, idx) => (
                    <li key={idx}>{ta_course}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
