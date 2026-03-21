import React from "react";
import { features } from "../assets/Content";
function Features() {
  return (
    <section className="py-20 px-6 bg-gray-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:4xl font-semibold text-gray-800">
          Why Choose Us
        </h2>
        <div className="w-20 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-[#8490ff] to-[#e4479e]" />
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {features.map((features, index) => {
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md 
                hover:shadow-xl hover:-translate-y-2 
                transition duration-300 w-full sm:w-[48%] lg:w-[22%]"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {features.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {features.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Features;
