import { useState } from "react";
import { Link } from "react-router-dom";
import BytesoolLogo from "../assets/Bytesool_logo.png";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <Link to="/" className="logo-link">
        <img src={BytesoolLogo} alt="Bytesool Logo" className="logo-img" />
        <span className="logo-text">Bytesool</span>
      </Link>

      {/* HAMBURGER */}
      <div 
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* MENU */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/services" onClick={()=>setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/about" onClick={()=>setMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={()=>setMenuOpen(false)}>Contact</Link></li>
      </ul>

    </nav>
  );
}
