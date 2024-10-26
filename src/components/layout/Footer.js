import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Siddhant Jain. View this site's code on{' '}
        <a href="https://github.com/siddhant2001/sjain/tree/main" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>.
      </p>
    </footer>
  );
};

export default Footer;
