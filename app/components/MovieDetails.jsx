import moment from "moment";
import Hero from "./Hero";
import MovieReviews from "./MovieReviews";

async function fetchMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=acd2e2d961bd794fcc2ffc03671385e8`
  );
  const movie = await response.json();
  return movie;
}

async function fetchMovieReviews(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=acd2e2d961bd794fcc2ffc03671385e8`
  );
  const reviews = await response.json();
  return reviews;
}

const MovieDetails = async ({ id }) => {
  const movie = await fetchMovie(id);
  console.log(movie);
  const reviews = await fetchMovieReviews(id);
  // console.log(reviews);
  // console.log(reviews.results);

  function getGenres(genres) {
    const g = genres.map((genre) => genre.name);
    return g;
  }

  function roundToMillions(number) {
    if (Math.abs(number) >= 1e6) {
      const roundedMillions = (number / 1e6).toPrecision(3);
      return roundedMillions + "M";
    } else {
      return number.toPrecision(3);
    }
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
          <div className="production-info">
            <div className="grid grid-5">
              <div className="production-card">
                <h6>RELEASE</h6>
                <h2>{moment(movie.release_date).format("MMM. DD, YYYY")}</h2>
              </div>
              <div className="production-card">
                <h6>RATING</h6>
                <h2>{movie.vote_average.toFixed(1)}</h2>
              </div>
              <div className="production-card">
                <h6>BUDGET</h6>
                <h2>${roundToMillions(movie.budget)}</h2>
              </div>
              <div className="production-card">
                <h6>REVENUE</h6>
                <h2>${roundToMillions(movie.revenue)}</h2>
              </div>
              <div className="production-card">
                <h6>LENGTH</h6>
                <h2>{movie.runtime} min</h2>
              </div>
            </div>
          </div>
          <div className="overview">
            <div className="grid">
              <div className="description">
                <h4>DESCRIPTION</h4>
                <p>{movie.overview}</p>
              </div>
              <div className="hype">
                <h4>Reviews</h4>
                {reviews.results.length === 0 ? (
                  "No Reviews For This Movie"
                ) : (
                  <MovieReviews reviews={reviews.results} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
