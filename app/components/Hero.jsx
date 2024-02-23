"use client";
import { useState } from "react";

const Hero = ({ movies }) => {
  const [movieToDisplay, setMovieToDisplay] = useState(movies[0]);

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${IMG_PATH}${movieToDisplay.backdrop_path})`,
      }}
    >
      <div className="showcase">
        <h1>{movieToDisplay.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
