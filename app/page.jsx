import axios from "axios";
import Hero from "./components/Hero";

async function fetchMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=514318c6f6f673457a51ffcaf8158cf2"
  );

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second

  const movies = await response.json();
  return movies;
}

const HomePage = async () => {
  const movies = await fetchMovies();

  return (
    <div>
      <Hero movies={movies} />
    </div>
  );
};

export default HomePage;
