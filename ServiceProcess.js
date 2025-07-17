export default function ServiceProcess() {
  const steps = [
    { icon: "🔍", title: "Discovery", desc: "Understanding your business needs and requirements" },
    { icon: "🗂️", title: "Planning", desc: "Creating detailed project roadmap and timeline" },
    { icon: "💻", title: "Development", desc: "Building your solution with regular progress updates" },
    { icon: "🧪", title: "Testing", desc: "Rigorous quality assurance and performance testing" },
    { icon: "🚀", title: "Launch", desc: "Deployment and ongoing support for your success" },
  ];
  return (
    <section className="bg-white py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Our Service Process</h2>
      <p className="text-center mb-8 text-gray-600">A structured approach to delivering exceptional results</p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex flex-col items-center flex-1">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl mb-2">{step.icon}</div>
            <div className="font-semibold mb-1">{step.title}</div>
            <div className="text-xs text-gray-600 text-center">{step.desc}</div>
            {idx < steps.length - 1 && (
              <div className="hidden md:block h-1 w-16 bg-orange-200 my-4 mx-auto"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
