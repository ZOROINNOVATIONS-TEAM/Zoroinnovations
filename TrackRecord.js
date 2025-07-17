export default function TrackRecord() {
  return (
    <section className="bg-white py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Our Track Record</h2>
      <p className="text-center mb-8 text-gray-600">Proven results across all service categories</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project Success Rate Chart Placeholder */}
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mb-2">Pie Chart Placeholder</div>
          <div className="text-center text-gray-700 text-sm">Project Success Rate</div>
        </div>
        {/* Client Satisfaction Chart Placeholder */}
        <div className="flex flex-col items-center">
          <div className="w-full h-48 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold text-lg mb-2">Bar Chart Placeholder</div>
          <div className="text-center text-gray-700 text-sm">Client Satisfaction by Service</div>
        </div>
      </div>
    </section>
  );
}
