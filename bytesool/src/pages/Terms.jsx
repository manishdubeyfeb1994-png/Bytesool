export default function Terms() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <div className="py-20 text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Terms and Conditions</h1>
        <p className="text-lg opacity-90">Please read our terms carefully before using our services</p>
      </div>

      {/* Terms Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-600 leading-relaxed text-lg">
              By using Bytesool's website and services, you agree to the following terms.
            </p>
          </div>

          {/* Services */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Services</h3>
            <p className="text-gray-600 leading-relaxed">
              Bytesool provides digital IT services including website development,
              software development, and consulting.
            </p>
          </div>

          {/* Payments */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payments</h3>
            <p className="text-gray-600 leading-relaxed">
              Clients must complete agreed payments as per project milestones.
            </p>
          </div>

          {/* Project Delivery */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              Delivery timelines may vary based on project scope and client feedback.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Intellectual Property</h3>
            <p className="text-gray-600 leading-relaxed">
              After full payment, ownership of the final project is transferred to the client.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Limitation of Liability</h3>
            <p className="text-gray-600 leading-relaxed">
              Bytesool is not responsible for indirect damages or losses arising
              from the use of our services.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to work with us?
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Let's discuss your project
        </p>
        <a
          href="https://wa.me/916307583062"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f7f9fb] text-[#1e40af] px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
        >
          Get Free Consultation
        </a>
      </div>
    </section>
  );
}
