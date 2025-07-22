import React from 'react';

function InnovationSection() {
  return (
    <section className="bg-blue-900 text-white py-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center mb-4">Zoro: Relentless Innovation</h2>
      <p className="text-center text-xl font-normal text-gray-300 mb-12">
        Delivering excellence through innovation and dedication
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white text-black px-8 py-6 rounded-3xl shadow-lg flex flex-col items-start">
          <img src="/images/Overlay.svg" alt="Innovation" className="h-12 w-12 mt-2" />
          <h3 className="text-xl font-bold mt-6 mb-3">Innovation First</h3>
          <p className="text-base text-gray-700">
            We leverage cutting-edge technology to solve complex business challenges and drive digital transformation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black px-8 py-6 rounded-3xl shadow-lg flex flex-col items-start">
          <img src="/images/Overlay-1.svg" alt="Expert Team" className="h-12 w-12 mt-2" />
          <h3 className="text-xl font-bold mt-6 mb-3">Expert Team</h3>
          <p className="text-base text-gray-700">
            Our skilled professionals bring years of experience in AI, software development, and IT consulting.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black px-8 py-6 rounded-3xl shadow-lg flex flex-col items-start">
          <img src="/images/Overlay-2.svg" alt="Client Success" className="h-12 w-12 mt-2" />
          <h3 className="text-xl font-bold mt-6 mb-3">Client Success</h3>
          <p className="text-base text-gray-700">
            We partner with our clients to ensure their success through tailored solutions and ongoing support.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InnovationSection;
