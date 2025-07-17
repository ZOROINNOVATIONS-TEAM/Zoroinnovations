import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Careers & Demo", path: "/careers-demo" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClasses = ({ isActive }) =>
    `font-medium transition ${
      isActive ? "text-orange-500" : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 filter brightness-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/h-icon.png" alt="Zoro Innovations" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClasses}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white px-6 pb-4 space-y-2 shadow-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
