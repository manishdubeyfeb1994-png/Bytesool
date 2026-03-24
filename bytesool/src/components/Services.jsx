import React from "react";
import { services } from "../assets/Content";

function Services() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          💼 Our Services
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We provide complete end-to-end IT, AI, and digital solutions for modern businesses.
        </p>
        <div className="w-20 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#8490ff] to-[#e4479e]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {/* Website Development */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center text-[#8490ff] mb-6">
              <span role="img" aria-label="Website">🖥️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Website Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              We design and develop modern, responsive, and high-performance websites that represent your brand professionally. Our websites are SEO-optimized, fast-loading, and built to convert visitors into customers.
            </p>
            <span className="block text-sky-500 font-medium">👉 Result: More leads, better online presence, higher conversion rate</span>
          </div>
          {/* Mobile App Development */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center text-[#8490ff] mb-6">
              <span role="img" aria-label="Mobile">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Mobile App Development</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              We create powerful mobile applications for Android and iOS with smooth performance and modern UI/UX.
            </p>
            <span className="block text-sky-500 font-medium">👉 Result: Better customer engagement and business growth</span>
          </div>
          {/* Digital Marketing */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center text-[#8490ff] mb-6">
              <span role="img" aria-label="Marketing">📈</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Digital Marketing</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              We provide SEO, Google Ads, social media marketing, and content strategies to grow your business online.
            </p>
            <span className="block text-sky-500 font-medium">👉 Result: More traffic, leads, and ROI</span>
          </div>
          {/* Branding & Graphic Design */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center text-[#8490ff] mb-6">
              <span role="img" aria-label="Branding">🎨</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Branding & Graphic Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              We design logos, banners, and creatives that build a strong and trustworthy brand identity.
            </p>
            <span className="block text-sky-500 font-medium">👉 Result: Strong brand presence and customer trust</span>
          </div>
        </div>
        {/* IT Consulting */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="flex justify-center text-[#8490ff] mb-6">
              <span role="img" aria-label="Consulting">💡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">IT Consulting</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              We help businesses choose the right technology and automate their processes.
            </p>
            <span className="block text-sky-500 font-medium">👉 Result: Cost saving + better efficiency</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
