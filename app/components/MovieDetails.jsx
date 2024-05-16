"use client";
import moment from "moment";
import Hero from "./Hero";
import MovieReviews from "./MovieReviews";
import ReactPlayer from "react-player/lazy";
import Link from "next/link";
import Collection from "./Collection";

const apiKey = process.env.API_KEY;

async function fetchMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=11bd951fd952fd303e32b0accd42087f`
  );
  const movie = await response.json();
  return movie;
}

async function fetchMovieReviews(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=11bd951fd952fd303e32b0accd42087f`
  );
  const reviews = await response.json();
  return reviews;
}

async function fetchMovieVideos(id) {
  const response = await fetch(`
  https://api.themoviedb.org/3/movie/${id}/videos?api_key=11bd951fd952fd303e32b0accd42087f`);
  const videos = await response.json();
  return videos;
}

const MovieDetails = async ({ id }) => {
  const movie = await fetchMovie(id);
  const reviews = await fetchMovieReviews(id);
  const videos = await fetchMovieVideos(id);

  const trailer = videos.results.filter((video) =>
    video.name.includes("Official Trailer")
  );

  function getGenres(genres) {
    return genres.map((genre) => genre.name);
  }

  function roundToMillions(number) {
    if (Math.abs(number) >= 1e6) {
      const roundedMillions = (number / 1e6).toPrecision(3);
      return roundedMillions + "M";
    } else {
      return number.toPrecision(3);
    }
  }

  const youtubeUrl = `https://www.youtube.com/watch?v=${trailer[0].key}`;

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
                <Link href={movie.homepage} target="_blank">
                  Movie Webpage
                </Link>
                <div className="trailer">
                  <h5>Trailer</h5>
                  <ReactPlayer
                    className="react-player"
                    width="100%"
                    url={youtubeUrl}
                    controls
                  />
                </div>
              </div>
              <div className="reviews">
                <h4>Reviews</h4>
                {reviews.results.length === 0 ? (
                  "No Reviews For This Movie"
                ) : (
                  <MovieReviews reviews={reviews.results} />
                )}
              </div>
            </div>
          </div>
          {movie.belongs_to_collection && (
            <Collection id={movie.belongs_to_collection.id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
