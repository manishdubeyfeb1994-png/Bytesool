import React from "react";
import { about } from "../assets/Content";
function About() {
  return (
    <section className="bg-gray-50 min-h-screen
    ">
      <div className="py-20
      text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e]   text-white">
        {/* {Heading} */}
        <h1 className="text-3xl md:text-4xl  
        font-semibold leading-tight mb-4">
          About Bytesool
        </h1>
      </div>
      <div className="max-w-4xl
      mx-auto text-center py-16
      ">
        <p className="text-gray-600 leading-relaxed leading-relaxed
        ">
          Bytesool is a fast-growing Smart IT & Digital Solutions Company
          committed to helping businesses succeed in the digital world. <br />{" "}
          We specialize in delivering customized, scalable, and secure
          technology solutions that match each client’s unique goals. Our team
          of skilled professionals combines creativity, technical expertise, and
          strategic thinking to build impactful digital products. <br /> We
          focus on quality, innovation, and customer satisfaction in everything
          we do. At Bytesool, we believe technology should be simple, powerful,
          and accessible for everyone. We don’t just build solutions — we build
          long-term partnerships. Your success is our biggest achievement.
        </p>
      </div>
      {/* {Cards} */}

      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10">
          {about.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="w-full sm:w-[45%] lg:w-[22%] 
              text-center p-6 bg-white rounded-xl 
              shadow-sm hover:shadow-md 
              transition duration-300"
              >
                <div className="flex justify-center mb-4 text-4xl">
                  <Icon className="text-[#e4479e]" />
                </div>

                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 my-5 py-2 max-w-full mx-auto h-40 text-center bg-gradient-to-r from-[#8490ff] via-[#9f6df0] to-[#e4479e] text-white text-wrap">
        <h1 className="text-2xl md:text-4xl font-medium leading-tight mb-4">
          Lets work together !
        </h1>

        <p className="text-xl md:2xl font-semibold mb-4">
          Contact us today for a free consultation and let’s discuss how we can
        </p>
      </div>
    </section>
  );
}

export default About;
