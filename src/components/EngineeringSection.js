import React from 'react';

function EngineeringSection() {
  return (
    <section className="text-white">
      {/* Background image with overlay */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 px-6"
        style={{ backgroundImage: "url('/images/Engineer.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/90 via-orange-500/90 to-orange-400/90 z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">We Engineer.</h2>
          <p className="text-xl font-semibold text-gray-300">
            Building robust, scalable, and secure solutions using the latest technologies and best<br />
            practices in software engineering.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 md:px-0">
            <div className="bg-orange-300/30 text-white p-6 rounded-3xl shadow-lg text-start">
              <h3 className="text-lg font-semibold mb-2">Custom Development</h3>
              <p className="text-base text-gray-200">
                Crafting bespoke software solutions tailored to your unique business requirements and goals.
              </p>
            </div>

            <div className="bg-orange-300/30 text-white p-6 rounded-3xl shadow-lg text-start">
              <h3 className="text-lg font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-base text-gray-200">
                Designing and implementing scalable cloud infrastructure for optimal performance and reliability.
              </p>
            </div>

            <div className="bg-orange-300/30 text-white p-6 rounded-3xl shadow-lg text-start">
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-base text-gray-200">
                Ensuring excellence through rigorous testing, code reviews, and continuous integration practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngineeringSection;
