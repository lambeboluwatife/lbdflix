import MovieList from "./index";
const apiKey = process.env.API_KEY;

async function fetchCollection(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/collection/${id}?api_key=11bd951fd952fd303e32b0accd42087f`
  );
  const collection = await response.json();
  return collection;
}

const Collection = async ({ id }) => {
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
