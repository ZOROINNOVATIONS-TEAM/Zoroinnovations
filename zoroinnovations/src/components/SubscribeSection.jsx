import React from 'react';

const SubscribeSection = () => {
  return (
    <section
      className="bg-orange-400 bg-[url('../assets/bg-pattern.jpg')] bg-cover bg-center text-white py-2 px-6 text-center relative overflow-hidden"
    >
      <div className="backdrop-blur-sm rounded-xl max-w-2xl mx-auto p-2 sm:p-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">
          Never Miss a Tech Insight
        </h2>
        <p className="text-lg sm:text-lg mb-4">
          Join 50,000+ tech enthusiasts, developers, and founders who rely on our expert analysis, tutorials, and digital strategy updates to stay ahead in the innovation game.
        </p>

        {/* Email Input + Button */}
        <form className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full max-w-xs sm:w-2/3 px-4 py-2 bg-gray-50 rounded-lg text-gray-900 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-gray-100 text-orange-500 font-semibold px-6 py-2 rounded-lg hover:bg-white transition"
          >
            Subscribe Free
          </button>
        </form>

        {/* Feature Points */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm sm:text-base font-medium text-white">
          <div className="flex items-center justify-center gap-1">✅ Weekly market updates</div>
          <div className="flex items-center justify-center gap-1">✅ Expert financial  <br />tips</div>
          <div className="flex items-center justify-center gap-1">✅ Exclusive <br /> insights</div>
          <div className="flex items-center justify-center gap-1 sm:col-span-3">✅ No spam, unsubscribe <br /> anytime</div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
