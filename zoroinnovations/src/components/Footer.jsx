import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../assets/zoro-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-white py-12 px-6 md:px-20 relative">
      {/* Background Image if needed */}
      {/* <div className="absolute inset-0 opacity-10 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}></div> */}

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col justify-between md:flex-row md:justify-between gap-10">
        {/* Left Column */}
        <div className="md:w-1/4 space-y-4">
          <img src={logo} alt="Zoro Logo" className="h-10" />
          <p className="text-sm text-gray-300">
            Transforming businesses through innovative AI solutions and
            cutting-edge technology.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href="#"
              className="bg-[#1f2937] p-2 rounded-xl hover:bg-blue-600"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-[#1f2937] p-2 rounded-xl hover:bg-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-[#1f2937] p-2 rounded-xl hover:bg-blue-800"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="md:w-1/4 space-y-4 px-8">
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Custom Software</a>
              </li>
              <li>
                <a href="#">AI Applications</a>
              </li>
              <li>
                <a href="#">IT Consulting</a>
              </li>
            </ul>
        </div>

        <div className="md:w-1/4 space-y-4 px-8">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Careers & Certs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
        </div>

        <div className="md:w-1/4 space-y-4 px-8">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li>contact@company.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Innovation Drive</li>
              <li>Tech City, TC 12345</li>
            </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-700"></div>

      {/* Bottom Footer */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Zoro Innovations. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
