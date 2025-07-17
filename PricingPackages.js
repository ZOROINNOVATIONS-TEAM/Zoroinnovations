export default function PricingPackages() {
  return (
    <section className="bg-white py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Service Packages & Pricing</h2>
      <p className="text-center mb-8 text-gray-600">Choose the perfect package for your business needs</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Package */}
        <div className="bg-gray-50 rounded-lg shadow p-8 flex flex-col items-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">$5,000</div>
          <div className="font-semibold mb-2">Starter</div>
          <div className="mb-4 text-gray-600 text-sm text-center">Perfect for small businesses</div>
          <ul className="text-gray-700 text-sm mb-6 list-disc list-inside text-left">
            <li>Basic web application</li>
            <li>Responsive design</li>
            <li>Basic SEO optimization</li>
            <li>3 months support</li>
          </ul>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold">Get Started</button>
        </div>
        {/* Professional Package */}
        <div className="bg-white rounded-lg shadow p-8 border-2 border-orange-500 flex flex-col items-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">$15,000</div>
          <div className="font-semibold mb-2">Professional</div>
          <div className="mb-4 text-gray-600 text-sm text-center">Ideal for growing companies</div>
          <ul className="text-gray-700 text-sm mb-6 list-disc list-inside text-left">
            <li>Advanced web application</li>
            <li>Custom features & integrations</li>
            <li>Performance optimization</li>
            <li>6 months support</li>
            <li>Analytics & reporting</li>
          </ul>
          <button className="bg-orange-500 text-white px-6 py-2 rounded font-semibold">Get Started</button>
        </div>
        {/* Enterprise Package */}
        <div className="bg-gray-50 rounded-lg shadow p-8 flex flex-col items-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">$35,000+</div>
          <div className="font-semibold mb-2">Enterprise</div>
          <div className="mb-4 text-gray-600 text-sm text-center">For large organizations</div>
          <ul className="text-gray-700 text-sm mb-6 list-disc list-inside text-left">
            <li>Complex web platform</li>
            <li>Multi-system integrations</li>
            <li>Scalable architecture</li>
            <li>12 months support</li>
            <li>Dedicated project manager</li>
          </ul>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded font-semibold">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}
