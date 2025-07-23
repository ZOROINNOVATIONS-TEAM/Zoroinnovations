import {
  Lightbulb, Users, BadgeCheck, Code2, Cloud, ShieldCheck, RefreshCw,
  Server, Shield, GaugeCircle,
  Stethoscope, ShoppingCart, Banknote, GraduationCap, Car, Building2
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="w-full text-gray-100 font-['Inter',sans-serif] filter brightness-95">

      {/* Existing Sections */}
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-500 overflow-hidden">
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-10 py-10 px-6">
          <div className="flex-1 space-y-6">
            <img src="/ho-icon.png" alt="Zoro Innovations" className="w-[374px] h-[154px]"/>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming World <br className="hidden sm:block" />
              with <span className="text-orange-400">Intelligent Code</span>
            </h1>
            <p className="max-w-lg text-lg text-white/90">
              Transforming businesses through innovative solutions, cutting‑edge technology,
              and strategic digital transformation.
            </p>
            <div className="flex gap-4">
              <button className="rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-3 font-semibold shadow-lg transition">
                Get Started
              </button>
              <button className="rounded-full border border-white/70 hover:bg-white/10 px-6 py-3 font-semibold transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 max-w-md md:max-w-none filter brightness-90">
            <img src="/brain.jpg" alt="AI Brain" className="max-w-96 rounded-xl shadow-2xl float-right"/>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[url('/sphere.png')] bg-cover bg-center opacity-10" />
      </section>

      {/* RELENTLESS INNOVATION */}
      <section className="bg-blue-800 py-16 px-6 filter brightness-90">
        <h2 className="text-3xl font-bold text-center mb-2">Zoro: Relentless Innovation</h2>
        <h6 className="text-center text-sm font-extralight text-gray-200 mb-12">Delivering excellence through innovation and dedication</h6>
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          <FeatureCard icon={<Lightbulb className="w-8 h-8 text-orange-400" />} title="Innovation First" desc="We leverage cutting‑edge technology to solve complex business challenges and drive digital transformation." />
          <FeatureCard icon={<Users className="w-8 h-8 text-orange-400" />} title="Expert Team" desc="Our skilled professionals bring years of experience in AI, software development, and IT consulting." />
          <FeatureCard icon={<BadgeCheck className="w-8 h-8 text-orange-400" />} title="Client Success" desc="We partner with our clients to ensure their success through tailored solutions and ongoing support." />
        </div>
      </section>

      {/* WE IMAGINE / ENGINEER / MODERNIZE / MANAGE */}
      {gradientSections.map((section, index) => (
        <GradientBlock
          key={index}
          gradient={section.gradient}
          title={section.title}
          features={section.features}
        />
      ))}

      {/* CLIENT TRUST */}
      <section className="bg-white text-gray-900 py-16 px-6 filter brightness-95">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our mission: Complete client success</h2>
          <p className="text-gray-600 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
            {Array(6).fill(0).map((_, i) => <img key={i} src="/google.svg" alt="Partner Logo" className="h-16 w-auto" />)}
          </div>
        </div>
      </section>

      {/* INDUSTRY EXPERTISE */}
      <section className="bg-white filter brightness-95 text-gray-900 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Industry Expertise and Solutions</h2>
          <p className="text-gray-600 mb-12">Specialized solutions across diverse industries</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryData.map(({ title, desc, icon, color }) => (
              <IndustryCard key={title} title={title} desc={desc} icon={icon} color={color} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="bg-gray-100 text-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="mb-12 text-gray-600">Comprehensive technology solutions for your business</p>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            {services.map(({ title, desc, icon }) => (
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition" key={title}>
                <div className="text-orange-500 mb-2">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
                <a href="#" className="text-blue-600 text-sm mt-4 inline-block">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PARTNER ECOSYSTEM */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Our Partner Ecosystem</h2>
        <p className="mb-8 text-gray-300">Collaborating with industry leaders to deliver exceptional results</p>
        <div className="flex justify-center gap-6 flex-wrap">
          {Array(6).fill(0).map((_, i) => (
            <div key={i} className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
              <span className="text-white text-xl font-bold">B</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="mb-6 text-white/90 max-w-xl mx-auto">
          Let's discuss how our innovative solutions can help you achieve your goals and stay ahead of the competition.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">Start Your Project</button>
          <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition">Schedule Consultation</button>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="bg-white text-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <p className="mb-6 text-gray-600">Contact us today and let’s discuss how we can help transform your business.</p>
            <ul className="space-y-2 text-gray-700">
              <li>Email: <a href="mailto:contact@zoro.com" className="text-blue-600">contact@zoro.com</a></li>
              <li>Phone: +1 (800) 123‑4567</li>
              <li>Address: 1234 Innovation Drive, NY, USA</li>
            </ul>
          </div>
          <form className="bg-gray-100 p-6 rounded-xl shadow-md">
            <input type="text" placeholder="Name" className="w-full p-3 mb-4 rounded border border-gray-300" />
            <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded border border-gray-300" />
            <input type="text" placeholder="Phone" className="w-full p-3 mb-4 rounded border border-gray-300" />
            <textarea placeholder="Message" className="w-full p-3 mb-4 rounded border border-gray-300" rows="4"></textarea>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded">Send Message</button>
          </form>
        </div>
      </section>

    </main>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur-md p-6 shadow-lg hover:shadow-xl transition">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function GradientBlock({ gradient, title, features }) {
  return (
    <section className={`bg-gradient-to-b ${gradient} py-16 px-6`}>
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
      <div className="container mx-auto grid gap-8 md:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
        ))}
      </div>
    </section>
  );
}

function IndustryCard({ title, desc, icon, color }) {
  return (
    <div className={`rounded-xl p-6 text-white bg-gradient-to-br ${color} shadow-md hover:scale-[1.02] transition`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm leading-relaxed opacity-90">{desc}</p>
    </div>
  );
}

const gradientSections = [
  {
    title: 'We imagine.',
    gradient: 'from-blue-900 to-blue-800 filter brightness-95',
    features: [
      { title: 'AI‑Powered Solutions', desc: 'Developing intelligent systems...', icon: <Lightbulb className="w-8 h-8" /> },
      { title: 'Future‑Ready Platforms', desc: 'Building scalable architectures...', icon: <Code2 className="w-8 h-8" /> },
      { title: 'Digital Innovation', desc: 'Creating breakthrough digital...', icon: <RefreshCw className="w-8 h-8" /> },
    ],
  },
  {
    title: 'We engineer.',
    gradient: 'from-red-500 to-orange-400 filter brightness-90',
    features: [
      { title: 'Custom Development', desc: 'Crafting bespoke software...', icon: <Code2 className="w-8 h-8" /> },
      { title: 'Cloud Architecture', desc: 'Designing and implementing...', icon: <Cloud className="w-8 h-8" /> },
      { title: 'Quality Assurance', desc: 'Ensuring excellence through...', icon: <ShieldCheck className="w-8 h-8" /> },
    ],
  },
  {
    title: 'We modernize.',
    gradient: 'from-green-600 to-green-700 filter brightness-95',
    features: [
      { title: 'Legacy Migration', desc: 'Seamlessly transitioning...', icon: <RefreshCw className="w-8 h-8" /> },
      { title: 'Process Automation', desc: 'Streamlining workflows...', icon: <Lightbulb className="w-8 h-8" /> },
      { title: 'Digital Transformation', desc: 'Leveraging technology...', icon: <Code2 className="w-8 h-8" /> },
    ],
  },
  {
    title: 'We manage.',
    gradient: 'from-purple-700 to-purple-900 filter brightness-90',
    features: [
      { title: '24/7 Monitoring', desc: 'Continuous system monitoring...', icon: <Server className="w-8 h-8" /> },
      { title: 'Security Management', desc: 'Comprehensive cybersecurity...', icon: <Shield className="w-8 h-8" /> },
      { title: 'Performance Optimization', desc: 'Ongoing optimization...', icon: <GaugeCircle className="w-8 h-8" /> },
    ],
  },
];

const industryData = [
  { title: 'Healthcare', desc: 'Digital health solutions...', icon: <Stethoscope className="w-6 h-6" />, color: 'from-blue-500 to-indigo-500' },
  { title: 'E-commerce', desc: 'Advanced retail platforms...', icon: <ShoppingCart className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
  { title: 'Finance', desc: 'Fintech solutions and automation...', icon: <Banknote className="w-6 h-6" />, color: 'from-red-500 to-orange-500' },
  { title: 'Education', desc: 'Efficient platforms and LMS...', icon: <GraduationCap className="w-6 h-6" />, color: 'from-pink-500 to-purple-500' },
  { title: 'Automotive', desc: 'Connected vehicle tech...', icon: <Car className="w-6 h-6" />, color: 'from-violet-500 to-fuchsia-500' },
  { title: 'Real Estate', desc: 'PropTech and smart building...', icon: <Building2 className="w-6 h-6" />, color: 'from-teal-500 to-green-500' },
];

const services = [
  { title: 'Web Development', desc: 'Modern, responsive websites...', icon: <Code2 /> },
  { title: 'Custom Software', desc: 'Tailor-made enterprise software...', icon: <ShieldCheck /> },
  { title: 'SaaS Applications', desc: 'Scalable SaaS solutions...', icon: <Cloud /> },
  { title: 'AI Applications', desc: 'Machine learning systems...', icon: <Lightbulb /> },
  { title: 'Managed IT Services', desc: 'Reliable infrastructure & support...', icon: <Server /> },
  { title: 'IT Consultancy', desc: 'Strategic tech guidance...', icon: <GaugeCircle /> },
];
