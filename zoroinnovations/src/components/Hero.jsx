import React from "react";
import Logo from "../assets/zoro-logo.png";
import SearchLogo from "../assets/searchLogo.svg"

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-blue-700 via-blue-500 to-orange-400 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src={Logo} alt="Zoro Innovations Logo" className="h-12" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Start Your Innovation Journey Today
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Partner with Zoro Innovation to turn ideas into powerful digital
          solutions — designed for growth, speed, and long-term success.
        </p>

        {/* Search Box */}
        <div className="flex items-center justify-center max-w-lg mx-auto bg-white rounded-full shadow-md overflow-hidden">
          <input 
            type="text" 
            placeholder="Search articles, topics, or authors..."
            className="flex-grow px-6 py-3 text-gray-700 focus:outline-none"
          />
            <img src={SearchLogo} alt="searchLogo" />
          {/* <button className="rounded-full">
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
