import React from 'react';
import Footer from '../components/loginPage/LoginFooter';

const Projects = () => {
  return (
 <div className="min-h-screen mt-10 w-full bg-gradient-to-br from-blue-900 via-blue-500 to-orange-500 py-12 px-6">
      <div className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-xl p-6 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Projects</h1>
          <p className="text-gray-600">Explore our innovative projects and solutions</p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Projects; 
