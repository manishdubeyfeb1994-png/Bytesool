import React from "react";
import { services } from "../assets/Content";

function Services() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>

        <div className="w-20 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#8490ff] to-[#e4479e]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md 
                hover:shadow-xl hover:-translate-y-2 
                transition duration-300"
              >
                <div className="flex justify-center text-[#8490ff] mb-6">
                  <Icon size={40} />
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
