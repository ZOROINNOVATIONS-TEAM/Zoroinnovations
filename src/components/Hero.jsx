import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#2a7de1] via-[#3fa9f5] to-[#ff7e4a] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12 min-h-[70vh]">
        {/* Logo only */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <img src="/ZORO_logo.png" alt="ZORO INNOVATIONS" className="h-32 md:h-44 mb-4" />
        </div>
        {/* Main text */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-white mt-10 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg text-left w-full">
            Transforming World<br />with Intelligent Code
          </h1>
          <p className="text-base md:text-lg mb-6 text-white/90 text-left w-full max-w-md">
            Transforming businesses through innovative solutions, cutting-edge technology, and strategic digital transformation.
          </p>
          <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded shadow-lg text-sm mt-2">
            <img src="/login_icon.png" alt="login icon" className="w-4 h-4 mr-2" />
            Admin Login
          </button>
        </div>
      </div>
    </section>
  );
} 