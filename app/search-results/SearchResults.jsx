import { MovieList } from "../components";

const SearchResults = ({ searchQuery, movies }) => {
  return (
    <>
      <div className="container">
        <div className="all-trending">
          <h1>Search Results for: {searchQuery}</h1>
          <MovieList movies={movies} />
        </div>
      </div>
    </>
  );
};

export default SearchResults;
