import React from 'react';
import logoImg from '../assets/zoroLogo.png';
import linkedinIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/twitter.svg';
import facebookIcon from '../assets/facebook.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="logo">
  <img src={logoImg} alt="Zoro Logo" className="footer-logo" />
</div>

            <p className="company-description">
              Transforming businesses through innovative AI solutions and cutting-edge technology.
            </p>
            <div className="social-links">
  <a href="#" className="social-link">
    <img src={linkedinIcon} alt="LinkedIn" width="20" height="20" />
  </a>
  <a href="#" className="social-link">
    <img src={twitterIcon} alt="Twitter" width="20" height="20" />
  </a>
  <a href="#" className="social-link">
    <img src={facebookIcon} alt="Facebook" width="20" height="20" />
  </a>
</div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Custom Software</a></li>
                <li><a href="#">AI Applications</a></li>
                <li><a href="#">IT Consulting</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Employee</a></li>
                <li><a href="#">Careers & Certs</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:contact@company.com">contact@company.com</a></li>
                <li><a href="tel:+15551234567">+1 (555) 123-4567</a></li>
                <li>123 Innovation Drive<br />Tech City, TC 12345</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; 2025 Zoro Innovations. All rights reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;