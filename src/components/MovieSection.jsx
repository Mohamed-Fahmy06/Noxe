import React from "react";
import MovieCard from "./MovieCard";

export default function MovieSection({ title, movies, bgColor = "bg-[#131722]" }) {
  return (
    <section className={`${bgColor} py-16 px-6`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-10 border-l-4 border-blue-600 pl-4">
          <h2 className="text-3xl font-black text-white uppercase tracking-wider">
            {title}
          </h2>
          <button className="text-blue-500 hover:text-blue-400 font-bold transition-colors">
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-items-center">
          {movies.map((movie, index) => (
            <MovieCard key={`${movie.title}-${index}`} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
