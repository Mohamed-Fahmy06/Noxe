import React from "react";
import { FaPlay, FaPlus, FaStar } from "react-icons/fa";

export default function MovieCard({ movie }) {
  return (
    <div className="group relative w-full overflow-hidden rounded-2xl bg-[#1c222e] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7)] border border-white/5">
      {/* Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
          <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-75">
            <FaPlay className="ml-1" />
          </button>
          <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md border border-white/10 transition-colors">
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Top Badge (Rating) */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg flex items-center gap-1 border border-white/10">
          <FaStar className="text-yellow-500 text-[10px]" />
          <span className="text-[10px] font-bold text-white">8.4</span>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-4 bg-gradient-to-b from-transparent to-black/20">
        <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-blue-500 transition-colors">
          {movie.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">{movie.year}</span>
          <span className="text-[10px] font-bold text-gray-400 border border-gray-700 px-1.5 py-0.5 rounded uppercase tracking-tighter">
            HD
          </span>
        </div>
      </div>
    </div>
  );
}
