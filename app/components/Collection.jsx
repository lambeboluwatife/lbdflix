import MovieList from "./MovieList";
const apiKey = process.env.MOVIE_API;

async function fetchCollection(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/collection/${id}?api_key=${apiKey}`
  );
  const collection = await response.json();
  return collection;
}

const Collection = async ({ id }) => {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  const collection = await fetchCollection(id);
  return (
    <div className="collection">
      <h3>{collection.name}</h3>
      <h6>{collection.overview}</h6>

      <MovieList movies={collection.parts} />
    </div>
  );
};

export default Collection;
