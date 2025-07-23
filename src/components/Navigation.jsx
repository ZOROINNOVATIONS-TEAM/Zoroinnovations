import React from 'react';
import zoroLogo from '../assets/zoroLogo.png';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
            <img src={zoroLogo} alt="Zoro Innovations" className="logo-img" />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Projects</a>
          <a href="#" className="nav-link">Blog</a>
          <a href="#" className="nav-link">Careers</a>
          <a href="#" className="nav-link contact-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;