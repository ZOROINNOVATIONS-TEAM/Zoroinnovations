// components/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        
        {/* Brand + Socials */}
        <div>
          <div className="text-2xl font-bold text-white mb-2">ZORO</div>
          <p className="text-gray-400">
            Transforming businesses through innovative AI solutions and cutting-edge technology.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-white text-[#0D1117] rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="bg-white text-[#0D1117] rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="bg-white text-[#0D1117] rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Web Development</li>
            <li>Custom Software</li>
            <li>AI Applications</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li>About Us</li>
            <li>Our Employee</li>
            <li>Careers & Certs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>Documentation</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 Zoro Innovations. All rights reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
