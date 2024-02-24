// "use client";
// import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import InTheatres from "./components/InTheatres";
import SubHero from "./components/SubHero";
import Trending from "./components/Trending";

async function fetchMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=514318c6f6f673457a51ffcaf8158cf2"
  );

  new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  const movies = await response.json();
  return movies.results;
}

const HomePage = async () => {
  const movies = await fetchMovies();
  // const API =
  //   "https://api.themoviedb.org/3/trending/movie/day?api_key=514318c6f6f673457a51ffcaf8158cf2";

  // const [movies, setMovies] = useState({});

  // useEffect(() => {
  //   const getMovies = async () => {
  //     const moviesFromServer = await fetchMovies();
  //     setMovies(moviesFromServer);
  //   };
  //   getMovies();
  // }, []);

  // Fetch Movies
  // const fetchMovies = async () => {
  //   const res = await fetch(API);
  //   const data = await res.json();

  //   return data.results;
  // };

  // function fetchMovie(id) {
  //   const response = fetch(
  //     "https://api.themoviedb.org/3/movie/" +
  //       id +
  //       "?api_key=514318c6f6f673457a51ffcaf8158cf2"
  //   );

  //   new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  //   const movies = response.json();
  //   return movies.results;
  // }

  // const fetchSelectedMovie = (id) => {
  //   const movie = fetchMovie(id);
  //   console.log(movie);
  // };

  return (
    <div>
      <Hero movies={movies} />
      <SubHero movies={movies} />
      <Trending />
      <InTheatres />
    </div>
  );
};

export default HomePage;
