import React from "react";

export default function Home() {
  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#131722]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131722] via-[#131722]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#131722] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-12 lg:px-24">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-md bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            New Release
          </span>
          <h1 className="mb-6 text-6xl font-black leading-tight text-white lg:text-8xl">
            DARK <br /> <span className="text-blue-600">SQUAD</span>
          </h1>
          <p className="mb-8 text-lg text-gray-300 leading-relaxed">
            The world's most dangerous supervillains are sent on a government mission 
            to save the world. If they succeed, their sentences are reduced. If they fail, 
            they're dead.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="rounded-full bg-blue-600 px-8 py-3 font-bold text-white transition-all hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Watch Now
            </button>
            <button className="rounded-full border-2 border-white/20 bg-white/10 px-8 py-3 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
