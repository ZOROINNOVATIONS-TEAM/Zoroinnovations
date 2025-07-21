import React from 'react';
import LoginArt from '../components/LoginArt';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7fa]">
      {/* Header with ZORO logo */}
      <header className="w-full bg-white flex items-center h-[44px] px-6 border-b border-gray-200">
        <img src="/ZORO_logo.png" alt="ZORO Logo" className="h-8" />
      </header>
      {/* Main content with gradient background */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-1 min-h-[80vh] items-stretch justify-center bg-gradient-to-tr from-[#1E3A8A] via-[#3B82F6] to-[#FF6B35]">
          <div className="flex-1 flex items-center justify-end pr-8">
            <div className="max-w-[480px] w-full flex justify-center">
              <LoginArt />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-start pl-8">
            <div className="max-w-[400px] w-full">
              <LoginForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
