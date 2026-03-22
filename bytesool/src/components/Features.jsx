import React from "react";
import { features } from "../assets/Content";
function Features() {
  return (
    <section className="py-20 px-6 bg-gray-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          🧠 Why Choose Us
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your Reliable Technology Partner
        </p>
        <div className="w-20 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#8490ff] to-[#e4479e]" />
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {/* Trust Elements */}
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 w-full sm:w-[48%] lg:w-[22%]">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">✔ Experienced & Skilled Team</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Our team delivers not just services but complete business solutions powered by technology and innovation.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 w-full sm:w-[48%] lg:w-[22%]">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">✔ AI-Powered Solutions</h3>
          <p className="text-gray-600 text-sm leading-relaxed">We combine AI, automation, and smart strategies to help your business grow faster.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 w-full sm:w-[48%] lg:w-[22%]">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">✔ Affordable Pricing</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Get high-quality solutions at competitive prices.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 w-full sm:w-[48%] lg:w-[22%]">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">✔ Fast Delivery</h3>
          <p className="text-gray-600 text-sm leading-relaxed">We deliver projects on time, every time.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 w-full sm:w-[48%] lg:w-[22%]">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">✔ 24/7 Support</h3>
          <p className="text-gray-600 text-sm leading-relaxed">Our support team is always available to help you.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 w-full sm:w-[48%] lg:w-[22%]">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">✔ 100% Client Satisfaction</h3>
          <p className="text-gray-600 text-sm leading-relaxed">We focus on building long-term partnerships and your success is our biggest achievement.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
