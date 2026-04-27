import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle, FaBell, FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full px-4 sm:px-8 lg:px-12 py-3 sm:py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled || mobileMenuOpen ? "bg-[#0b0e14]/98 backdrop-blur-2xl border-b border-white/5 shadow-2xl" : "bg-gradient-to-b from-black/90 to-transparent"
        }`}
      >
        <div className="flex items-center gap-4 lg:gap-10">
          <Link to="/" className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tighter hover:scale-105 transition-transform shrink-0">
            NOXE<span className="text-blue-600">.</span>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex gap-6 xl:gap-8 text-[12px] font-bold uppercase tracking-[2px] text-gray-400">
            <Link to="/" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">Movies</Link>
            <Link to="/" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">TV Shows</Link>
            <Link to="/" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">Trending</Link>
            <Link to="/" className="hover:text-white transition-colors border-b-2 border-transparent hover:border-blue-600 pb-1">My List</Link>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          {/* Search Bar - Responsive behavior */}
          <div className={`relative flex items-center transition-all duration-500 ${searchActive ? "w-[150px] sm:w-64" : "w-8"}`}>
            <input
              type="text"
              placeholder="Search..."
              className={`w-full bg-white/10 border border-white/10 rounded-full py-1.5 sm:py-2 pl-9 pr-4 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-600/50 transition-all ${searchActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              onBlur={() => setSearchActive(false)}
              autoFocus={searchActive}
            />
            <button 
              onClick={() => setSearchActive(!searchActive)}
              className="absolute left-2 text-gray-400 hover:text-white transition-colors p-1"
            >
              <FaSearch className="text-sm sm:text-base" />
            </button>
          </div>

          {/* Desktop/Tablet Icons */}
          <div className="hidden sm:flex items-center gap-4 text-gray-400 border-r border-white/10 pr-4 lg:pr-6">
            <button className="hover:text-white transition-colors relative p-1">
              <FaBell className="text-lg" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full border border-[#0b0e14]"></span>
            </button>
            <Link to="/login" className="hover:text-white transition-colors p-1">
              <FaUserCircle className="text-xl lg:text-2xl" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/register"
              className="hidden md:block px-4 lg:px-6 py-2 lg:py-2.5 text-[10px] lg:text-[12px] font-black tracking-widest bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 whitespace-nowrap"
            >
              GET ACCESS
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white text-xl sm:text-2xl hover:text-blue-500 transition-colors z-50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Slide-in Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      <div className={`fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[350px] bg-[#0b0e14] border-l border-white/5 shadow-2xl transition-transform duration-500 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full p-8 pt-24 gap-6">
          <div className="flex flex-col gap-4">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Navigation</p>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white uppercase tracking-tighter hover:text-blue-500 transition-colors">Movies</Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white uppercase tracking-tighter hover:text-blue-500 transition-colors">TV Shows</Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white uppercase tracking-tighter hover:text-blue-500 transition-colors">Trending</Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-black text-white uppercase tracking-tighter hover:text-blue-500 transition-colors">My List</Link>
          </div>
          
          <div className="mt-auto pb-8 flex flex-col gap-4 border-t border-white/10 pt-8">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 text-lg font-bold text-gray-400 hover:text-white transition-colors">
              <FaUserCircle className="text-2xl" /> Sign In
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 text-center text-[12px] font-black tracking-widest bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-600/20 active:scale-95"
            >
              GET ACCESS NOW
            </Link>
            <div className="flex justify-center gap-6 mt-4 text-gray-500">
               <span className="text-lg hover:text-blue-500 cursor-pointer transition-colors">FB</span>
               <span className="text-lg hover:text-blue-500 cursor-pointer transition-colors">TW</span>
               <span className="text-lg hover:text-blue-500 cursor-pointer transition-colors">IG</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
