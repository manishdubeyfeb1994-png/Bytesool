export default function FAQ() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Header */}
      <div className="py-20 text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Frequently Asked Questions</h1>
        <p className="text-lg opacity-90">Find answers to common questions about our services</p>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {/* Question 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. What services does Bytesool provide?</h3>
            <p className="text-gray-600 leading-relaxed">
              Bytesool provides web development, app development, UI/UX design, digital marketing, and custom software solutions.
            </p>
          </div>
          {/* Question 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. How can I contact Bytesool?</h3>
            <p className="text-gray-600 leading-relaxed">
              You can contact us through our contact form, email, or WhatsApp support.
            </p>
          </div>
          {/* Question 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. How long does a project take?</h3>
            <p className="text-gray-600 leading-relaxed">
              Project timelines depend on complexity. Small projects may take 1–2 weeks while larger projects can take several months.
            </p>
          </div>
          {/* Question 4 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Do you provide support after project completion?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, we provide post-delivery support and maintenance services.
            </p>
          </div>
          {/* Question 5 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">5. What are the payment methods?</h3>
            <p className="text-gray-600 leading-relaxed">
              We accept UPI, bank transfer, and online payment methods.
            </p>
          </div>
          {/* Question 6 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Do you provide AI-based solutions?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, we provide AI chatbot, automation tools, and smart business solutions.
            </p>
          </div>
          {/* Question 7 */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Can I get instant quote for my project?</h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, you can use our AI Quote Generator to get instant pricing.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Still have questions?
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Contact us for more information
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
