import Link from "next/link";
import MovieList from "./MovieList";
import Button from "./Button";

async function fetchTrendingMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=acd2e2d961bd794fcc2ffc03671385e8"
  );
  const movies = await response.json();
  return movies;
}

const InTheatres = async () => {
  const moviesResponse = await fetchTrendingMovies();
  const movies = moviesResponse.results.slice(0, 6);

  return (
    <div className="theatres">
      <div className="container">
        <h1>🎞️ In Theatre</h1>
        <MovieList movies={movies} />
        <Link href="/in-theatres">
          <Button text="See More..." />
        </Link>
      </div>
    </div>
  );
};

export default InTheatres;
