import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const logoText = !isBlogPage ? 'Siddhant Jain' : 'Siddhant\'s Blog'
  const logoLink = !isBlogPage ? '/' : '/blog';
  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <a href={logoLink} className="nav-logo">{logoText}</a>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><a href="#about" onClick={() => setIsMobile(false)}>About</a></li>
        <li><a href="#experience" onClick={() => setIsMobile(false)}>Experience</a></li>
        <li><a href="#publications" onClick={() => setIsMobile(false)}>Publications</a></li>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
        aria-label="Toggle navigation"
      >
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
};

export default Navbar;
