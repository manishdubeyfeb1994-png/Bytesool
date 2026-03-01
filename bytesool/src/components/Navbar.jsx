import { React, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import BytesoolLogo from "../assets/bytesool_logo.png";
function Navbar() {
  const { isOpen, setIsOpen } = useState(false);
  return (
    <nav className="bg-[#feffff] text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-green-400">
            <img src={BytesoolLogo} alt="Bytesool Logo" className="h-12" />
          </div>

          {/*   Desktop menu button */}
          <div className="hidden md:flex gap-6 font-medium">
            <Link to="/" className="hover:text-[#e4479e]">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#e4479e]">
              About
            </Link>
            <Link to="/services" className="hover:text-[#e4479e]">
              Services
            </Link>
            <Link to="/contact" className="hover:text-[#e4479e]">
              Contact
            </Link>
          </div>

          {/* Mobile menu open button  */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu  */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-6 pb-4 space-y-3">
          <a href="#" className="block hover:text-green-400">
            Home
          </a>
          <a href="#" className="block hover:text-green-400">
            About
          </a>
          <a href="#" className="block hover:text-green-400">
            Services
          </a>
          <a href="#" className="block hover:text-green-400">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
