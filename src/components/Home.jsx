import React from "react";
import { FaPlay, FaInfoCircle, FaStar, FaRegClock } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative h-screen min-h-[750px] w-full overflow-hidden bg-[#0b0e14]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          className="h-full w-full object-cover scale-105"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e14] via-[#0b0e14]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-6 lg:px-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1 text-[11px] font-black uppercase tracking-[2px] text-white shadow-lg shadow-blue-600/30">
              New Release
            </span>
            <div className="flex items-center gap-2 text-yellow-500 font-bold text-sm">
              <FaStar className="mb-0.5" />
              <span className="text-white">8.9</span>
              <span className="text-gray-400 font-medium">Rating</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-bold text-sm border-l border-white/20 pl-4">
              <FaRegClock className="mb-0.5" />
              <span>2h 14m</span>
            </div>
          </div>
          
          <h1 className="mb-6 text-7xl font-black leading-[0.9] text-white lg:text-[110px] tracking-tighter uppercase drop-shadow-2xl">
            DARK <br /> <span className="text-blue-600">SQUAD</span>
          </h1>
          
          <p className="mb-10 text-lg text-gray-300 leading-relaxed max-w-xl font-medium drop-shadow-lg">
            A government agency recruits some of the most dangerous incarcerated supervillains 
            on the planet to execute dangerous black ops missions in exchange for clemency.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className="flex items-center gap-3 rounded-xl bg-white px-10 py-4 font-black text-black transition-all hover:bg-blue-600 hover:text-white hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-95">
              <FaPlay className="text-sm" />
              WATCH NOW
            </button>
            <button className="flex items-center gap-3 rounded-xl border-2 border-white/10 bg-white/5 px-10 py-4 font-black text-white backdrop-blur-xl transition-all hover:bg-white/10 hover:border-white/20 active:scale-95">
              <FaInfoCircle className="text-sm" />
              DETAILS
            </button>
          </div>

          <div className="mt-16 flex items-center gap-12">
            <div>
              <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-2">Director</p>
              <p className="text-white font-bold">James Gunn</p>
            </div>
            <div>
              <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-2">Genre</p>
              <p className="text-white font-bold">Action, Sci-Fi</p>
            </div>
            <div>
              <p className="text-[11px] font-black text-gray-500 uppercase tracking-widest mb-2">Release</p>
              <p className="text-white font-bold">Aug 2026</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative side element */}
      <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
        <div className="flex flex-col items-center gap-8">
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-blue-600 to-transparent"></div>
            <div className="flex flex-col gap-6 text-gray-500 text-lg">
                <span className="hover:text-blue-500 cursor-pointer transition-colors">01</span>
                <span className="text-white font-bold">02</span>
                <span className="hover:text-blue-500 cursor-pointer transition-colors">03</span>
            </div>
            <div className="w-px h-32 bg-gradient-to-b from-transparent via-blue-600 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
