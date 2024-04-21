import MovieList from "../components/MovieList";
import Link from "next/link";

const apiKey = process.env.MOVIE_API;


async function fetchTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
  );

  new Promise((resolve) => setTimeout(resolve, 2000));

  const movies = await response.json();
  return movies;
}

const Trending = async () => {
  const movies = await fetchTrendingMovies();
  const moviesResponse = movies.results;

  return (
    <div>
      <div className="container">
        <div className="all-trending">
          <h1>All Trending Movies</h1>
          <MovieList movies={moviesResponse} />
        </div>
      </div>
    </div>
  );
};

export default Trending;
