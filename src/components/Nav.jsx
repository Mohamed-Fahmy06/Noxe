import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-8 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-[#131722]/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-8">
        <Link to="/" className="text-3xl font-black text-white tracking-tighter hover:text-blue-500 transition-colors">
          NOXE<span className="text-blue-600">.</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-widest text-gray-300">
          <Link to="/" className="hover:text-white transition-colors">Movies</Link>
          <Link to="/" className="hover:text-white transition-colors">TV Shows</Link>
          <Link to="/" className="hover:text-white transition-colors">People</Link>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:flex gap-4 text-xl text-gray-400 border-r border-gray-700 pr-6">
          <a href="https://facebook.com" className="hover:text-[#1877F2] transition-colors"><FaFacebookF /></a>
          <a href="https://instagram.com" className="hover:text-[#E4405F] transition-colors"><FaInstagram /></a>
          <a href="https://twitter.com" className="hover:text-[#1DA1F2] transition-colors"><FaTwitter /></a>
          <a href="https://whatsapp.com" className="hover:text-[#25D366] transition-colors"><FaWhatsapp /></a>
        </div>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 text-sm font-bold text-white hover:text-blue-500 transition-colors"
          >
            LOGIN
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 text-sm font-bold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            REGISTER
          </Link>
        </div>
      </div>
    </nav>
  );
}
