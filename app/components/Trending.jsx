import moment from "moment";

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
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  function getClassByRate(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <div className="trending">
      <div className="container">
        <h1>&#128293;Trending All Week</h1>
        <div className="cards">
          <div className="grid grid-6">
            {movies.map((movie) => (
              <div className="card" key={movie.id}>
                <img
                  src={`${IMG_PATH}${movie.poster_path}`}
                  alt=""
                  className="card-image"
                />
                <h5>
                  {" "}
                  {movie.title.length > 15
                    ? movie.title.substring(0, 15) + "..."
                    : movie.title}
                </h5>
                <div className="card-details">
                  <span>
                    <small className="release-date">
                      {moment(movie.release_date).format("MMM D")}
                    </small>
                  </span>
                  <span>
                    <small className={getClassByRate(movie.vote_average)}>
                      {movie.vote_average.toFixed(1)}
                    </small>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
