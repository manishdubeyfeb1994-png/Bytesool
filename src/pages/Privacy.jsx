export default function Privacy() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <div className="py-20 text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-lg opacity-90">We respect your privacy and protect your personal information</p>
      </div>

      {/* Privacy Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-600 leading-relaxed text-lg">
              At Bytesool, we respect your privacy and are committed to protecting
              your personal information.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h3>
            <p className="text-gray-600 leading-relaxed">
              We may collect your name, email address, phone number, and project
              details when you fill out our contact form.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">How We Use Your Information</h3>
            <p className="text-gray-600 leading-relaxed">
              We use your information to communicate with you, provide services,
              and improve our website experience.
            </p>
          </div>

          {/* Data Security */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Data Security</h3>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate security measures to protect your data.
            </p>
          </div>

          {/* Third-Party Sharing */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Third-Party Sharing</h3>
            <p className="text-gray-600 leading-relaxed">
              We do not sell or share your personal data with third parties except
              when required by law.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
            <p className="text-gray-600 leading-relaxed">
              Email: <span className="font-semibold text-gray-800">info@bytesool.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Questions about privacy?
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Contact us for more details
        </p>
        <a
          href="https://wa.me/916307583062"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#f7f9fb] text-[#1e40af] px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </section>
  );
}
