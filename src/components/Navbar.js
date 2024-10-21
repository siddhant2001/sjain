import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Siddhant Jain</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#publications">Publications</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
