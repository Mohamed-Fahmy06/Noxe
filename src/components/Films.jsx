import React from "react";

export default function Films() {
  const TrindingMov = [
    {
      title: "John Henry",
      year: 2020,
      cast: [
        "Terry Crews",
        "Ludacris",
        "Jamila Velazquez",
        "Ken Foree",
        "Tyler Alvarez",
        "Joseph Julian Soria",
      ],
      genres: ["Drama", "Thriller"],
      href: "John_Henry_(2020_film)",
      extract:
        "John Henry is a 2020 American thriller drama film starring Terry Crews and Ludacris.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg",
      thumbnail_width: 220,
      thumbnail_height: 316,
    },
    {
      title: "The Rhythm Section",
      year: 2020,
      cast: ["Blake Lively", "Jude Law", "Sterling K. Brown"],
      genres: ["Action", "Thriller"],
      href: "The_Rhythm_Section",
      extract:
        "The Rhythm Section is a 2020 action thriller film directed by Reed Morano.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/9/98/The_Rhythm_Section_poster.jpg",
      thumbnail_width: 260,
      thumbnail_height: 382,
    },
    {
      title: "Gretel & Hansel",
      year: 2020,
      cast: [
        "Sophia Lillis",
        "Sammy Leakey",
        "Charles Babalola",
        "Jessica De Gouw",
        "Alice Krige",
      ],
      genres: ["Fantasy", "Horror"],
      href: "Gretel_%26_Hansel",
      extract:
        "Gretel & Hansel is a 2020 dark fantasy horror film based on the German folklore tale.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/d/de/Gretel_%26_Hansel_-_A_Grim_Fairy_Tale_theatrical_poster.jpeg",
      thumbnail_width: 220,
      thumbnail_height: 326,
    },
    {
      title: "The Assistant",
      year: 2020,
      cast: ["Julia Garner", "Matthew Macfadyen"],
      genres: ["Drama"],
      href: "The_Assistant_(2019_film)",
      extract:
        "The Assistant is a 2019 American drama film written and directed by Kitty Green.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/9/9b/The_Assistant_poster.jpeg",
      thumbnail_width: 259,
      thumbnail_height: 383,
    },
    {
      title: "Birds of Prey",
      year: 2020,
      cast: [
        "Margot Robbie",
        "Mary Elizabeth Winstead",
        "Jurnee Smollett-Bell",
        "Rosie Perez",
        "Chris Messina",
        "Ella Jay Basco",
        "Ali Wong",
        "Ewan McGregor",
      ],
      genres: ["Superhero"],
      href: "Birds_of_Prey_(2020_film)",
      extract:
        "Birds of Prey is a 2020 American superhero film based on the DC Comics team.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg",
      thumbnail_width: 220,
      thumbnail_height: 326,
    },
    {
      title: "The Lodge",
      year: 2020,
      cast: [
        "Riley Keough",
        "Jaeden Martell",
        "Lia McHugh",
        "Richard Armitage",
        "Alicia Silverstone",
      ],
      genres: ["Horror"],
      href: "The_Lodge_(film)",
      extract:
        "The Lodge is a 2019 psychological horror film directed by Veronika Franz and Severin Fiala.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/c/cf/The_Lodge_poster.jpg",
      thumbnail_width: 220,
      thumbnail_height: 326,
    },
    {
      title: "Timmy Failure: Mistakes Were Made",
      year: 2020,
      cast: [
        "Winslow Fegley",
        "Ophelia Lovibond",
        "Craig Robinson",
        "Wallace Shawn",
      ],
      genres: ["Adventure", "Comedy", "Drama", "Family", "Fantasy"],
      href: "Timmy_Failure:_Mistakes_Were_Made",
      extract:
        "Timmy Failure: Mistakes Were Made is a 2020 adventure fantasy comedy-drama family film.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/c/c8/Timmy_Failure_Mistakes_Were_Made_Poster.jpeg",
      thumbnail_width: 259,
      thumbnail_height: 383,
    },
    {
      title: "Horse Girl",
      year: 2020,
      cast: [
        "Alison Brie",
        "Debby Ryan",
        "John Paul Reynolds",
        "Molly Shannon",
        "John Ortiz",
        "Paul Reiser",
      ],
      genres: ["Drama"],
      href: "Horse_Girl",
      extract:
        "Horse Girl is a 2020 American psychological drama film directed by Jeff Baena.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/3/37/Horse_Girl_poster.jpg",
      thumbnail_width: 259,
      thumbnail_height: 383,
    },
  ];
  return (
    <div className="bg-[#25343F] h-screen mx-auto px-5 flex justify-center items-center">
      <div className="w-1/2a">
        <h1 className="text-white font-black uppercase tracking-[4px] text-[40px] drop-shadow-2xl mb-12 leading-tight">
          Trending MOVIES
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {TrindingMov.map((movie, index) => (
          <div
            key={index}
            className="w-40 h-56 bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="relative h-3/4">
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
            </div>
            <div className="p-2 text-center">
              <h3 className="text-white font-bold text-sm mb-1 truncate text-center">
                {movie.title}
              </h3>
              <p className="text-gray-400 text-xs text-center">{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
