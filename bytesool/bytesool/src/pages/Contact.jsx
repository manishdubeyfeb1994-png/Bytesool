import React, { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  const formData = {
    name: e.target.name.value.trim(),
    email: e.target.email.value.trim(),
    phone: e.target.phone.value.trim(),
    message: e.target.message.value.trim(),
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully ✅");
      e.target.reset();
    } else {
      setStatus(data.message || "Failed to send message ❌");
    }
  } catch {
    setStatus("Server error ❌");
  }

  setLoading(false);
};

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
        {/* Left Side Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-[#8490ff] to-[#e4479e] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Have a project idea or need digital solutions for your business?
            Send us a message and we’ll get back to you as soon as possible.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>
              <strong>Email:</strong> info@bytesool.com
            </p>
            <p>
              <strong>Phone:</strong> +91 XXXXX XXXXX
            </p>
            <p>
              <strong>Location:</strong> India
            </p>
            <p className="text-sky-500 font-medium mt-2">
              👉 Get instant response on WhatsApp for quick support
            </p>
            <a
              href="https://wa.me/916307583062"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={sendEmail} className="space-y-6">
            <label className="block text-sm font-medium text-gray-800">
              Name :
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8490ff]"
            />

            <label className="block text-sm font-medium text-gray-800">
              Email :
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8490ff]"
            />

            <label className="block text-sm font-medium text-gray-800 ">
              Phone No :
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone Number"
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8490ff]"
            />
            <label className="block text-sm font-medium text-gray-800">
              Message :
            </label>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8490ff]"
            ></textarea>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-1/2 py-3 text-white rounded-lg font-medium 
              bg-gradient-to-r from-[#8490ff] to-[#e4479e] 
              hover:opacity-90 transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status && <p className="text-center text-sm mt-3">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
