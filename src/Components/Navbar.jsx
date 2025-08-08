import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#FBF7EC] border-b border-white text-[#585C44]">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        <Link to="/" className="text-2xl font-bold">
          Deal Acres
        </Link>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-7 text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/staff">Our Staff</Link>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 px-4 pb-4 text-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/staff" onClick={() => setMenuOpen(false)}>Our Staff</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
