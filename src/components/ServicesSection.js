import React from "react";

const ServicesSection = () => {
  return (
    <section className="py-20 px-10 sm:px-4 max-w-[1280px] mx-auto">
      <h2 className="text-4xl lg:text-4xl font-bold text-center mb-0 mt-0 leading-relaxed">
        Our Core Services
      </h2>
      <h2 className="text-2xl lg:text-2xl font-normal text-center mb-10 mt-6 leading-relaxed">
        Explore our comprehensive range of technology solutions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Web Development */}
        <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="/images/Background.svg" alt="icon" className="w-16 h-16" />
          <h3 className="font-semibold text-xl mt-8 mb-2">Web Development</h3>
          <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">
            Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance.
          </p>
          <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded-md transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Custom Software */}
        <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="/images/Background-1.svg" alt="icon" className="w-16 h-16" />
          <h3 className="font-semibold text-xl mt-8 mb-2">Custom Software</h3>
          <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">
            Tailored software solutions designed to meet your specific business requirements and streamline operations.
          </p>
          <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded-md transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* SaaS Applications */}
        <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="/images/Background-2.svg" alt="icon" className="w-16 h-16" />
          <h3 className="font-semibold text-xl mt-8 mb-2">SaaS Applications</h3>
          <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">
            Scalable Software-as-a-Service platforms with multi-tenant architecture and seamless cloud deployment.
          </p>
          <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded-md transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* AI Applications */}
        <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="/images/Background-3.svg" alt="icon" className="w-16 h-16" />
          <h3 className="font-semibold text-xl mt-8 mb-2">AI Applications</h3>
          <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">
            Intelligent applications powered by machine learning and artificial intelligence to automate and optimize processes.
          </p>
          <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded-md transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Managed IT Services */}
        <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="/images/Background-4.svg" alt="icon" className="w-16 h-16" />
          <h3 className="font-semibold text-xl mt-8 mb-2">Managed IT Services</h3>
          <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">
            Comprehensive IT infrastructure management, monitoring, and support services for seamless operations.
          </p>
          <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded-md transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* IT Consultancy */}
        <div className="bg-white shadow-lg rounded-3xl max-w-[384px] max-h-[332px] p-6 items-start transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <img src="/images/Background-5.svg" alt="icon" className="w-16 h-16" />
          <h3 className="font-semibold text-xl mt-8 mb-2">IT Consultancy</h3>
          <p className="mb-8 mt-6 text-gray-600 text-[16px] font-normal">
            Strategic technology consulting to align IT initiatives with business objectives and drive digital transformation.
          </p>
          <button className="hover:bg-orange-600 bg-orange-500 text-white px-4 py-1 rounded-md transition duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
