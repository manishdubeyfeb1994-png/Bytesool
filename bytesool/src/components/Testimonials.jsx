import React from "react";

function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          💬 What Our Clients Say
        </h2>
        <div className="w-20 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#8490ff] to-[#e4479e]" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-700 text-lg mb-4">
              ⭐ “Bytesool helped us grow our business with a professional website and SEO.”
            </p>
            <span className="block text-gray-600 font-medium">— Rahul Sharma</span>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <p className="text-gray-700 text-lg mb-4">
              ⭐ “Great support and fast delivery. Highly recommended!”
            </p>
            <span className="block text-gray-600 font-medium">— Amit Verma</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
