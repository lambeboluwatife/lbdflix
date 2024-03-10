import moment from "moment";
import Link from "next/link";

const MovieList = ({ movies }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  function getClassByRate(vote) {
    if (vote >= 7) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
  return (
    <div className="cards">
      <div className="grid grid-6">
        {movies?.map((movie) => (
          <div className="card" key={movie.id}>
            <Link href={`/movies/details/${movie.id}`}>
              {" "}
              <img
                src={`${IMG_PATH}${movie.poster_path}`}
                alt=""
                className="card-image"
              />
            </Link>
            <h5>
              {" "}
              {movie.title.length > 15
                ? movie.title.substring(0, 15) + "..."
                : movie.title}
            </h5>
            <div className="card-details">
              <span>
                <small className="release-date">
                  {moment(movie.release_date).format("MMM D, YY")}
                </small>
              </span>
              <span>
                <small
                  className={`rating ${getClassByRate(movie.vote_average)}`}
                >
                  {movie.vote_average.toFixed(1)}
                </small>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
