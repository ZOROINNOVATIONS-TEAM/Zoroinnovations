export default function WebDevelopmentExcellence() {
  return (
    <section className="bg-white py-12 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Web Development Excellence</h2>
        <p className="mb-6 text-gray-700">We create modern, responsive, and high-performance web applications that deliver exceptional user experiences across all devices and platforms.</p>
        <ul className="mb-6 text-sm text-gray-700 list-disc list-inside">
          <li><span className="font-semibold">Frontend Development</span>: React, Vue, Angular with modern UI/UX design principles</li>
          <li><span className="font-semibold">Backend Development</span>: Node.js, Python, PHP with robust API architecture</li>
          <li><span className="font-semibold">Performance Optimization</span>: Fast loading times and SEO-optimized solutions</li>
        </ul>
        <div className="bg-gray-100 rounded p-4 text-xs">
          <div className="font-semibold mb-1">Case Study: E-commerce Platform</div>
          <div className="mb-1">Developed a comprehensive e-commerce platform that increased client sales by 340% within 6 months.</div>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div>Client: RealTech Solutions</div>
            <div>Timeline: 4 months</div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        {/* Placeholder for web development image */}
        <div className="w-80 h-56 bg-gray-300 rounded shadow flex items-center justify-center text-gray-500">Image Placeholder</div>
      </div>
    </section>
  );
}
