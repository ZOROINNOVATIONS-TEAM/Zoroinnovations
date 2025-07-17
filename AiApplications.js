export default function AiApplications() {
  return (
    <section className="bg-blue-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 flex items-center justify-center">
          {/* Placeholder for AI image */}
          <div className="w-80 h-56 bg-blue-300 rounded shadow flex items-center justify-center text-blue-900">Image Placeholder</div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">AI Applications & Machine Learning</h2>
          <p className="mb-6">Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent solutions that adapt and learn.</p>
          <ul className="mb-6 text-sm list-disc list-inside">
            <li><span className="font-semibold">Natural Language Processing</span>: Chatbots, sentiment analysis, and text processing solutions</li>
            <li><span className="font-semibold">Computer Vision</span>: Image recognition, object detection, and visual analytics</li>
            <li><span className="font-semibold">Predictive Analytics</span>: Forecasting models and data-driven decision making</li>
          </ul>
          <div className="bg-blue-800 rounded p-4 text-xs">
            <div className="italic mb-1">“The AI solution reduced our processing time by 85% and improved accuracy to 99.2%. It’s been transformational for our operations.”</div>
            <div className="font-semibold">Sarah Chen</div>
            <div className="text-blue-200">CTO, DataWare Industries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
