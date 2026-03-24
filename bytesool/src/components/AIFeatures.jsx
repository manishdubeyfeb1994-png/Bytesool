import React from "react";

function AIFeatures() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          🚀 AI-Powered Solutions
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          At Bytesool, we use the latest Artificial Intelligence tools to help businesses grow faster and smarter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">✔ AI Chatbot for Customer Support & Lead Generation</h3>
            <p className="text-gray-600">Automate customer queries and generate leads 24/7 with our smart AI chatbot.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">✔ AI Website Audit Tool</h3>
            <p className="text-gray-600">Check your website performance instantly and get actionable insights for improvement.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">✔ AI Quote Generator</h3>
            <p className="text-gray-600">Get instant pricing for your project using our AI-powered quote generator.</p>
          </div>
        </div>
        <p className="mt-10 text-base text-gray-700">
          👉 Experience the power of automation and smart technology.
        </p>
      </div>
    </section>
  );
}

export default AIFeatures;
