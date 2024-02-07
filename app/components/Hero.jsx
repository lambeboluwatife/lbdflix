"use client";
import { useState } from "react";

const Hero = ({ movies }) => {
  // Destructure movie data from movies.results array
  const [movieToDisplay, setMovieToDisplay] = useState(movies.results[0]);

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${IMG_PATH}${movieToDisplay.backdrop_path})`,
      }}
    >
      <div className="showcase">
        {/* Wrap event handlers in arrow functions */}
        <h1 onClick={() => setMovieToDisplay(movies.results[0])}>
          {movies.results[0].title}
        </h1>
        <h1 onClick={() => setMovieToDisplay(movies.results[1])}>
          {movies.results[1].title}
        </h1>
        <h1 onClick={() => setMovieToDisplay(movies.results[2])}>
          {movies.results[2].title}
        </h1>
        <h1 onClick={() => setMovieToDisplay(movies.results[3])}>
          {movies.results[3].title}
        </h1>
        <h1 onClick={() => setMovieToDisplay(movies.results[4])}>
          {movies.results[4].title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
