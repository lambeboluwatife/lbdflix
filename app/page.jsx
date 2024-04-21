import Hero from "./components/Hero";
import InTheatres from "./components/InTheatres";
import SubHero from "./components/SubHero";
import Trending from "./components/Trending";


const apiKey = process.env.MOVIE_API;

async function fetchMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  );

  new Promise((resolve) => setTimeout(resolve, 2000));

  const movies = await response.json();
  return movies.results;
}

const HomePage = async () => {
  const movies = await fetchMovies();
  const heroMovie = movies[0];

  return (
    <div>
      <Hero heroMovie={heroMovie} />
      <SubHero movies={movies} />
      <Trending />
      <InTheatres />
    </div>
  );
};

export default HomePage;
