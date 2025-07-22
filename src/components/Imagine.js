import React from 'react';

function Imagine() {
  return (
    <section className="text-white">
      {/* Background image with overlay */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-10 px-6"
        style={{ backgroundImage: "url('/images/Imagine.jpg')" }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80 z-0"></div>

        {/* Text Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto py-16 text-center">
          <h2 className="text-4xl font-bold mb-6">We Imagine.</h2>
          <p className="text-xl font-semibold text-gray-300">
            Envisioning the future of technology and creating innovative solutions that transform<br />
            industries and enhance human experiences.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-4 md:px-0">
            <div className="bg-blue-300/30 text-white p-6 rounded-3xl shadow-lg text-start">
              <h3 className="text-lg font-semibold mb-2">AI-Powered Solutions</h3>
              <p className="text-base text-gray-200">
                Developing intelligent systems that learn, adapt, and optimize business processes automatically.
              </p>
            </div>
            <div className="bg-blue-300/30 text-white p-6 rounded-3xl shadow-lg text-start">
              <h3 className="text-lg font-semibold mb-2">Future-Ready Platforms</h3>
              <p className="text-base text-gray-200">
                Building scalable architectures that evolve with emerging technologies and market demands.
              </p>
            </div>
            <div className="bg-blue-300/30 text-white p-6 rounded-3xl shadow-lg text-start">
              <h3 className="text-lg font-semibold mb-2">Digital Innovation</h3>
              <p className="text-base text-gray-200">
                Creating breakthrough digital experiences that redefine user interaction and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imagine;
