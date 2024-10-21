import React from 'react';
import './Publications.css';

// Import all publications
import seer from './publications/seer';
import fpl from './publications/hft_fpl';

const publications = [seer, fpl];  // Add all publications to this array

const Publications = () => {
  return (
    <section className="publications">
      <h2>Publications</h2>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item">
            <h3>
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                {pub.title}
              </a>
            </h3>
            <p><strong>Year:</strong> {pub.year}</p>
            <p>{pub.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
