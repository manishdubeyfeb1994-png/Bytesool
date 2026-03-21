import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0B1C3D] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Bytesool</h2>
          <p className="text-gray-400 text-sm leading-6">
            Providing project-based IT & digital solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-medium mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-medium mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              info@bytesool.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-pink-400" />
              +91-6307583062
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* WhatsApp Button */}
      <div className="flex justify-center mb-8">
        <a
          href="https://wa.me/916307583062"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-lg text-white font-medium shadow-lg"
        >
          <FaWhatsapp />
          Talk to Our Team on WhatsApp
        </a>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700"></div>
      <div className="text-center py-6 text-sm text-gray-400">
        © 2026 Bytesool. All Rights Reserved.
        <div className="mt-2">Smart IT & Digital Solutions Company</div>
      </div>
    </footer>
  );
}

export default Footer;
