export default function ResourcesDocs() {
  return (
    <section className="bg-white py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Resources & Documentation</h2>
      <p className="text-center mb-8 text-gray-600">Helpful resources to understand our services better</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-orange-100 flex items-center justify-center rounded mb-2">📄</div>
          <div className="font-semibold mb-1">Service Brochure</div>
          <div className="text-xs text-gray-600 mb-1 text-center">Comprehensive overview of all our services and capabilities</div>
          <a href="#" className="text-orange-500 text-xs font-semibold">Download PDF</a>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-orange-100 flex items-center justify-center rounded mb-2">📚</div>
          <div className="font-semibold mb-1">Case Studies</div>
          <div className="text-xs text-gray-600 mb-1 text-center">Detailed analysis of our successful project implementations</div>
          <a href="#" className="text-orange-500 text-xs font-semibold">View Studies</a>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-orange-100 flex items-center justify-center rounded mb-2">❓</div>
          <div className="font-semibold mb-1">FAQ</div>
          <div className="text-xs text-gray-600 mb-1 text-center">Frequently asked questions about our services and processes</div>
          <a href="#" className="text-orange-500 text-xs font-semibold">Read FAQ</a>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-orange-100 flex items-center justify-center rounded mb-2">📝</div>
          <div className="font-semibold mb-1">Tech Blog</div>
          <div className="text-xs text-gray-600 mb-1 text-center">Latest insights and trends in technology and development</div>
          <a href="#" className="text-orange-500 text-xs font-semibold">Read Blog</a>
        </div>
      </div>
    </section>
  );
}
