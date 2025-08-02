import React from 'react';
import Footer from '../components/loginPage/LoginFooter';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-indigo-600 to-orange-500">
      <div className="flex-1 p-6">
        <div className="bg-white rounded-xl shadow-xl p-6 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
          <p className="text-gray-600">Welcome to the Zoro Innovations Dashboard</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard; 