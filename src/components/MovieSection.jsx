import React from "react";
import MovieCard from "./MovieCard";
import { FaChevronRight } from "react-icons/fa";

export default function MovieSection({ title, movies, bgColor = "bg-transparent" }) {
  return (
    <section className={`${bgColor} py-12 px-6 lg:px-12`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
            <h2 className="text-2xl font-black text-white uppercase tracking-widest">
              {title}
            </h2>
          </div>
          <button className="group flex items-center gap-2 text-gray-500 hover:text-blue-500 font-bold text-xs uppercase tracking-widest transition-all">
            Explore All
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 xl:gap-8">
          {movies.map((movie, index) => (
            <MovieCard key={`${movie.title}-${index}`} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
