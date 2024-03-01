import MovieList from "../components/MovieList";
import Link from "next/link";

async function fetchTrendingMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=514318c6f6f673457a51ffcaf8158cf2"
  );
  const movies = await response.json();
  return movies;
}

const page = async () => {
  const movies = await fetchTrendingMovies();
  const moviesResponse = movies.results;

  return (
    <div>
      <div className="container">
        <div className="all-trending">
          <h1>Movies Out In Theatres</h1>
          <MovieList movies={moviesResponse} />
        </div>
      </div>
    </div>
  );
};

export default page;
