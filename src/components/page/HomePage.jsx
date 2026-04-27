import React, { useState } from "react";
import Nav from "../Nav";
import Home from "../Home";
import MovieSection from "../MovieSection";
import { latestMovies, trendingMovies } from "../../data/movies";

const genres = ["All", "Action", "Adventure", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller", "Romance", "Animation"];

export default function HomePage() {
  const [activeGenre, setActiveGenre] = useState("All");

  return (
    <div className="bg-[#0b0e14] min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      <Nav />
      <Home />
      
      {/* Genre Filter Bar */}
      <div className="relative z-30 -mt-8 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                  activeGenre === genre
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-[#1c222e] border-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 pb-20">
        <MovieSection 
          title="New Arrivals" 
          movies={latestMovies} 
          bgColor="bg-transparent" 
        />
        
        {/* Ad/Featured Banner Placeholder */}
        <div className="container mx-auto px-6 lg:px-12 mb-16">
          <div className="w-full min-h-[192px] rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 uppercase">ULTRA HD STREAMING</h2>
              <p className="text-blue-200 text-xs sm:text-sm max-w-md leading-relaxed">Experience the latest blockbusters in 4K resolution with Dolby Atmos sound support. Exclusive for premium members.</p>
              <button className="mt-6 px-6 py-2.5 bg-white text-blue-900 font-black rounded-lg text-xs hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl">UPGRADE NOW</button>
            </div>
            <div className="absolute right-[-10%] top-[-20%] w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 text-[120px] font-black text-white/5 pointer-events-none uppercase tracking-tighter">4K</div>
          </div>
        </div>

        <MovieSection 
          title="Trending This Week" 
          movies={trendingMovies} 
          bgColor="bg-transparent" 
        />
      </div>
      
      <footer className="bg-[#080a0f] py-16 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="sm:col-span-2">
              <h3 className="text-2xl font-black text-white mb-6">NOXE<span className="text-blue-600">.</span></h3>
              <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                The ultimate streaming platform for movie lovers. Explore thousands of titles, 
                from timeless classics to the latest releases. Your cinema at home.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Platform</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Browse Movies</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">TV Shows</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Live TV</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Top IMDB</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Help</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Account</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Support Center</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6 text-center sm:text-left">
            <p className="text-gray-600 text-[10px] sm:text-[12px] uppercase tracking-wider">&copy; 2026 NOXE ENTERTAINMENT. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6 text-gray-500">
               <span className="hover:text-white cursor-pointer transition-colors text-[10px] uppercase tracking-widest font-bold">Facebook</span>
               <span className="hover:text-white cursor-pointer transition-colors text-[10px] uppercase tracking-widest font-bold">Twitter</span>
               <span className="hover:text-white cursor-pointer transition-colors text-[10px] uppercase tracking-widest font-bold">Instagram</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
