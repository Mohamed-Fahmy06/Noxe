import React from "react";

export default function Home() {
  const movies = [
    {
      title: "The Grudge",
      year: 2020,
      cast: [
        "Andrea Riseborough",
        "Demián Bichir",
        "John Cho",
        "Betty Gilpin",
        "Lin Shaye",
        "Jacki Weaver",
      ],
      genres: ["Horror", "Supernatural"],
      href: "The_Grudge_(2020_film)",
      extract:
        "The Grudge is a 2020 American psychological supernatural horror film written and directed by Nicolas Pesce. Originally announced as a reboot of the 2004 American remake and the original 2002 Japanese horror film Ju-On: The Grudge, the film ended up taking place before and during the events of the 2004 film and its two direct sequels, and is the fourth installment in the American The Grudge film series. The film stars Andrea Riseborough, Demián Bichir, John Cho, Betty Gilpin, Lin Shaye, and Jacki Weaver, and follows a police officer who investigates several murders that are seemingly connected to a single house.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/3/34/The_Grudge_2020_Poster.jpeg",
      thumbnail_width: 220,
      thumbnail_height: 326,
    },
    {
      title: "Underwater",
      year: 2020,
      cast: [
        "Kristen Stewart",
        "Vincent Cassel",
        "Jessica Henwick",
        "John Gallagher Jr.",
        "Mamoudou Athie",
        "T.J. Miller",
      ],
      genres: ["Action", "Horror", "Science Fiction"],
      href: "Underwater_(film)",
      extract:
        "Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg",
      thumbnail_width: 250,
      thumbnail_height: 398,
    },
    {
      title: "Like a Boss",
      year: 2020,
      cast: [
        "Tiffany Haddish",
        "Rose Byrne",
        "Salma Hayek",
        "Jennifer Coolidge",
        "Billy Porter",
      ],
      genres: ["Comedy"],
      href: "Like_a_Boss_(film)",
      extract:
        "Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg",
      thumbnail_width: 259,
      thumbnail_height: 383,
    },
    {
      title: "Three Christs",
      year: 2020,
      cast: [
        "Richard Gere",
        "Peter Dinklage",
        "Walton Goggins",
        "Bradley Whitford",
      ],
      genres: ["Drama"],
      href: "Three_Christs",
      extract:
        "Three Christs, also known as State of Mind, is a 2017 American drama film directed, co-produced, and co-written by Jon Avnet and based on Milton Rokeach's nonfiction book The Three Christs of Ypsilanti.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg",
      thumbnail_width: 259,
      thumbnail_height: 383,
    },
    {
      title: "Inherit the Viper",
      year: 2020,
      cast: [
        "Josh Hartnett",
        "Margarita Levieva",
        "Chandler Riggs",
        "Bruce Dern",
        "Owen Teague",
      ],
      genres: ["Crime", "Drama"],
      href: "Inherit_the_Viper",
      extract:
        "Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg",
      thumbnail_width: 236,
      thumbnail_height: 350,
    },
    {
      title: "The Sonata",
      year: 2020,
      cast: [
        "Freya Tingley",
        "Simon Abkarian",
        "Rutger Hauer",
        "James Faulkner",
      ],
      genres: ["Mystery", "Thriller"],
      href: "The_Sonata_(film)",
      extract:
        "The Sonata is a 2018 mystery thriller film, directed by Andrew Desmond.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg",
      thumbnail_width: 246,
      thumbnail_height: 350,
    },
    {
      title: "The Murder of Nicole Brown Simpson",
      year: 2020,
      cast: ["Mena Suvari", "Nick Stahl", "Taryn Manning"],
      genres: ["Crime", "Horror"],
      href: "The_Murder_of_Nicole_Brown_Simpson",
      extract:
        "The Murder of Nicole Brown Simpson is a 2019 American crime horror film directed by Daniel Farrands.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg",
      thumbnail_width: 263,
      thumbnail_height: 380,
    },
    {
      title: "Bad Boys for Life",
      year: 2020,
      cast: [
        "Will Smith",
        "Martin Lawrence",
        "Vanessa Hudgens",
        "Alexander Ludwig",
        "Charles Melton",
        "Paola Núñez",
        "Kate del Castillo",
        "Nicky Jam",
        "Joe Pantoliano",
      ],
      genres: ["Action", "Comedy"],
      href: "Bad_Boys_for_Life",
      extract:
        "Bad Boys for Life is a 2020 American buddy cop action comedy film.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
      thumbnail_width: 219,
      thumbnail_height: 325,
    },
    {
      title: "Dolittle",
      year: 2020,
      cast: [
        "Robert Downey Jr.",
        "Antonio Banderas",
        "Michael Sheen",
        "Emma Thompson",
        "Rami Malek",
        "John Cena",
        "Kumail Nanjiani",
        "Octavia Spencer",
        "Tom Holland",
        "Craig Robinson",
        "Ralph Fiennes",
        "Selena Gomez",
        "Marion Cotillard",
      ],
      genres: ["Adventure", "Fantasy"],
      href: "Dolittle_(film)",
      extract:
        "Dolittle is a 2020 American fantasy adventure film directed by Stephen Gaghan.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png",
      thumbnail_width: 220,
      thumbnail_height: 326,
    },
    {
      title: "A Fall from Grace",
      year: 2020,
      cast: [
        "Crystal R. Fox",
        "Phylicia Rashad",
        "Bresha Webb",
        "Mehcad Brooks",
        "Cicely Tyson",
        "Tyler Perry",
      ],
      genres: ["Thriller"],
      href: "A_Fall_from_Grace",
      extract:
        "A Fall from Grace is a 2020 American thriller film written and directed by Tyler Perry.",
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png",
      thumbnail_width: 259,
      thumbnail_height: 383,
    },
  ];

  return (
    <div className='bg-[url("../public/assets/imgs/Background.jpeg")] box-border bg-no-repeat bg-cover'>
      <main className="h-screen ">
        <div className="bg-[#00000094] min-h-screen px-4 h-full flex flex-col justify-center items-center w-full">
          <h1 className="text-white font-black uppercase tracking-[4px] text-[40px] drop-shadow-2xl mb-12 leading-tight">
            OUR LATEST MOVIES:
          </h1>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {movies.map((movie, index) => (
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
                  <p className="text-gray-400 text-xs text-center">
                    {movie.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
