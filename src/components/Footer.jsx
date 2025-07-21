import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-10 text-base">
      <div className="flex flex-wrap justify-between items-start max-w-6xl mx-auto px-8">
        <div className="flex-1 min-w-[250px] mr-10 mb-8">
          <img src="/ZORO_logo.png" alt="ZORO Logo" className="w-[90px] mb-4" />
          <p>Transforming businesses through innovative AI solutions and cutting-edge technology.</p>
          <div className="mt-4 flex space-x-3">
            <a href="#" className="hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-10 flex-wrap min-w-[300px]">
          <div>
            <h4 className="mb-3 font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Web Development</li>
              <li>Custom Software</li>
              <li>AI Applications</li>
              <li>IT Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Our Employee</li>
              <li>Careers & Certs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Documentation</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#222c3c] mt-8 py-4 px-8 flex flex-col md:flex-row justify-between items-center text-sm bg-[#111827]">
        <span className="mb-2 md:mb-0">© 2023 Zoro Innovations. All rights reserved.</span>
        <div>
          <a href="#" className="text-gray-400 hover:text-white ml-2">Privacy Policy</a> |
          <a href="#" className="text-gray-400 hover:text-white ml-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 