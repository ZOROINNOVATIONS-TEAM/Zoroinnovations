import React from 'react';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="bg-white/10 shadow-xl rounded-2xl p-10 w-[350px] text-white flex flex-col gap-4 backdrop-blur-md">
        <div className="mb-2">
          <span className="text-sm text-gray-300 tracking-wider">WELCOME BACK</span>
          <h2 className="mt-2 text-lg font-semibold">Log In to access admin panel</h2>
        </div>
        <form className="flex flex-col">
          <label htmlFor="email" className="mt-3 text-sm text-white text-left">Email</label>
          <input type="email" id="email" placeholder="johnsandoe8@mail.com" className="w-full px-3 py-2 mt-1 mb-2 rounded-lg border border-blue-400 bg-white/20 text-white placeholder-gray-300 focus:outline-none" />
          <label htmlFor="password" className="mt-2 text-sm text-white text-left">Password</label>
          <input type="password" id="password" placeholder="************" className="w-full px-3 py-2 mt-1 mb-2 rounded-lg border border-blue-400 bg-white/20 text-white placeholder-gray-300 focus:outline-none" />
          <div className="flex justify-between items-center my-2">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-orange-500 text-sm hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="w-full py-3 mt-2 bg-[#FD7401] text-white rounded-lg font-semibold text-base hover:bg-orange-500 transition">CONTINUE</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm; 