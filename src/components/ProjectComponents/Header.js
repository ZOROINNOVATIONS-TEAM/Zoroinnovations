import React from 'react';


const Header = () => {
  return (
    <div className="w-full h-16 fixed top-0 left-0 bg-white shadow-md flex items-center px-8 z-50">
      <img className="w-20 h-8" src="#" alt="Zoro Innovations Logo" />
      <div className="flex items-center ml-auto space-x-8 text-gray-700">
        {['Dashboard', 'Career', 'Team', 'Blog', 'Verify ID', 'Location', 'Projects', 'Contacts'].map((item, idx) => (
          <div
            key={idx}
            className={`cursor-pointer font-semibold ${item === 'Blog' ? 'text-orange-500' : ''}`}
          >
            {item}
          </div>
        ))}
        <img className="w-10 h-10 rounded-full" src="#" alt="User" />
      </div>
    </div>
  );
};

export default Header;