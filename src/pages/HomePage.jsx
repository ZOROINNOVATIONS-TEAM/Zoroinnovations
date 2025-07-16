import {
  Lightbulb, Users, BadgeCheck, Code2, Cloud, ShieldCheck, RefreshCw,
  Server, Shield, GaugeCircle,
  Stethoscope, ShoppingCart, Banknote, GraduationCap, Car, Building2
} from 'lucide-react';
// All gradient colours and breakpoints follow Tailwind's defaults
// If you change gradient colours, remember to include the classes in `safelist` in tailwind.config.js when using JIT
export default function HomePage() {
  return (
    <main className="w-full text-gray-100 font-['Inter',sans-serif]">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-orange-500 overflow-hidden">
        <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center gap-10 py-20 px-6">
          <div className="flex-1 space-y-6">
            <img src="/logo.svg" alt="Zoro Innovations" className="h-12" />
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
          {/* Image */}
          <div className="flex-1 max-w-md md:max-w-none">
            <img
              src="/brain.jpg"
              alt="AI Brain"
              className="max-w-96 rounded-xl shadow-2xl float-right"
            />
          </div>
        </div>
        {/* Subtle pattern overlay (optional) */}
        <div className="pointer-events-none absolute inset-0 bg-[url('/sphere.png')] bg-cover bg-center opacity-10" />
      </section>

      {/* RELENTLESS INNOVATION */}
      <section className="bg-blue-800 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Zoro: Relentless Innovation</h2>
         <h6 className="text-center text-sm font-extralight text-gray-200 mb-12">Delivering excellence through innovation and dedication</h6>
        <div className="container mx-auto grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={<Lightbulb className="w-8 h-8 text-orange-400" />}
            title="Innovation First"
            desc="We leverage cutting‑edge technology to solve complex business challenges and drive digital transformation."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-orange-400" />}
            title="Expert Team"
            desc="Our skilled professionals bring years of experience in AI, software development, and IT consulting."
          />
          <FeatureCard
            icon={<BadgeCheck className="w-8 h-8 text-orange-400" />}
            title="Client Success"
            desc="We partner with our clients to ensure their success through tailored solutions and ongoing support."
          />
        </div>
      </section>
      {/* WE IMAGINE */}
      <GradientBlock
        gradient="from-blue-700 to-blue-600"
        title="We imagine."
        features={[
          {
            title: 'AI‑Powered Solutions',
            desc: 'Developing intelligent systems that learn, adapt, and optimize business processes automatically.',
            icon: <Lightbulb className="w-8 h-8" />,
          },
          {
            title: 'Future‑Ready Platforms',
            desc: 'Building scalable architectures that evolve with emerging technologies and market demands.',
            icon: <Code2 className="w-8 h-8" />,
          },
          {
            title: 'Digital Innovation',
            desc: 'Creating breakthrough digital experiences that redefine user interaction and engagement.',
            icon: <RefreshCw className="w-8 h-8" />,
          },
        ]}
      />

      {/* WE ENGINEER */}
      <GradientBlock
        gradient="from-red-600 to-orange-500"
        title="We engineer."
        features={[
          {
            title: 'Custom Development',
            desc: 'Crafting bespoke software solutions tailored to your unique business requirements and goals.',
            icon: <Code2 className="w-8 h-8" />,
          },
          {
            title: 'Cloud Architecture',
            desc: 'Designing and implementing scalable cloud infrastructure for optimal performance and reliability.',
            icon: <Cloud className="w-8 h-8" />,
          },
          {
            title: 'Quality Assurance',
            desc: 'Ensuring excellence through rigorous testing, code reviews, and continuous integration practices.',
            icon: <ShieldCheck className="w-8 h-8" />,
          },
        ]}
      />
      {/* WE MODERNIZE */}
      <GradientBlock
        gradient="from-green-600 to-green-500"
        title="We modernize."
        features={[
          {
            title: 'Legacy Migration',
            desc: 'Seamlessly transitioning from outdated systems to modern, future‑ready solutions.',
            icon: <RefreshCw className="w-8 h-8" />,
          },
          {
            title: 'Process Automation',
            desc: 'Streamlining workflows and enhancing service delivery through automation.',
            icon: <Lightbulb className="w-8 h-8" />,
          },
          {
            title: 'Digital Transformation',
            desc: 'Leveraging technology to change the way you deliver value and scale your business growth.',
            icon: <Code2 className="w-8 h-8" />,
          },
        ]}
      />
      {/* WE MANAGE */}
      <GradientBlock
        gradient="from-purple-700 to-purple-500"
        title="We manage."
        features={[
          {
            title: '24/7 Monitoring',
            desc: 'Continuous system monitoring and proactive maintenance to prevent issues before they occur.',
            icon: <Server className="w-8 h-8" />,
          },
          {
            title: 'Security Management',
            desc: 'Comprehensive cybersecurity solutions to protect your data and systems from threats.',
            icon: <Shield className="w-8 h-8" />,
          },
          {
            title: 'Performance Optimization',
            desc: 'Ongoing optimization to ensure peak performance and maximum return on technology investment.',
            icon: <GaugeCircle className="w-8 h-8" />,
          },
        ]}
      />

      {/* CLIENT TRUST */}
     <section className="bg-white text-gray-900 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Our mission: Complete client success
            </h2>
            <p className="text-gray-600 mb-8">
            Trusted by leading companies worldwide
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center opacity-70">
            <img src="/amazon.svg" alt="Amazon" className="h-16 w-auto" />
            <img src="/google.svg" alt="Google" className="h-16 w-auto" />
            <img src="/google.svg" alt="Google" className="h-16 w-auto" />
            <img src="/google.svg" alt="Google" className="h-16 w-auto" />
            <img src="/google.svg" alt="Google" className="h-16 w-auto" />
            <img src="/google.svg" alt="Google" className="h-16 w-auto" />
            </div>
        </div>
      </section>

      {/* INDUSTRY EXPERTISE */}
      <section className="bg-gray-50 text-gray-900 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Industry Expertise and Solutions</h2>
          <p className="text-gray-600 mb-12">Specialized solutions across diverse industries</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard title="Healthcare" desc="Digital health solutions and medical technology innovations" icon={<Stethoscope className="w-6 h-6" />} color="from-blue-500 to-indigo-500" />
            <IndustryCard title="E-commerce" desc="Advanced retail platforms and customer experience solutions" icon={<ShoppingCart className="w-6 h-6" />} color="from-green-500 to-emerald-500" />
            <IndustryCard title="Finance" desc="Fintech solutions and financial services automation" icon={<Banknote className="w-6 h-6" />} color="from-red-500 to-orange-500" />
            <IndustryCard title="Education" desc="Efficient platforms and learning management systems" icon={<GraduationCap className="w-6 h-6" />} color="from-pink-500 to-purple-500" />
            <IndustryCard title="Automotive" desc="Connected vehicle solutions and automotive technology" icon={<Car className="w-6 h-6" />} color="from-violet-500 to-fuchsia-500" />
            <IndustryCard title="Real Estate" desc="PropTech solutions and smart building technologies" icon={<Building2 className="w-6 h-6" />} color="from-teal-500 to-green-500" />
          </div>
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
