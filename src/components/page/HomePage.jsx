import React from "react";
import Nav from "../Nav";
import Home from "../Home";
import MovieSection from "../MovieSection";
import { latestMovies, trendingMovies } from "../../data/movies";

export default function HomePage() {
  return (
    <div className="bg-[#131722] min-h-screen">
      <Nav />
      <Home />
      <div className="-mt-20 relative z-20">
        <MovieSection 
          title="Latest Movies" 
          movies={latestMovies} 
          bgColor="bg-transparent" 
        />
        <MovieSection 
          title="Trending Now" 
          movies={trendingMovies} 
          bgColor="bg-[#0b0e14]" 
        />
      </div>
      
      {/* Footer Placeholder */}
      <footer className="bg-[#0b0e14] py-12 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; 2026 NOXE. All rights reserved.</p>
      </footer>
    </div>
  );
}
