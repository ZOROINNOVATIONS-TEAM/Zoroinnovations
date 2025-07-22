const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] via-[#3B82F6] to-[#FF6B35] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <img src="/images/zorologo.png" alt="Zoro Logo" className="w-[300px] h-auto mx-auto md:mx-0" />
          
          <h1 className="text-[42px] md:text-[55px] font-bold mb-4 mt-10 leading-tight">
            Transforming World <br className="hidden md:block" /> with Intelligent Code
          </h1>

          <p className="text-lg md:text-xl mt-6 text-gray-200 mb-8">
            Transforming businesses through innovative solutions, cutting-edge
            technology, and strategic digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 text-white font-bold py-3 px-6 rounded">
              Get Started
            </button>
            <button
              className="border border-white text-white hover:bg-white hover:text-blue-700 py-3 px-6 font-bold rounded"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center mt-10 md:mt-0">
          <img
            src="/images/AI Technology.png"
            alt="AI Illustration"
            className="w-[300px] md:w-[500px] lg:w-[584px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
