import Button from "./Button";
import MovieList from "./MovieList";
import Link from "next/link";

async function fetchTrendingMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=514318c6f6f673457a51ffcaf8158cf2"
  );
  const movies = await response.json();
  return movies;
}

const Trending = async () => {
  const moviesResponse = await fetchTrendingMovies();
  const movies = moviesResponse.results.slice(0, 6);

  return (
    <div className="trending">
      <div className="container">
        <h1>&#128293;Trending All Week</h1>
        <MovieList movies={movies} />
        <Link href="/trending">
          <Button text="See More..." />
        </Link>
      </div>
    </div>
  );
};

export default Trending;
