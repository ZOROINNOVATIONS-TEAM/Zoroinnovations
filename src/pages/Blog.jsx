import React from 'react';
import Footer from '../components/loginPage/LoginFooter';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-indigo-600 to-orange-500">
      <div className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-xl p-6 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Blog</h1>
          <p className="text-gray-600">Read our latest insights and updates</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog; 