import React from "react";
import { services } from "../assets/Content";
function Services() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* {Hero Header} */}
      <div className="py-20 text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Our Services</h1>
        <p className="text-lg opacity-90"> Comprehensive IT & digital solutions tailored to your business needs</p>
      </div>

      {/* {Service Cards} */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">
      {services.map((service,index) => {
        const Icon = service.icon;
        
        return (
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transtition duration-300 ">
            {/* {Title +Icon} */}
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl text-[#8490ff]">
                <Icon/>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">{service.title}</h2>
            </div>
            {/* {Description} */}

            <p className="text-gray-600 mb-6 leading-relaxed">
              {service.description}
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {service.points.map((point, i) => (<li key={i}>{point}</li>))}

          </ul>
          </div>
        )
      })}
      </div>

      {/* CTA SECTION */}
      <div className="py-16 text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Ready to Get Started?
        </h2>
        <p className="mb-6">
          Contact us today for a free consultation
        </p>

        <a
        href="https://wa.me/916307583062"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#f7f9fb] text-[#1e40af] px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
      >
        Get Free Consultation
      </a>
      </div>
    </section>
  );
}

export default Services;
