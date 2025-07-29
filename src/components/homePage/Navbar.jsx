import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/black_logo1.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Zoro Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li>Services</li>
        <li>About</li>
        <li>Projects</li>
        <li>Blog</li>
        <li className="active">Careers</li>
        <li>Contact</li>
        <li><Link to="/login" style={{ color: '#007bff', fontWeight: 'bold' }}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
