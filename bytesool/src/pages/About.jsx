import { Users, Rocket, ShieldCheck, Target } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-3">About Bytesool</h1>
        <p className="opacity-90">Smart IT & Digital Solutions Partner</p>
      </section>
      {/* ABOUT CONTENT */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <p className="text-gray-600 leading-loose mb-4">
            Bytesool is a fast-growing Smart IT, AI & Digital Solutions company helping businesses build powerful digital products.
          </p>
          <p className="text-gray-600 leading-loose mb-4">
            We specialize in website development, mobile apps, UI/UX design, automation tools, and digital marketing solutions.
          </p>
          <p className="text-gray-600 leading-loose">
            Our mission is to simplify technology and deliver scalable solutions that drive real business growth.
          </p>
        </div>
      </section>
      {/* FEATURES / VALUES */}
      <section className="bg-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <Target className="mx-auto text-pink-500 mb-3" size={40} />
            <h3 className="font-semibold mb-2">Project Based</h3>
            <p className="text-sm text-gray-500">Focused execution for faster delivery.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <Rocket className="mx-auto text-indigo-500 mb-3" size={40} />
            <h3 className="font-semibold mb-2">Fast Growth</h3>
            <p className="text-sm text-gray-500">Helping startups scale digitally.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <Users className="mx-auto text-pink-500 mb-3" size={40} />
            <h3 className="font-semibold mb-2">Expert Team</h3>
            <p className="text-sm text-gray-500">Creative developers & designers.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <ShieldCheck className="mx-auto text-indigo-500 mb-3" size={40} />
            <h3 className="font-semibold mb-2">Secure Solutions</h3>
            <p className="text-sm text-gray-500">Reliable and scalable architecture.</p>
          </div>
        </div>
      </section>
      {/* STATS SECTION */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-4 text-center gap-6">
          <div>
            <h2 className="text-3xl font-bold text-indigo-600">50+</h2>
            <p className="text-gray-500">Projects Delivered</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-pink-600">30+</h2>
            <p className="text-gray-500">Happy Clients</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-indigo-600">5+</h2>
            <p className="text-gray-500">Technologies</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-pink-600">24/7</h2>
            <p className="text-gray-500">Support</p>
          </div>
        </div>
      </section>
      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-10 mb-0 text-center">
        <h2 className="text-3xl font-bold mb-3">Let’s Work Together 🚀</h2>
        <p className="opacity-90 mb-6">
          Contact us today and grow your business with smart digital solutions.
        </p>
        <a
          href="/contact"
          className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
        >
          Contact Now
        </a>
      </section>
    </div>
  )
}
