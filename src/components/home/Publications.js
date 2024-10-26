import React, {useEffect} from 'react';
import './Publications.css';

// Import all publications
import seer from './publications/seer';
import fpl from './publications/hft_fpl';
import AOS from 'aos';
import 'aos/dist/aos.css';

const publications = [seer, fpl];  // Add all publications to this array

const Publications = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);


  return (
    <section className="publications">
      <h2>Publications</h2>
      <div className="publications-list">
        {publications.map((pub, index) => (
          <div key={index} className="publication-item" data-aos="fade-left">
            <h3>
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                {pub.title}
              </a>
            </h3>
            <p className="publication-details">
              <span className="publication-authors">{pub.authors}</span>
              <span className="publication-venue">{pub.venue}</span>
              <span className="publication-year">{pub.year}</span>
            </p>
            <p className="publication-description">{pub.description}</p>
            {pub.keywords && (
              <p className="publication-keywords">
                {pub.keywords.map((keyword, idx) => (
                  <span key={idx} className="keyword">{keyword}</span>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
