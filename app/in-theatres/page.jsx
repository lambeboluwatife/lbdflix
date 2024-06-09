import MovieList from "../components/MovieList";

const apiKey = process.env.API_KEY;

async function fetchTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
  );

  new Promise((resolve) => setTimeout(resolve, 2000));

  const movies = await response.json();
  return movies;
}

const InTheatres = async () => {
  const movies = await fetchTrendingMovies();
  const moviesResponse = movies.results;

  return (
    <>
      <div className="container">
        <div className="all-trending">
          <h1>Movies Out In Theatres</h1>
          <MovieList movies={moviesResponse} />
        </div>
      </div>
    </>
  );
};

export default InTheatres;
