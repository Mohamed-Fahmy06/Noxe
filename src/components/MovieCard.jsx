import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="group relative w-48 overflow-hidden rounded-xl bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
      <div className="aspect-[2/3] w-full overflow-hidden">
        <img
          src={movie.thumbnail}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60"></div>
      </div>
      <div className="absolute bottom-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
          {movie.title}
        </h3>
        <div className="mt-1 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-gray-400">{movie.year}</span>
          <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase">
            {movie.genres?.[0] || "Movie"}
          </span>
        </div>
      </div>
    </div>
  );
}
