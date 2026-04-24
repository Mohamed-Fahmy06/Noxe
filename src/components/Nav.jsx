import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaSearch, FaUserCircle, FaBell } from "react-icons/fa";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 lg:px-12 py-4 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "bg-[#0b0e14]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl py-3" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center gap-10">
        <Link to="/" className="text-3xl font-black text-white tracking-tighter hover:scale-105 transition-transform">
          NOXE<span className="text-blue-600">.</span>
        </Link>
        <div className="hidden lg:flex gap-8 text-[13px] font-bold uppercase tracking-[2px] text-gray-400">
          <Link to="/" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">Movies</Link>
          <Link to="/" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">TV Shows</Link>
          <Link to="/" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">Trending</Link>
          <Link to="/" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">My List</Link>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className={`relative flex items-center transition-all duration-300 ${searchActive ? "w-64" : "w-10"}`}>
          <input
            type="text"
            placeholder="Search titles..."
            className={`w-full bg-white/10 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-600/50 transition-all ${searchActive ? "opacity-100" : "opacity-0 cursor-default"}`}
            onBlur={() => setSearchActive(false)}
          />
          <button 
            onClick={() => setSearchActive(true)}
            className="absolute left-3 text-gray-400 hover:text-white transition-colors"
          >
            <FaSearch />
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4 text-gray-400 border-r border-white/10 pr-6">
          <button className="hover:text-white transition-colors relative">
            <FaBell />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full"></span>
          </button>
          <Link to="/login" className="hover:text-white transition-colors">
            <FaUserCircle className="text-2xl" />
          </Link>
        </div>

        <div className="flex gap-3">
          <Link
            to="/register"
            className="hidden md:block px-6 py-2.5 text-[12px] font-black tracking-widest bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            GET ACCESS
          </Link>
        </div>
      </div>
    </nav>
  );
}
