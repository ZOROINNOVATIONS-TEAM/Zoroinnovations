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
        <li><Link to="/">Login</Link></li>
        <li><Link to="/landing">Landing</Link></li>
        <li><Link to="/verify">Verify ID</Link></li>
        <li><Link to="/location">Location</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
