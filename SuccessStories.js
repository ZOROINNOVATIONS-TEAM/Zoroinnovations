export default function SuccessStories() {
  return (
    <section className="bg-white py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Success Stories</h2>
      <p className="text-center mb-8 text-gray-600">Real results from real clients across different industries</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* E-commerce Platform Transformation */}
        <div className="bg-purple-50 rounded-lg shadow p-6 flex flex-col items-start">
          <div className="w-10 h-10 bg-purple-200 flex items-center justify-center rounded mb-4">🛒</div>
          <div className="font-bold mb-1">E-commerce Platform Transformation</div>
          <div className="text-xs text-gray-600 mb-2">Complete redesign and development of a multi-vendor marketplace platform serving over 50,000 users.</div>
          <ul className="text-xs text-gray-700 mb-2 list-disc list-inside">
            <li>Revenue Increase <span className="font-bold text-green-600">+340%</span></li>
            <li>Page Load Speed <span className="font-bold text-green-600">+65%</span></li>
            <li>User Engagement <span className="font-bold text-green-600">+180%</span></li>
          </ul>
          <div className="text-xs text-gray-500">RealTech Solutions · 6 months</div>
        </div>
        {/* AI-Powered Analytics Platform */}
        <div className="bg-green-50 rounded-lg shadow p-6 flex flex-col items-start">
          <div className="w-10 h-10 bg-green-200 flex items-center justify-center rounded mb-4">📈</div>
          <div className="font-bold mb-1">AI-Powered Analytics Platform</div>
          <div className="text-xs text-gray-600 mb-2">Custom machine learning solution for predictive maintenance in manufacturing operations.</div>
          <ul className="text-xs text-gray-700 mb-2 list-disc list-inside">
            <li>Downtime Reduction <span className="font-bold text-green-600">-78%</span></li>
            <li>Cost Savings <span className="font-bold text-green-600">$2.4M</span></li>
            <li>Accuracy Rate <span className="font-bold text-green-600">99.2%</span></li>
          </ul>
          <div className="text-xs text-gray-500">Industrial Dynamics Corp · 8 months</div>
        </div>
        {/* Healthcare Management System */}
        <div className="bg-orange-50 rounded-lg shadow p-6 flex flex-col items-start">
          <div className="w-10 h-10 bg-orange-200 flex items-center justify-center rounded mb-4">🏥</div>
          <div className="font-bold mb-1">Healthcare Management System</div>
          <div className="text-xs text-gray-600 mb-2">Comprehensive patient management and telemedicine platform for a regional healthcare network.</div>
          <ul className="text-xs text-gray-700 mb-2 list-disc list-inside">
            <li>Patient Satisfaction <span className="font-bold text-green-600">+95%</span></li>
            <li>Processing Time <span className="font-bold text-green-600">-60%</span></li>
            <li>Cost Efficiency <span className="font-bold text-green-600">+45%</span></li>
          </ul>
          <div className="text-xs text-gray-500">MediCare Network · 10 months</div>
        </div>
      </div>
    </section>
  );
}
