import './index.css';
import WebDevelopmentExcellence from './components/WebDevelopmentExcellence';
import PricingPackages from './components/PricingPackages';
import ServiceProcess from './components/ServiceProcess';
import AiApplications from './components/AiApplications';
import TrackRecord from './components/TrackRecord';
import SuccessStories from './components/SuccessStories';
import ServiceQuoteForm from './components/ServiceQuoteForm';
import ResourcesDocs from './components/ResourcesDocs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Header/Navbar */}
      <header className="w-full bg-white shadow px-4 md:px-8 py-4 flex items-center justify-between">
  <div className="flex items-center space-x-2">
    <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center text-lg md:text-xl font-bold">Logo</div>
    <span className="font-bold text-lg md:text-xl text-gray-800">Zoro Innovations</span>
  </div>
  {/* Desktop Nav */}
  <nav className="hidden md:flex space-x-6 lg:space-x-8 text-gray-700 font-medium">
    <a href="#" className="hover:text-orange-500">Home</a>
    <a href="#" className="text-orange-500 font-bold">Services</a>
    <a href="#" className="hover:text-orange-500">About</a>
    <a href="#" className="hover:text-orange-500">Projects</a>
    <a href="#" className="hover:text-orange-500">Blog</a>
    <a href="#" className="hover:text-orange-500">Contact</a>
  </nav>
  {/* Mobile Hamburger */}
  <button className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 border-gray-300" aria-label="Open Menu">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</header>


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-orange-400 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services & Solutions</h1>
        <p className="max-w-2xl mx-auto mb-8 text-lg">Comprehensive technology services designed to transform your business and drive innovation across all aspects of your digital journey.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">Get Started</button>
          <button className="bg-white hover:bg-gray-100 text-blue-700 px-6 py-2 rounded font-semibold border border-white">Contact Us</button>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-12 px-2 sm:px-4 max-w-6xl mx-auto">
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Our Core Services</h2>
  <p className="text-center mb-8 text-gray-600 text-sm sm:text-base">Explore our comprehensive range of technology solutions</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {/* Service Cards */}
    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-start">
      <div className="w-10 h-10 bg-purple-100 flex items-center justify-center rounded mb-4">📦</div>
      <h3 className="font-bold text-lg mb-2">Web Development</h3>
      <p className="mb-4 text-gray-600 text-sm">Modern, responsive web applications built with cutting-edge technologies and frameworks for optimal performance.</p>
      <button className="bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
    </div>
    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-start">
      <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded mb-4">💻</div>
      <h3 className="font-bold text-lg mb-2">Custom Software</h3>
      <p className="mb-4 text-gray-600 text-sm">Tailored software solutions designed to meet your specific business requirements and streamline operations.</p>
      <button className="bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
    </div>
    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-start">
      <div className="w-10 h-10 bg-orange-100 flex items-center justify-center rounded mb-4">☁️</div>
      <h3 className="font-bold text-lg mb-2">SaaS Applications</h3>
      <p className="mb-4 text-gray-600 text-sm">Scalable Software-as-a-Service platforms with multi-tenant architecture and seamless cloud deployment.</p>
      <button className="bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
    </div>
    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-start">
      <div className="w-10 h-10 bg-violet-100 flex items-center justify-center rounded mb-4">🤖</div>
      <h3 className="font-bold text-lg mb-2">AI Applications</h3>
      <p className="mb-4 text-gray-600 text-sm">Intelligent applications powered by machine learning and artificial intelligence to automate and optimize processes.</p>
      <button className="bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
    </div>
    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-start">
      <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded mb-4">🛠️</div>
      <h3 className="font-bold text-lg mb-2">Managed IT Services</h3>
      <p className="mb-4 text-gray-600 text-sm">Comprehensive IT infrastructure management, monitoring, and support services for seamless operations.</p>
      <button className="bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
    </div>
    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-start">
      <div className="w-10 h-10 bg-green-100 flex items-center justify-center rounded mb-4">📊</div>

            <h3 className="font-bold text-lg mb-2">IT Consultancy</h3>
            <p className="mb-4 text-gray-600 text-sm">Strategic technology consulting to align IT initiatives with business objectives and drive digital transformation.</p>
            <button className="bg-orange-500 text-white px-4 py-1 rounded">Learn More</button>
          </div>
        </div>
      </section>

      {/* Web Development Excellence */}
      <WebDevelopmentExcellence />
      {/* Pricing Packages */}
      <PricingPackages />
      {/* Service Process */}
      <ServiceProcess />
      {/* AI Applications & ML */}
      <AiApplications />
      {/* Track Record */}
      <TrackRecord />
      {/* Success Stories */}
      <SuccessStories />
      {/* Service Quote Form */}
      <ServiceQuoteForm />
      {/* Resources & Documentation */}
      <ResourcesDocs />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
