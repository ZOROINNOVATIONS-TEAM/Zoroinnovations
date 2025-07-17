export default function ServiceQuoteForm() {
  return (
    <section className="bg-white py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Request a Service Quote</h2>
      <p className="text-center mb-8 text-gray-600">Tell us about your project and we'll provide a detailed proposal</p>
      <form className="bg-white shadow rounded-lg p-8 grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border rounded px-4 py-2" type="text" placeholder="Full Name" />
          <input className="border rounded px-4 py-2" type="email" placeholder="Email Address" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border rounded px-4 py-2" type="text" placeholder="Company Name" />
          <input className="border rounded px-4 py-2" type="text" placeholder="Phone Number" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <div className="mb-2 font-semibold text-xs">Service Interest</div>
            <div className="flex flex-wrap gap-2">
              <label className="flex items-center gap-1"><input type="checkbox" /> Web Development</label>
              <label className="flex items-center gap-1"><input type="checkbox" /> Custom Software</label>
              <label className="flex items-center gap-1"><input type="checkbox" /> SaaS Applications</label>
              <label className="flex items-center gap-1"><input type="checkbox" /> AI Applications</label>
              <label className="flex items-center gap-1"><input type="checkbox" /> Managed IT</label>
              <label className="flex items-center gap-1"><input type="checkbox" /> IT Consultancy</label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <select className="border rounded px-4 py-2">
              <option>Select budget range</option>
            </select>
            <select className="border rounded px-4 py-2">
              <option>Select timeline</option>
            </select>
          </div>
        </div>
        <textarea className="border rounded px-4 py-2" rows="4" placeholder="Tell us about your project requirements, goals, and any specific features you need..."></textarea>
        <button className="bg-orange-500 text-white px-6 py-2 rounded font-semibold mt-2" type="submit">Submit Request</button>
      </form>
    </section>
  );
}
