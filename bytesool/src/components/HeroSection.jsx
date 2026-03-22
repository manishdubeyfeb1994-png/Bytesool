import React from "react";

function HeroSection() {
  return (
    <div className="max-w-full mx-auto px-6 text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] mb-10 py-14 rounded-sm text-white text-wrap">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Smart IT, AI & Digital Solutions Company for Modern Businesses
        </h1>
        <h3 className="text-lg md:text-xl mb-4 text-white/90">
          Bytesool is a technology-driven company delivering innovative, reliable, and result-oriented IT, AI, and digital solutions.
        </h3>
        <p className="text-sm md:text-base text-white/80 mb-8 leading-relaxed">
          We help businesses transform ideas into powerful digital experiences through smart design, automation, and advanced technology. From website and app development to digital marketing, AI tools, and branding, we provide complete end-to-end solutions. Our mission is to simplify technology and create smart systems that drive real growth and leads. Partner with Bytesool and take your business to the next digital level 🚀
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="https://wa.me/916307583062?text=Hi%20Bytesool,%20I%20want%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f7f9fb] text-[#1e40af] px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
          >
            Get Free Consultation
          </a>
          <a
            href="https://wa.me/916307583062"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
