import React from 'react';
import { useLocation } from 'react-router-dom';
import './FloatingButton.css';
import { FaHome, FaBlog } from 'react-icons/fa';

const FloatingButton = () => {
  const location = useLocation();

  // Determine if we are on the blog page
  const isBlogPage = location.pathname.startsWith('/blog');

  // Set button properties based on the current page
  const buttonText = isBlogPage ? 'Go to Home' : 'Go to Blog';
  const buttonIcon = isBlogPage ? <FaHome /> : <FaBlog />;
  const buttonLink = isBlogPage ? '/' : '/blog';

  return (
    <a href={buttonLink} className="floating-button">
      <span className="button-icon">{buttonIcon}</span>
      <span className="button-text">{buttonText}</span>
    </a>
  );
};

export default FloatingButton;
