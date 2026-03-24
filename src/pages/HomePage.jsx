import React from "react";

import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import AIFeatures from "../components/AIFeatures";
function Home() {
  return (
    <>
      <HeroSection />
      <AIFeatures />
      <Services />
      <Features />
      <Testimonials />
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] px-4 py-16 text-white sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-white/90 sm:text-base">
            Get a professional website, AI tools, and marketing solutions to scale your business.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/916307583062?text=Hi%20Bytesool,%20I%20want%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg bg-white px-8 py-3 text-center font-semibold text-[#1e40af] shadow-md transition duration-300 hover:bg-gray-100 sm:w-auto"
            >
              👉 Get Free Quote Now
            </a>
            <a
              href="https://wa.me/916307583062"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-lg border border-white/50 px-8 py-3 text-center font-semibold text-white transition duration-300 hover:bg-white/10 sm:w-auto"
            >
              👉 Talk to Expert on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
