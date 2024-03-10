import Hero from "./Hero";

async function fetchMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=acd2e2d961bd794fcc2ffc03671385e8`
  );
  const movie = await response.json();
  return movie;
}

const MovieDetails = async ({ id }) => {
  const movie = await fetchMovie(id);
  console.log(movie);

  function getGenres(genres) {
    const g = genres.map((genre) => genre.name);
    return g;
  }

  return (
    <div>
      <Hero heroMovie={movie} />
      <div className="movie-details">
        <div className="container">
          <div className="movie-info">
            <h6>{movie.tagline}</h6>
            <h1>{movie.title || movie.original_title}</h1>
          </div>
          <div className="genres">
            {getGenres(movie.genres).map((element, index) => (
              <span key={index}>{element}</span>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
