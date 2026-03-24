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
  } catch (error) {
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
            <a
              href="https://wa.me/916307583062"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor" className="inline-block"><path d="M16.003 3.2c-7.067 0-12.8 5.733-12.8 12.8 0 2.267.6 4.467 1.733 6.4l-1.867 6.933c-.133.533 0 1.067.4 1.467.267.267.6.4.933.4.133 0 .267 0 .4-.067l7.067-1.867c1.867 1.067 4 1.6 6.133 1.6 7.067 0 12.8-5.733 12.8-12.8s-5.733-12.866-12.8-12.866zm0 23.467c-2 0-3.867-.533-5.6-1.467-.267-.133-.533-.133-.8-.067l-5.867 1.6 1.6-5.867c.067-.267.067-.533-.067-.8-1.067-1.733-1.6-3.6-1.6-5.6 0-6.133 4.933-11.067 11.067-11.067s11.067 4.933 11.067 11.067-4.933 11.067-11.067 11.067zm6.267-8.267c-.4-.2-2.267-1.133-2.6-1.267-.333-.133-.567-.2-.8.2-.267.4-.933 1.267-1.133 1.533-.2.267-.4.267-.8.067-.4-.2-1.6-.6-3.067-1.933-1.133-1-1.9-2.2-2.133-2.6-.2-.4-.022-.6.178-.8.178-.178.4-.444.6-.667.2-.222.267-.378.4-.622.133-.244.067-.467-.033-.667-.1-.2-.8-1.933-1.1-2.644-.289-.689-.578-.6-.8-.611-.2-.011-.444-.011-.689-.011-.244 0-.644.089-.978.444-.333.356-1.278 1.244-1.278 3.022 0 1.778 1.311 3.489 1.489 3.733.178.244 2.589 3.956 6.289 5.378.878.356 1.561.567 2.089.722.878.267 1.678.233 2.311.144 1.056-.144 2.267-.911 2.589-1.789.322-.878.322-1.633.233-1.789-.089-.156-.356-.244-.756-.444z"/></svg>
              <span>Chat on WhatsApp</span>
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
