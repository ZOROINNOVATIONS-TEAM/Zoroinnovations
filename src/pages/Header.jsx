import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For hamburger icons
import logo from '/zoro.png';
import img2 from '/img2.png';

const navItems = [
  'Dashboard',
  'Career',
  'Team',
  'Blog',
  'Verify ID',
  'Location',
  'Projects',
  'Contacts'
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Zoro Innovations Logo" className="w-20 h-8 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-700 font-semibold">
          {navItems.map((item) => (
            <div
              key={item}
              className={`cursor-pointer hover:text-orange-500 transition ${
                item === 'Verify ID' ? 'text-orange-500' : ''
              }`}
            >
              {item}
            </div>
          ))}
          <img src={img2} alt="User" className="w-10 h-10 rounded-full object-cover" />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-2 text-gray-700 text-sm font-semibold shadow-md">
          {navItems.map((item) => (
            <div
              key={item}
              className={`cursor-pointer py-2 px-2 hover:bg-gray-100 rounded ${
                item === 'Verify ID' ? 'text-orange-500' : ''
              }`}
            >
              {item}
            </div>
          ))}
          <div className="flex justify-center mt-3">
            <img src={img2} alt="User" className="w-10 h-10 rounded-full object-cover" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
