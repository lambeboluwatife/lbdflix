async function fetchTrendingMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=514318c6f6f673457a51ffcaf8158cf2"
  );
  const movies = await response.json();
  return movies;
}

const Trending = async () => {
  const movies = await fetchTrendingMovies();
  return (
    <div className="trending">
      <div className="container">
        <h1>&#128293;Trending All Week</h1>
      </div>
    </div>
  );
};

export default Trending;
